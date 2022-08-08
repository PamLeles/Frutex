import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./components/shared/Modal";

const App = () => {
  const [fruits, setFruits] = useState([]);
  const [isOpenFruitModal, setIsOpenFruitModal] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState();
  const fetchFruits = async () => {
    try {
      const { data } = await axios.get("http://localhost:3003/fruits");
      setFruits(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <header>
        <div> Frutex </div>
        <input />
        <button> Cart</button>
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
          handleClose={() => {
            setIsOpenFruitModal(false);
          }}
          isOpen={isOpenFruitModal}
        />
      </main>
      <footer> Frutex </footer>
    </>
  );
};
export default App;
