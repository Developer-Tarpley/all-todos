import "./display_tasks.css";
import Use_Tasks from "../../state/Use_Tasks";
import { useEffect } from "react";

import Task_Card from "../../components/task-card/Task_Card";

export default function ({
    tasks,
    updateTask,
    deleteTask
}) {

    useEffect(() => {
    }, [tasks]);

    return <>
        <h2 style={{
            margin: "10px"
        }}>Plan's To Accomplish</h2>

        <Task_Card
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
        />
    </>
}