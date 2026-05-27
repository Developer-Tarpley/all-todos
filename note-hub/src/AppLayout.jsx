import NotesSidebar from "./components/sidebar/notes-sidebar/NotesSidebar";
import NoteEditor from "./components/editor/note-editor/NoteEditor";

export default function AppLayout() {
  return (
    <div className="layout">
      <NotesSidebar />
      <NoteEditor />
    </div>
  );
}