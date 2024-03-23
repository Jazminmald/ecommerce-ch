import { createContext, useEffect, useState } from "react";


export const CartContext = createContext(null);


export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item, quantity) => {

    const cartCopy = [...cart];

    const index = cartCopy.findIndex((product) => product.id === item.id);

    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
  
      const newItem = {
        ...item,
        quantity,
        subTotal: item.price * quantity,
      };

      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
  

    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);
  };

  const clearCart = () => {

    setCart([]);
  };

  const handleTotalPrice = () => {
    const newTotalPrice = cart.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalPrice(newTotalPrice);
  };

  const handleTotalItems = () => {
    const newTotalItems = cart.reduce((acum, item) => acum + item.quantity, 0);
    setTotalItems(newTotalItems);
  };

  useEffect(() => {
    handleTotalItems();
    handleTotalPrice();
  }, [cart]);

  const objectValues = {
    cart,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={objectValues}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};