import React from "react";
import styled from "styled-components";
import "./App.css";
const BannerA = styled.div`
  width: 100%;
  margin: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const BannerWrap = styled.div`
  width: 60%;
  margin: 50px auto;
  display: flex;
  min-height: 350px;
  border-radius: 8px;
  box-sizing: border-box;
`;
const LeftBanner = styled.div`
  background-color: rgb(224, 221, 221);
  box-sizing: border-box;
  padding: 35px 60px;
  width: 60%;
`;
const MDiv = styled.div`
  margin-top: 50px;
  padding: 2px 10px;
  border-radius: 8px;
  background-color: white;
  letter-spacing: 0.2px;
  font-size: 1.3em;
  color: rgb(153, 141, 141);
`;
const RightBanner = styled.div`
  width: 40%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Banner = () => {
  return (
   <div className="banner">
    <BannerA>
      <BannerWrap>
        <LeftBanner>
          <h1 style={{ margin: "0", fontSize: "2.5em", fontWeight: "500" }}>
            Lowest Prices Best Quality Shopping
          </h1>
          <MDiv>
            <p>50 lakh+ Style | 650+ categories</p>
          </MDiv>
        </LeftBanner>
        <RightBanner>
          <Image
            alt="Banner"
            src="https://images.meesho.com/images/marketing/1631722939962.webp"
          />
        </RightBanner>
      </BannerWrap>
    </BannerA>
    </div>
  );
};
