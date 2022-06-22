import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";
import { BrowserRouter, useParams } from "react-router-dom";


function ItemListContainer({saludo}) {


  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true) // para que no se cargue hasta que se cargue el producto
  const {categoriaId} = useParams()

  console.log(categoriaId)
  
  useEffect(()=>{
    if (categoriaId) {
      getFetch()
       .then((resp) => {
         setProductos(resp.filter(productos => productos.categoria === categoriaId));
   
       })
       .catch(err =>console.log(err)) 
       .finally(()=> setLoading(false))
    } else {     
      getFetch()
       .then((resp) => {
         setProductos(resp);
         setLoading(false);
       })
       .catch(err =>console.log(err)) 
       .finally(()=> setLoading(false))
     }
    },[categoriaId]);



  return (
    <>

    
      <h1><center>{saludo}</center></h1>
      {loading ? <h1>Cargando...</h1> : <ItemList productos={productos}/>}
      

    </>
  )
}

export default ItemListContainer