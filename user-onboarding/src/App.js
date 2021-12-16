import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import logo from "./logo.svg";
import "./App.css";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    <div className="App">
      <header>
        <h1>Users App</h1>
      </header>
      <Form values={formValues} />
    </div>
  );
}

export default App;
