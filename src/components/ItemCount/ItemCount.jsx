import './ItemCount.css'
import { useState } from 'react'

function ItemCount({initialValue=1, stock, onAdd}) {
const [cantidad, setCantidad] = useState(initialValue)

const decrement = () => {
    if(cantidad > 1){
        setCantidad(cantidad => cantidad -1) 
    }

}

const increment = () => {
    if (stock > cantidad){
        setCantidad((cantidad) => cantidad +1) 
    }
}

  return (
    <>
        <button class="btn btn-danger" onClick={decrement}>Decrementar</button>
        <h2>{cantidad}</h2>
        <button class="btn btn-success" onClick={increment}>Incrementar</button>   
        <button class="btn btn-primary" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>               
    </>

  )
}

export default ItemCount