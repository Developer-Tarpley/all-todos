// ---

// ### **FEAT‑105 — Implement `<NoteListItem />`**
// **Description:**  
// Clickable list item representing a single note.

// **Subtasks**
// - Display title + preview  
// - Highlight active note  
// - Call `selectNote(id)` on click  

// ---

import { useNotes } from "../../../hooks/useNotes"
export default function NoteListItem({ note }) {
    const { selectNote, activeNoteId } = useNotes();
    return <li
        onClick={() => selectNote(note.id)}
        className={activeNoteId === note.id ? "note-list-item highlight" : "note-list-item"}
    >

        <h2 className="note-title">
            {note.title}
        </h2>
        <p className="note-preview">
            {
                note.body && note.body.length < 1 ?
                `Empty Note` :

                note.body.length >= 1  
                && note.body.length <= 30 ?
                `${note.body}` :
                
                `${note.body.slice(0, 30)}...`
            }
        </p>
    </li>
}