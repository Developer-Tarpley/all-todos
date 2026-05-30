// ---

// ### **FEAT‑106 — Implement Sidebar Empty State**
// **Description:**  
// Show placeholder when no notes exist.

// **Subtasks**
// - Add empty state UI  
// - Add CTA to create first note  

// ---

import { useNotes } from "../../../hooks/useNotes"
export default function EmptyState() {
    let { createNote } = useNotes()
    return <div className="empty-list-state">
        <p>
            No notes created yet
        </p>
        <button
            onClick={() => createNote()}
            className="create-first-note-button"
        >
            <span>Create Your First Note +</span>
        </button>
    </div>
}