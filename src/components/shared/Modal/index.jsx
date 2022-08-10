import { Modal as MuiModal, Paper } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

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
    <MuiModal open={isOpen} onClose={handleClose} className="modal">
      <Paper className="div-modal">
        <div>{fruit?.name}</div>

        <button
          className="modal-button"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        <p>{quantity}</p>
        <button className="modal-button" onClick={handleDecreaseQuantity}>
          -
        </button>
        <button
          className="modal-confirm"
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
