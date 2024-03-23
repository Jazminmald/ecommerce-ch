import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import './CheckOut.css'

export const CheckOut = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      totalPrice,
      date: serverTimestamp(), 
    };

    const order = await addDoc(collection(db, "orders"), newOrder);

   
    setFormCheckout({
      name: "",
      phone: 0,
      email: "",
    });

   
    clearCart();

    setOrderId(order.id);
  };

  if (orderId) {
    return (
      <>
        <div className="order-summary-container">
          <h3>
            Su orden de compra es <strong>{orderId}</strong>
          </h3>
        </div>
        <h4 className="thank-you-message">Gracias por elegir Peach!</h4>
      </>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          className="form-input"
          value={formCheckout.name}
          onChange={handleName}
        />
        <label htmlFor="">Telefono</label>
        <input
          type="number"
          className="form-input"
          value={formCheckout.phone}
          onChange={handlePhone}
        />
        <label htmlFor="">Email </label>
        <input
          type="email"
          className="form-input"
          value={formCheckout.email}
          onChange={handleEmail}
        />
        <input
          type="submit"
          className="submit-button"
          value="Finalizar compra"
        />
      </form>
    </div>
  );
};