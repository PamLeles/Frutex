import { Modal as MuiModal, Paper } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const Modal = ({
  isOpen,
  handleConfirm,
  handleClose,
  fruit,
  initialQuantity = 1,
}) => {
  const [quantity, setQuantity] = useState(1);

  function handleDecreaseQuantity() {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  return (
    <MuiModal open={isOpen} onClose={handleClose}>
      <Paper>
        <div>{fruit?.name}</div>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <p>{quantity}</p>
        <button onClick={handleDecreaseQuantity}>-</button>
        <button
          onClick={() => {
            handleConfirm(fruit, quantity);
            setQuantity(1);
          }}
        >
          {quantity === 0 ? "Remove" : "Confirm"}
        </button>
      </Paper>
    </MuiModal>
  );
};
export default Modal;
