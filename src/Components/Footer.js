import React from "react";
import styled from "styled-components";
import {mobile,tab} from "../responsive";
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 20px;
  background-color: rgb(248, 247, 247);
  min-height: 300px;
`;
const FooterWrap = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  letter-spacing: 0.2px;
`;
const Aboutmesso = styled.div`
  font-size: 1.1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const DownloadApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px auto;
  ${mobile({display:"none"})}
  ${tab({display:"none"})}
`;
const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
`;
const P = styled.p`
  cursor: pointer;
  margin: 0 auto 10px;
  ${mobile({ fontSize: "10px" })}
`;
const Topic = styled.div`
  margin-left: 25px;
  margin-right: 19px;
`;
const H2=styled.h2`
${mobile({ fontSize: "20px" })}
`;
export const Footer = () => {
  return (
    <>
      <Container>
        <FooterWrap>
          <Info>
            {" "}
            <H2 style={{ margin: "0 auto 30px" }}>Shop Non-stop on Meesho</H2>
            <Aboutmesso>
              <P>
                Trusted by more than 1 crore Indians <br /> Cash on Delivery |
                Free Delivery
              </P>
              <Topic>
                <P>Careers</P>
                <P>Become a supplier</P>
                <P>Our Influencer Program</P>
              </Topic>
              <Topic>
                <P>Legal and Policies</P>
                <P>Meesho Tech blog</P>
              </Topic>
              <Topic>
                <H2 style={{ magin: "0" }}>Contact Satyam:</H2>
                <P>saty953@gmail.com</P>
              </Topic>

              <Topic>
                <H2 style={{ magin: "0" }}>Reach out to us</H2>

                <SocialMedia>
                  <a href="https://www.facebook.com/meeshosupply">
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/facebook.png"
                      alt="facebook"
                    />
                  </a>
                  <a href="https://www.instagram.com/meeshoapp/">
                    {" "}
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/instagram.png"
                      alt="instagram"
                    />
                  </a>
                  <a href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw">
                    {" "}
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/youtube.png"
                      alt="youtube"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/meesho/">
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                  <a href="https://twitter.com/Meesho_Official/">
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/twitter.png"
                      alt="twitter"
                    />
                  </a>
                </SocialMedia>
              </Topic>
            </Aboutmesso>
          </Info>
          <DownloadApp>
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=186544584cd1371-00911ae55e2d9e-26021051-e1000-186544584ceb74&pli=1">
              <img
                style={{
                  maxWidth: "180px",
                  cursor: "pointer",
                  maxHeight: "50px",
                }} alt="img"
                src="https://images.meesho.com/images/pow/playstore-icon-big.png"
              />
            </a>
            <a href="https://apps.apple.com/us/app/meesho/id1457958492">
              {" "}
              <img
                style={{
                  maxWidth: "180px",
                  maxHeight: "50px",
                  cursor: "pointer",
                }}  alt="img"
                src="https://images.meesho.com/images/pow/appstore-icon-big.png"
              />
            </a>
          </DownloadApp>
        </FooterWrap>
      </Container>
    </>
  );
};
