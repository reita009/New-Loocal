import * as C from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <C.Container>
        {showModal && <C.Modal></C.Modal>}
        {showModal && (
          <div className="card-container">
            <C.CardRescueEmail>
              <div className="card-header">
                <MailOutlineIcon className="mailIcon" />
              </div>

              <div className="cardBody">
                <h1>E-mail de recuperação de senha enviado!</h1>
                <p>
                  Siga as instruções apresentadas lá para recuperar a sua senha,
                  ok?
                </p>
              </div>

              <div className="cardFooter">
                <C.RescueEmailButton onClick={handleModal}>
                  Entendi
                </C.RescueEmailButton>
              </div>
            </C.CardRescueEmail>
          </div>
        )}
        <C.leftArea>
          <div className="header-leftArea">
            <C.Logo src={Logo} />
          </div>

          <C.Form>
            <div className="back-login">
              <Link to="/login">
                <ArrowBackIcon className="icon" />
              </Link>
              <p>Login</p>
            </div>

            <div className="rescue-password">
              <h1>Recuperar senha</h1>
              <p>insira o seu e-mail para receber instruções.</p>
            </div>

            <div className="input-area">
              <label>E-mail</label>
              <input type="text" />
            </div>

            <C.ButtonRescue onClick={handleModal}>
              Recuperar senha
            </C.ButtonRescue>

            <div className="form-footer">
              <p>
                Precisa de ajuda?
                <span>
                  <Link to="/login/ajuda"> Fale conosco</Link>
                </span>
              </p>
            </div>
          </C.Form>
        </C.leftArea>
        <C.RightContainer></C.RightContainer>
      </C.Container>
    </>
  );
};

export default ForgotPassword;
