import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Addnote = () => {
  const context = useContext(NoteContext)
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" })

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  }
  return (
    <div>
      <h2 className="my-2">Add Note</h2>
      <form>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={onChange} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input type="text" className="form-control" id="description" name="description" placeholder="Descripton" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary my-2" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
