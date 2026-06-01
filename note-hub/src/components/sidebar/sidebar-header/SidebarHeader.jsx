import "./sidebar-header.css";
import NewNoteButton from "../new-note-button/NewNoteButton";

export default function SidebarHeader() {

    return <header className="sidebar-header">
        <h1>Notes</h1>
        <NewNoteButton />
    </header>
}