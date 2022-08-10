import { Grid } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../../contexts/CartContext/context";
import Card from "../../shared/Card";
import Header from "../../shared/Header";
import Modal from "../../shared/Modal";
import "./styles.css";

const Home = () => {
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

  function handleClickFruitButton(fruit) {
    setIsOpenFruitModal(true);
    setSelectedFruit(fruit);
  }

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Grid container spacing={3} className="grid-container">
          {fruits.map((fruit) => {
            return <Card handleClick={handleClickFruitButton} fruit={fruit} />;
          })}
        </Grid>
        <Modal
          fruit={selectedFruit}
          isOpen={isOpenFruitModal}
          handleConfirm={handleConfirm}
          handleClose={() => setIsOpenFruitModal(false)}
        />
      </main>
      <footer className="footer"> Frutex - Delivery </footer>
    </>
  );
};
export default Home;
