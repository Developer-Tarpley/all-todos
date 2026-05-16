import "./custom_input_text.css";

export default function Custom_Input() {
    // console.log("Custom Input: ", task)
    return <section className="add-task-container">
        <textarea
            // name={task.name}
            // id={task.id}
            className="custom-input"
            // value={task.value}
            cols={40}
            rows={5}
        />
        <button className="add-task-button">Add Task</button>
    </section>

}