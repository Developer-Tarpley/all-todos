import { useContext } from "react";
import { NotesContext } from "../state/NotesContext";

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used inside NotesProvider");
  return ctx;
}