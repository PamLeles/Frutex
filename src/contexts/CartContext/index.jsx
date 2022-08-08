import { useEffect, useState } from "react";
import CartContext from "./context";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  function addFruitToCart(fruit, quantity) {
    const copyFruitsCart = [...cart];

    const item = copyFruitsCart.find((item) => item.id === fruit.id);

    if (!item) {
      copyFruitsCart.push({ ...fruit, quantity: quantity });
    } else {
      item.quantity = item.quantity + quantity;
    }
    setCart(copyFruitsCart);
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <CartContext.Provider value={{ addFruitToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
