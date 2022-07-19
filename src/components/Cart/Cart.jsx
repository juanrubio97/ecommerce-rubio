import { useCartContext } from "../../context/CartContext"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";


const Cart = () => {
  const { cart, removeItem, totalCart, removeCart } = useCartContext();
  const [Order, setOrder] = useState([]);
  
  async function generateOrder(e){
    e.preventDefault()
    let order = {}

    order.buyer = {
      name: e.target.elements.name.value, 
      mail: e.target.elements.email.value,
      phone: e.target.elements.phone.value
    }
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
     .catch(err=>console.log(err))
     .finally(()=>console.log('Orden generada'))
           
  }
  
  const generatedOrder = () => {
    if(Order.length > 0){
      return (
        <div>
          <h3>Orden generada</h3>
          <p>Su orden ha sido generada con el id: {Order}</p>
          <Button variant="success" onClick={removeCart} >Finalizar compra</Button>
        </div>
      )
    }
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
         <Form onSubmit={generateOrder}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control type="text" name="name" value={Order.name} placeholder="Ingresar nombre y apellido" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" name="email" value={Order.email} placeholder="Ingresar correo electrónico" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="number" name="phone" value={Order.phone} placeholder="Ingresar teléfono" required />
            </Form.Group>
            <Button variant="primary" type="submit">Generar Orden</Button>
          </Form>
          {generatedOrder()}
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