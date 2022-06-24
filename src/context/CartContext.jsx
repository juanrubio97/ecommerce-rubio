import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const CartContext = createContext([]); //creamos el contexto

export const useCartContext = () => useContext(CartContext) //exportamos el useCartContex par no usar en todos lados el useContext

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]) //creamos el provider
    
   const isInCart = (item) =>{
    return cart.find(producto => producto.id === item.id)
   }
   
  
    
    const addToCart = (item) =>{

        if(isInCart(item)){
            (cart.find(element => element.id === item.id)).cant +=item.cant
        }else{
            setCart([
                ...cart, 
                item
            ])
        }
        
    }


    const removeCart = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider 
        value={{
            cart,
            addToCart,
            removeCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
