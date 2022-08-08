import { Modal as MuiModal, Paper } from "@mui/material";
import { useContext, useState } from "react";
import CartContext from "../../../contexts/CartContext/context";

const Modal = ({ isOpen, handleClose, fruit }) => {
  const [quantity, setQuantity] = useState(1);

  const { addFruitToCart } = useContext(CartContext); // Carrinho

  function handleConfirm(fruit, quantity) {
    addFruitToCart(fruit, quantity);
    setQuantity(1);
    handleClose();
  }

  return (
    <MuiModal open={isOpen} onClose={handleClose}>
      <Paper>
        <div>{fruit?.name}</div>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <p>{quantity}</p>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button onClick={() => handleConfirm(fruit, quantity)}>Confirm</button>
      </Paper>
    </MuiModal>
  );
};
export default Modal;
