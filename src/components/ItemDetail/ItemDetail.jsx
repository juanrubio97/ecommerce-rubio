import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const ItemDetail = ({producto}) => {

  const [estado, setEstado] = useState()

  const onAdd = (cantidad) => {
    console.log(cantidad);
    setEstado(cantidad)
    //funcion para agregar 
  }

  return (
     <>
        <div style={{width: '80%'}}>
            <Alert variant="success">
                <Row>
                    <Col sm={5}>
                        <Card.Img className="img-fluid rounded-start" src={producto.img} />
                    </Col>
                    <Col sm={7}>
                        <Card.Body >
                          <h1>{producto.nombre}</h1>
                          <Card.Text>
                            <h3><strong>Precio: </strong> ${producto.precio} </h3>
                            <h5><strong>Descripción: </strong> {producto.descripcion}</h5>
                            <h5><strong>Stock:</strong> {producto.stock}</h5>
                            {
                              estado ? 
                                <NavLink to='/cart'>
                                  <button className='btn btn-outline-primary'>Ir al carro</button>  
                                </NavLink>
                              :
                                  <ItemCount stock={10} initial={1} onAdd={onAdd}/>
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