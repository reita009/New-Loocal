import styled from "styled-components";
import Banner from "../../assets/banner-help.jpg";

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
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: #2f67b2;
  display: flex;

  img {
    height: 147px;
    width: 267px;
    border-radius: 30px;
    object-fit: cover;
    margin: auto;
  }
`;

export const Form = styled.form`
  width: 382px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  padding-bottom: 13px;

  .login {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .icon {
      color: #466aa9;
      margin-right: 11px;
    }
    h1 {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #4b4b4b;
    }
  }

  .help {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    h1 {
      margin-bottom: 16px;
    }

    .icon {
      color: #466aa9;
      margin-right: 11px;
    }
    p {
      width: 356px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
    }
    .mail {
      display: flex;
      margin-top: 16px;

      p {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
      }
    }
  }

  .input {
    display: flex;
    flex-direction: column;

    label {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #4b4b4b;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 193px 8px 24px;
  gap: 8px;
  width: 360px;
  height: ${(props) => (props.large ? "128px" : "64px")};
  background: #ffffff;
  border: 2px solid #eaedf0;
  border-radius: 16px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 8px;
  margin-bottom: 30px;
  outline: none;
`;

export const ButtonSubmit = styled.div`
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

  &&:hover {
    background: #3a578a;
    box-shadow: 0px 0px 30px rgba(58, 87, 138, 0.5);
    cursor: pointer;
  }
`;

export const RightArea = styled.div`
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

export const CardMsn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: absolute;
  width: 776px;
  height: 340px;
  background: #fff;
  border-radius: 16px;

  .checkIcon {
    color: #3cc26a;
    width: 58px;
    height: 44px;
    margin-bottom: 20px;
  }
  h1 {
    margin-bottom: 16px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    color: #4b4b4b;
  }
  p {
    font-family: "SkolaSans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #4b4b4b;
  }

  @media (max-width: 780px) {
    width: 350px;
  }
`;

export const CardButton = styled.button`
  display: flex;
  font-family: sans-serif;
  font-weight: bold;
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
  color: ${(props) => (props.danger ? "red" : "#466aa9")};
  cursor: pointer;

  &&:hover {
    background: #466aa9;
    color: ${(props) => (props.danger ? "red" : "white")};
  }

  @media (max-width: 780px) {
    width: 290px;
  }
`;

export const CardOff = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: absolute;
  width: 776px;
  height: 240px;
  background: #ffffff;
  border-radius: 16px;

  .button-wharp {
    display: flex;

    button {
      margin-right: 15px;
    }

    @media (max-width: 780px) {
      flex-direction: column;
    }
  }

  @media (max-width: 780px) {
    height: 340px;
    width: 350px;
  }
`;
