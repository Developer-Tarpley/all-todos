import { useState, useCallback, use } from "react";
import { crud } from "../utils/crud";
import { storage } from "../utils/storage";
import { Create_IDs } from "../utils/id_generator";
export default function Use_Tasks() {
    const [tasks, setTasks] = useState(() => storage.get("tasks", []));

    const commit = useCallback((fn) => {
        setTasks(prev => {
            const next = fn(prev);
            storage.set("tasks", next);
            return next;
        });
    }, []);

    const addTask = useCallback((text) => {
        console.log("add a task: ", text)
        let newTask = {
            id: Create_IDs(),
            text: text,
            completed: false,
        };
        commit((prev) => crud.create(prev, newTask));
    }, [commit]);

    const updateTask = useCallback((id, updates) => {
        commit((prev) => crud.update(prev, id, updates));
    }, [commit]);

    const deleteTask = useCallback((id) => {
        commit((prev) => crud.delete(prev, id))
    }, [commit]);

    const toggleComplete = useCallback((id, updates) => {
        commit((prev) => crud.update(prev, id, updates));
    }, [commit]);


    return {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleComplete
    }
}