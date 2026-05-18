import { useState, useCallback } from "react";
import { crud } from "../utils/crud";
import { storage } from "../utils/storage";
import { Create_IDs } from "../utils/id_generator";
export default function Use_Tasks() {
    const [tasks, setTasks] = useState(()=>storage.get("tasks", []));

    const commit = useCallback((next)=>{
        setTasks(next);
        storage.set("tasks", next);
    }, []);

    const addTask = useCallback((text)=>{
        let newTask = {
            id: Create_IDs(),
            text: text,
            completed: false
        }
        commit(crud.create(tasks, newTask));
    }, [tasks, commit]);

    return {
        tasks,
        addTask,
    }
}