import React, { useState, useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext';

const UpdateWindow = React.forwardRef((props, ref) => {

    const context = useContext(NoteContext)
    const { updateNote } = context;


    const [note, setNote] = useState(props.note)
    useEffect(() => {
        setNote(props.note);
    }, [props.note])

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(note);
        updateNote(props.note._id, note.title, note.description, note.tag);
        props.showAlert("Note Updated Successfully",'primary')
    }

    return (
        <div>

            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Note</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group my-2">
                                    <label htmlFor="exampleInputEmail1">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" defaultValue={props.note.title} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" defaultValue={props.note.description} onChange={onChange} minLength={5} required/>
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="exampleInputPassword1">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" defaultValue={props.note.tag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.length <5 || note.title.length <5 } type="button" className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default UpdateWindow
