import { useContext, useState, createContext } from "react";

const CartContext = createContext([]); //creamos el contexto

export const useCartContext = () => useContext(CartContext) //exportamos el useCartContex par no usar en todos lados el useContext

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]) //creamos el provider
      

     
    const addToCart = (item) =>{
        const itemDuplicated = cart.find(product => product.id === item.id)
        const isInCart = cart.includes(itemDuplicated)

            if(isInCart){
                setCart(cart.map(product => product.id === item.id ? {...product, cant: product.cant + 1} : product))
            }else{
                setCart([...cart, item])//agregamos el producto al carrito
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
