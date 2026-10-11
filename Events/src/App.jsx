import React, { useState } from 'react'

const App = () => {
 const [name,setName] = useState('');
 const [email,setEmail] = useState('');
const [isSubmited,setIsSubmited] =useState(false);
  function handleSubmit(e){
    e.preventDefault();
    setIsSubmited(true);
    
    alert(`Form Submitted By ${name}`)

  }
  return (
    <div>
      {!isSubmited ?(
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Enter your Name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      required
      />
      <input type="email" placeholder='Enter your Email' 
      value={email}
onChange={(e)=>setEmail(e.target.value)}
required
      />
      <button type='submit'>Submit</button>
      </form>
      ):(

      <div className='parent'>
        <h2>Form Submited Successfully!</h2>
      <h2>UserName: <span>{name}</span></h2>
      <h2>Email: <span>{email}</span></h2>
      </div>
      )}
    </div>
  )
}

export default App




// import React from 'react'

// const App = () => {
//   function greet(name){
//     alert(`Hello ${name}`)
//   }
//   return (
//     <div>
//       <button onClick={()=> greet("Sonu")}>Sonu</button>
  
//       <button onClick={()=> greet("Ayush")}>Ayush</button>
  
//     </div>
//   )
// }

// export default App


// function App() {
//   function parent(e){
// e.stopPropagation();
// alert("Child Clicked")
//   }
//   return (
//     <div onClick={() => alert("Parent clicked")}>
//       <button onClick={parent}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;