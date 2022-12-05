import * as C from "./styled";

import Logo from "../../assets/Logo.png";

const DashBoard = () => {
  return (
    <>
      <C.Container>
        <C.LeftBar>
          <C.Logo src={Logo} />
        </C.LeftBar>
      </C.Container>
    </>
  );
};

export default DashBoard;
