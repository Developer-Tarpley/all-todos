// ---

// ### **FEAT‑112 — Implement `<NoteTitleInput />`**
// **Description:**  
// Controlled input for note title.

// **Subtasks**
// - Render input  
// - Bind value to note.title  
// - Call `updateNote(id, { title })`  

// ---



import { useState } from "react";
import { useNotes } from "../../../hooks/useNotes"

export default function NoteTitleInput({ note }) {
    let { updateNote } = useNotes();


    const handleUpdate = (value) => {
        updateNote(note.id, { title: value })
    }

    return <input
        type="text"
        value={note.title}
        onChange={(event) => handleUpdate(event.target.value)}
    />
}