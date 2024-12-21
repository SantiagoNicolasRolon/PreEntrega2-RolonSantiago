import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNotification } from "../../context/Notification";
import './ItemListContainer.css'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
  const {setNotification} = useNotification()
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  setLoading(true)
  const collectionRef = categoryId
  ? query (collection(db, "products"), where("category", "==", categoryId))
  : collection(db, "products")

  getDocs(collectionRef)
  .then((querySnapshot)=>{
    const productos = querySnapshot.docs.map((doc)=>{
      return {id: doc.id, ...doc.data()}
    })
    setProducts(productos)
  })
  .catch(()=>{
    setNotification("danger", `No es posible cargar los productos`)
  })
  .finally(()=>{
    setLoading(false);
  })
},[categoryId])

if(loading) {
  return (
    <div>
      <h3 className="ItemListContainerh3">
        Cargando productos...
      </h3> 
    </div>
  );
}

return (
  <div className="todo">
    <h2>Productos</h2>
    <ItemList products={products} />
  </div>
);
};

export default ItemListContainer