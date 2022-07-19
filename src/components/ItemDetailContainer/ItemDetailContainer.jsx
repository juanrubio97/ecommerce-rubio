import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true) // para que no se cargue hasta que se cargue el producto 

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();//cremos la conexion con firestore
    const queryItem = doc (db, 'productos', id);//creamos la query
    getDoc(queryItem) //traeme el doc que este en firesotre, en la coleccion producto y que tenga esos id
      .then(resp => {setProduct({id:resp.id, ...resp.data()})})
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  
  return (
    <>
    {loading ? <h1>Cargando...</h1> : <ItemDetail product={product}/>}

    </>
  )

}

export default ItemDetailContainer


