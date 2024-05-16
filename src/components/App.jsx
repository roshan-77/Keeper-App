import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteText, setNoteText] = useState([]);
  // const [noteArray, setNoteArray] = useState([]);

  function updateNote(input) {
    setNoteText([...noteText, { title: input.title, content: input.content }]);
  }

  function deleteNote(id) {
    const updatedArray = noteText.filter((note, index) => index !== id);
    setNoteText(updatedArray);
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={updateNote} />
      {noteText.map((note, index) =>
        note.title !== "" || note.content !== "" ? (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            removeNote={deleteNote}
          />
        ) : (
          ""
        )
      )}
      <Footer />
    </div>
  );
}

export default App;
