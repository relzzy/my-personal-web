// Task state + rendering. Pure DOM helpers, storage via storage.js.
import { loadTasks, saveTasks } from "./storage.js";

const PRIORITIES = [
  { key: "low", label: "Low", tone: "low" },
  { key: "medium", label: "Medium", tone: "medium" },
  { key: "high", label: "High", tone: "high" },
];

/** Minimal Task object shape: { id, text, priority, completed } */
export function normalizeTask(t) {
  return {
    id: t?.id ?? (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
    text: String(t?.text ?? "").trim(),
    priority: PRIORITIES.find((p) => p.key === t?.priority)?.key ?? "medium",
    completed: Boolean(t?.completed),
  };
}

export function makeTasks() {
  const tasks = loadTasks();
  let filter = "all";

  function _save() { saveTasks(tasks); }

  function add(text, priority = "medium") {
    const t = normalizeTask({ text, priority });
    if (!t.text) return null;
    tasks.push(t); // newest last (rendered visually reversed? kept stable: top = latest)
    _save();
    return t;
  }

  function setCompleted(id, completed) {
    const t = tasks.find((x) => x.id === id);
    if (t) { t.completed = Boolean(completed); _save(); }
  }

  function remove(id) {
    const idx = tasks.findIndex((x) => x.id === id);
    if (idx >= 0) { tasks.splice(idx, 1); _save(); }
  }

  function editText(id, text, priority) {
    const t = tasks.find((x) => x.id === id);
    const n = normalizeTask({ ...t, text, priority });
    if (n.text) { Object.assign(t, n); _save(); }
  }

  function setFilter(f) {
    filter = f;
  }

  function all() { return tasks.map((x) => ({ ...x })); }
  function filtered() {
    const fs = all().filter((t) => filter === "all" || (filter === "active" ? !t.completed : t.completed));
    return fs;
  }

  function progress() {
    const c = tasks.filter((x) => x.completed).length;
    const total = tasks.length;
    return total > 0 ? Math.round((c / total) * 100) : 0;
  }

  // ---- DOM rendering ----
  let listEl = null;
  let pctEl = null;

  function _mount(list, pct) { listEl = list; pctEl = pct; render(); }

  function render() {
    if (!listEl) return;
    const items = filtered();
    listEl.replaceChildren(
      ...items.map((t) => taskRow(t)),
    );
    if (pctEl) pctEl.textContent = `${progress()}%`;
  }

  function _highlightPriority(t) {
    const p = PRIORITIES.find((x) => x.key === t.priority);
    return p ? p : PRIORITIES[1];
  }

  function taskRow(t) {
    const li = document.createElement("li");
    li.className = "task-item";
    if (t.completed) li.classList.add("task-done");
    li.dataset.id = t.id;

    // checkbox
    const cb = document.createElement("button");
    cb.className = "task-check";
    cb.setAttribute("role", "button");
    cb.setAttribute("aria-label", t.completed ? "Mark incomplete" : "Mark complete");
    cb.type = "button";
    cb.textContent = t.completed ? "✓" : "";
    if (t.completed) cb.classList.add("task-check--on");
    cb.addEventListener("click", () => { setCompleted(t.id, !t.completed); render(); });
    li.appendChild(cb);

    // title (editable)
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = t.text;
    title.title = "Double-click to edit";
    let editing = false;
    title.addEventListener("dblclick", () => {
      if (editing) return;
      editing = true;
      title.replaceChildren();

      const inp = document.createElement("input");
      inp.className = "task-edit";
      inp.value = t.text;
      inp.maxLength = 120;

      const sel = document.createElement("select");
      sel.className = "task-priority";
      PRIORITIES.forEach((p) => {
        const o = document.createElement("option");
        o.value = p.key;
        o.textContent = p.label;
        if (p.key === t.priority) o.selected = true;
        sel.appendChild(o);
      });

      const go = document.createElement("button");
      go.className = "btn btn-sm btn-primary";
      go.type = "button";
      go.textContent = "✓ Save";

      const cancel = document.createElement("button");
      cancel.className = "btn btn-sm btn-ghost";
      cancel.type = "button";
      cancel.textContent = "Cancel";

      const row2 = document.createElement("div");
      row2.className = "task-edit-row";
      row2.append(inp, sel, go, cancel);
      title.replaceChildren(row2);
      inp.focus();

      function commitSave() {
        if (!editing) return;
        editing = false;
        const val = inp.value.trim();
        if (val) {
          editText(t.id, val, sel.value);
        }
        render();
      }

      function cancelSave() {
        if (!editing) return;
        editing = false;
        render();
      }

      // Prevent blur from aborting clicks on the action buttons
      go.addEventListener("mousedown", (e) => e.preventDefault());
      go.addEventListener("click", () => commitSave());

      cancel.addEventListener("mousedown", (e) => e.preventDefault());
      cancel.addEventListener("click", () => cancelSave());

      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commitSave();
        } else if (e.key === "Escape") {
          e.preventDefault();
          cancelSave();
        }
      });

      // If user clicks completely outside the editing container, commit changes
      row2.addEventListener("focusout", (e) => {
        if (!row2.contains(e.relatedTarget)) {
          commitSave();
        }
      });
    });
    li.appendChild(title);

    // priority pill
    const p = _highlightPriority(t);
    const pill = document.createElement("span");
    pill.className = "task-priority-pill";
    pill.dataset.tone = t.priority;
    pill.textContent = p.label;
    li.appendChild(pill);

    // delete
    const del = document.createElement("button");
    del.className = "task-delete";
    del.type = "button";
    del.setAttribute("aria-label", "Delete task");
    del.innerHTML = "×";
    del.addEventListener("click", (e) => { e.stopPropagation(); remove(t.id); render(); });
    li.appendChild(del);

    return li;
  }

  return {
    mount: _mount,
    add, setCompleted, remove, editText,
    progress, all, filtered,
    setFilter,
    render,
  };
}