import "./delete_button.css";
import { FaTrashCan } from "react-icons/fa6";

export default function Delete_Button({ deleteTask }) {
    const handleDelete = (event) => {
        let li = event.target.closest("li");
        console.log("LI: ", li)
        deleteTask(li.dataset.id)
    }
    return <>
        <FaTrashCan
            onClick={(event) => handleDelete(event)}
            className="remove-task-button"
            role="button"
            tabIndex={1}
        />
    </>
}