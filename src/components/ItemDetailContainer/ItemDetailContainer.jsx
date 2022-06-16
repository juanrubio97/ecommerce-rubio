import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  getFetch } from "../../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true) // para que no se cargue hasta que se cargue el producto 

  const { id } = useParams();
  
  useEffect(()=>{
       getFetch()
           .then((resp) => {
               setProducto(resp.find(producto => producto.id === id));
               setLoading(false);
           })
           .catch(err =>console.log(err))
   },[])
  

  
  return (
    <>
    {loading ? <h1>Cargando...</h1> : <ItemDetail producto={producto}/>}

    </>
  )

}

export default ItemDetailContainer


