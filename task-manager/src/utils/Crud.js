
export const crud = {
    create: (tasks, newtask) => {
        return [...tasks, newtask];
    },
    read: (tasks) => {
        console.log("tasks from storage", tasks)
        return tasks;
    },
    update: (tasks, id, updates) => {
        return (
            tasks.map(task=>{
                task.id === id ? [...tasks, ...updates] : task;
            })
        )
    },
    delete: (tasks, id) => {
        return(
            tasks.filter(task=>task.id !== id)
        )
    }
}

/**
 * create a task

read tasks

update a task

delete a task

toggle completion

optionally: clear all, clear completed, reorder, etc.
 */