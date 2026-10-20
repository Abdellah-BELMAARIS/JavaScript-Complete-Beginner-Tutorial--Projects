// ========================================================
// Episode 13 / Project: Full Interactive Task Manager App
// ========================================================

// 1. State Management
let tasks = [];
let currentFilter = "all";

// 2. DOM Elements
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const clearCompletedBtn = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll(".filter-btn");

// 3. LocalStorage Helpers
function loadTasks() {
    const saved = localStorage.getItem("codynn_js_tasks");
    tasks = saved ? JSON.parse(saved) : [
        { id: 1, text: "Watch Codynn JavaScript Course", completed: true },
        { id: 2, text: "Practice DOM Manipulation & Events", completed: false },
        { id: 3, text: "Integrate JS with Django REST Backend", completed: false }
    ];
    renderTasks();
}

function saveTasks() {
    localStorage.setItem("codynn_js_tasks", JSON.stringify(tasks));
}

// 4. Render Function
function renderTasks() {
    taskList.innerHTML = "";

    // Filter tasks based on current tab
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true; // "all"
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `<li class="empty-state">No tasks found in this view.</li>`;
    } else {
        filteredTasks.forEach(task => {
            const li = document.createElement("li");
            li.className = `task-item ${task.completed ? "completed" : ""}`;
            li.dataset.id = task.id;

            li.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" ${task.completed ? "checked" : ""}>
                    <span class="task-text">${escapeHtml(task.text)}</span>
                </div>
                <button class="delete-btn" title="Delete Task">&times;</button>
            `;
            taskList.appendChild(li);
        });
    }

    // Update Counter
    const activeRemaining = tasks.filter(t => !t.completed).length;
    taskCount.textContent = `${activeRemaining} item${activeRemaining === 1 ? "" : "s"} left`;
}

// Prevent HTML injection (XSS protection)
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 5. Event Handlers
// A. Add Task
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;

    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
});

// B. Toggle & Delete (Event Delegation on Parent List)
taskList.addEventListener("click", (e) => {
    const taskItem = e.target.closest(".task-item");
    if (!taskItem) return;
    const taskId = Number(taskItem.dataset.id);

    // If checkbox clicked or label clicked
    if (e.target.matches("input[type='checkbox']") || e.target.classList.contains("task-text")) {
        tasks = tasks.map(t => {
            if (t.id === taskId) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });
        saveTasks();
        renderTasks();
    }

    // If delete button clicked
    if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
        renderTasks();
    }
});

// C. Filter Switching
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// D. Clear Completed
clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    renderTasks();
});

// 6. Initialize App
loadTasks();

// ========================================================
// ⚡ CAPSTONE CHALLENGES (Take this app further!):
// 1. Add priority tags (High, Medium, Low) to tasks.
// 2. Add a search bar to filter tasks by keyword in real time.
// 3. Connect this frontend to a Django REST Framework (DRF) backend
//    using fetch() instead of localStorage!
// ========================================================

