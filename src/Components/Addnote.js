import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Addnote = (props) => {
  const context = useContext(NoteContext)
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })
    props.showAlert("Note Added Successfully",'primary')
  }
  return (
    <div>
      <h2 className="my-2">Add Note</h2>
      <form>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" value={note.title} onChange={onChange} minLength={5} required />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input type="text" className="form-control" id="description" name="description" placeholder="Descripton" value={note.description} onChange={onChange} minLength={5} required />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" value={note.tag} onChange={onChange} />
        </div>
        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary my-2" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
