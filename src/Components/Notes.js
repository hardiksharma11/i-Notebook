import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Addnote from './Addnote';
import NoteItem from './NoteItem';
import UpdateWindow from './UpdateWindow';

const Notes = (props) => {
    const context = useContext(NoteContext)
    const { notes, fetchNotes } = context;

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line 
    }, [])

    const ref = useRef(null);
    const [note,setNote]=useState({_id:"", title:"",description:"",tag:""})
    const updateNote = (note) => {
        ref.current.click();
        setNote(note)
    }

    return (
        <div>
            <Addnote showAlert={props.showAlert}/>
            <UpdateWindow ref={ref} note={note} showAlert={props.showAlert}/>
            
            <h2>Your Notes</h2>
            <div className="row">
                {notes.length===0 && 'No notes to display'}
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} notes={notes} updateNote={updateNote} showAlert={props.showAlert}/>
                })}
            </div>
        </div>
    )
}

export default Notes
