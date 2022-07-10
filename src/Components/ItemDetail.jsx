import ViewItem from "./ViewItem";


const ItemDetail = (props) => {

/* console.log(props.productos) */
return(
props.productos.find((description)=>{
  return (

    <ViewItem img={description.img} title={description.title} content={description.content} price={description.price}/>
 
  )}))
  
  
}
export default ItemDetail;