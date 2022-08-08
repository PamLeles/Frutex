import { useContext, useState } from "react";
import CartContext from "../../../contexts/CartContext/context";
import Modal from "../../shared/Modal";

const Cart = () => {
  const [isOpenFruitModal, setIsOpenFruitModal] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState();
  const [quantity, setQuantity] = useState();
  const { removeFruit, cart, actualizeFruitQuantityOnCart } =
    useContext(CartContext);

  function handleConfirm(id, quantity) {
    actualizeFruitQuantityOnCart(id, quantity);
    setIsOpenFruitModal(false);
  }

  return (
    <>
      <ul>
        {cart.map((fruit) => (
          <>
            <li>
              {fruit.name} - {fruit.quantity}
            </li>
            <button
              onClick={() => {
                setIsOpenFruitModal(true);
                setSelectedFruit(fruit);
                setQuantity(fruit.quantity);
              }}
            >
              Editar
            </button>
            <button
              onClick={() => {
                removeFruit(fruit.id);
              }}
            >
              Remover
            </button>
          </>
        ))}
      </ul>
      <Modal
        fruit={selectedFruit}
        initialQuantity={quantity}
        handleClose={() => setIsOpenFruitModal(false)}
        handleConfirm={handleConfirm}
        isOpen={isOpenFruitModal}
      />
    </>
  );
};
export default Cart;
