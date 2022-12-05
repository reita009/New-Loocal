import * as C from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/Logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckIcon from "@mui/icons-material/Check";

const Help = () => {
  const [showModal, setShowModal] = useState(false);
  const [off, setOff] = useState(false);

  const handleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  const handleExit = () => {
    if (off) {
      setOff(false);
    } else {
      setOff(true);
    }
  };
  const handleBack = () => {
    setOff(false);
    setShowModal(false);
  };

  return (
    <C.Container>
      {showModal && <C.Modal></C.Modal>}
      {showModal && (
        <div className="card-container">
          <C.CardMsn>
            <CheckIcon className="checkIcon" />
            <h1>Sua mensagem foi enviada!</h1>
            <p>Em breve te retornaremos com uma resposta</p>
            <C.CardButton onClick={handleExit}>Entendi</C.CardButton>
          </C.CardMsn>
        </div>
      )}

      {off && (
        <div className="card-container">
          <C.CardOff>
            <h1>Tem certeza de que deseja sair?</h1>
            <div className="button-wharp">
              <C.CardButton onClick={handleBack}>Voltar</C.CardButton>
              <Link to="/login">
                <C.CardButton danger>Sair</C.CardButton>
              </Link>
            </div>
          </C.CardOff>
        </div>
      )}

      <C.leftArea>
        <C.Header>
          <img src={Logo} />
        </C.Header>

        <C.Form>
          <div className="login">
            <Link to="/login">
              <ArrowBackIcon className="icon" />
            </Link>
            <h1>Login</h1>
          </div>

          <div className="help">
            <h1>Fale conosco</h1>
            <p>
              Preencha o formulário ou nos envie uma mensagem para nosso e-mail:
            </p>

            <div className="mail">
              <MailOutlineIcon className="icon" />
              <p>suporte@loocal.online</p>
            </div>
          </div>

          <div className="input">
            <label>Nome</label>
            <C.Input type="text" placeholder="Digite seu nome" />
          </div>

          <div className="input">
            <label>E-mail</label>
            <C.Input type="email" placeholder="digite seu email" />
          </div>

          <div className="input">
            <label>Mensagem</label>
            <C.Input type="email" placeholder="Escreva sua mensagem" large />
          </div>

          <C.ButtonSubmit onClick={handleModal}>Enviar mensagem</C.ButtonSubmit>
        </C.Form>
      </C.leftArea>
      <C.RightArea></C.RightArea>
    </C.Container>
  );
};

export default Help;
