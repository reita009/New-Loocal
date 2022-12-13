import * as C from "./styled";
import Ifood from "../../assets/IFood_logo.svg.png";
import { useState } from "react";

//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DashBoard = () => {
  const [check, setCheck] = useState([{ requests: false }]);

  const handleClick = (value) => {
    switch (value) {
      case "requests":
        if (check[0].requests) {
          setCheck([{ requests: false }]);
        } else {
          setCheck([{ requests: true }]);
        }
        break;
    }
  };

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

        {check[0].requests == false && (
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

                  <C.ButtonRequests
                    delivery
                    onClick={(value) => {
                      handleClick("requests");
                    }}
                  >
                    1.548 pedidos
                  </C.ButtonRequests>
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
              <C.CardDashboard>
                <div className="card-body">
                  <span>Tabela de refêrencia</span>
                  <p>valores base:</p>
                  <h1>Padrão</h1>
                </div>
              </C.CardDashboard>

              <C.CardDashboard>
                <div className="card-body-left">
                  <span>Tempo médio total</span>
                  <div className="select-whrap">
                    <select>
                      <option className="opt">Todas as quilometragens</option>
                    </select>
                  </div>

                  <h1> 3.654 horas</h1>
                </div>
              </C.CardDashboard>

              <C.CardDashboard>
                <div className="card-body">
                  <div className="card-header">
                    <span>Deliverys automatizados </span>
                    <CalendarMonthIcon className="icon" />
                    <AccessAlarmIcon className="icon" />
                  </div>
                  <p>
                    Quantidade de deliverys programados para acionarem o
                    motoboy. Caso deseje alterar as configurações, clique no
                    ícone de relógio deste card.
                  </p>
                  <h1>26 deliverys programados</h1>
                </div>
              </C.CardDashboard>
            </div>
          </C.ContainerBody>
        )}

        {check[0].requests && (
          <C.ContainerBody>
            <div className="header-request">
              <div className="header-request-left">
                <ArrowBackIcon
                  onClick={(value) => {
                    handleClick("requests");
                  }}
                  className="icon"
                />

                <span>Automatizar Deliverys</span>
              </div>

              <div className="button-whrap">
                <button>Confirmar seleções</button>
              </div>
            </div>
          </C.ContainerBody>
        )}
      </C.Container>
    </>
  );
};
export default DashBoard;
