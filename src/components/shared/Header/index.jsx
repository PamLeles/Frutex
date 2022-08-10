import { Link } from "react-router-dom";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import kiwi from "../../../assets/icons/kiwi.png";
import "./styles.css";
const Header = () => {
  return (
    <header className="header">
      <img className="logo-icon" src={kiwi} alt="fruits basket" />
      <p className="header-logo">Frutex</p>
      <Link to="/cart" className="cart">
        <button className="button-header">
          <ShoppingBasketRoundedIcon />
        </button>
      </Link>
    </header>
  );
};

export default Header;
