import React, { useState } from 'react'

const Notes = () => {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [notes,setNotes] = useState([]);

const handleForm =(e)=>{
  e.preventDefault();
  console.log("from submit")

  const newNotes ={
    title:title,
    description:description
  }
  setNotes([...notes,newNotes])
  console.log(newNotes)
  setTitle('');
setDescription('');

}


  return (
    <div className='parent'>
      <form className='form' onSubmit={handleForm}>
        <h1>Add Notes</h1>
        <input type="text" placeholder='Enter Notes Heading' name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
         <textarea name="description" id="" rows={3} placeholder='Write Details here' type="text"  value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
         <button type='submit'>Add Note</button>
      </form>
      <div className="right">
  {notes.map((note, index) => (
    <div className='note' key={index}>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
    </div>
  ))}
</div>
    </div>
  )
}

export default Notes
