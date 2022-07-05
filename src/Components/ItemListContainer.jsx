import 'animate.css';
import catalogo from "../catalogo.json"
import { useState, useEffect } from 'react';
import ItemList from "./ItemList"

const ItemListContainer = () => {
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
    const getItems =() => new Promise ((res, rej)=> {
        setTimeout (() => res(catalogo), 3000 )
    })
    getItems().then ((productos)=>{setItems (productos)}).catch((error)=>{}).finally(()=>{setLoading(false)})
    
}, [])

    return ( 
        loading ? <p>cargando....</p> : <ItemList productos={items}/>
     );
}
 
export default ItemListContainer;