import { Crud } from "../utils/index.js"
const crud = Crud();

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-button");
const displayBoard = document.getElementById("task-display-board");


/**
 * Create Tasks
 */
addTaskBtn.addEventListener("click", () => {
    const taskValue = taskInput.value.trim();

    crud.create(taskValue, "tasks-today");

    location.reload()
});

taskInput.addEventListener("keydown", (event) => {
    const keyName = event.key;

    if (keyName === 'Enter') {
        const taskValue = taskInput.value.trim();

        crud.create(taskValue, "tasks-today");

        location.reload()
    }
    else { return; }
});

let isEditing = false;

/**
 * Display Tasks
 */
function displayTasks(key) {
    clearDisplay();

    const displayUl = document.createElement("ul");
    displayUl.classList.add("task-list");

    const selectAllContainer = document.createElement("div");
    selectAllContainer.setAttribute("class", "select-all-container");

    const selectAllLabel = document.createElement("label");
    selectAllLabel.innerText = "Select All";

    const selectAllCheckbox = document.createElement("input");
    selectAllCheckbox.setAttribute("type", "checkbox");
    selectAllCheckbox.setAttribute("class", "select-all-checkbox");

    selectAllContainer.append(selectAllCheckbox, selectAllLabel);

    // const delButton = document.createElement("span");
    // delButton.innerText = "🖉";
    // delButton.setAttribute("class", "delete-task-button");
    // const delButton = document.createElement("button");
    // delButton.innerText = "DELETE TASK/S";


    const tasks = crud.read(key);

    if (tasks.length < 1) {
        const message = document.createElement("span");
        message.innerText = "Currently No Tasks Available";

        delButton.setAttribute("disabled", "true");

        selectAllCheckbox.setAttribute("disabled", "true");
        selectAllLabel.style.color = "#ccc"

        displayUl.appendChild(message);
    }
    else {

        tasks.forEach(task => {

            const taskLiContainer = document.createElement("li");
            taskLiContainer.setAttribute("class", "task-li-container");
            taskLiContainer.setAttribute("data-id", task);

            const div = document.createElement("div");
            div.setAttribute("class", "top-section-card");

            const taskCheckbox = document.createElement("input");
            taskCheckbox.setAttribute("type", "checkbox");

            const delButton = document.createElement("span");
            // delButton.innerText = "🖉";
            delButton.innerText = "🗑";
            delButton.setAttribute("class", "delete-task-button");

            const taskTextSpan = document.createElement("span");
            taskTextSpan.textContent = task;

            const taskEditBtn = document.createElement("span");
            taskEditBtn.setAttribute("class", "task-edit-button")
            taskEditBtn.innerText = "🖉";
            // taskEditBtn.innerText = "EDIT";

            div.append(taskCheckbox, taskEditBtn, delButton)
            taskLiContainer.append(div, taskTextSpan)
            displayUl.appendChild(taskLiContainer);
        });
    }
    displayBoard.appendChild(selectAllContainer)
    displayBoard.appendChild(displayUl);
    // displayBoard.append(delButton)
}

function clearDisplay() {
    const oldUl = displayBoard.querySelector(".task-list");
    if (oldUl) oldUl.remove();
    const oldSelectAllContainer = displayBoard.querySelector(".select-all-container");
    if (oldSelectAllContainer) oldSelectAllContainer.remove();
    const oldDeleteBtn = displayBoard.querySelector(".delete-task-button");
    if (oldDeleteBtn) oldDeleteBtn.remove();

}

/**
 * Update Tasks
 */
function handleUpdate(li) {
    const task = li.dataset.id;

    li.innerHTML = "";

    const editInput = document.createElement("input");
    editInput.setAttribute("value", task);
    editInput.setAttribute("class", "updates-input")

    const editInputBtn = document.createElement("button");
    editInputBtn.innerText = "UPDATE";
    editInputBtn.setAttribute("class", "updates-button")


    li.append(editInput, editInputBtn);

    editInputBtn.addEventListener("click", () => {
        crud.update(task, editInput.value, "tasks-today");
        isEditing = false;
        displayTasks("tasks-today");
    })
}

/**
 * Remove Tasks
*/
function handleRemoveTasks(tasks, key) {
    crud.remove(tasks, "tasks-today");
}

/**
 * Inital Load or Referesh
 */
window.addEventListener("DOMContentLoaded", () => {
    displayTasks("tasks-today");
    taskInput.focus();

    const selectedTasks = [];
    const displayBoard = document.querySelector(".task-display-board");
    const selectAllCheckbox = document.querySelector(".select-all-checkbox");
    const deleteTaskBtn = document.querySelector(".delete-task-button");

    function resetSelectionState() {
        selectedTasks.length = 0;
        selectAllCheckbox.checked = false;

        const checkboxes = document.querySelectorAll(
            ".task-display-board li input[type=checkbox]"
        );

        checkboxes.forEach(cb => cb.checked = false);
    }

    resetSelectionState();

    /**
     * Select All
     */
    selectAllCheckbox.addEventListener("click", () => {
        if (isEditing) {
            selectAllCheckbox.disabled = "true";
            document.querySelector(".select-all-container label").style.color = "#ccc";
        }
        const checkboxes = document.querySelectorAll(
            ".task-display-board li input[type=checkbox]"
        );

        selectedTasks.length = 0;

        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;

            const li = checkbox.closest("li");
            if (!li) return;

            if (selectAllCheckbox.checked) {
                selectedTasks.push(li.dataset.id);
            }
        });

    });

    displayBoard.addEventListener("click", (event) => {
        if (event.target.matches("input[type=checkbox]")) {
            const li = event.target.closest("li");
            if (!li) return;

            const id = li.dataset.id;
            const checked = event.target.checked;

            if (checked) {
                if (!selectedTasks.includes(id)) selectedTasks.push(id);
            } else {
                const idx = selectedTasks.indexOf(id);
                if (idx !== -1) selectedTasks.splice(idx, 1);
            }

            return;
        }

        if (event.target.matches(".task-edit-button")) {
            isEditing = true;
            const li = event.target.closest("li");
            if (!li) return;
            handleUpdate(li);
        }
    });

    deleteTaskBtn.addEventListener("click", () => {
        if (isEditing) return;
        if (selectedTasks < 1) return;
        handleRemoveTasks(selectedTasks);

        displayTasks("tasks-today");
        resetSelectionState();
    });
});