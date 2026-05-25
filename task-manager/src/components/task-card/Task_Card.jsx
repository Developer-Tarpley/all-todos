import "./task_card.css";
import Delete_Button from "../buttons/Delete_Button";
import Edit_Button from "../buttons/Edit_Button";
import Custom_Checkbox from "../inputs/Custom_Checkbox"
import { useEffect, useState } from "react";


export default function Task_Card({ tasks, updateTask, deleteTask }) {
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [taskUpdate, setTaskUpdate] = useState("")

    function autoSmartCapitalize(str) {
        return str.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, m => m.toUpperCase());
    };

    const handleUpdate = (event) => {
        event.preventDefault();

        const updates = { text: autoSmartCapitalize(taskUpdate).trim() }

        updateTask(editId, updates)
        setEditMode(false)
    }


    return <ul
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
                            <Custom_Checkbox />
                            <Edit_Button
                                editMode={editMode}
                                setEditMode={setEditMode}
                                setEditId={setEditId}
                                taskId={task.id}
                            />
                            <Delete_Button deleteTask={deleteTask} />
                        </div>
                        <form onSubmit={(event) => handleUpdate(event)}>
                            <input onChange={(event) => setTaskUpdate(event.target.value)} type="text" defaultValue={task.text} />
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
                            <Custom_Checkbox />
                            <div>

                                <Edit_Button
                                    setEditMode={setEditMode}
                                    setEditId={setEditId}
                                    taskId={task.id}
                                />
                                <Delete_Button deleteTask={deleteTask} />
                            </div>
                        </div>
                        <span className="list-item">
                            {task.text}
                        </span>
                    </li>)
        }
    </ul>

}