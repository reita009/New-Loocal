import * as C from "./styled";

//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Manager = () => {
  return (
    <C.Container>
      <C.Header>
        <h1>Gerenciar dados</h1>
        <C.UserBalanceStage>
          <span>Meu saldo</span>
          <C.BalanceValue>
            <div className="value">
              <AttachMoneyIcon className="icon" />
              <span>R$:5,585</span>
              <C.AddCredit>Adicionar créditos</C.AddCredit>
            </div>
          </C.BalanceValue>
          <C.UserName>
            <p>
              olá, <span>Dunkan</span>
            </p>
          </C.UserName>
        </C.UserBalanceStage>
      </C.Header>

      <C.Form>
        <div className="title">
          <h1>Dados do responsável</h1>
        </div>

        <div className="container-input">
          <div className="box">
            <span>Nome</span>
            <input type="text" className="input-active" />
          </div>

          <div className="box">
            <span>E-mail</span>
            <input type="email" className="input-active" />
          </div>
        </div>

        <div className="container-input">
          <div className="box">
            <span>Função</span>
            <input type="text" className="input-active" disabled />
          </div>

          <div className="box">
            <span>Última atualização</span>
            <input type="email" className="input-active" disabled />
          </div>
        </div>
        <div className="button-whrap">
          <button>Salvar alterações</button>
        </div>

        <div className="title">
          <h1>Dados do estabelecimento</h1>
        </div>

        <div className="container-input">
          <div className="box">
            <span>Logradouro</span>
            <input type="text" className="input-active" />
          </div>

          <div className="box">
            <span>Número</span>
            <input type="text" className="input-active" />
          </div>
        </div>

        <div className="container-input">
          <div className="box">
            <span>Complemento</span>
            <input type="text" className="input-active" />
          </div>

          <div className="box">
            <span>Bairro</span>
            <input type="text" className="input-active" />
          </div>
        </div>

        <div className="container-input">
          <div className="box">
            <span>cep</span>
            <input type="text" className="input-active" />
          </div>

          <div className="box">
            <span>Cidade</span>
            <input type="text" className="input-active" />
          </div>
        </div>

        <div className="container-input">
          <div className="box">
            <span>Estado</span>
            <input type="text" className="input-active" />
          </div>
        </div>
        <div className="button-whrap">
          <button>Salvar alterações</button>
        </div>

        <div className="title">
          <h1>Alterar senha</h1>
        </div>

        <div className="container-input">
          <div className="box">
            <span>Senha atual</span>
            <input type="text" className="input-active" />
          </div>

          <div className="box">
            <span>Nova senha</span>
            <input type="text" className="input-active" />
          </div>
        </div>

        <div className="button-whrap">
          <button>Salvar alterações</button>
        </div>
      </C.Form>
    </C.Container>
  );
};

export default Manager;
