

const Item = (props) => {
    return ( 

      <div className="d-inline-block col-2 m-4">
        <div className="card animate__animated animate__fadeInLeft"  style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.content}
          </p>
          <p className="card-text">
           {props.price}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
     );
}
 
export default Item;