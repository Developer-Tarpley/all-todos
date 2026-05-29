// ---

// ### **FEAT‑103 — Implement `<NewNoteButton />`**
// **Description:**  
// Button that triggers `createNote()`.

// **Subtasks**
// - Add button UI  
// - Call `createNote()` on click  
// - Auto‑select new note  

// ---
import {useNotes} from "../../../hooks/useNotes";

export default function NewNoteButton() {
    let { createNote } = useNotes();

    return <button
        className="new-note-button"
        onClick={()=>createNote()}
    >
        New Note
    </button>
}