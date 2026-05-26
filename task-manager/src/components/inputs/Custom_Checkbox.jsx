// import { useState } from "react";
import "./custom_checkbox.css";

export default function Custom_Checkbox({ task }) {
  // console.log(task)

  return (
    <>
      {
        task.completed ?
          <label className="container">
            <input type="checkbox" defaultChecked />
            <span className="checkmark"></span>
            <span className="label-text"></span>
          </label>
          :
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="label-text"></span>
          </label>
      }
    </>
  )
};