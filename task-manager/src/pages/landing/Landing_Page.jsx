import "./landing_page.css";
import Use_Tasks from "../../state/Use_Tasks";

import Display_Tasks from "../display/Display_Tasks";
import Custom_Input from "../../components/inputs/Custom_Input_Text";
import Select_All_Container from "../../components/select-all/Select_All_Container";
import { useEffect } from "react";
export default function Landing_Page() {
    const useTasks = Use_Tasks();

  
    return <div className="landing-page-container">
        <header className="landing-header">
            <h1>Simple Task Manager</h1>
            <Custom_Input {...useTasks}/>
            <Select_All_Container/>
        </header>

        <main className="landing-content">
            <Display_Tasks {...useTasks}/>
        </main>

        <footer className="landing-footer">
            <span className="copywright-span">&copy; DevScript Corey Tarpley, 2026</span>
        </footer>

    </div>
}