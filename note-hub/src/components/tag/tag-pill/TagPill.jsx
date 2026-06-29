// ---

// ### **FEAT‑202 — Implement `<TagPill />`**
// **Description:**  
// Visual pill representing a tag.

// **Subtasks**
// - Render tag text  
// - Add remove button  
// - Call `onRemove(tag)`  

// ---

export default function TagPill({tag}){

    return <li className="tag-pill">
        {tag}
    </li>
}