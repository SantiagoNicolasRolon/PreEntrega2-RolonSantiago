import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from "./context/Notification";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/Checkout" element={<Checkout/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*"element={<h1>Error 404 elemnto no encontrado</h1>}/>
              </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
