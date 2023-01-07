import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  width: 90%;
  height: calc(100vh - 130px);
  padding: 80px 140px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 24px;
  margin-top: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: scroll;
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

  button {
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
    color: #fff;
    border: none;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    margin-bottom: 80px;
  }

  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #4b4b4b;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container-input {
    width: 100%;
    display: flex;
    margin-top: 20px;
    padding: 20px 100px 20px 100px;
    justify-content: space-between;

    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
    }
    .box {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      margin-left: 5px;
    }
    .input-active {
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
      margin-top: 8px;
    }
  }
  .button-whrap {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
