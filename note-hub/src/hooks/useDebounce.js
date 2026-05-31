// ---

// ### **FEAT‑121 — Implement `useDebounce()`**
// **Description:**  
// Generic debounce hook.

// **Subtasks**
// - Accept value + delay  
// - Return debounced value  
// - Add cleanup logic  

// ---

import { useEffect, useState } from "react";

export function useDebounce(value, delayTime){
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{

        const handleBounce = setTimeout(()=>{
            setDebounceValue(value);
        }, delayTime)

        return ()=>{
            clearTimeout(handleBounce)
        }
    },[value, delayTime]);

    return debounceValue;
}