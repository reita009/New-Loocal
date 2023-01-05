import { style } from "@mui/system";
import styled from "styled-components";

import Banner from "../../assets/banner-login.jpg";

export const Container = styled.div`
  width: 100vw;
  height: /*1024px*/ 100vh;
  background: #ffffff;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 40%;

  @media (max-width: 1300px) {
    width: 100%;
  } ;
`;
export const LeftArea = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  //margin-right: 200px;

  .leftArea-header {
    width: 100%;
    height: 100px;
    background-color: #2f67b2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    img {
      height: 100px;
      border: none;
    }
  }

  .title {
    display: flex;
    margin-top: 60px;
    margin-bottom: 10px;
    align-items: center;

    .icon-hand {
      color: #f9ca24;
      height: 35px;
      width: 35px;
    }
  }
`;
export const Logo = styled.img`
  height: 147px;
  width: 267px;
  border-radius: 30px;
  object-fit: cover;
  margin: auto;

  @media (max-width: 550px) {
    height: 100px;
    width: 167px;
    display: flex;
    top: 80px;
    left: 130px;
    margin-left: auto;
    margin-bottom: 10px;
  }
`;
export const Form = styled.form`
  width: 382px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  .input-area {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 75px;
  }
  .checkBox-container {
    display: flex;
    text-align: center;
    align-items: center;

    .remember {
      width: 92px;
      height: 24px;
      font-family: "SkolaSans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #4b4b4b;
    }
    .forgot-it {
      width: 170px;
      height: 24px;
      font-family: "SkolaSans";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #466aa9;
      text-decoration: none;
    }
  }
  .rules {
    height: 44px;
    width: 300px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #4b4b4b;

      span {
        color: #466aa9;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
  .help {
    width: 249px;
    height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 40px;

    p {
      color: #4b4b4b;
      font-family: "SkolaSans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    span {
      color: #466aa9;
      font-weight: bold;

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 550px) {
    //background-color: #466aa9;
    right: 140px;
  }
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #4b4b4b;
  margin-right: 12px;
`;
export const Paragraph = styled.p`
  width: 382px;
  height: 24px;
  left: 157px;
  top: 296px;
  font-family: "SkolaSans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #4b4b4b;
  margin-bottom: 40px;
`;
export const Label = styled.label`
  width: 360px;
  height: 24px;
  font-family: "SkolaSans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #4b4b4b;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 193px 8px 24px;
  gap: 8px;
  width: 360px;
  height: 64px;
  background: #ffffff;
  border: 2px solid #eaedf0;
  border-radius: 16px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 8px;
  margin-bottom: 40px;
  outline: none;
`;
export const CheckBox = styled.input`
  color: #466aa9;
  border-radius: 4px;
  height: 18px;
  width: 18px;
  margin-right: 11px;
`;
export const ButtonSubmit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 360px;
  height: 56px;
  background: #466aa9;
  border-radius: 50px;
  border: none;
  color: #fff;
  font-size: 16px;
  margin-top: 23px;

  &&:hover {
    background: #3a578a;
    box-shadow: 0px 0px 30px rgba(58, 87, 138, 0.5);
    cursor: pointer;
  }
`;

export const RightContainer = styled.div`
  width: 60%;
  object-fit: cover;
  background: linear-gradient(
      0deg,
      rgba(70, 106, 169, 0.2),
      rgba(70, 106, 169, 0.2)
    ),
    url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Modal = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 100vh;
  position: absolute;
  opacity: 0.5;
`;

export const CardTerms = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 780px;
  width: 776px;
  background: #ffffff;
  border-radius: 16px;

  .body-terms {
    margin-top: 24px;
    overflow: auto;
    padding: 8px;
    ::-webkit-scrollbar {
      width: 6px;
      height: 227.94px;
      right: 1px;
      top: calc(50% - 227.94px / 2 - 158.03px);
      border-radius: 60px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background: #bbbbbb;
    }
  }

  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    color: #4b4b4b;

    @media (max-width: 800px) {
      font-size: 23px;
    }
  }
  p {
    width: 673px;
    @media (max-width: 800px) {
      width: 380px;
    }
  }

  @media (max-width: 800px) {
    width: 500px;
  }
`;

export const CardTermsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonTerms = styled.button`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 25px;
  border: #466aa9 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 360px;
  height: 56px;
  font-size: 16px;
  margin-top: 40px;
  color: #466aa9;
  cursor: pointer;

  &&:hover {
    background: #466aa9;
    color: white;
  }
`;
