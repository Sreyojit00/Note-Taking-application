import React, {useContext, useState} from 'react'
import NoteContext from "/Projects/inotebook/src/context/notes/NoteContext"



const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Your Note Added Successfully", "success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
        
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className>
                <div className="col-4" >
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-success" onClick={handleClick}>Add Note</button>
            </form>
            <footer class="bg-body-tertiary text-center text-lg-start">
 
 <div class="text-center p-3 nb-5">
   © 2023 Copyright:
   iNotebook
 </div>

</footer>
        </div>
    )
}

export default AddNote