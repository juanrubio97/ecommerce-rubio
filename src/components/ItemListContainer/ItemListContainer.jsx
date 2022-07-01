import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams } from "react-router-dom";
import { collection,getDocs, getFirestore, query, where } from "firebase/firestore";


function ItemListContainer({saludo}) {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) // para que no se cargue hasta que se cargue el producto
  const {categoryId} = useParams()



 useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    if(categoryId){
      const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoryId))
      getDocs(queryCollectionFilter)
        .then((resp) => setProducts(resp.docs.map(item=>({id: item.id, ...item.data()}))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
   }else{
      getDocs(queryCollection)
        .then((resp) => setProducts(resp.docs.map((item) => ({ id: item.id, ...item.data()}))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
 }, [categoryId])


  return (
    <>

    
      <h1><center>{saludo}</center></h1>
      {loading ? <h1>Cargando...</h1> : <ItemList products={products}/>}
      

    </>
  )
}

export default ItemListContainer