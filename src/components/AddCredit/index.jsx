import * as C from "./styled";
import { useState } from "react";
//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PixIcon from "@mui/icons-material/Pix";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const AddCredit = () => {
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
      {check[0].modal && <C.Modal></C.Modal>}

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
                    <input type="text" placeholder="Digite o nome do titular" />
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
                      descontamos o custo de antecipação que é de 3,5% do saldo
                      disponível.
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
                até 3 dias úteis para que o valor carregado apareça no seu saldo
                de créditos.
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
    </>
  );
};

export default AddCredit;
