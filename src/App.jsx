import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';



function App() {

  return (
    <CartContextProvider>
       <>
         <BrowserRouter>
           <NavBar/>
           <Routes> 
             <Route index path="/" element={<ItemListContainer saludo='¡Bienvenidos!'/>} />
             <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
             <Route path="/cart" element={<Cart/>} />
             <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
             <Route path='*' element={<Navigate to='/' />}/>
           </Routes>
         </BrowserRouter>
       </>
    </CartContextProvider>
  );

}

export default App;
 