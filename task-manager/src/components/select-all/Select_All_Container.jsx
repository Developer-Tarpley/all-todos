import "./select_all.css";
import Custom_Checkbox from "../inputs/Custom_Checkbox";

export default function Select_All_Container() {
    return <section className="select-all-container">
        <Custom_Checkbox />
        <span>Select All</span>
        <button className="remove-tasks-button">Remove Task's</button>

    </section>
}