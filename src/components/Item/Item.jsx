import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { NavLink } from 'react-router-dom';


const Item = ({product}) => {

  return (
    <>  
    <CardGroup className='col-md-6 text-center container ' style={{ width: '30rem', padding: '20px'}}>
        <Card>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>
              <h2>${product.precio}</h2>
              <h5>{product.descripcion}</h5>
              <p>Categoria: <strong>{product.categoria}</strong></p>
            </Card.Text>
            <NavLink to={`/detail/${product.id}`}>
                <Button variant="success">Descripcion del producto</Button>{' '}
            </NavLink>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Stock: {product.stock}</small>
          </Card.Footer>
        </Card>
    </CardGroup>
    </> 
  )
}

export default Item