import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { userContext } from "./Contex/UserContext";
const CartHeader = styled.div`
  color: #e8388d;
  align: center;
  font-weight: 100%;
`;
export const Payment = () => {
  const object = useContext(userContext);
  const navigate = useNavigate();

  const [card, setCard] = useState();
  const [cvv, setCvv] = useState();
  const [exDate, setExDate] = useState();
  const paymentHandler = (e) => {
    //   e.preventDefault();
    if (!card || !cvv || !exDate) {
      toast.error("Please fill all the payment details!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate("/");
      toast.success("Congratulations! your order get placed.", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }); 
        document.location.reload();
      
    }
  };
  const OrdertoPay = object.cart.reduce((T, C, I) => {
    return T + C.price;
  }, 0);
  return (
    <div>
      {" "}
      <Navbar />
      <CartHeader style={{ justifyContent: "center", display: "flex" }}>
        <h1 className="Proceed">Proceed Your Payment</h1>
      </CartHeader>
      <div id="container">
        <div class="wraper">
          {" "}
          <h2 className="phead" style={{ top: "0px" }}>
            Payment of :<span style={{ color: "rgb(134, 255, 100)" }}> ₹</span>
            {Math.floor(OrdertoPay * 100 - 33)}/-
          </h2>
          <from>
            <br></br>
            <label htmlFor="cnum">Enter the card number :</label>
            <input
              id="cnum"
              type="tel"
              onChange={(e) => setCard(e.target.value)}
              value={card}
              required
              minLength="16"
              placeholder={"Enter Your Card Number"}
            />
            <br></br>
            <br></br>
            <label htmlFor="expiry">Enter the expiry date :</label>
            <input
              id="expiry"
              value={exDate}
              required
              placeholder="MM/YY"
              onChange={(e) => setExDate(e.target.value)}
              type="tel"
              minLength="5"
            />
            <br></br>
            <br></br>
            <label htmlFor="cvv">Enter your CVV :</label>
            <input
              id="cvv"
              type="tel"
              required
              placeholder="    CVV"
              minLength="3"
              value={cvv}
              maxLength="3"
              onChange={(e) => setCvv(e.target.value)}
            />
            <br></br> <br></br> <br></br>
            <button id="btn" onClick={paymentHandler} type="submit">
              Proceed to payment
            </button>
          </from>
        </div>
      </div>
      <Footer />{" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
