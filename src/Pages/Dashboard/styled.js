import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
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
  margin-bottom: 10px;
  border-radius: 0px 0px 24px 0px;
`;
