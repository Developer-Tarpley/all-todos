import { useState } from "react";
import "./custom_checkbox.css";

export default function Custom_Checkbox(props) {
  const [check, setCheck] = useState(null)

  const handleChange = (event) => {
    console.log("is checked", event.target.checked)
    console.log("is checked", event.target.closest("li"))
    const li = event.target.closest("li")

    if (!check) {
      setCheck(event.target.checked)
      li.style.textDecoration = "line-through";
      li.style.color = "green";
      li.textContent += " Completed!"
      
    } else {
      setCheck(false)
      li.style.textDecoration = "none";
      li.style.color = "black";
    }
  }

  return (
    <>
      {
        check ?
          <label className="container">
            <input onChange={(event) => handleChange(event)} type="checkbox" />
            <span className="checkmark"></span>
            <span className="label-text"></span>
          </label>
          :

          <label className="container">
            <input onChange={(event) => handleChange(event)} type="checkbox" />
            <span className="checkmark"></span>
            <span className="label-text">{props.text}</span>
          </label>
      }
    </>
  )


};