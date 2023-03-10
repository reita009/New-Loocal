import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PostNotice = styled.div`
  height: 192px;
  width: 90%;
  border-radius: 24px;
  background-color: #fff;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  align-items: center;
  display: flex;
  padding: 0px 20px;
  cursor: pointer;

  :hover {
    background-color: #fafafa;
  }

  .logo-whrap {
    width: 160px;
    height: 100%;
    display: flex;

    img {
      width: 80px;
      height: 80px;
      margin: auto;
    }
  }

  .post-notice {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;

    .post-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 17px;

      h1 {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
      }

      span {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: rgba(0, 15, 36, 0.5);
      }
    }
    post-body {
      p {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4b4b4b;
        width: 904px;
        height: 72px;
      }
    }
  }
`;

export const footer = styled.footer`
  width: 90%;
  height: 72px;
  display: flex;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 22px;
  justify-content: space-between;
`;

export const footerLeftArea = styled.div`
  display: flex;
  padding: 2px 0px;
  align-items: center;

  span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
  }
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

  .whrap-count {
    display: flex;
    margin: auto;
    align-items: center;

    p {
      margin-right: 8px;
    }
    .icon {
      cursor: pointer;
      color: #466aa9;
    }
  }
`;

export const footerRightArea = styled.div`
  display: flex;
  padding: 2px 0px;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 8px;
    gap: 8px;
    background: rgba(70, 106, 169, 0.08);
    width: 27px;
    height: 24px;
    border-radius: 8px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #466aa9;
    margin-left: 18px;
    margin-right: 18px;
  }
  .icon {
    cursor: pointer;
    color: #466aa9;
  }
`;
