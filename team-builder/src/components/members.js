import React from "react";

const Members = props => {
  return (
    <div>
      {props.member.map(e => (
        <div key={e.id} className='member'>
          <h2>{e.name}</h2>
          <p>E-mail: {e.email}</p>
          <p>Role: {e.role}</p>
          <p>Motto: "{e.motto}"</p>
        </div>
      ))}
    </div>
  );
};

export default Members; 
