import { useState, useEffect, useCallback } from "react";
import { NotesContext } from "./NotesContext";
import { loadNotes, saveNotes } from "../utils/storage/localStorageAdapter";
import { generateId } from "../utils/generateId";
import { now } from "../utils/timestamps";

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => loadNotes());
  const [activeNoteId, setActiveNoteId] = useState(null);

  const createNote = useCallback(() => {
    const id = generateId();
    const newNote = {
      id,
      title: "",
      body: "",
      createdAt: now(),
      updatedAt: now()
    };

    setNotes(prev => [newNote, ...prev]);
    setActiveNoteId(id);
  }, []);

  const updateNote = useCallback((id, updates) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? { ...note, ...updates, updatedAt: now() }
          : note
      )
    );
  }, []);

  const selectNote = useCallback(id => {
    setActiveNoteId(id);
  }, []);

  useEffect(() => {
    saveNotes(notes);
    // console.log("Notes: ", notes)
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        activeNoteId,
        createNote,
        updateNote,
        selectNote
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}