// ---

// ### **FEAT‑115 — Wire Editor to Global State**
// **Description:**  
// Ensure editor updates propagate through NotesProvider.

// **Subtasks**
// - Connect updateNote  
// - Ensure timestamps update  
// - Ensure editor re-renders correctly  

// ---
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ---

// ### **FEAT‑111 — Create `<NoteEditor />` container**
// **Description:**  
// Main editor wrapper that loads the active note.

// **Subtasks**
// - Pull `activeNoteId` and `notes`  
// - Find active note  
// - Render editor or empty state  

// ---

import { useNotes } from "../../../hooks/useNotes";
import EditorEmptyState from "../editor-empty-state/EditorEmptyState";
import NoteBodyEditor from "../note-body-editor/NoteBodyEditor";
import NoteTitleInput from "../note-title-input/NoteTitleInput";

export default function NoteEditor() {
    let { notes, activeNoteId } = useNotes();

    const foundNote = notes.find(note=>note.id === activeNoteId);

    return <main className="note-editor-container">
        {
            notes.length > 0 && foundNote ?
                <div className="editor-note">
                    <NoteTitleInput note={foundNote}/>
                    <NoteBodyEditor note={foundNote}/>
                </div>
                : <EditorEmptyState />
        }
    </main>
}