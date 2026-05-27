import "./task_card.css";
import Delete_Button from "../buttons/Delete_Button";
import Edit_Button from "../buttons/Edit_Button";
import Custom_Checkbox from "../inputs/Custom_Checkbox"
import { useEffect, useState } from "react";


export default function Task_Card({ tasks, updateTask, deleteTask, toggleComplete }) {
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [taskUpdate, setTaskUpdate] = useState("");


    function autoSmartCapitalize(str) {
        return str.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, m => m.toUpperCase());
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        let exists = tasks.find(task => task.text === taskUpdate)

        if (taskUpdate === "" || exists) {
            setEditMode(false);
            return;
        };

        const updates = { text: autoSmartCapitalize(taskUpdate).trim() }
        updateTask(editId, updates);
        setEditMode(false);
        setTaskUpdate("")
    }

    const handleListEvents = (event) => {
        let svgButton = event.target.closest(["svg[role=button]"]);
        let checkBox = event.target.closest(["input[type=checkbox]"]);

        // if (!svgButton) return;
        if (!svgButton && !checkBox) return;

        if (svgButton && svgButton.dataset.action === "edit") {
            let targetLi = svgButton.closest("li");
            setEditId(targetLi.dataset.id);
            setEditMode(true);
        }
        else if (svgButton && svgButton.dataset.action === "remove") {
            let targetLi = svgButton.closest("li");
            deleteTask(targetLi.dataset.id)
            setEditMode(false);
        }

        if (checkBox) {
            let isComplete = checkBox.checked;
            let li = checkBox.closest("li");
            let targetId = li.dataset.id;
            toggleComplete(targetId, { completed: isComplete })
        }
    }


    return <ul
        onClick={(event) => handleListEvents(event)}
        className="task-list"
    >
        {tasks.length < 1 && <p>Currently No Plan's Created</p>}
        {

            tasks.map(task =>

                editMode && task.id === editId ? // do this
                    <li
                        key={task.id}
                        data-id={task.id}
                        className="task-card"
                    >
                        <div className="card-button-container">
                            <Custom_Checkbox task={task} />
                            <Edit_Button
                                editMode={editMode}
                                setEditMode={setEditMode}
                                setEditId={setEditId}
                                taskId={task.id}
                                task={task}
                            />
                            <Delete_Button deleteTask={deleteTask} />
                        </div>
                        <form onSubmit={(event) => handleUpdate(event)}>
                            <input autoFocus={true} onChange={(event) => setTaskUpdate(event.target.value)} type="text" defaultValue={task.text} />
                            <button type="submit">save</button>
                        </form>
                    </li>

                    : // else do this

                    <li
                        key={task.id}
                        data-id={task.id}
                        className="task-card"
                    >
                        <div className="card-button-container">
                            <Custom_Checkbox task={task} />
                            <div>

                                <Edit_Button
                                    setEditMode={setEditMode}
                                    setEditId={setEditId}
                                    taskId={task.id}
                                    task={task}
                                />
                                <Delete_Button deleteTask={deleteTask} />
                            </div>
                        </div>
                        {
                            task.completed ?
                                <span>
                                    <span className="list-item-complete"> {task.text}</span>
                                    <span className="complete">Completed</span>
                                </span>
                                :
                                <span className="list-item">
                                    {task.text}
                                </span>
                        }
                    </li>)
        }
    </ul>

}