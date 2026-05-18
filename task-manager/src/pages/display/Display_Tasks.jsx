import "./display_tasks.css";
import Use_Tasks from "../../state/Use_Tasks";
import { useEffect, useState } from "react";

export default function ({tasks}) {
      useEffect(()=>{
        console.log("readTask updated!")
        console.log("Tasks updated!" ,tasks)
    },[tasks])

    return <div>
        <h2>Current Plan's</h2>

        {/* display tasks here */}
        <ul className="task-list">
            {
             tasks.map(task=><li key={task.id} className="list-item">
                {task.text}
             </li>)
            }
        </ul>
    </div>
}