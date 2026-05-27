import "./edit_button.css";
import { LiaEdit } from "react-icons/lia";

export default function Edit_Button({ editMode, task }) {

    return <>
        {
            editMode || task.completed ? // do this
                <LiaEdit
                    className="edit-task-button disabled"
                    role="button"
                    data-action="edit"
                    tabIndex={0}
                    id="edit"
                />
                : // else
                <LiaEdit
                    className="edit-task-button"
                    role="button"
                    data-action="edit"
                    tabIndex={0}
                />
        }
    </>

}