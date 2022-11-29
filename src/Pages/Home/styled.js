import styled from "styled-components";

import Banner from "../../assets/banner.jpg";

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
  padding: 50px 156px;
  display: flex;
  max-width: 386px;
  width: 100%;
  flex-direction: column;
  margin-right: 200px;

  .title {
    display: flex;
    margin-top: 155px;
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
  height: 50px;
  width: 167px;

  @media (max-width: 550px) {
    position: absolute;
    display: flex;
    top: 80px;
    left: 130px;
  }
`;
export const Form = styled.form`
  position: relative;
  width: 382px;
  display: flex;
  flex-direction: column;

  .input-area {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 75px;

    .icon-eye {
      color: #466aa9;
      position: absolute;
      right: 145px;
    }
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
    }
  }
  .rules {
    height: 44px;
    width: 300px;
    margin-top: 40px;
    display: flex;
    align-items: center;
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
