import NotesProvider from "./state/NotesProvider";
import AppLayout from "./AppLayout";

function App() {
  return (
    <NotesProvider>
      <AppLayout />
    </NotesProvider>
  );
}

export default App;