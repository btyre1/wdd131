// wdd131/tasktracker/main.js

let tasks = [];

function Task(text) {
    this.text = text;
    this.completed = false;
    this.id = Date.now();
}

document.getElementById("addTaskBtn").addEventListener("click", () => {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    tasks.push(new Task(text));
    input.value = "";

    renderTasks();
});

function renderTasks(filter = "all") {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const row = document.createElement("div");
        row.classList.add("example-task");

        if (task.completed) row.classList.add("completed");

        row.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} />
            <span class="${task.completed ? "done" : ""}">${task.text}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">🗑</button>
        `;

        row.querySelector("input").addEventListener("change", () => {
            task.completed = !task.completed;
            renderTasks(filter);
        });

        row.querySelector(".complete-btn").addEventListener("click", () => {
            task.completed = !task.completed;
            renderTasks(filter);
        });

        row.querySelector(".delete-btn").addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks(filter);
        });

        list.appendChild(row);
    });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        renderTasks(btn.dataset.filter);
    });
});

renderTasks();

document.getElementById("year").textContent = new Date().getFullYear();