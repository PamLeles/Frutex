import { Grid, IconButton, Box, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCartRounded";
import fruitsIcon from "../../../assets/icons/fruits.svg";
import "./styles.css";

const Card = ({ handleClick, fruit }) => {
  return (
    <Grid item xs={12} lg={4}>
      <Box className="cards-fruit">
        <img className="fruits-icon" src={fruitsIcon} alt="fruits basket" />
        <Typography variant="h5">{fruit.name}</Typography>
        <IconButton
          onClick={() => handleClick(fruit)}
          color="primary"
          aria-label="add to shopping cart"
          className="button"
        >
          <AddShoppingCartIcon color="#fff" />
        </IconButton>
      </Box>
    </Grid>
  );
};
export default Card;
