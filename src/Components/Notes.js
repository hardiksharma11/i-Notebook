import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Addnote from './Addnote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes,addNotes} = context;
    return (
        <div>
            <Addnote/>
            <h2>Your Notes</h2>
            <div className="row">
            {notes.map((notes) => {
                return <NoteItem key={notes._id} notes={notes}/>
            })}
           </div>
        </div>
    )
}

export default Notes
