import React from 'react'
import Card from './component/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card
       user="Aman Kumar"
       image = "https://media.istockphoto.com/id/2190080676/photo/portrait-of-happy-attractive-handsome-boy-wearing-casual-clothes-isolated-on-pink-background.jpg?s=612x612&w=0&k=20&c=TNi12eaixqWVwiy4xveSr5Xi1NPX1ra6PTDMP8RvaFA="
       description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, sint?"
         />
      <Card
       user="Satyam kumar"
       image ="https://media.istockphoto.com/id/1048191022/photo/portrait-of-a-teenage-boy.jpg?s=612x612&w=0&k=20&c=3kcWNyUnaxPqxv-zCrK6KYRsWBKFbYwf1jlkajwLn9E="
       description ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, repellat?"
        />
      <Card
       user="Suraj kumar"
       image ="https://img.magnific.com/free-photo/portrait-good-looking-man-smiling_23-2148780106.jpg"
       description ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, sint?"
       />
      <Card 
      user="Kundan kumar"
       image = "https://img.magnific.com/free-photo/young-man-posing-outdoor_23-2148883571.jpg?semt=ais_hybrid&w=740&q=80"
       description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, repellat?"
       />
    </div>
  )
}

export default App
