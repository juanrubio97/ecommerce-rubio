import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children})=>{
    //vamos a tener todos los estados y funciones aca
    const [cart, setCart] = useState([]);

    const addToCart = (item)=>{
        setCart([
            ...cart,
            item
        ])
    }
    
    return(
        <CartContext.Provider 
            value={(       
                cart,
                addToCart
            )}
        >
            {children}
        </CartContext.Provider>
    )
}