import { useParams } from "react-router-dom";
import { getProductByID } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  useEffect(()=>{
    getProductByID(productId)
      .then((resp) => {
        setProduct(resp)
      })
  }, [productId])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer