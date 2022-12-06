import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f8fa;
  display: flex;
`;

export const LeftBar = styled.div`
  border-radius: 0px 24px 24px 0px;
  width: 256px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 70px;
  border-radius: 0px 0px 24px 0px;
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: 204px;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 22px;
  cursor: pointer;

  background-color: ${(props) => (props.active ? " #f5f8fa" : "#fff")};
  border-left: ${(props) => (props.active ? " 7px solid #466aa9" : "none")};

  .icon {
    color: ${(props) => (props.danger ? "red" : "#bbbbbb")};
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
`;

export const BtnExit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 204px;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 32px;
  cursor: pointer;

  .icon {
    color: red;
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
`;

export const Footer = styled.footer`
  height: 200px;
  width: 100%;
  margin-top: auto;
  padding-top: 80px;
`;
