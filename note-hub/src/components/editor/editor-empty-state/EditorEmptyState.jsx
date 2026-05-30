
import { useNotes } from "../../../hooks/useNotes"

export default function EditorEmptyState(){
    let {createNote} = useNotes();
    return <div className="editor-empty-state">
        <p>Currently showing no note</p>
        <p>Please select a note or create a note</p>
        <button onClick={()=>createNote()}>
        <span>Click here to create a note +</span>
        </button>
    </div>
}