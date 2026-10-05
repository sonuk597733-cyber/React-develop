import "bootstrap/dist/css/bootstrap.min.css";
function MainCard({user}){
return(
    <div className="card" style={{width:"18rem"}}>
  <img src={user.image} className="card-img-top" alt={user.title} />
  <div className="card-body">
    <h5 className="card-text">{user.title}</h5>
    <p className="card-text">{user.description}</p>
  </div>
</div>

)
}
export default MainCard;