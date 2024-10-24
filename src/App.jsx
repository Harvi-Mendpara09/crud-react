import React from "react";
import { useState } from "react";
import Show from "./Components/Show";
import Add from "./Components/Add";

const App = () => {
  const [Note, setNote] = useState("");
  const [Notes, setNotes] = useState([]);
  const [editId, seteditId] = useState("");
  const [editNote, seteditNote] = useState(null);

  const submitHandler = (e) => { 
    e.preventDefault(); // Ensure default form submission is prevented
    let obj = {
      note: Note,
      id: Date.now(),
    };

    if (editId) {
      updateHandler(obj); // If there's an edit, update the note
      console.log("updating note");
    } else {
      addNote(obj); // Otherwise, add a new note
      console.log("adding note");
    }
    setNote(""); // Reset input field after submission
  };

  const addNote = (obj) => {
    if (!Note) {
      alert("Note cannot be blank!");
    } else {
      setNotes([...Notes, obj]); // Add the new note to the state
    }
  };

  const deleteHandler = (id) => {
    let DeleteRecord = Notes.filter((note) => note.id !== id); // Filter out the note with the matching ID
    setNotes(DeleteRecord);
  };

  const editHandler = (id) => {
    let eNote = Notes.find((item) => item.id === id); // Use '===' for strict equality
    seteditNote(eNote);
    seteditId(id);
    setNote(eNote.note); // Set the note in the input field to edit
    console.log(eNote);
  };

  const updateHandler = (updateNote) => {
    let updatedNotes = Notes.map((item) => {
      if (item.id === editId) {
        item.note = updateNote.note; // Update the note text
      }
      return item;
    });
    setNotes(updatedNotes); // Update the Notes array
    seteditId(""); // Clear the edit ID after updating
  };

  return (
    <>
      <Add
        Note={Note}
        setNote={setNote}
        editId={editId}
        submitHandler={submitHandler}
      />
      <div className="flex flex-wrap justify-center align-middle">
        <Show
          Notes={Notes}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </div>
    </>
  );
};

export default App;
