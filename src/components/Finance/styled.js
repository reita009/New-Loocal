import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .footer {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    height: 90px;
    background-color: white;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    justify-content: space-between;
    padding: 0px 24px;

    .left-footer {
      display: flex;
      align-items: center;

      span {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
        margin-right: 8px;
      }
      select {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 8px;
        gap: 8px;
        width: 102px;
        height: 64px;
        background: #ffffff;
        border: 2px solid #eaedf0;
        border-radius: 16px;
      }
    }
    .right-footer {
      display: flex;
      align-items: center;

      .pages {
        width: 80px;
        display: flex;
        justify-content: space-around;
      }

      .icon {
        color: #bbbbbb;
        cursor: pointer;
      }
      span {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #bbbbbb;
        cursor: pointer;
      }
    }
  }
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

export const Search = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
  align-items: center;
  justify-content: space-between;

  .search-left {
    display: flex;
    align-items: center;
  }
  .search-right {
    display: flex;
    align-items: center;
  }

  span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #466aa9;
    margin-left: 8px;

    cursor: pointer;
  }

  select {
    margin-left: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    gap: 8px;
    width: 225px;
    height: 64px;
    border: 2px solid #eaedf0;
    border-radius: 16px;
    flex: none;
    order: 1;
    align-self: stretch;
  }
`;

export const InputSearch = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 50px;
  width: ${(props) => (props.large ? "360px" : "225px")};
  height: 64px;
  background: #ffffff;
  border: 2px solid #eaedf0;
  border-radius: 16px;
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

export const ListContainer = styled.div`
  width: 90%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  padding-bottom: 20px;

  .header-list {
    width: 100%;
    background-color: #fafbfd;
    display: flex;
    height: 40px;
    border-radius: 16px;
    justify-content: space-between;

    box-shadow: 0px 53px 21px rgba(70, 106, 169, 0.01),
      0px 30px 18px rgba(70, 106, 169, 0.04),
      0px 13px 13px rgba(70, 106, 169, 0.07),
      0px 3px 7px rgba(70, 106, 169, 0.08), 0px 0px 0px rgba(70, 106, 169, 0.08);

    .td {
      width: 200px;
      display: flex;
      align-items: center;
      padding-left: 24px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #4b4b4b;
    }
  }
  .list-whrap-body {
    overflow: auto;
    height: 600px;

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

  .body-list {
    width: 100%;
    display: flex;
    height: 100px;
    justify-content: space-between;
    border-bottom: 2px solid #f5f8fa;
  }

  .td {
    width: 200px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    color: #4b4b4b;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
  }
  .status {
    width: 172px;
    height: 32px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    border-radius: 16px;
    text-align: center;
    padding: 4px;
    border: 1px solid black;
  }
  .danger {
    color: #e35050;
    border: 1px solid #e35050;
  }
  .paymentOnDelivery {
    color: #663399;
    border: 1px solid #663399;
  }
  .paid {
    color: #7b5501;
    border: 1px solid #7b5501;
  }
  .fee {
    color: #0084a8;
    border: 1px solid #0084a8;
  }
`;
