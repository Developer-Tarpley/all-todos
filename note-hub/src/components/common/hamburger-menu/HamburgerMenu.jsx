import "./hamburger-menu.css";
import { useNotes } from "../../../hooks/useNotes";

export default function HamburgerMenu() {
    let { showSidebar, setShowSidebar } = useNotes();

    return <button onClick={()=>setShowSidebar(!showSidebar)} className="hamburger-container">
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
    </button>
}