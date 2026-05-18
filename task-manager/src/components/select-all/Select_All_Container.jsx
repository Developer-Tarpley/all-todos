import "./select_all.css";
import Custom_Checkbox from "../inputs/Custom_Checkbox";

export default function Select_All_Container() {
    return <section className="select-all-container">
        <div className="select-all-checkbox-div">
            <Custom_Checkbox text="Select All" />
        </div>
        <button className="remove-tasks-button">Remove Task's</button>

    </section>
}