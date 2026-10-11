import React, { useState } from 'react'

const App = () => {
  const [names,setNames] = useState(["Sonu" , "Ayush" ,"Rahul"])
  return (
    <div>
     {names.map((name,index)=>(
      <h2 key={index}>{name}</h2>
     ))}
      
      <button onClick={()=>{
       setNames(names.filter((name)=> name !=="Ayush"));
      }}>RemoveRahul</button>
      <button onClick={()=>{
       setNames([...names ,"Saloni"]);
      }}>AddStudent</button>
    </div>
  
  )
}

export default App
