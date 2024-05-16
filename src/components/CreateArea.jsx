import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  function setNote(e) {
    e.preventDefault();
    props.addNote(input);
    setInput({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={input.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={input.content}
        />
        <button onClick={setNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
