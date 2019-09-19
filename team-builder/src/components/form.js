import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "", motto: ""});

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "", motto: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        id="title"
        type="text"
        name="name"
        placeholder="John Wick"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">E-mail: </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="johnwick@keanureeves.com"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role">Role: </label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Front-end developer, Back-end developer, Fullstack, etc"
        onChange={handleChanges}
        value={member.role}
      />
      <label htmlFor="motto">Personal Motto: </label>
      <textarea
        id="motto"
        name="motto"
        type="text"
        placeholder="A dog's death can cause so much trouble"
        onChange={handleChanges}
        value={member.motto}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;
