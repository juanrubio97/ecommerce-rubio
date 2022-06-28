import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";


const CartContext = createContext([]); //creamos el contexto

export const useCartContext = () => useContext(CartContext) //exportamos el useCartContex par no usar en todos lados el useContext

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]) //creamos el provider
    
   const isInCart = (item) =>{
        return cart.find(producto => producto.id === item.id)
   }
   
   const addToCart = (item) =>{

        if(isInCart(item)){
            (cart.find(producto => producto.id === item.id)).cant +=item.cant
        }else{
            setCart([
                ...cart, 
                item
            ])
        }
       
   }

   const removeItem = (item) =>{
        return setCart(cart.filter(producto => producto.id !== item.id))
   }


    const removeCart = () =>{
        setCart([])
    }

    const totalCart = () =>{
        return cart.reduce((total, item) => total + item.precio * item.cant, 0)
   }


    const cartWidget = () =>{
        return cart.reduce((cantidad, item) => cantidad + item.cant, 0)
    }

    return(
        <CartContext.Provider 
        value={{
            cart,
            addToCart,
            removeCart,
            totalCart,
            removeItem,
            cartWidget
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
