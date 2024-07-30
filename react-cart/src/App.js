import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Product from './components/Product'

import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

const api_address="http://localhost:4000/"
export {api_address}
export default App;
