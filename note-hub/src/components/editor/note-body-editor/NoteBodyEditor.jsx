// ---

// ### **FEAT‑113 — Implement `<NoteBodyEditor />`**
// **Description:**  
// Controlled textarea for note body.

// **Subtasks**
// - Render textarea  
// - Bind value to note.body  
// - Call `updateNote(id, { body })`  

// ---

import { useNotes } from "../../../hooks/useNotes"
export default function NoteBodyEditor({ note }) {
    let { updateNote } = useNotes();
    return <textarea
        name="body"
        id={note.id}
        value={note.body}
        onChange={() => updateNote(note.id, { body: note.body })}
    >
    
    </textarea>
}