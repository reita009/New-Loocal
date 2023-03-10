import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 30px;
  background-color: #f5f8fa;
  display: flex;
`;

export const LeftBar = styled.div`
  border-radius: 0px 24px 24px 0px;
  width: ${(props) => (props.mobileBar ? "75px" : "256px")};
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  .mobile-BtnGroup {
    .icon {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .wrhap-logo {
    display: flex;
    background-color: #2f67b2;
    height: 180px;
    color: #fff;
    justify-content: center;
    align-items: center;

    img {
      height: 100px;
    }

    .icon {
      position: absolute;
      left: ${(props) => (props.mobileBar ? "58px" : "239px")};
      top: 55px;
      width: 32px;
      height: 32px;
      background: #f5f8fa;
      color: #466aa9;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      cursor: pointer;
    }
  }
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  p {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bbbbbb;
  }
  a {
    text-decoration: none;
  }
`;

export const BtnBars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 22px;
  cursor: pointer;
  width: 90%;

  background-color: ${(props) => (props.active ? " #f5f8fa" : "#fff")};
  border-left: ${(props) => (props.active ? " 7px solid #466aa9" : "none")};

  .icon {
    color: ${(props) => (props.active ? "#466aa9" : "#bbbbbb")};
    margin-right: 11px;
  }
  span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
  }

  :hover {
    background-color: #f5f8fa;
    border-left: 7px solid #466aa9;

    .icon {
      color: #466aa9;
    }
  }
  ${(props) =>
    props.active &&
    `
    pointer-events: none;
  `}
`;

export const BtnExit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75px;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 32px;
  cursor: pointer;

  .icon {
    color: red;
    margin-right: ${(props) => (props.mobile ? "auto" : "11px")};
    margin-left: ${(props) => (props.mobile ? "auto" : "0px")};
  }
  span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
  }
`;

export const Footer = styled.footer`
  height: 200px;
  width: 100%;
  margin-top: auto;
`;
export const DateFooter = styled.p`
  display: ${(props) => (props.mobile ? "none" : "flex")};
`;
