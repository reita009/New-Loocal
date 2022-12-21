import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

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

export const ContainerBody = styled.div`
  height: 80%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  display: flex;
  padding-bottom: 20px;

  .container-body-whrap {
    display: flex;
    flex-direction: column;
  }

  .cardLeft {
    margin-right: 40px;
  }

  .header-request {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .header-request-left {
      display: flex;
      align-items: center;
      width: 100vh;

      .icon {
        color: #466aa9;
        cursor: pointer;
      }
      span {
        margin-left: 11px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
      }
    }

    .button-whrap {
      height: 100%;
      display: flex;
      align-items: center;

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
        cursor: pointer;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`;

export const CardDashboard = styled.div`
  width: 532px;
  height: 230px;
  background: #ffffff;
  margin-bottom: 40px;
  border-radius: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  padding: 30px;

  .card-body {
    display: flex;
    flex-direction: column;

    .card-header {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 13px;

      .icon {
        color: #466aa9;
        margin-left: 30px;
        cursor: pointer;
      }
    }

    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      width: 315px;
      height: 24px;
      color: #4b4b4b;
      margin-bottom: 16px;
    }
    P {
      width: 449px;
      height: 24px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
      margin-bottom: 69px;
    }
    h1 {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      color: #466aa9;
    }
  }

  .card-body-left {
    display: flex;
    flex-direction: column;

    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      width: 315px;
      height: 24px;
      color: #4b4b4b;
      margin-bottom: 16px;
    }
    P {
      width: 315px;
      height: 24px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
      margin-bottom: 36px;
    }
    .input-whrap {
      input {
        margin-right: 8px;
      }
      span {
        width: 151px;
        height: 24px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
      }
    }

    select {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 193px 8px 24px;
      gap: 8px;
      width: 360px;
      height: 64px;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      border: 2px solid #eaedf0;
      border-radius: 16px;
    }
    .select-whrap {
      margin-bottom: 20px;
    }
    h1 {
      height: 36px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      color: #466aa9;
      cursor: ${(props) => (props.delivery ? "pointer" : "")};
    }
  }
  .card-body-right {
    width: 100%;
    display: flex;
    img {
      width: 58px;
      height: 30px;
      margin-left: auto;
      margin-right: auto;
    }
    .icon {
      color: #466aa9;
      margin-left: auto;
      cursor: pointer;
    }
  }
`;

export const ButtonRequests = styled.h1`
  height: 36px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #466aa9;
  cursor: ${(props) => (props.delivery ? "pointer" : "")};
`;

export const RequestContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  .tr-body-whrap {
    display: flex;
    flex-direction: column;
    height: 560px;
    overflow: auto;
    width: 100%;
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

  .tr-header {
    height: 40px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 53px 21px rgba(70, 106, 169, 0.01),
      0px 30px 18px rgba(70, 106, 169, 0.04),
      0px 13px 13px rgba(70, 106, 169, 0.07),
      0px 3px 7px rgba(70, 106, 169, 0.08), 0px 0px 0px rgba(70, 106, 169, 0.08);
    display: flex;
    justify-content: space-around;
    align-items: center;

    td {
      width: 100px;
    }
  }

  .tr-body {
    height: 108px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid #f5f8fa;
    padding: 20px;

    td {
      display: flex;
      width: 100px;

      span {
        font-family: sanse;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #4b4b4b;
      }

      .span-id {
        margin-left: 19px;
      }

      img {
        width: 58px;
        height: 30px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  footer {
    display: flex;
    height: 80px;
    justify-content: space-between;
    box-shadow: 0px 53px 21px rgba(70, 106, 169, 0.01),
      0px 30px 18px rgba(70, 106, 169, 0.04),
      0px 13px 13px rgba(70, 106, 169, 0.07),
      0px 3px 7px rgba(70, 106, 169, 0.08), 0px 0px 0px rgba(70, 106, 169, 0.08);

    .footer-left {
      display: flex;
      align-items: center;
      margin-left: 24px;
      height: 100%;

      span {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
      }
    }

    .footer-right {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 26px;
      .icon {
        color: #466aa9;
      }
    }
  }
`;

export const DispatchStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  width: 200px;
  height: 40px;
  border-radius: 80px;
  font-family: "SkolaSans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #466aa9;
  background-color: #ffffff;
  border: #466aa9 1px solid;
`;

export const inputCountPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: auto;
  gap: 8px;
  width: 102px;
  height: 64px;
  background: #ffffff;
  border: 2px solid #eaedf0;
  border-radius: 16px;
  margin-left: 8px;

  .whrap {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;

    span {
      margin-right: 16px;
    }
    .icon {
      color: #466aa9;
      cursor: pointer;
    }
  }
`;

export const SpanPage = styled.span`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.active ? "#466aa9" : " #bbbbbb")};
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#f5f8fa" : "")};
  width: 20px;
  display: flex;
  justify-content: center;
  border-radius: 30px;
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
