import React , {useState} from "react";
import "./Form.css";

function Form(props) {
    const { label, id, onChange, value, errorMessage, ...inputprops } = props;
    
    const [focused, setFocused] = useState(false)

    const handleLeave = () => {
        setFocused(true)
    }

    const handleFocus = () => {
      if (inputprops.name === "confirmpassword") {
        setFocused(true)
      }
    }
    
  return (
    <div className="form">
      <label>{label}</label>
          <input {...inputprops}
              onChange={onChange}
              value={value}
              onBlur={handleLeave}
              focused={focused.toString()}
              onFocus={handleFocus}
          />
          <span className="error">{errorMessage}</span>
    </div>
  );
}

export default Form;
