// ---

// ### **FEAT‑124 — Integrate Auto‑Save into Editor**
// **Description:**  
// Connect auto‑save hook to title/body inputs.

// **Subtasks**
// - Pass note fields to useAutoSave  
// - Trigger updates on change  
// - Display AutoSaveIndicator  

// ---
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ---

// ### **FEAT‑123 — Implement `<AutoSaveIndicator />`**
// **Description:**  
// UI component showing save status.

// **Subtasks**
// - Add “Saving…” state  
// - Add “Saved” state  
// - Add “Error” state  
// - Add fade-out animation  

// ---

import { useState } from "react";
import { useAutoSave } from "../../../hooks/useAutoSave";
import { useEffect } from "react";

export default function AutoSaveIndicator(){
    let status = useAutoSave();
    const [showStatus, setShowStatus] = useState(false);

    useEffect(()=>{
        if(status !== "idle"){
            setShowStatus(true);
            if(status === "saved"){
                let fadeOut = setTimeout(()=>{
                    setShowStatus(false);
                }, 1500);
                return ()=>clearTimeout(fadeOut);
            };
        };

    },[status]);

    if(!showStatus) return null;

    let state = {
        "saving": {text:"Saving...", classname: "saving"},
        "saved": {text:"Saved", classname: "saved"},
        "error": {text:"Error", classname: "error"},
    };

    let isState = state[status] ?? {};
    let textOfState = isState.text || "";
    let classnameOfState = isState.classname || "";

    return <span className={`auto-save-indicator ${classnameOfState}`}>
        {textOfState}
    </span>
}