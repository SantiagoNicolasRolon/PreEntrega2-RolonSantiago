import { Link } from "react-router-dom"
import './ItemDetail.css'

function ItemDetail({name, img, description, category, price, stock}) {
  return (
    <div className="caja-contenedor">
      <h2>{name}</h2>
        <div>
            <img src={img} style={{width: 300}} alt={name}/>
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Pecio: $ {price}</p>
                <p>Disponible: {stock}</p>
            <Link to="/cart" className="btn btn-primary">Finalizar compra</Link>
        </div>
    </div>
  )
}

export default ItemDetail