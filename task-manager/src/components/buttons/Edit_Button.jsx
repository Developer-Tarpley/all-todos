import "./edit_button.css";
import { LiaEdit } from "react-icons/lia";

export default function Edit_Button({
    taskId,
    setEditId,
    setEditMode,
    editMode
}) {

    const handleToggleEdit = (event) => {
        let li = event.target.closest("li")
        setEditMode(true);
        setEditId(li.dataset.id);
    }

    return <>
        {
            editMode ? // do this
                <LiaEdit
                    onClick={(event) => handleToggleEdit(event)}
                    className="edit-task-button disabled"
                    role="button"
                    tabIndex={0}
                />
                : // else
                <LiaEdit
                    onClick={(event) => handleToggleEdit(event)}
                    className="edit-task-button"
                    role="button"
                    tabIndex={0}
                />
        }
    </>

}