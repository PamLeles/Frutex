import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import "./styles.css";
const Header = () => {
  return (
    <header className="header">
      <Typography variant="h3"> Frutex </Typography>
      <Link to="/cart" className="cart">
        <button className="button-header">
          <ShoppingBasketRoundedIcon />
        </button>
      </Link>
    </header>
  );
};

export default Header;
