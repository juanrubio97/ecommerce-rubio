import { useContext, useState, createContext } from "react";

const CartContext = createContext([]); //creamos el contexto

export const useCartContext = () => useContext(CartContext) //exportamos el useCartContex par no usar en todos lados el useContext

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]) //creamos el provider
      
    const isInCart = (item) =>{
          return cart.find(product => product.id === item.id)
    }
     
    const addToCart = (item) =>{

        if(isInCart(item)){
            (cart.find(product => product.id === item.id)).cant +=item.cant
        }else{
            setCart([
                ...cart, 
                item
            ])
        }
         
    }

    const removeItem = (item) =>{
        return setCart(cart.filter(product => product.id !== item.id))
    }


    const removeCart = () =>{
        setCart([])
    }

    const totalCart = () =>{
        return cart.reduce((total, item) => total + item.precio * item.cant, 0)
    }

    const cartWidget = () =>{
        return cart.reduce((quantity, item) => quantity + item.cant, 0)
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
