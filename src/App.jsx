import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./components/shared/Modal";
import CartContext from "./contexts/CartContext/context";

const App = () => {
  const [fruits, setFruits] = useState([]);
  const [isOpenFruitModal, setIsOpenFruitModal] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState();

  const { addFruitToCart } = useContext(CartContext);

  const fetchFruits = async () => {
    try {
      const { data } = await axios.get("http://localhost:3003/fruits");
      setFruits(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  function handleConfirm(fruit, quantity) {
    addFruitToCart(fruit, quantity);
    setIsOpenFruitModal(false);
  }

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <header>
        <div> Frutex </div>
        <input />
        <Link to="/cart"> Cart </Link>
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
                    setSelectedFruit(fruit);
                  }}
                >
                  add to cart
                </button>
              </div>
            );
          })}
        </ul>
        <Modal
          fruit={selectedFruit}
          isOpen={isOpenFruitModal}
          handleConfirm={handleConfirm}
          handleClose={() => setIsOpenFruitModal(false)}
        />
      </main>
      <footer> Frutex </footer>
    </>
  );
};
export default App;
