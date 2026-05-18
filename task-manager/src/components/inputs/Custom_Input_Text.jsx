import "./custom_input_text.css";
import { useEffect, useState } from "react";
import Use_Tasks from "../../state/Use_Tasks";

export default function Custom_Input({addTask}) {
    const [task, setTask] = useState("");

    const handleAddTask = (event) => {
        event.preventDefault();
        console.log("current task", task);
        addTask(task);
        setTask("");
    };
    console.log("after", task)
    
    const handleTaskChange = (task) => {
        setTask(task);
    };

    return <form onSubmit={handleAddTask} className="add-task-form">
        <label htmlFor="add-task"></label>
        <input
            type="text"
            className="add-task-input"
            name="add-task"
            placeholder="Type your task here..."
            value={task}
            autoFocus
            onChange={(event) => handleTaskChange(event.target.value)}
        />

        <button
            type="submit"
            className="add-task-button"
        >Add Task</button>
    </form>

};

{/* <textarea
    name="task"
    id="task"
    onChange={(e) => setTask(e.target.value)}
    className="custom-input"
    // value={task.value}
    cols={40}
    rows={5}
    placeholder="Add A Task Here..."
    value={task}
></textarea> */}