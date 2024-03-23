import { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css'

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
  const { addItem } = useContext(CartContext);
  const [message, setMessage] = useState(""); 

  const onAdd = (quantity) => {
    const item = {
      id,
      name,
      price,
      img,
    };

    addItem(item, quantity);


    if (quantity > 1) {
      setMessage(`${quantity} Productos han sido agregados al carrito!`);
    } else {
      setMessage("Producto agregado al carrito!");
    }
  };

  return (
    <div className="item-detail-container">
      <div className="card-detail"> 
        <div className="card-body">
          <h1 className="card-title text-center">
            <strong>{name}</strong>
          </h1>
          <img src={img} alt="" />
          <p className="card-text ms-4"> {description} </p>
          <p className="ms-4">Precio: ${price} </p>
          <p className="ms-4">Stock: {stock}</p>
          <ItemCount stock={stock} onAdd={onAdd} />
          {message && (
            <div className="message" style={{ padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
              <p className="ms-4">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};