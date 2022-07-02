import 'animate.css';

const ItemList = () => {

const products = [{
id: 1,
img: "https://armonicos.cl/3180-large_default/harley-benton-dc-ltd-gotoh-daphne-blue.jpg",
title: "Guitarra Harley Benton Daphne Blue",
content: "The familiar curves of HB's SC and DC models come in a wide variety of specs but, on paper at least, the latest Deluxe series versions of its new Gotoh models might be the brand's strongest statement to date for value. ",
price: 460000},
{   id:2,
    img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/503287/15669095_800.jpg",
    title: "Guitarra Harley Benton Fusion-III EMG HT Roasted SBK",
    content: "If you want an instrument that handles high-gain tones, performs like a modern guitar, and also gets you noticed on stage, you want the Fusion-III EMG HT Roasted SBK. ",
    price: 700000}
];
let productsList = products.map((product) => {
    return (
        <div className="card animate__animated animate__fadeInLeft"  style={{ width: "18rem" }} key={product.id}>
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
           {product.content}
          </p>
          <p className="card-text">
           {product.price}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    )
} )

    return ( 
        <>
        <h1 className="title text-center">Productos</h1>
	  <div className="animate__animated animate__fadeInRightBig">
		  {productsList}
	  </div>
        </>
     );

    }
export default ItemList;