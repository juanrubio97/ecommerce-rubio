import { useCartContext } from "../../context/CartContext"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Cart = () => {
  const { cart, removeCart } = useCartContext()

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
                                          <h1>{item.nombre}</h1>
                                          <Card.Text>
                                            <h3><strong>Precio: </strong> ${item.precio} </h3>
                                            <h5><strong>Descripción: </strong> {item.descripcion}</h5>
                                            <h5><strong>Cantidad:</strong> {item.cant}</h5>
                                          </Card.Text> 
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </div>
          )}  
      </ul>
      <Col  md={{ span: 3, offset: 3 }}>
        <Button variant="danger" onClick={removeCart}>Vaciar carro</Button>
      </Col>
    </>
  )
}

export default Cart