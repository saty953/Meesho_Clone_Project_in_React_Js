import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "./Header";
import { Footer } from "./Footer";
import { mobile, tab } from "../responsive";
// import { userContext } from "./Contex/UserContext";
const LoginContainer = styled.div`
  display: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: pink;
  padding: 50px 0;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 30px;
  background-color: #ffffff;
  width: 40%;
  min-height: 500px;
  padding: 50px;
  margin: auto;
  border-radius: 5px;
  ${mobile({ width: "95%" })}
  ${tab({ width: "95%" })}
`;
const Typography = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const InputBox = styled.div``;
const OtpInput = styled.div`
  border-bottom: 2px solid hotpink;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 3px;
  margin-bottom: 15px;
`;
const Mybutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  padding: 15px 32px;

  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  height: 45px;
`;
const MyInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 8px;
  border: none;
  text-align: center;
  outline: none;
`;
const Condition = styled.div`
  a {
    color: hotpink;
  }
`;

const Login = () => {
  const [mob, setMob] = useState("");
  const verify = localStorage.getItem("userNumber");
  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [sendOtp, setSendOtp] = useState("");
  const navigate = useNavigate();

  const handleCLick = () => {
    if (mob.length !== 10)
      toast.error("Please enter mobile number of 10 digits", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    else {
      let sendOtp = Math.floor(100000 + Math.random() * 900000);
      alert(" OTP for login -" + sendOtp);
      setSendOtp(sendOtp);
      setOtpStatus(true);
    }
  };

  const verifyOTP = () => {
    //here we comparing the type and value of the otp
    if (sendOtp === Number(otp)) {
      toast.success("login successfull", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      localStorage.setItem("userNumber", mob);

      navigate("/");
    } else {
      toast.error("Please enter the right OTP", {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      {verify ? (
        <>
          <>
            <Header />
            <h1 style={{ marginLeft: "20%" }}>Hi ,</h1>
            <div className="navi">
              <h2 style={{ marginLeft: "10%" }}>Your userNumber is {verify}</h2>
            </div>
            <div className="container">
              {" "}
              <button
                className="navigateHome"
                onClick={() => {
                  navigate("/");
                }}
              >
                <h5> Navigate to Home page</h5>{" "}
              </button>
              <button
                id="Logout"
                onClick={() => {
                  localStorage.removeItem("userNumber");
                  toast.success("Log out Successful", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                  //setting cart to zero after logout
                  navigate("/");

                  document.location.reload();
                }}
              >
                {" "}
                <h1> Log out</h1>
              </button>
            </div>
            <div style={{ marginBottom: "0px" }}>
              <Footer />
            </div>
          </>
        </>
      ) : (
        <>
          <Navbar />
          <LoginContainer>
            <LoginBox>
              <Typography>
                {" "}
                {otpStatus
                  ? `Enter OTP send to ${mob}`
                  : "Sign Up to view your profile"}{" "}
              </Typography>
              <InputBox>
                {otpStatus ? (
                  <OtpInput>
                    <MyInput
                      type="text"
                      name="otp"
                      placeholder="Enter OTP  here"
                      min="6"
                      max="6"
                      value={otp}
                      maxLength="6"
                      onChange={(e) => {
                        let a = e.target.value;
                        let b = a.toString();
                        setOtp(b);
                      }}
                    />
                    <Mybutton
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        backgroundColor: "hotpink",
                      }}
                      onClick={verifyOTP}
                    >
                      <h4 style={{ marginBottom: "22px" }}>verify</h4>
                    </Mybutton>{" "}
                  </OtpInput>
                ) : (
                  <>
                    <span>Country</span>
                    <div className="" style={{ display: "flex", gap: "10px" }}>
                      <div
                        className="country-code"
                        style={{ borderBottom: "1px solid grey" }}
                      >
                        <Typography variant="h6" className="login-title">
                          IN +91
                        </Typography>
                      </div>
                      <div
                        className="phone-input"
                        style={{
                          borderBottom: "1px solid grey",
                          flexGrow: "2",
                        }}
                      >
                        <MyInput
                          type="number"
                          max="10"
                          placeholder="Phone Number"
                          value={mob}
                          maxLength="10"
                          onChange={(e) => setMob(e.target.value)}
                          style={{
                            width: "90%",
                            border: "none",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                    <Mybutton
                      onClick={handleCLick}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        backgroundColor: "hotpink",
                      }}
                    >
                      Send OTP
                    </Mybutton>
                  </>
                )}
              </InputBox>
              <Condition style={{ textAlign: "center" }}>
                By continuing, you agree to Meesho’s{" "}
                <a href="https://www.meesho.com/legal/terms-conditions">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="https://www.meesho.com/legal/privacy">
                  Privacy Policy
                </a>
              </Condition>
            </LoginBox>
          </LoginContainer>
        </>
      )}
    </div>
  );
};
export default Login;
