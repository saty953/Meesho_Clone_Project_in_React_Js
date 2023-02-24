import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { userContext } from "./Contex/UserContext";
import {tab,mobile} from "../responsive";
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
const MyImgae = styled.img`
height:100px;
width:40%
border:4px solid black;
${mobile({
height:"75px",width:"55px"})}
${tab({
  height:"75px",width:"55px"})}
`;

const ProductD = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;
const ProductT = styled.div`
  align-text: center;
  width: 170px;
  font-weight: bold;
  ${mobile({fontSize:"12px"})}
  ${tab({fontSize:"12px"})}
`;
const Hr = styled.div`
  width: 85%;
  height: 1px;
  background: black;
`;

const Sp = styled.div`
  display: flex;
  flex-direction: row;
`;
const Cancel = styled.div`
  textalign: center;
  borderradius: 4px;
  color: white;
  cursor: pointer;
  background: #ff4da6;
  border-radius: 4px;
  text-align: center;
  ${mobile({width:"45%"})}
  ${tab({width:"45%"})}
  :hover {
    background: #ff80bf;
  }
`;
export const CartItem = (props) => {
  const Array = useContext(userContext);
  const CartProduct = { ...Array };
  const product = props.item;
  const cart = props.Cprice;
  const ProductPrice = product.price * 100;

  function itemRemoved() {
    const newCart = CartProduct.cart.filter((item, i) => {
      return product.key !== item.key;
    });

    Array.setCart(newCart);
    toast.success("Item Removed", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  useEffect(() => {
    props.set(cart + ProductPrice);
    props.CsetPrice(cart + ProductPrice);
  }, []);
  return (
    <div style={{ align: "left" }}>
      <Container>
        <div>
          <MyImgae src={product.image} />
        </div>
        <ProductD>
          <ProductT>
            {product.title}
          </ProductT>
          <div>₹{ProductPrice}</div>{" "}
          <Cancel onClick={itemRemoved}>Remove</Cancel>
        </ProductD>{" "}
      </Container>{" "}
      <Hr />
      <Sp>
        <div>Supplier :Satyam</div>
      </Sp>{" "}
    </div>
  );
};
