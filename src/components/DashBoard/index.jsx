import * as C from "./styled";
import Ifood from "../../assets/IFood_logo.svg.png";
import { useEffect, useState } from "react";

import Header from "../AddCredit/index";

//icons
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const DashBoard = () => {
  const [check, setCheck] = useState([{ requests: false }, { modal: false }]);
  const [activeButton, setActiveButton] = useState([
    { credit: false },
    { ticketBank: false },
    { pix: false },
  ]);

  const handleClick = (value) => {
    switch (value) {
      case "requests":
        if (check[0].requests) {
          setCheck([{ requests: false }]);
        } else {
          setCheck([{ requests: true }]);
        }
        break;
      case "modal":
        if (check[0].modal) {
          setCheck([{ modal: false }]);
        } else {
          setCheck([{ modal: true }]);
        }
        break;
    }
  };

  return (
    <>
      <C.Container>
        <Header type="Dashboard" />
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
            <div className="container-body-whrap">
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

              <C.RequestContainer>
                <table>
                  <tr className="tr-header">
                    <td>ID</td>
                    <td>Data</td>
                    <td>Valor</td>
                    <td>Cliente</td>
                    <td>Entregador</td>
                    <td>Telefone</td>
                    <td>Integração</td>
                    <td>Status</td>
                  </tr>

                  <div className="tr-body-whrap">
                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>não</span>
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>

                    <tr className="tr-body">
                      <td>
                        <input type="checkbox" />
                        <span className="span-id">123456 (123456)</span>
                      </td>

                      <td>
                        <span>12/08/2022 16h35</span>
                      </td>

                      <td>
                        <span>R$ 1.225,50</span>
                      </td>

                      <td>
                        <span>Marcos Paulo</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <span>-</span>
                      </td>

                      <td>
                        <img src={Ifood} />
                      </td>

                      <td>
                        <C.DispatchStatus>Despacho</C.DispatchStatus>
                      </td>
                    </tr>
                  </div>
                </table>
                <footer>
                  <div className="footer-left">
                    <span>Itens por página</span>
                    <C.inputCountPage>
                      <div className="whrap">
                        <KeyboardArrowDownIcon className="icon" />
                      </div>
                    </C.inputCountPage>
                  </div>

                  <div className="footer-right">
                    <KeyboardDoubleArrowLeftIcon className="icon" />
                    <KeyboardArrowLeftIcon className="icon" />
                    <C.SpanPage active>1</C.SpanPage>
                    <C.SpanPage>2</C.SpanPage>
                    <C.SpanPage>3</C.SpanPage>
                    <KeyboardArrowRightIcon className="icon" />
                    <KeyboardDoubleArrowRightIcon className="icon" />
                  </div>
                </footer>
              </C.RequestContainer>
            </div>
          </C.ContainerBody>
        )}
      </C.Container>
    </>
  );
};
export default DashBoard;
