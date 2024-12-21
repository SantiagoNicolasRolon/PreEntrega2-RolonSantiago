import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNotification } from "../../context/Notification";
import './ItemDetailContainer.css'

function ItemDetailContainer() {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const {setNotification} = useNotification()

  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        const product = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product);
      })
      .catch(()=>{
        setNotification("danger", `No es posible cargar el producto`)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <h3 className="ItemDetailContainerh3">
          Cargando...
        </h3>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
}

export default ItemDetailContainer