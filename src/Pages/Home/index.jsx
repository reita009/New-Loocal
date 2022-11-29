import * as C from "./styled";

//img
import Logo from "../../assets/logo.webp";
//icons
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";

const Home = () => {
  return (
    <>
      <C.Container>
        <C.LeftContainer>
          <C.LeftArea>
            <C.Logo src={Logo} />
            <C.Form>
              <div className="title">
                <C.Title>Olá!</C.Title>
                <SignLanguageIcon className="icon-hand" />
              </div>

              <C.Paragraph>
                Insira suas credenciais para fazer o seu login
              </C.Paragraph>

              <C.Label>E-mail</C.Label>
              <div className="input-area">
                <C.Input type="email" placeholder="Digite seu email" />
              </div>

              <C.Label>Senha</C.Label>
              <div className="input-area">
                <C.Input
                  type="password"
                  placeholder="Digite sua Senha"
                ></C.Input>
                <RemoveRedEyeIcon className="icon-eye" />
              </div>

              <div className="checkBox-container">
                <C.CheckBox type="checkbox" />
                <p className="remember">Lembre-me</p>
                <p className="forgot-it">Esqueci minha senha</p>
              </div>

              <div className="rules">
                <p>
                  Ao acessar nosso sistema você concorda com nossos
                  <span>Termos de Uso.</span>
                </p>
              </div>

              <C.ButtonSubmit>Entrar</C.ButtonSubmit>

              <div className="help">
                <p>
                  Precisa de ajuda? <span>Fale conosco</span>
                </p>
              </div>
            </C.Form>
          </C.LeftArea>
        </C.LeftContainer>
        <C.RightContainer></C.RightContainer>
      </C.Container>
    </>
  );
};

export default Home;
