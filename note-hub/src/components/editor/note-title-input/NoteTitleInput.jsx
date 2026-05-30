// ---

// ### **FEAT‑112 — Implement `<NoteTitleInput />`**
// **Description:**  
// Controlled input for note title.

// **Subtasks**
// - Render input  
// - Bind value to note.title  
// - Call `updateNote(id, { title })`  

// ---

import { useNotes } from "../../../hooks/useNotes"
export default function NoteTitleInput({note}) {
    let {updateNote} = useNotes();
    return <input
        type="text"
        value={note.title}
        onChange={()=>updateNote(note.id, {title: note.title})}
    />
}