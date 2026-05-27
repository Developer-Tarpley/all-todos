import NotesSidebar from "./components/sidebar/NotesSidebar";
import NoteEditor from "./components/editor/NoteEditor";

export default function AppLayout() {
  return (
    <div className="layout">
      <NotesSidebar />
      <NoteEditor />
    </div>
  );
}