
import { useNotes } from "../../../hooks/useNotes";

export default function NotesList({notes, activeNoteId}) {

    // by updatedAt ascending order newest -> oldest
    const sortedNotes = [...notes].sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt))

    return <ul className="list-container">
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