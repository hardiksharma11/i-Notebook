import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

  const host = "http://localhost:5000";

  const initialNotes=[];
  const [notes, setNotes] = useState(initialNotes);

  //Fetch all notes
  const fetchNotes = async () => {

    //Fetch notes
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjhiODViNDRjODBjNDM5ZmFlNjljIn0sImlhdCI6MTY3MTk2Mjk3Nn0.6jQHkHZB8M_5CTAzK5XjXKmmaZJF1pljB6voHWlpZWE'
      }
    });
    const json = await response.json();
    // console.log(json);

    setNotes(json);

  }

  //Add a note
  const addNote = async (title, description, tag) => {

    //Fetch notes
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjhiODViNDRjODBjNDM5ZmFlNjljIn0sImlhdCI6MTY3MTk2Mjk3Nn0.6jQHkHZB8M_5CTAzK5XjXKmmaZJF1pljB6voHWlpZWE'
      },

      body: JSON.stringify({ title, description, tag})
    });
    const json = await response.json();
    console.log(json);

    setNotes(notes.concat(json))

  }
  //Delete a note
  const deleteNote = async (id) => {
     //Fetch notes
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjhiODViNDRjODBjNDM5ZmFlNjljIn0sImlhdCI6MTY3MTk2Mjk3Nn0.6jQHkHZB8M_5CTAzK5XjXKmmaZJF1pljB6voHWlpZWE'
      }
    });
    const json = await response.json();
    console.log(json);

    const note = notes.filter((note) => { return note._id !== id })
    setNotes(note)

  }
  
  //Edit a note
  const updateNote = async (id, title, description, tag) => {

    //Fetch notes
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MjhiODViNDRjODBjNDM5ZmFlNjljIn0sImlhdCI6MTY3MTk2Mjk3Nn0.6jQHkHZB8M_5CTAzK5XjXKmmaZJF1pljB6voHWlpZWE'
      },

      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    //Logic
    const newNotes= JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < newNotes.length; i++) {
      if ( newNotes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }

    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, fetchNotes,updateNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
