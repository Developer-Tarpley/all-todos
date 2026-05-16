import { Crud } from "../utils/index.js"
const crud = Crud();

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-button");

const selectAllContainer = document.querySelector(".select-all-container")
const selectAllCheckbox = document.querySelector(".select-all-checkbox")
const selectAllSpan = document.querySelector(".select-all-span")
const selectedTasksDeleteBtn = document.querySelector(".selected-tasks-delete-button")

const displayBoard = document.getElementById("task-display-board");
const displayUl = document.querySelector(".tasks-display-ul")

// const windowWH = document.querySelector(".w-h");

// window.addEventListener("resize", () => {
//   const w = window.innerWidth;
//   const h = window.innerHeight;

//   console.log("Viewport:", w, h);

//   if (windowWH) {
//     windowWH.innerText = `${w} × ${h}`;
//   }
// });



/**
 * Create Tasks
 */
addTaskBtn.addEventListener("click", () => {
    if (taskInput.value === "") return;
    const taskValue = taskInput.value.trim();

    crud.create(taskValue, "tasks-today");

    displayTasks("tasks-today");

    taskInput.value = "";

    selectAllCheckbox.checked = false;
});

taskInput.addEventListener("keydown", (event) => {
    const keyName = event.key;

    if (taskInput.value !== "" && keyName === 'Enter') {
        const taskValue = taskInput.value.trim();

        crud.create(taskValue, "tasks-today");

        displayTasks("tasks-today");

        taskInput.value = "";

        selectAllCheckbox.checked = false;
    }
    else { return; }
});


function autoSmartCapitalize(str) {
    return str.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, m => m.toUpperCase());
};

let isEditing = false;
let isEditingID = null;
/**
 * Display Tasks
 */
function displayTasks(key) {
    displayUl.innerHTML = ""

    const tasks = crud.read(key);

    if (tasks.length < 1) {
        const message = document.createElement("span");
        message.innerText = "Currently No Tasks Available";

        selectedTasksDeleteBtn.setAttribute("disabled", true);
        selectAllCheckbox.setAttribute("disabled", true);
        selectAllSpan.style.color = "#ccc"

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

            const taskEditBtn = document.createElement("span");
            taskEditBtn.setAttribute("class", "task-edit-button")
            taskEditBtn.innerText = "🖉";

            const taskTextSpan = document.createElement("span");
            taskTextSpan.textContent = autoSmartCapitalize(task);

            const delButton = document.createElement("span");
            delButton.innerText = "🗑";
            delButton.setAttribute("class", "delete-task-button");

            div.append(taskCheckbox, taskEditBtn, delButton)

            taskLiContainer.append(div, taskTextSpan)

            displayUl.appendChild(taskLiContainer);
        });
        selectedTasksDeleteBtn.removeAttribute("disabled", false);
        selectAllCheckbox.removeAttribute("disabled", false);
        selectAllSpan.style.color = "#000"
    };

    displayBoard.appendChild(displayUl);
};

/**
 * Update Tasks
 */
function handleUpdate(li) {
    const task = li.dataset.id;

    if (isEditing && isEditingID !== task) {
        isEditingID = task;
        displayTasks("tasks-today");

        const newLi = document.querySelector(`li[data-id="${task}"]`);
        handleUpdate(newLi);
        return;
    };

    isEditing = true;
    isEditingID = task;

    li.innerHTML = "";

    const editInput = document.createElement("input");
    editInput.setAttribute("value", task);
    editInput.setAttribute("class", "updates-input")

    const editInputBtn = document.createElement("button");
    editInputBtn.innerText = "UPDATE";
    editInputBtn.setAttribute("class", "updates-button")

    li.setAttribute("class", "task-li-container");
    li.append(editInput, editInputBtn);

    editInput.focus();
    editInput.addEventListener("keydown", (event) => {
        const keyName = event.key;

        if (keyName === 'Escape') {
            isEditing = false;

            isEditingID = null;

            displayTasks("tasks-today");
        }
        else { return; };
    });

    editInputBtn.addEventListener("click", () => {
        crud.update(task, editInput.value, "tasks-today");

        isEditing = false;

        isEditingID = null;

        displayTasks("tasks-today");
    });

    editInput.addEventListener("keydown", (event) => {
        const keyName = event.key;

        if (keyName === 'Enter') {
            crud.update(task, editInput.value, "tasks-today");

            isEditing = false;

            isEditingID = null;

            displayTasks("tasks-today");
        }
        else { return; };
    });

};

/**
 * Remove Tasks
*/
function handleRemoveTasks(tasks, key) {
    crud.remove(tasks, "tasks-today");

    displayTasks("tasks-today");
};

/**
 * Inital Load or Referesh
 */
window.addEventListener("DOMContentLoaded", () => {
    displayTasks("tasks-today");

    taskInput.focus();

    const displayBoard = document.querySelector(".task-display-board");

    const selectAllCheckbox = document.querySelector(".select-all-checkbox");

    const liDeleteTaskBtn = document.querySelector(".delete-task-button");

    const selectedTasksDeleteBtn = document.querySelector(".selected-tasks-delete-button");

    /**
     * Select All
     */
    selectAllCheckbox.addEventListener("click", () => {
        if (isEditing) {
            selectAllCheckbox.disabled = true;
            selectedTasksDeleteBtn.disabled = true;
            document.querySelector(".select-all-span").style.color = "#ccc";
            return;
        };

        const checkboxes = document.querySelectorAll(
            ".task-display-board li input[type=checkbox]"
        );

        const ischecked = selectAllCheckbox.checked;

        checkboxes.forEach(checkbox => {
            checkbox.checked = ischecked;
        });

    });

    displayBoard.addEventListener("click", (event) => {
        if (event.target.matches("input[type=checkbox]")) {
            const li = event.target.closest("li");

            if (!li) return;

            return;
        };

        if (event.target.matches(".task-edit-button")) {
            const li = event.target.closest("li");

            if (!li) return;

            handleUpdate(li);
        };

        if (event.target.matches(".delete-task-button")) {
            isEditing = false;

            const li = event.target.closest("li");

            if (!li) return;

            handleRemoveTasks(li.dataset.id)

            selectAllCheckbox.checked = false;
        };

    });

    selectedTasksDeleteBtn.addEventListener("click", () => {
        console.log("bulk delete CLICK handler fired")
        if (isEditing) return;

        const selectedTasks = [...document.querySelectorAll(
            ".task-display-board li input[type=checkbox]:checked"
        )];

        const selectedIds = selectedTasks.map(checkbox => {
            let li = checkbox.closest("li");
            return (li.dataset.id);
        });

        if (selectedIds.length < 1) return;

        handleRemoveTasks(selectedIds);

        displayTasks("tasks-today");

        selectAllCheckbox.checked = false;
    });

});