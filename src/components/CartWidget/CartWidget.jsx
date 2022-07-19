import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartWidget } = useCartContext()

  return (
    <>
      <BsFillCartFill style={{marginRight:"10px", width:"30px", height:"30px" }}/>
      <span>{cartWidget()}</span>
    </>

  )
}

export default CartWidget