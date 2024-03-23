import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'

export const Cart = () => {
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext);

  const handleDeleteItem = (item) => {
    const confirmDelete = window.confirm(`Seguro que desea eliminar ${item.name} del carrito?`);
    if (confirmDelete) {
      removeItem(item.id);
      alert("Producto eliminado.");
    }
  };

  return (
    <>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt="" className="cart-item-image" />
            <p key={item.id}>Nombre: {item.name} </p>
            <p>Cantidad: {item.quantity} </p>
            <p>Precio Unitario: ${item.price} </p>
            <p>Subtotal: ${item.subTotal}</p>
            <div>
              <button
                className="delete-button"
                onClick={() => handleDeleteItem(item)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        {totalPrice > 0 ? (
          <div>
            <h4>Total de la compra: ${totalPrice}</h4>
            <button className="clear-cart-button" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="checkout-button">Finalizar compra</button>
            </Link>
          </div>
        ) : (
          <h4>El Carrito está vacío</h4>
        )}
      </div>
    </>
  );
};

export default Cart;