import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import MyProfile from "./routes/MyProfile";
import ProductDetails from "./routes/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/my-profile" element={<MyProfile />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
