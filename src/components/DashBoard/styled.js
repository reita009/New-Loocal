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
  justify-content: space-between;

  .cardLeft {
    margin-right: 40px;
  }

  .header-request {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;

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
