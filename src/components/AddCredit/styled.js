import styled from "styled-components";

export const Header = styled.header`
  width: 90%;
  height: 72px;
  border-radius: 24px;
  background-color: #fff;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-items: center;
  display: flex;
  padding: 0px 40px;
  justify-content: space-between;

  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #4b4b4b;
  }
`;

export const UserBalanceStage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #4b4b4b;
    margin-right: 8px;
  }
`;

export const BalanceValue = styled.div`
  display: flex;
  align-items: center;
  background: #f5f8fa;
  border-radius: 80px;

  .value {
    display: flex;

    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .icon {
    color: #466aa9;
    margin-right: 11px;
    margin-left: 14px;
  }
  span {
    margin-right: 16px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #4b4b4b;
  }
`;

export const AddCredit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 175px;
  height: 40px;
  background: #466aa9;
  border-radius: 80px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const UserName = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 40px;

  p {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
  }
`;
export const Modal = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 100vh;
  position: absolute;
  opacity: 0.5;
`;
export const CardAddCredit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  position: absolute;
  width: 922px;

  background: #ffffff;
  border-radius: 16px;

  margin-left: 250px;
  margin-top: 10px;

  .headerAddCredit {
    display: flex;

    .headerAddCredit-left {
      width: 450px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 16px;
        color: #4b4b4b;
      }
      p {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
      }
    }

    .headerAddCredit-right {
      span {
        position: absolute;
        right: 40px;
        top: 25px;
        font-size: 30px;
        cursor: pointer;
        color: #ccc;
      }
    }
  }

  .payment-mode {
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
  }

  .credit-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .credit-header {
    h1 {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
    }
  }

  .credit-body {
    width: 100%;
    display: flex;
    flex-direction: column;

    .input-whrap .span-whrap {
      display: flex;
      align-items: center;

      span {
        margin-right: 8px;
      }
      .icon {
        color: #bbbbbb;
      }
    }

    .row {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 40px;
    }

    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
    }
    select {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 193px 8px 24px;
      gap: 8px;
      isolation: isolate;
      height: 64px;
      border: 2px solid #eaedf0;
      border-radius: 16px;
      margin-top: 8px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;

      opacity: 0.5;
    }
    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 193px 8px 24px;
      gap: 8px;
      isolation: isolate;
      height: 64px;
      border: 2px solid #eaedf0;
      border-radius: 16px;
      margin-top: 8px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;

      opacity: 0.5;
    }

    .credit-footer {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      align-items: center;

      .footer-description {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: #4b4b4b;
        display: flex;
        align-items: center;
        text-align: center;
        span {
          font-weight: bold;
        }
      }
    }
  }
  .ticketBank-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
    }
    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 193px 8px 24px;
      gap: 8px;
      isolation: isolate;
      height: 64px;
      border: 2px solid #eaedf0;
      border-radius: 16px;
      margin-top: 8px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;

      opacity: 0.5;
    }
    p {
      width: 762px;
      margin-top: 40px;
      margin-bottom: 40px;
      color: #4b4b4b;
    }
  }
`;
export const OptPayment = styled.div`
  width: 180px;
  height: 100px;
  border: 2px solid ${(props) => (props.active ? "#466aa9" : "#bbbbbb")};
  display: flex;
  flex-direction: column;
  padding: 20px 4px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  .icon {
    color: ${(props) => (props.active ? "#466aa9" : "#bbbbbb")};
  }

  span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #4b4b4b;
    margin-top: 9px;
  }
`;

export const ButtonAddCredit = styled.button`
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
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 40px;
`;
