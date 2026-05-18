import "./display_tasks.css";
import Use_Tasks from "../../state/Use_Tasks";
import { useEffect } from "react";

export default function ({ tasks }) {
    useEffect(() => {
    }, [tasks]);

    return <>
        <h2>Current Plan's</h2>
        <ul className="task-list">
            {
                tasks.map(task =>
                    <li key={task.id} className="list-item">
                        {task.text}
                    </li>)
            }
        </ul>
    </>
}