import * as C from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";

import NoticeStage from "../../components/NoticeStage";
import DashBoard from "../../components/DashBoard";
import Finance from "../../components/Finance";
import Manager from "../../components/Manager";

//icons
import LineAxisIcon from "@mui/icons-material/LineAxis";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

//images
import Logo from "../../assets/Logo.png";

const NavBar = () => {
  const [check, setCheck] = useState([
    { notice: true },
    { dashboard: false },
    { requests: false },
    { finance: false },
    { manager: false },
  ]);
  const [showMobile, setShowMobile] = useState(false);

  const handleActiveBtn = (e) => {
    switch (e) {
      case "notice":
        if (check[0].notice) {
          setCheck([{ notice: false }]);
        } else {
          setCheck([{ notice: true }]);
        }
        break;
      case "dashboard":
        if (check[0].dashboard) {
          setCheck([{ dashboard: false }]);
        } else {
          setCheck([{ dashboard: true }]);
        }
        break;
      case "requests":
        if (check[0].requests) {
          setCheck([{ requests: false }]);
        } else {
          setCheck([{ requests: true }]);
        }
        break;
      case "finance":
        if (check[0].finance) {
          setCheck([{ finance: false }]);
        } else {
          setCheck([{ finance: true }]);
        }
        break;
      case "manager":
        if (check[0].manager) {
          setCheck([{ manager: false }]);
        } else {
          setCheck([{ manager: true }]);
        }
        break;
    }
  };

  const handleMobile = () => {
    if (showMobile) {
      setShowMobile(false);
    } else {
      setShowMobile(true);
    }
  };

  return (
    <>
      <C.Container>
        {showMobile == false && (
          <C.LeftBar>
            <div className="wrhap-logo">
              <img src={Logo} alt="" />

              <ArrowBackIosNewIcon className="icon" onClick={handleMobile} />
            </div>
            <C.BtnGroup>
              <C.BtnBars
                onClick={(e) => handleActiveBtn("notice")}
                active={check[0].notice}
              >
                <ChatIcon className="icon" />
                <span>Notícias</span>
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("dashboard")}
                active={check[0].dashboard}
                name="julinho"
              >
                <LineAxisIcon className="icon" />
                <span>DashBoard</span>
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("requests")}
                active={check[0].requests}
              >
                <AssignmentIcon className="icon" />
                <span>Pedidos</span>
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("finance")}
                active={check[0].finance}
              >
                <CardMembershipIcon className="icon" />
                <span>Extrato financeiro</span>
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("manager")}
                active={check[0].manager}
              >
                <SettingsIcon className="icon" />
                <span>Gerenciar dados</span>
              </C.BtnBars>
            </C.BtnGroup>

            <C.Footer>
              <C.BtnGroup>
                <Link to="/">
                  <C.BtnExit>
                    <ExitToAppIcon className="icon" />
                    <span>Sair</span>
                  </C.BtnExit>
                </Link>
                <p>2022 Loocal</p>
              </C.BtnGroup>
            </C.Footer>
          </C.LeftBar>
        )}

        {showMobile && (
          <C.LeftBar mobileBar>
            <div className="wrhap-logo">
              <ArrowBackIosNewIcon className="icon" onClick={handleMobile} />
            </div>
            <C.BtnGroup className="mobile-BtnGroup">
              <C.BtnBars
                onClick={(e) => handleActiveBtn("notice")}
                active={check[0].notice}
              >
                <ChatIcon className="icon" />
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("dashboard")}
                active={check[0].dashboard}
              >
                <LineAxisIcon className="icon" />
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("requests")}
                active={check[0].requests}
              >
                <AssignmentIcon className="icon" />
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("finance")}
                active={check[0].finance}
              >
                <CardMembershipIcon className="icon" />
              </C.BtnBars>

              <C.BtnBars
                onClick={(e) => handleActiveBtn("manager")}
                active={check[0].manager}
              >
                <SettingsIcon className="icon" />
              </C.BtnBars>
            </C.BtnGroup>

            <C.Footer>
              <C.BtnGroup>
                <Link to="/">
                  <C.BtnExit mobile>
                    <ExitToAppIcon className="icon" />
                  </C.BtnExit>
                </Link>
                <C.DateFooter mobile>2022 Loocal</C.DateFooter>
              </C.BtnGroup>
            </C.Footer>
          </C.LeftBar>
        )}

        {check[0].notice && <NoticeStage />}
        {check[0].dashboard && <DashBoard />}
        {check[0].finance && <Finance />}
        {check[0].manager && <Manager />}
      </C.Container>
    </>
  );
};

export default NavBar;
