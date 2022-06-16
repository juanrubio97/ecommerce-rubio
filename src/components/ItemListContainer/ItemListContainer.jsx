import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import { BrowserRouter, useParams } from "react-router-dom";


function ItemListContainer({saludo}) {

  const onAdd = (cantidad) => {
    console.log(cantidad);
  }

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true) // para que no se cargue hasta que se cargue el producto
  const {categoriaId} = useParams()

  console.log(categoriaId)
  
  useEffect(()=>{
    if (categoriaId) {
      getFetch()
       .then((resp) => {
         setProductos(resp.filter(productos => productos.categoria === categoriaId));
         setLoading(false);
       })
       .catch(err =>console.log(err)) 
       .finally(()=> console.log("final"))
    } else {     
      getFetch()
       .then((resp) => {
         setProductos(resp);
         setLoading(false);
       })
       .catch(err =>console.log(err)) 
       .finally(()=> console.log("final"))
     }
    },[categoriaId]);



  return (
    <>

    
      <h1><center>{saludo}</center></h1>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>   
      {loading ? <h1>Cargando...</h1> : <ItemList productos={productos}/>}
      

    </>
  )
}

export default ItemListContainer