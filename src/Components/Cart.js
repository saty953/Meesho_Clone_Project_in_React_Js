import React, { useContext, useState } from "react";
import { CartItem } from "./CartItem";
import { userContext } from "./Contex/UserContext";
import { Footer } from "./Footer";
import Navbar from "./Header";
import styled from "styled-components";
import { tab, mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import { Banner } from "./Banner";

const CartHeader = styled.div`
  color: #e8388d;
  align: center;
  font-weight: 100%;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5d5e5e;
  background: #ebebeb;
  width: 50%;
  flex-direction: column;
  ${mobile({ flexDirection: "column" ,width:"100%"})}
  ${tab({ flexDirection: "column" ,width:"100%"})}
`;
const Mybutton = styled.div`
  height: 60px;
  width: 80%;
  color: white;
  background: #ff4da6;
  border-radius: 4px;
  maragin: 10px;

  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${mobile({width:"100%",height:"25px"})}
  :hover {
    background: #ff80bf;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ alignItems:"center" ,justifyContent:"center"})}
  ${tab({ alignItems:"center" ,justifyContent:"center"})}
`;
const ListWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items:center;
  border: 1px solid #e8388d;
  background: white;
  width: 85%;
  ${mobile({ flexDirection: "column" ,width:"100%"})}
  ${tab({ flexDirection: "column" ,width:"100%"})}
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  overflow:hidden;
  background: white;
  //   justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: "column" ,width:"100%"})}
  ${tab({ flexDirection: "column" ,width:"100%"})}
`;
export const Cart = () => {
  const [currentCart, setCurrentCart] = useState(0);
  const product = useContext(userContext);
  const [productPrice, setProductPrice] = useState(0);
  const navigate = useNavigate();
  const condtion = product.cart.length;
  var a = 0;
  if (condtion > 1) {
    a = product.cart.reduce((T, C, I) => {
      return T + C.price;
    }, 0);
  }

  return (
    <>
      <Navbar />
      {condtion > 1 ? (
        <div style={{
          direction:"flex" ,justifyContent:"center"
        }
        }>
          <CartHeader style={{ justifyContent: "center", display: "flex" }}>
            <h1>Your Cart</h1>
          </CartHeader>
          <Container>
            <ListWrap>
              <Left>
                {product.cart.map((item, i) => {
                  // (a+=item.price);
                  return (
                    i > 0 && (
                      <CartItem
                        Cprice={currentCart}
                        CsetPrice={setCurrentCart}
                        price={productPrice}
                        set={setProductPrice}
                        item={item}
                        key={i}
                      />
                    )
                  );
                })}
              </Left>
              <div
                style={{ height: "80%", width: "1px", background: "black" }}
              ></div>
              <Right>
                <h3>Price Details</h3>
                <h6>
                  Total Price : <span>₹{Math.floor(a * 100)}</span>
                </h6>
                <span style={{ color: "#43f077" }}>
                  Total Discount: <small style={{ color: "black" }}>-₹33</small>
                </span>
                <div
                  style={{ width: "80%", height: "1px", background: "black" }}
                ></div>
                <h3 style={{ display: "inline" }}>Order Total </h3>{" "}
                <bold style={{ color: "black" }}>
                  ₹{Math.floor(a * 100) - 33}
                </bold>
                <p style={{ textAlign: "center" }}>
                  Clicking on ‘Continue’ will not deduct any money
                </p>
                <Mybutton
                  onClick={() => {
                    navigate("/payment");
                  }}
                >
                  Continue
                </Mybutton>
              </Right>
            </ListWrap>
          </Container>
        </div>
      ) : (
        <>
          <CartHeader
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Nothing in Your Cart </h1>
            <Mybutton
              onClick={() => {
                navigate("/");
              }}
            >
              Go on Home Page..
            </Mybutton>
          </CartHeader>
          <Banner />
        </>
      )}
      <Footer />
    </>
  );
};
