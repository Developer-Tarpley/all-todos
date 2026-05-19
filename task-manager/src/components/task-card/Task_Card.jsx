import "./task_card.css";
import Delete_Button from "../buttons/Delete_Button";
import Edit_Button from "../buttons/Edit_Button";
import Custom_Checkbox from "../inputs/Custom_Checkbox"

export default function Task_Card({ tasks }) {
   return <ul className="task-list">
        {
            tasks.map(task =>
                <div key={task.id} className="task-card">
                    <div className="card-button-container">
                        <Custom_Checkbox />
                        <Edit_Button />
                        <Delete_Button />
                    </div>
                    <li className="list-item">
                        {task.text}
                    </li>
                </div>
            )
        }
    </ul>

}