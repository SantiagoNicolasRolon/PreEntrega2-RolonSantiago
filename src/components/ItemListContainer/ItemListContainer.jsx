import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
  useEffect(()=>{    
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
          .then(data => setProducts(data))
  }, [categoryId])

return (
  <div className="todo">
    <h2>Productos</h2>
    <ItemList products={products} />
  </div>
);
}

export default ItemListContainer