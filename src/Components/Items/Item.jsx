const Item = (img, title, content, price) => {
    return ( 
        <div className="card animate__animated animate__fadeInLeft"  style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {content}
          </p>
          <p className="card-text">
           {price}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
     );
}
 
export default Item;