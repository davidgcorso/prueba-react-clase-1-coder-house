import 'animate.css';
import Item from './Item';


const ItemList = (props) => {

/* console.log(props.productos) */
return(
props.productos.map((description)=>{
  return (
   
  <Item img={description.img} title={description.title} content={description.content} price={description.price}/>
 
  )}))
  
  
}
export default ItemList;