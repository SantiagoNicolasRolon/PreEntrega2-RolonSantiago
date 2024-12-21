import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {
  const { cart, getTotal, totalQuantity, clearCart } = useCart();
  const total = getTotal()

  if(totalQuantity === 0){
      return  <div>
                <h2>No hay items en el carrito</h2>
              </div>
  }
return (
  <div className="Cart">
    {cart.map((item) => (
      <CartItem key={item.id} {...item} />
    ))}
    <article className="CartArticle">
      <h3 style={{ textAlign: "center" }}>Total: $ {total}</h3>
      <div className="CartButtons">
        <button className="btn btn-danger" onClick={clearCart}>Limpiar Carrito</button>
        <Link to="/checkout" className="btn btn-primary">
          Checkout
        </Link>
      </div>
    </article>
  </div>
);
}

export default Cart