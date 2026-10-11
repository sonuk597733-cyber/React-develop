// import React from 'react'

// const App = () => {
//   const students = [
//         { id: 1, name: "Sonu", age: 18 },
//     { id: 2, name: "Lavkush", age: 19 },
//     { id: 3, name: "Satyam", age: 20 },
//     { id: 4, name: "Ayush", age: 18 }
//   ];
//   return (
//     <div>
//       <h1>Students list</h1>
//       {students.map((student)=>(
//         <div key={student.id}>
//             <h2>{student.name}</h2>
//             <p>{student.age}</p>
//           </div>
//       ))}
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   const items = [
//         { id: 1, name: "Laptop", price: 50000 },
//         { id: 2, name: "Mobile", price: 20000 },
//         { id: 3, name: "Keybord", price:1000}
//   ];
//   return (
//     <div>
//       <h1>Students list</h1>
//       {items.map((item)=>(
//         <div key={item.id}>
//             <h2>{item.name}</h2>
//             <p>{`₹${item.price}`}</p>
//           </div>
//       ))}
//     </div>
//   )
// }

// export default App




import { useState } from 'react'

const App = () => {

const [products,setProducts] =useState([
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
])

function AddProduct(){
  const newProduct={
    id:3,
    name:"keyboard",
    price:1000
  };
  setProducts([...products,newProduct])
}
function deleteProduct(id){
  setProducts(products.filter((product)=>product.id !== id));
}
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product)=>(
        <div key ={product.id}>
          <h3>{product.name} - ₹{product.price}</h3>
          <button onClick={()=>deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
      <button onClick={AddProduct}>Add</button>
    </div>
  )
}

export default App
