
import useNotes from "../../hooks/useNotes";
import SidebarHeader from "./SidebarHeader";
import NewNoteButton from "./NewNoteButton";
import NotesList from "./NotesList";

export default function NotesSidebar() {
    const { notes, activeNoteId } = useNotes();

    return <aside className="notes-sidebar-container">
        <SidebarHeader />
        <NewNoteButton />
        <NotesList
            notes={notes}
            activeNoteId={activeNoteId}
        />
    </aside>
}