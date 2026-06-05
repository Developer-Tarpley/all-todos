// ---

// ### **FEAT‑203 — Add TagInput keyboard navigation**
// **Subtasks**
// - Support Backspace to delete last tag  
// - Support arrow keys to move caret  
// - Prevent cursor jump issues  

// ---


// ---

// ### **FEAT‑201 — Create `<TagInput />` container**
// **Description:**  
// Main component that manages tag input state.

// **Subtasks**
// - Render input + tag pills  
// - Handle Enter key  
// - Prevent duplicates  
// - Emit `onChange(tags[])`  

// ---

import { useState } from "react";
import TagPill from "../tag-pill/TagPill";

export default function TagInput() {
    const [tags, setTags] = useState([]);
    const [tagText, setTagText] = useState("");

    const handleDuplicates = (tagsArray) => {
        const isDuplicate = tagsArray.includes(tagText);
        if (isDuplicate) return;

        if(onChange) onchange(tags);

        setTags(prev => [...prev, tagText]);        
    }

    const handleKeyDown = (event) => {
        const key = event.key;
        if (key !== "Enter") return;
        handleDuplicates(tags)
    }


    return <div className="main-tag-container">
        {/* input */}
        <input
            onKeyDown={(event) => handleKeyDown(event)}
            onChange={(event) => setTagText(event.target.value)}
            type="text"
        />

        {/* tag pills */}
        <ul>
            {
                tags.map(tag => {
                    return (
                        <TagPill key={tag} tag={tag} />
                    )
                })
            }
        </ul>
    </div>
}