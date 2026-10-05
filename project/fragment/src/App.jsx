
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
let foodItems = ["Dal","Red Vegetable","Roti","Salad","Milk"];
  return (
<>
<h1>Healthy Food</h1>
<ul className="list-group">
  {foodItems.map((item)=>{
  return <li key={item} className="list-group-item">{item}</li>
  })}
</ul>
</>
  );
}

export default App;
