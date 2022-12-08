import * as C from "./styled";
import Ifood from "../../assets/IFood_logo.svg.png";

//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DashBoard = () => {
  return (
    <>
      <C.Container>
        <C.Header>
          <h1>Dashboard</h1>
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

        <C.ContainerBody>
          <div className="cardLeft">
            <C.CardDashboard>
              <div className="card-body-left">
                <span>Integração com o iFood</span>
                <p>Sua integração com o iFood está ativa!</p>
                <div className="input-whrap">
                  <input type="radio" />
                  <span>Integração ativada</span>
                </div>
              </div>

              <div className="card-body-right">
                <img src={Ifood} alt="" />
              </div>
            </C.CardDashboard>

            <C.CardDashboard>
              <div className="card-body-left">
                <span>Total de pedidos realizados</span>
                <div className="select-whrap">
                  <select>
                    <option className="opt">Todos status</option>
                  </select>
                </div>

                <h1>1.548 pedidos </h1>
              </div>
            </C.CardDashboard>

            <C.CardDashboard>
              <div className="card-body-left">
                <span>Distância média percorrida</span>
                <div className="select-whrap">
                  <select>
                    <option className="opt">Todas as quilometragens</option>
                  </select>
                </div>
                <h1>1.548 km | 524 entregas</h1>
              </div>

              <div className="card-body-right">
                <FileDownloadIcon className="icon" />
              </div>
            </C.CardDashboard>
          </div>

          <div className="cardRight">
            <C.CardDashboard></C.CardDashboard>
            <C.CardDashboard></C.CardDashboard>
            <C.CardDashboard></C.CardDashboard>
          </div>
        </C.ContainerBody>
      </C.Container>
    </>
  );
};
export default DashBoard;
