import { useCartContext } from "../../context/CartContext"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useState } from "react";


const Cart = () => {
  const { cart, removeItem, totalCart, removeCart } = useCartContext();
  const [order, setOrder] = useState([]);
  
  async function generateOrder(e){
    e.preventDefault()
    let order = {}

    order.buyer = {name: 'Juan', mail:'j.cruzrubio.jcr@gmail.com', phone:'+569-9-9-9-9-9'}
    order.total = totalCart()

    order.products = cart.map(product => {
      const id = product.id
      const name = product.nombre
      const price = product.precio
      const quantity = product.cant

      return {id, name, price, quantity}
    })
    
    const db = getFirestore()
    //Agregamos una orden
    const orderCollection = collection(db, 'orders')
    await addDoc(orderCollection, order)
     .then(resp=>setOrder(resp.id))
     .finally(()=>removeCart())
     console.log(order)
    //Actualizamos stock
    //const updateCollection = doc(db, 'productos', '3Nbrlva2V7vMvB9ihvjm')
    //updateDoc(updateCollection, {stock: 10})
    //.then(()=>console.log('actualizado'))
  }
   

  const message = () =>{
    if(cart.length === 0){
         return <Col>
                   <center>"No hay productos en el carrito"</center> 
                   <center><NavLink to='/'><Button variant="outline-success" style={{margin: '10px'}}>Ir a inicio</Button></NavLink></center>
               </Col>

    }else{
         return <Col md={{ span: 3, offset: 3 }} >
         <h3><strong>Total: </strong> ${totalCart()}</h3>
         <Button variant="danger" onClick={removeCart}>Vaciar carro</Button>{' '}
         <Button variant="success" onClick={generateOrder}>Finalizar compra</Button>{' '}
       </Col>

      
         
    }
  }

  return (
    <>
      
      <ul>
        {
          cart.map(product => 
                            <div style={{width: '50%'}} key={product.id}>
                                <Row>
                                    <Col sm={5}>
                                        <Card.Img className="img-fluid rounded-start" src={product.img} />
                                    </Col>
                                    <Col sm={7}>
                                        <Card.Body >
                                          <h3>{product.nombre}</h3>
                                          <Card.Text>
                                            <h5><strong>Precio: </strong> ${product.precio} </h5>
                                            <h5><strong>Descripción: </strong> {product.descripcion}</h5>
                                            <h5><strong>Cantidad:</strong> {product.cant}</h5>
                                            <Button variant="danger" onClick={() => removeItem(product)}>Eliminar producto</Button>
                                          </Card.Text> 
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </div>
                            
          )} 
      </ul>

      <h3>{message()}</h3>
      
      
    </>
  )
}

export default Cart