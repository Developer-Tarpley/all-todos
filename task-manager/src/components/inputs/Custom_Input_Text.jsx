import "./custom_input_text.css";
import { useEffect, useState } from "react";
import Use_Tasks from "../../state/Use_Tasks";

export default function Custom_Input({ addTask }) {
    const [task, setTask] = useState("");

    function autoSmartCapitalize(str) {
        return str.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, m => m.toUpperCase());
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        console.log("clicked",task)
        // if (task === "" || task === task) return;
        addTask(autoSmartCapitalize(task.trim()));
        setTask("");
    };

    return <form onSubmit={handleAddTask} className="add-task-form">
        <label htmlFor="add-task">Add Task input</label>
        <input
            type="text"
            className="add-task-input"
            name="add-task"
            placeholder="Type your task here..."
            value={task}
            autoFocus
            onChange={(event) => setTask(event.target.value)}
        />

        <button
            type="submit"
            className="add-task-button"
        >Add Task</button>
    </form>

};