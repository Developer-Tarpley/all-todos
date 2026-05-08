

export default function Crud() {
    const create = (task, key) => {
        /**
         * Save Task
         */
        try {
            const currentTasks = JSON.parse(localStorage.getItem(key));
            if (currentTasks) {
                currentTasks.push(task);
                localStorage.setItem(key, JSON.stringify(currentTasks));
            }
            else {
                const taskArray = [];
                taskArray.push(task);
                localStorage.setItem(key, JSON.stringify(taskArray));
            };
        }
        catch (e) {
            console.log("Error:", e.error);
        }
    }
    const read = (key) => {
        try {
            const getCurrentTasks = JSON.parse(localStorage.getItem(key))
            return getCurrentTasks;
        }
        catch (e) {
            console.log("Error: ", e.error);
        }
    }
    const update = (oldValue, newValue, key) => {
        try {
            const getCurrentTasks = JSON.parse(localStorage.getItem(key))
            let foundTask = getCurrentTasks.indexOf(oldValue);
            if (foundTask !== -1) {
                getCurrentTasks[foundTask] = newValue;
            };
            localStorage.setItem("tasks-today", JSON.stringify(getCurrentTasks))
        }
        catch (e) {
            console.log("Error: ", e.error);
        }
    }
 const remove = (ids, key) => {
    let currentTasks = JSON.parse(localStorage.getItem(key)) || [];

    const filtered = currentTasks.filter(task => !ids.includes(String(task)));

    localStorage.setItem(key, JSON.stringify(filtered));
};


    return {
        create,
        read,
        update,
        remove
    }

}