// ---


// ### **FEAT‑122 — Implement `useAutoSave()`**
// **Description:**  
// Hook that watches title/body and triggers updateNote.

// **Subtasks**
// - Watch note fields  
// - Debounce updates  
// - Trigger updateNote  
// - Update AutoSaveIndicator state  

// ---
import { useEffect } from "react";

import { useNotes } from "./useNotes";
import { useDebounce } from "./useDebounce";
import AutoSaveIndicator from "../components/editor/auto-save-indicator/AutoSaveIndicator"
import { useState } from "react";

export function useAutoSave() {
    let { notes, activeNoteId, updateNote } = useNotes();
    let [status, setStatus] = useState("idle");

    const activeNote = notes.find(note=>note.id === activeNoteId);
    if(!activeNote) return "idle";

    const debouncedTitle = useDebounce(activeNote.title, 500);
    const debouncedBody = useDebounce(activeNote.body, 500);

    useEffect(()=>{
        setStatus("saving");
    },[activeNote.title, activeNote.body])

    useEffect(() => {

        try{

            updateNote(activeNote.id,{
                title: debouncedTitle,
                body: debouncedBody
            });

            setStatus("saved");
        }
        catch(error){
            setStatus("Oops! could't save");
            console.log("auto save error: ", error);
        }

    },[debouncedTitle, debouncedBody]);

    return status;
}