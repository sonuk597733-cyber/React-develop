import React from "react"
import {Bookmark} from "lucide-react"
const Card = (props) => {
  return (
       <div className='parent'>
      <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt="" />
        <button>Save <Bookmark size={14} strokeWidth={1.75} /></button>
      </div>
      <div className="center">
      <h3>{props.name}<span>{props.datePosted}</span></h3>
      <h2>{props.post}</h2>
       <div className='partTime'>
        <h4>{props.tag}</h4>
        <h4>{props.tag2}</h4>
       </div>
      </div>
      <div className="bottom">
      
        <div>
          <h3>{props.pay}</h3>
          <p> {props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
      </div>
      </div>
  )
}

export default Card
