import React, { useState } from "react";

function Note(props) {
  const [editStatus, setEditStatus] = useState("false");

  function handleEdit() {
    setEditStatus((prevValue) => {
      return prevValue === "false" ? "true" : "false";
    });
  }

  return (
    <div className="note">
      <h1 contentEditable={editStatus}>{props.title}</h1>
      <p contentEditable={editStatus}>{props.content}</p>
      <button onClick={handleEdit}>
        {editStatus === "false" ? "EDIT" : "DONE"}
      </button>
      <button onClick={() => props.removeNote(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
