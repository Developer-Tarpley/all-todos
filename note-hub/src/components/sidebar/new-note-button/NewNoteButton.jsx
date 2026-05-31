
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