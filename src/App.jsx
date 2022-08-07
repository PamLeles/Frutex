import { Modal, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState([]);
  /*const [cart, setCart] = useState([]);*/
  const [isOpenFruitModal, setIsOpenFruitModal] = useState(false);

  const fetchFruits = async () => {
    try {
      const { data } = await axios.get("http://localhost:3003/fruits");
      setFruits(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  /*const handleAddFruit = (fruit) => {};*/

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <header>
        <div> Frutex </div>
        <input />
        <button> cesta</button>
        <div>login</div>
        <div>sing-up</div>
      </header>
      <main>
        <ul>
          {fruits.map((fruit) => {
            return (
              <div>
                <li>{fruit.name}</li>
                <button
                  onClick={() => {
                    setIsOpenFruitModal(true);
                  }}
                >
                  Adicionar
                </button>
                <Modal
                  open={isOpenFruitModal}
                  onClose={() => {
                    setIsOpenFruitModal(false);
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Paper></Paper>
                </Modal>
              </div>
            );
          })}
        </ul>
      </main>
      <footer> Frutex </footer>
    </>
  );
};
export default App;
