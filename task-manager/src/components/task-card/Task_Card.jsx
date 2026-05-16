import "./task_card";
import Custom_Radio_Button from "../buttons/Custom_Radio_Button";
import Delete_Button from "../buttons/Delete_Button";
import Edit_Button from "../buttons/Edit_Button";

export default function Task_Card(){
    return <div className="task-card">
        <div>
            <p>task</p>
            <p>description</p>
        </div>
        <div>
        <Custom_Radio_Button/>
        <Edit_Button/>
        <Delete_Button/>
        </div>
    </div>

}