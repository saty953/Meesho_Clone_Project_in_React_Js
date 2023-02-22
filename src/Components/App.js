import React, { useState } from "react";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import { ProductDetails } from "./ProductDetails";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { userContext } from "./Contex/UserContext";
import { Payment } from "./Payment";
const App = () => {
  const [cart, setCart] = useState([{ price: 0 }]);
  return (
    <>
      <userContext.Provider
        value={{
          cart:cart,
          setCart: setCart
          
        }}
      >
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/b" element={<Login />} />
            <Route path="/products" element={<Product />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/b/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>{" "}
      </userContext.Provider>
    </>
  );
};

export default App;
