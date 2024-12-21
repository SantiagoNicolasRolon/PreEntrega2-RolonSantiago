import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../hooks/useCart"
import { useNotification } from "../../context/Notification";
import './ItemDetail.css'

function ItemDetail({id, name, img, description, category, price, stock}) {
  const {addItem, isInCart} = useCart ();
  const {setNotification} = useNotification();

  const handleAdd = (count) => {
    const productToAdd = {
      id, img, name, price, quantity : count
    }
    addItem(productToAdd)
    setNotification("success", `Se agregaron ${count} de ${name}`);
  }

  return (
    <div className="caja-contenedor">
      <h2>{name}</h2>
        <div>
            <img src={img} alt={name}/>
              <p>{description}</p>
              <p>Category: {category}</p>
              <p>Pecio: $ {price}</p>
              <p>Disponible: {stock}</p>
            {
            isInCart(id) ? (
              <Link to='/cart'>
                <button class="btn btn-primary">Comprar</button>
                </Link>
            ) : (
              <ItemCount stock={stock} onAdd={handleAdd} />
            )
          }
        </div>
    </div>
  )
}

export default ItemDetail