import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { userContext } from "./Contex/UserContext";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
const MyImgae = styled.img`
height:100px;
width:40%
border:4px solid black;

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
    console.log("cart product in the cart", Array.cart);
    console.log("Id of the selected product ", product.id);

    const newCart = CartProduct.cart.filter((item, i) => {
      return product.id !== item.id;
    });
    console.log("newCart is", newCart);
    Array.setCart(newCart);
    console.log("updatedCart is", CartProduct.cart);

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
            {}
          </ProductT>
          <div>₹{ProductPrice}</div>{" "}
          <Cancel onClick={itemRemoved}>Cancel this item</Cancel>
        </ProductD>{" "}
      </Container>{" "}
      <Hr />
      <Sp>
        <div>Supplier :Satyam</div>
      </Sp>{" "}
    </div>
  );
};