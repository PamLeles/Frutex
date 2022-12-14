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

  function removeFruit(id) {
    const copyFruitsCart = [...cart];

    const actualizedArray = copyFruitsCart.filter((fruit) => fruit.id !== id);
    setCart(actualizedArray);
  }

  function actualizeFruitQuantityOnCart(fruit, quantity) {
    if (quantity === 0) {
      removeFruit(fruit.id);
      return;
    }

    const copyFruitsCart = [...cart];

    const foundFruit = copyFruitsCart.find((item) => item.id === fruit.id);

    foundFruit.quantity = quantity;
    setCart(copyFruitsCart);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addFruitToCart,
        cart,
        removeFruit,
        actualizeFruitQuantityOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
