import { style } from "@mui/system";
import styled from "styled-components";
import Banner from "../../assets/banner-senha.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .card-container {
    width: 100%;
    height: 100vh;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  }
`;

export const leftArea = styled.div`
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;

  img {
    height: 100px;
  }

  .header-leftArea {
    background-color: #2f67b2;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  @media (max-width: 550px) {
    width: 100%;
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
  margin-top: 150px;

  .back-login {
    display: flex;

    .icon {
      color: #466aa9;
      margin-right: 11px;
    }

    p {
      width: 45px;
      height: 24px;
      color: #4b4b4b;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .rescue-password {
    display: flex;
    flex-direction: column;
    margin-top: 48px;

    h1 {
      margin-bottom: 16px;
      width: 238px;
      height: 36px;
      font-family: "SkolaSans";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      color: #4b4b4b;
    }
    p {
      width: 343px;
      height: 24px;
      font-family: "SkolaSans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #4b4b4b;
    }
  }
  .input-area {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    label {
      width: 360px;
      height: 24px;
      font-family: "SkolaSans";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
      margin-bottom: 8px;
    }
    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 193px 8px 24px;
      gap: 8px;
      width: 360px;
      height: 64px;
      border: 2px solid #eaedf0;
      border-radius: 16px;
      margin-bottom: 40px;
    }
  }
  .form-footer {
    margin-top: 40px;
    width: 249px;
    height: 24px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    p {
      color: #4b4b4b;
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
    margin-top: 60px;
  }
`;

export const ButtonRescue = styled.div`
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
  cursor: pointer;
  &&:hover {
    background: #3a578a;
    box-shadow: 0px 0px 30px rgba(58, 87, 138, 0.5);
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

export const CardRescueEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: absolute;
  width: 776px;
  height: 324px;
  background: #ffffff;
  border-radius: 16px;

  .mailIcon {
    height: 45px;
    width: 45px;
    color: #466aa9;
  }
  h1 {
    width: 696px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    color: #4b4b4b;
    @media (max-width: 780px) {
      font-size: 15px;
    }
  }
  p {
    width: 696px;
    height: 24px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #4b4b4b;
    margin-top: 16px;
    @media (max-width: 780px) {
      font-size: 11px;
    }
  }

  @media (max-width: 780px) {
    width: 350px;
  }
`;

export const RescueEmailButton = styled.button`
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

  @media (max-width: 780px) {
    width: 290px;
  }
`;
