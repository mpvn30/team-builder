import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css"
import Members from "./components/members";
import Form from "./components/form";


function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: "Mike",
      email: "mpvnguyen1996@gmail.com",
      role: "front-end developer",
      motto: "It's not the pineapple, it's the pizza"
    }
  ]);

  const addNewMember = add => {
    const newMember = {
      id: add.id,
      name: add.name,
      email: add.email,
      role: add.role,
      motto: add.motto
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Membership Form</h1>
        <Form addNewMember={addNewMember} />
        <Members member={member} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
