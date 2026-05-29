import { createContext } from "react";

export const NotesContext = createContext({
    notes: [],
    activeNoteId: null,
    createNote: ()=>{},
    updateNote: ()=>{},
    selectNote: ()=>{}
});