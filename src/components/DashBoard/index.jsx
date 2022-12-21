import * as C from "./styled";
import Ifood from "../../assets/IFood_logo.svg.png";
import { useEffect, useState } from "react";

//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PixIcon from "@mui/icons-material/Pix";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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

  const handleCreditClick = (value) => {
    switch (value) {
      case "CREDIT":
        if (activeButton[0].credit) {
          setActiveButton([{ credit: false }]);
        } else {
          setActiveButton([{ credit: true }]);
        }
        break;
      case "TICKETBANK":
        if (activeButton[0].ticketBank) {
          setActiveButton([{ ticketBank: false }]);
        } else {
          setActiveButton([{ ticketBank: true }]);
        }
        break;
      case "PIX":
        if (activeButton[0].pix) {
          setActiveButton([{ pix: false }]);
        } else {
          setActiveButton([{ pix: true }]);
        }
        break;
    }
  };

  return (
    <>
      {check[0].modal && <C.Modal></C.Modal>}

      <C.Container>
        {check[0].modal && (
          <C.CardAddCredit>
            <div className="headerAddCredit">
              <div className="headerAddCredit-left">
                <h1>Adicionar créditos</h1>
                <p>Selecione o método de pagamento:</p>
              </div>

              <div className="headerAddCredit-right">
                <span
                  onClick={(value) => {
                    handleClick("modal");
                  }}
                >
                  X
                </span>
              </div>
            </div>

            <div className="payment-mode">
              <C.OptPayment
                onClick={(value) => {
                  handleCreditClick("CREDIT");
                }}
                active={activeButton[0].credit}
              >
                <CreditCardIcon className="icon" />
                <span>Cartão de crédito</span>
              </C.OptPayment>

              <C.OptPayment
                onClick={(value) => {
                  handleCreditClick("TICKETBANK");
                }}
                active={activeButton[0].ticketBank}
              >
                <ConfirmationNumberIcon className="icon" />
                <span>Boleto bancário</span>
              </C.OptPayment>

              <C.OptPayment
                onClick={(value) => {
                  handleCreditClick("PIX");
                }}
                active={activeButton[0].pix}
              >
                <PixIcon className="icon" />
                <span>Pix</span>
              </C.OptPayment>
            </div>

            {activeButton[0].credit && (
              <div className="credit-container">
                <div className="credit-header">
                  <h1>Dados do cartão</h1>
                </div>

                <div className="credit-body">
                  <div className="row">
                    <div className="input-whrap">
                      <span>Bandeira</span>
                      <br />
                      <select>
                        <option>Selecione uma opção</option>
                      </select>
                    </div>

                    <div className="input-whrap">
                      <span>Nome do titular</span>
                      <br />
                      <input
                        type="text"
                        placeholder="Digite o nome do titular"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-whrap">
                      <span>Número do cartão</span>
                      <br />
                      <input
                        type="text"
                        placeholder="Digite o número do cartão"
                      />
                    </div>

                    <div className="input-whrap">
                      <div className="span-whrap">
                        <span>CVV</span>
                        <HelpOutlineIcon className="icon" />
                      </div>

                      <input type="text" placeholder="Digite o CVV" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-whrap">
                      <span>Vencimento</span>
                      <br />
                      <input type="date" />
                    </div>

                    <div className="input-whrap">
                      <div className="span-whrap">
                        <span>Valor desejado</span>
                      </div>

                      <input type="text " placeholder="R$0,00" />
                    </div>
                  </div>

                  <div className="credit-footer">
                    <div className="footer-description">
                      <p>
                        <span>Atenção:</span> seu saldo é liberado na hora que o
                        pagamento for aprovado! Por antecipar esse crédito,
                        descontamos o custo de antecipação que é de 3,5% do
                        saldo disponível.
                      </p>
                    </div>
                    <C.ButtonAddCredit>Adicionar crédito</C.ButtonAddCredit>
                  </div>
                </div>
              </div>
            )}

            {activeButton[0].ticketBank && (
              <div className="ticketBank-container">
                <span>Valor desejado</span>
                <br />
                <input type="text" placeholder="R$:0,00" />
                <p>
                  <span>Atenção:</span> após o pagamento do boleto, poderá levar
                  até 3 dias úteis para que o valor carregado apareça no seu
                  saldo de créditos.
                </p>
                <C.ButtonAddCredit>Gerar boleto</C.ButtonAddCredit>
              </div>
            )}

            {activeButton[0].pix && (
              <div className="ticketBank-container">
                <span>Valor desejado</span>
                <br />
                <input type="text" placeholder="R$:0,00" />
                <p>
                  <span>Atenção:</span> após o pagamento do pix, aguarde alguns
                  instantes até que seu saldo seja atualizado
                </p>
                <C.ButtonAddCredit>Gerar pix</C.ButtonAddCredit>
              </div>
            )}
          </C.CardAddCredit>
        )}

        <C.Header>
          <h1>Dashboard</h1>
          <C.UserBalanceStage>
            <span>Meu saldo:</span>
            <C.BalanceValue>
              <div className="value">
                <AttachMoneyIcon className="icon" />
                <span>R$5,558</span>
                <C.AddCredit
                  onClick={(value) => {
                    handleClick("modal");
                  }}
                >
                  Adicionar créditos
                </C.AddCredit>
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
