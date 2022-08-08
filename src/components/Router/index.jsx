import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../../App";
import Cart from "../pages/Cart";

const Router = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);
export default Router;
