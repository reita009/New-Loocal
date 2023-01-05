import * as C from "./styled";

import Header from "../AddCredit/index";

//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Finance = () => {
  return (
    <>
      <C.Container>
        <Header />
        <C.Search>
          <div className="search-left">
            <C.InputSearch
              type="text"
              placeholder="Pesquisar em Extrato Financeiro"
              large
            />
            <span>Buscar</span>
          </div>

          <div className="search-right">
            <select>
              <option>Todos os períodos</option>
            </select>
            <select>
              <option>Todos os motivo</option>
            </select>
          </div>
        </C.Search>

        <C.ListContainer>
          <div className="header-list">
            <div className="td">Id</div>

            <div className="td">Tipo</div>

            <div className="td">Valor</div>

            <div className="td">Balanço</div>

            <div className="td">Data</div>

            <div className="td">Motivo</div>
          </div>

          <div className="list-whrap-body">
            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status paymentOnDelivery ">
                  Pagamento de entrega
                </div>
              </div>
            </div>

            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status danger">Estorno</div>
              </div>
            </div>

            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status paid">Crédito por pix</div>
              </div>
            </div>

            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status paid">Crédito por cartão</div>
              </div>
            </div>

            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status paid">Crédito por boleto</div>
              </div>
            </div>

            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status paid">Crédito bonificado</div>
              </div>
            </div>

            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status fee">Pagamento de taxa</div>
              </div>
            </div>

            <div className="body-list">
              <div className="td">123456</div>

              <div className="td">Débito</div>

              <div className="td">R$ 12,50</div>

              <div className="td">R$ 1.253,88</div>

              <div className="td">12/08/2022 16h35</div>

              <div className="td">
                <div className="status fee">Pagamento de taxa</div>
              </div>
            </div>
          </div>
        </C.ListContainer>
        <div className="footer">
          <div className="left-footer">
            <span>itens por página</span>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </div>

          <div className="right-footer">
            <KeyboardDoubleArrowLeftIcon className="icon" />
            <KeyboardArrowLeftIcon className="icon" />
            <div className="pages">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <KeyboardArrowRightIcon className="icon" />
            <KeyboardDoubleArrowRightIcon className="icon" />
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default Finance;
