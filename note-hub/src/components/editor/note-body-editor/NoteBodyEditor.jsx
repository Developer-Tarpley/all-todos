
import { useNotes } from "../../../hooks/useNotes";

export default function NoteBodyEditor({ note }) {
    let { updateNote } = useNotes();

    const handleBodyUpdate = (value) => {
        updateNote(note.id, { body: value })
    }

    return <textarea
        name="body"
        id={note.id}
        value={note.body}
        onChange={(event) => handleBodyUpdate(event.target.value)}
    />

}