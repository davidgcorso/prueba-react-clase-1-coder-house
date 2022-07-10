import 'animate.css';
import catalogo from "../catalogo.json"
import { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail.jsx"

const ItemListContainer = () => {
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
    const getItems =() => new Promise ((res, rej)=> {
        setTimeout (() => res(catalogo), 2000 )
    })
    getItems().then ((productos)=>{setItems (productos)}).catch((error)=>{}).finally(()=>{setLoading(false)})
    
}, [])

    return ( 
        loading ? <p>cargando....</p> : <ItemDetail productos={items}/>
     );
}
 
export default ItemListContainer;