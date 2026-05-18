import "./custom_checkbox.css";

export default function Custom_Checkbox(props){
    return   <label className="container">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="label-text">{props.text}</span>
    </label>

};