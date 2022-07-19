import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ItemCount from '../ItemCount/ItemCount';
import {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


const ItemDetail = ({product}) => {


  const { cart, addToCart }  = useCartContext()
  const [state, setState] = useState()

  const onAdd = (quantity) => {
    console.log(quantity);
    setState(quantity)
    addToCart({...product, cant:quantity})
  }


  return (
     <>
        <div style={{width: '80%'}}>
            <Alert variant="success">
                <Row>
                    <Col sm={5}>
                        <Card.Img className="img-fluid rounded-start" src={product.img} />
                    </Col>
                    <Col sm={7}>
                        <Card.Body >
                          <h1>{product.nombre}</h1>
                          <Card.Text>
                            <h3><strong>Precio: </strong> ${product.precio} </h3>
                            <h5><strong>Descripción: </strong> {product.descripcion}</h5>
                            <h5><strong>Stock:</strong> {product.stock}</h5>
                            {
                              state ?
                              <>
                                <NavLink to='/cart'>
                                  <button className='btn btn-outline-primary'>Ir al carro</button> {' '}
                                </NavLink>
                                <NavLink to='/'>
                                  <button className='btn btn-outline-success'>Seguir comprando</button> 
                                </NavLink>
                              </>
                              :
                                  <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                            }
                          </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Alert>
        </div>
     </>  
  )
}

export default ItemDetail