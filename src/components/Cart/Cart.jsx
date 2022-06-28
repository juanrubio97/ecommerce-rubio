import { useCartContext } from "../../context/CartContext"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


const Cart = () => {
  const { cart, removeItem, totalCart, removeCart } = useCartContext();


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
         <Button variant="success">Finalizar compra</Button>{' '}
       </Col>
         
    }
  }

  return (
    <>
      
      <ul>
        {
          cart.map(item => 
                            <div style={{width: '50%'}} key={item.id}>
                                <Row>
                                    <Col sm={5}>
                                        <Card.Img className="img-fluid rounded-start" src={item.img} />
                                    </Col>
                                    <Col sm={7}>
                                        <Card.Body >
                                          <h3>{item.nombre}</h3>
                                          <Card.Text>
                                            <h5><strong>Precio: </strong> ${item.precio} </h5>
                                            <h5><strong>Descripción: </strong> {item.descripcion}</h5>
                                            <h5><strong>Cantidad:</strong> {item.cant}</h5>
                                            <Button variant="danger" onClick={() => removeItem(item)}>Eliminar producto</Button>
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