
import { useNotes } from "../../../hooks/useNotes";
import NoteListItem from "../note-list-item/NoteListItem"
import EmptyState from "../empty-state/EmptyState"

export default function NotesList({notes, activeNoteId}) {

    // by updatedAt ascending order newest -> oldest
    const sortedNotes = [...notes].sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt))

    return <ul className="list-container">
        {notes.length === 0 && <EmptyState/>}
        {
            sortedNotes.map(note => {
                return (
                    <NoteListItem
                        key={note.id}
                        note={note}
                        activeNoteId={activeNoteId}
                    />
                )
            })
        }
    </ul>
}