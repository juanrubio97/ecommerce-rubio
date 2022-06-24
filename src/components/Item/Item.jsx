import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { NavLink } from 'react-router-dom';


  
const Item = ({producto}) => {

  return (
    <>  
    <CardGroup className='col-md-6 text-center container ' style={{ width: '30rem', padding: '20px'}}>
        <Card>
          <Card.Img variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              <h2>${producto.precio}</h2>
              <h5>{producto.descripcion}</h5>
              <p>Categoria: <strong>{producto.categoria}</strong></p>
            </Card.Text>
            <NavLink to={`/detalle/${producto.id}`}>
                <Button variant="success">Descripcion del producto</Button>{' '}
            </NavLink>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Stock: {producto.stock}</small>
          </Card.Footer>
        </Card>
    </CardGroup>
    </> 
  )
}

export default Item