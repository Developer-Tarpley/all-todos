import "./notes-sidebar.css";
import {useNotes} from "../../../hooks/useNotes";
import SidebarHeader from "../sidebar-header/SidebarHeader";
import NotesList from "../notes-list/NotesList";

export default function NotesSidebar() {
    const { notes, activeNoteId, showSidebar } = useNotes();

    return <aside className={showSidebar?"notes-sidebar-container" : "notes-sidebar-container hidden"}>
        <SidebarHeader />
        <NotesList
            notes={notes}
            activeNoteId={activeNoteId}
        />
    </aside>
}