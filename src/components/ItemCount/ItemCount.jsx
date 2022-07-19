import { useState } from "react"
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function ItemCount({stock, initial, onAdd}) {

   
  const [quantity, setQuantity] = useState(initial) 
  function addQuantity(){
    quantity === (stock) ? alert('No hay mas stock') : setQuantity(quantity + 1)
  }


 function deductQuantity(){
   quantity === 1 ? alert('Tienes que agregar al menos un producto') : setQuantity(quantity - 1)
 }

  function addToCart(){
     onAdd(quantity)
  }
  

  return (
    <>
    <ButtonToolbar className="mb-3" >
      <ButtonGroup className="me-2" >
        <Button variant="success" onClick={addQuantity}>+</Button>
      </ButtonGroup>  
        <InputGroup.Text id="btnGroupAddon">{quantity}</InputGroup.Text>
      <ButtonGroup className="me-2" >
        <Button variant="danger" onClick={deductQuantity}>-</Button>
      </ButtonGroup>
    </ButtonToolbar>
    <Button variant="success" onClick={addToCart}>Agregar al carro</Button>
  </>
  )
}

export default ItemCount