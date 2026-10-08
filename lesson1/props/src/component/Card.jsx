import React from 'react'

const Card = (props) => {
  console.log(props.age,props.user);
  return (
       <div className="card">
        <img src={props.image} />
        <h1>{props.user}</h1>
        <p>{props.description}</p>
        <button>View Profile</button>
      </div>
   
  )
}

export default Card
