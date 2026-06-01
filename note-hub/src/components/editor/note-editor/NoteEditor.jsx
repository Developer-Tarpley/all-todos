import "./note-editor.css";
import { useNotes } from "../../../hooks/useNotes";
import EditorEmptyState from "../editor-empty-state/EditorEmptyState";
import NoteBodyEditor from "../note-body-editor/NoteBodyEditor";
import NoteTitleInput from "../note-title-input/NoteTitleInput";
import AutoSaveIndicator from "../auto-save-indicator/AutoSaveIndicator";
import HamburgerMenu from "../../common/hamburger-menu/HamburgerMenu";

export default function NoteEditor() {
    let { notes, activeNoteId } = useNotes();

    const foundNote = notes.find(note=>note.id === activeNoteId);

    return <main className="note-editor-container">
            <HamburgerMenu/>
        {
            notes.length > 0 && foundNote ?
                <div className="editor-note">
                    <AutoSaveIndicator/>
                    <NoteTitleInput note={foundNote}/>
                    <NoteBodyEditor note={foundNote}/>
                </div>
                : <EditorEmptyState />
        }
    </main>
}