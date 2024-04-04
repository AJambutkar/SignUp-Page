import { useState } from "react";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      placeholder: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      label: "Date of Birth",
      placeholder: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confrim Password",
      errorMessage: "Passwords don't match!",
      pattern:values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {inputs.map((input) => {
          return (
            <Form
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}
        <button>
          <span class="box">Submit</span>
        </button>
      </form>
    </div>
  );
}

export default App;
