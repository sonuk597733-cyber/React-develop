// import React from 'react'

// const App = () => {

//     const marks = 90
//     if(marks>=90){
//       return <h1>Grade A</h1>
//     }
//     else if(marks<90&& marks>=75){
//       return <h1>Grade B</h1>
//     }
//    else if(marks<75 && marks>=33){
//       return <h1>Pass</h1>
//     }
//    else{
//       return <h1>Fail</h1>
//     }
// }

// export default App



// import React from 'react'

// function App() {
//   const isLoading = false;

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return <h1>Data Loaded!</h1>;
// }

// export default App;



// function App() {
//   const hasError = false;

//   if (hasError) {
//     return <h1>Something went wrong!</h1>;
//   }

//   return <h1>Everything is working!</h1>;
// }

// export default App;


// { id: 1, name: "Sonu" }ddaray me aad
function App() {
  const users = [];

  if (users.length === 0) {
    return <h1>No users found!</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
