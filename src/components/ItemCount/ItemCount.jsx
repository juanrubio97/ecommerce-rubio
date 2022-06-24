import { useState } from "react"
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function ItemCount({stock, initial, onAdd}) {

   
  const [cantidad, setCantidad] = useState(initial) 
  function sumarCantidad(){
   cantidad === (stock) ? alert('no hay mas stock') : setCantidad(cantidad + 1)
  }

  function restarCantidad(){
    cantidad === 0 ? alert('no tiene productos') : setCantidad(cantidad - 1)
  }

  function agregarAlCarro(){
     onAdd(cantidad)
  }
  

  return (
    <>
    <ButtonToolbar className="mb-3" >
      <ButtonGroup className="me-2" >
        <Button variant="success" onClick={sumarCantidad}>+</Button>
      </ButtonGroup>  
        <InputGroup.Text id="btnGroupAddon">{cantidad}</InputGroup.Text>
      <ButtonGroup className="me-2" >
        <Button variant="danger" onClick={restarCantidad}>-</Button>
      </ButtonGroup>
    </ButtonToolbar>
    <Button variant="success" onClick={agregarAlCarro}>Agregar al carro</Button>
  </>
  )
}

export default ItemCount