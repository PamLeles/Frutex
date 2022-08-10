import { useContext, useState } from "react";
import CartContext from "../../../contexts/CartContext/context";
import Modal from "../../shared/Modal";
import "./styles.css";

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
      <ul className="div-list-cart">
        {cart.map((fruit) => (
          <>
            <li className="cart-list">
              {fruit.name} - {fruit.quantity}
              <div classname="div-button">
                <button
                  className="button-edit"
                  onClick={() => {
                    setIsOpenFruitModal(true);
                    setSelectedFruit(fruit);
                    setQuantity(fruit.quantity);
                  }}
                >
                  Editar
                </button>
                <button
                  className="button-remove"
                  onClick={() => {
                    removeFruit(fruit.id);
                  }}
                >
                  Remover
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
      <Modal
        className="modal"
        sx={{ height: 400 }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
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
