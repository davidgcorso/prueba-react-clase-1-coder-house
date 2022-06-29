import 'animate.css';


const ItemListContainer = (props) => {


    return ( 
<div className="card animate__animated animate__fadeInLeft"  style={{ width: "18rem" }}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">
     {props.content}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

     );
}
 
export default ItemListContainer;