import * as C from "./styled";

import IconLoocal from "../../assets/iconLoocal.png";

//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const NoticeStage = () => {
  return (
    <>
      <C.Container>
        <C.Header>
          <h1>Notícia</h1>
          <C.UserBalanceStage>
            <span>Meu saldo:</span>
            <C.BalanceValue>
              <div className="value">
                <AttachMoneyIcon className="icon" />
                <span>R$5,558</span>
                <C.AddCredit>Adicionar créditos</C.AddCredit>
              </div>
            </C.BalanceValue>
            <C.UserName>
              <p>
                Olá, <span>Dunkan!</span>
              </p>
            </C.UserName>
          </C.UserBalanceStage>
        </C.Header>
        <C.PostNotice>
          <div className="logo-whrap">
            <img src={IconLoocal} />
          </div>

          <div className="post-notice">
            <div className="post-header">
              <h1>Loocal</h1>
              <span>22/10/2022 16h</span>
            </div>

            <div className="post-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </C.PostNotice>

        <C.PostNotice>
          <div className="logo-whrap">
            <img src={IconLoocal} />
          </div>

          <div className="post-notice">
            <div className="post-header">
              <h1>Loocal</h1>
              <span>22/10/2022 16h</span>
            </div>

            <div className="post-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </C.PostNotice>

        <C.PostNotice>
          <div className="logo-whrap">
            <img src={IconLoocal} />
          </div>

          <div className="post-notice">
            <div className="post-header">
              <h1>Loocal</h1>
              <span>22/10/2022 16h</span>
            </div>

            <div className="post-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </C.PostNotice>

        <C.footer>
          <C.footerLeftArea>
            <span>Itens por página</span>
            <C.inputCountPage>
              <div className="whrap-count">
                <p>0</p> <KeyboardArrowDownIcon className="icon" />
              </div>
            </C.inputCountPage>
          </C.footerLeftArea>

          <C.footerRightArea>
            <KeyboardDoubleArrowLeftIcon className="icon" />
            <KeyboardArrowLeftIcon className="icon" />
            <span>1</span>
            <KeyboardArrowRightIcon active className="icon" />
            <KeyboardDoubleArrowRightIcon active className="icon" />
          </C.footerRightArea>
        </C.footer>
      </C.Container>
    </>
  );
};

export default NoticeStage;
