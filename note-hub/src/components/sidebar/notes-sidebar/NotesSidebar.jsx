
import useNotes from "../../../hooks/useNotes";
import SidebarHeader from "../sidebar-header/SidebarHeader";
import NotesList from "../notes-list/NotesList";

export default function NotesSidebar() {
    const { notes, activeNoteId } = useNotes();

    return <aside className="notes-sidebar-container">
        <SidebarHeader />
        <NotesList
            notes={notes}
            activeNoteId={activeNoteId}
        />
    </aside>
}