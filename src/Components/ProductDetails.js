import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { userContext } from "./Contex/UserContext";
import { Footer } from "./Footer";
import Header from "./Header";
import { mobile, tab } from "../responsive";

const ProductDetailConatainer = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin: 15px auto;
`;
const DetailWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const Left = styled.div`
  flex: 1;
  width: 50%;
`;
const ShowImage = styled.div`
  width: 100%;
`;
const ImageConatainer = styled.div`
  border: 1px solid rgb(207, 203, 203);
  height: 400px;
  border-radius: 5px;
  ${mobile({ width: "95%",height:"50px" })}
  ${tab({ width: "95%",height:"200px" })}
`;
const MyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ProductHeadline = styled.div``;
const ProductTitle = styled.div`
  color: rgb(153, 153, 153);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  // font-family: "Mier demi";
  margin: 0px;
  padding: 0px;
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CurrentPrice = styled.div`
  color: rgb(51, 51, 51);
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  flex-direction: row;
`;
const Rating = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const ProductSpanDelivery = styled.span`
  background-color: rgb(243, 237, 237);
  color: grey;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
`;
const MyButton = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  background: #ff4da6;
  color: white;
  cursor: pointer;
  height: 60px;
  width: 220px;
  border: 1px solid black;
  border-radius: 7px;
  :hover {
    background: #00e600;
  }
  ${mobile({ height: "35px" })}
`;
const Description = styled.span`
  ${mobile({ fontSize: "8px" })}
`;

export const ProductDetails = () => {
  const navigate = useNavigate();
  const verify = localStorage.getItem("userNumber");
  const params = useParams();
  const [productd, setPRoductD] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(userContext);
  const uniqueId = new Date().getTime().toString();
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPRoductD(data);
        setLoading(false);
      });
  }, [params.id]);

  function clickHandler() {
    <>
      {verify ? (
        <>
          {toast.success(" item added to cart", {
            position: "top-left",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })}
          
          {/* {console.log("Item added to the cart of use context  ", uniqueId)} */}

          {context.cart.push({
            ...productd,
            key: uniqueId,
          })}
          {navigate("/")}
        </>
      ) : (
        <>
          {toast.error("Please Login first to order", {
            position: "top-center",
            autoClose: "6000",
          })}
          {navigate("/b")}
        </>
      )}
    </>;
  }

  return (
    <>
      <Header />
      {loading ? (
        <h1
          style={{ color: "#ff0080", marginLeft: "100px", marginTop: "50px" }}
        >
          loading....
        </h1>
      ) : (
        <>
          <ProductDetailConatainer>
            <DetailWraper>
              <Left>
                <ShowImage>
                  <ImageConatainer>
                    {productd.image && (
                      <MyImage
                        src={productd.image}
                        alt="product image"
                      ></MyImage>
                    )}
                  </ImageConatainer>
                </ShowImage>
                <ButtonContainer>
                  {" "}
                  <MyButton onClick={clickHandler}>
                    <h4 style={{ color: "black" }}>Add to cart</h4>
                  </MyButton>
                </ButtonContainer>
              </Left>
              <Right>
                <ProductHeadline>
                  <ProductTitle>{productd.title}</ProductTitle>
                  <ProductPrice>
                    <CurrentPrice>₹{productd.price * 100}</CurrentPrice>
                  </ProductPrice>

                  <Rating>{213}</Rating>

                  <Description>{productd.description}</Description>
                  <div>
                    <ProductSpanDelivery>Free Delivery</ProductSpanDelivery>
                  </div>
                </ProductHeadline>
              </Right>
            </DetailWraper>
          </ProductDetailConatainer>
        </>
      )}
      <ToastContainer />
      <Footer />
    </>
  );
};
