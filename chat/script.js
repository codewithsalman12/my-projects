let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let darkMode = localStorage.getItem("darkMode") === "true";

// Add task
function addTask() {
  const input = document.getElementById("taskInput");
  const category = document.getElementById("categorySelect").value;
  const taskText = input.value.trim();

  if (taskText) {
    tasks.push({ text: taskText, category: category, done: false });
    input.value = "";
    saveTasks();
    renderTasks();
  }
}

// Render tasks
function renderTasks() {
  const list = document.getElementById("taskList");
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  list.innerHTML = "";

  tasks
    .filter(task => task.text.toLowerCase().includes(searchTerm))
    .forEach((task, index) => {
      const li = document.createElement("li");
      li.className = `list-group-item d-flex justify-content-between align-items-center fade-in ${task.done ? "done" : ""}`;
      li.innerHTML = `
        <div class="d-flex align-items-center gap-2" ondblclick="editTask(${index})">
          <input type="checkbox" class="form-check-input" ${task.done ? "checked" : ""} onclick="toggleTask(${index})">
          <span>${task.text}</span>
          <span class="category-badge" style="background-color: ${getCategoryColor(task.category)}">${getCategoryIcon(task.category)} ${task.category}</span>
        </div>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">&times;</button>
      `;
      list.appendChild(li);
    });
}

// Edit task inline
function editTask(index) {
  const list = document.getElementById("taskList");
  const li = list.children[index];
  const span = li.querySelector("span");
  const oldText = tasks[index].text;

  const input = document.createElement("input");
  input.type = "text";
  input.value = oldText;
  input.className = "edit-input";
  input.onblur = () => saveEdit(index, input.value);
  input.onkeypress = (e) => { if (e.key === "Enter") saveEdit(index, input.value); };

  span.replaceWith(input);
  input.focus();
}

function saveEdit(index, newText) {
  tasks[index].text = newText.trim() || tasks[index].text;
  saveTasks();
  renderTasks();
}

// Get category color
function getCategoryColor(category) {
  const colors = {
    Work: "#ff7f50",
    Personal: "#6a5acd",
    Shopping: "#3cb371",
    Other: "#808080"
  };
  return colors[category] || "#000";
}

// Get category icon
function getCategoryIcon(category) {
  const icons = {
    Work: "💼",
    Personal: "🏠",
    Shopping: "🛒",
    Other: "📌"
  };
  return icons[category] || "📌";
}

// Toggle task
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Clear completed
function clearCompleted() {
  tasks = tasks.filter(task => !task.done);
  saveTasks();
  renderTasks();
}

// Toggle dark mode
function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
  localStorage.setItem("darkMode", darkMode);
}

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial load
if (darkMode) document.body.classList.add("dark");
renderTasks();