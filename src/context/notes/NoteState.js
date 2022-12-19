import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const initialNotes=[
        {
          "_id": "63997c4286749878a48afe3v",
          "user": "63728b85b44c80c439fae69c",
          "title": "my title",
          "description": "my description",
          "tag": "personal",
          "date": "2022-12-14T07:33:22.841Z",
          "__v": 0
        },
        {
          "_id": "63997c4286749878a48afe3a",
          "user": "63728b85b44c80c439fae69c",
          "title": "my title",
          "description": "my description",
          "tag": "personal",
          "date": "2022-12-14T07:33:22.841Z",
          "__v": 0
        },
        {
          "_id": "63997c4286749878a48afe9a",
          "user": "63728b85b44c80c439fae69c",
          "title": "my title",
          "description": "my description",
          "tag": "personal",
          "date": "2022-12-14T07:33:22.841Z",
          "__v": 0
        },
        {
          "_id": "63997c4286749878a48aff3a",
          "user": "63728b85b44c80c439fae69c",
          "title": "my title",
          "description": "my description",
          "tag": "personal",
          "date": "2022-12-14T07:33:22.841Z",
          "__v": 0
        },
        {
          "_id": "639c67616322ab687874c53d",
          "user": "63728b85b44c80c439fae69c",
          "title": "new note",
          "description": "something something",
          "tag": "personal",
          "date": "2022-12-16T12:41:05.384Z",
          "__v": 0
        }
      ]

      const [notes,setNotes]=useState(initialNotes)

      //Add a note
      const addNote=(title,description,tag)=>{
        console.log("Added");
        let note={
          "_id": "639c67616322ab687874c5333",
          "user": "63728b85b44c80c439fae69c",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-12-16T12:41:05.384Z",
          "__v": 0
        }
        setNotes(notes.concat(note))

      }
      //Delete a note
      const deleteNote=(notes)=>{
        
      }
      //Edit a note
      const editNote=(notes)=>{

      }
    
  return (
   <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
    {props.children}
   </NoteContext.Provider>
  )
}

export default NoteState
