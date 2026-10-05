import MainCard from "./MainCard";
import Iphone from "../assets/Iphone.png"
function Product(){
  return (
    <div className="products">
      <MainCard  
      user ={
        {
       image :"https://images.pexels.com/photos/10825665/pexels-photo-10825665.jpeg",
      title:"CINNABARI SERUM",
      description:"this the very useful your helth and very powerfull hai"
        }
      }
      />

      <MainCard
      
      user={
        {
          image:"https://cdn.pixabay.com/photo/2023/02/26/03/55/man-7814726_640.jpg",
           title:"Sonu",
           description:"Developer"
        }
      }
       />

      <MainCard
      
      user={
        {
          image:Iphone,
           title:"Mobile phone",
           description:"Iphone me photo store hain."
        }
      }
       />

<MainCard
user={
  {
    image:"https://i.pinimg.com/736x/cd/35/1c/cd351c4f0eab76df223e90aae5ca0612.jpg",
     title:"Rahul",
      description:"Designer"

  }
}
 />

<MainCard 
user={
  {
    image:"https://thumbs.dreamstime.com/b/happy-black-teen-boy-outside-african-american-smiles-sitting-bench-192130399.jpg", 
    title:"Aman",
     description:"Backend Developer" 
  }
}
/>
</div>
  )
}
export default Product;