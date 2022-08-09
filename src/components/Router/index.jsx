import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Router = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);
export default Router;
