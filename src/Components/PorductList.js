import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { mobile, tab } from "../responsive";
const CardWrapper = styled.div`
  width: 250px;
  box-sizing: border-box;
  height: auto;
  border: 0.5px solid rgb(226, 221, 221);
  border-radius: 15px;
  cursor: pointer;

  color: rgb(110, 99, 99);
  :hover {
    transform: translate(0, -5px);
    box-shadow: 2px 7px #ff80bf;
  }
  ${mobile({ width: "100px", height: "25%" })}
  ${tab({ width: "100px", height: "35vh" })}
`;
const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 280px;
  position: relative;
  ${mobile({ height: "120px" })}
  ${tab({ height: "120px" })}
`;
const ProductInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
const ProductName = styled.p`
  font-size: 1.2em;
  margin: 0;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  ${mobile({ fontSize: "12px" })}
  ${tab({ fontSize: "12px" })}
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  ${mobile({ fontSize: "10px" })}
  ${tab({ fontSize: "10px" })}
`;
const CurrentP = styled.div`
  font-size: 1.5em;
  color: black;
  font-weight: 500;
`;

const Delivery = styled.span`
  font-size: 0.8em;
  background-color: rgb(247, 241, 241);
  padding: 3px 8px;
  border-radius: 10px;
  color: grey;
  font-weight: 500;
  ${mobile({ fontSize: "10px", color: "green" })}
  ${tab({ fontSize: "10px", color: "green" })}
`;
const FeedBack = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8em;
  ${mobile({ display: "none" })}
  ${tab({ display: "none" })}
`;
const Ratting = styled.span`
  background-color: green;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const Myimg = styled.img`
  width: 70%;
  height: 80%;
`;

export const ProductCard = (product) => {
  return (
    <Link to={`products/${product.product.id}`} style={{textDecoration: 'none'}}>
      <CardWrapper>
        <ProductImage>
          <Myimg src={product.product.image} alt="product image"></Myimg>
        </ProductImage>
        <ProductInfo>
          <ProductName>{product.product.title}</ProductName>
          <Price>
            <CurrentP>₹{product.product.price * 100}</CurrentP>
          </Price>
          <div>
            <Delivery>Free Delivery</Delivery>
          </div>
          <FeedBack>
            <Ratting>
              <AiFillStar></AiFillStar> {product.product.rating.rate}
            </Ratting>{" "}
            <span>{product.product.rating.count} Reviews</span>
          </FeedBack>
        </ProductInfo>
      </CardWrapper>
    </Link>
  );
};
