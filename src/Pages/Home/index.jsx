import * as C from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";

//img
import Logo from "../../assets/logo.png";
//icons
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";

const Home = () => {
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
          <C.CardTermsContainer>
            <C.CardTerms>
              <h1>Termos de uso</h1>
              <div className="body-terms">
                <p>
                  CLÁUSULA PRIMEIRA – DO PLANO LOGÍSTICA COMPLETA 1.1. As Partes
                  definem de comum acordo que a LOOCAL disponibilizará ao
                  Restaurante o plano de contratação “Plano Logística Completa”,
                  em que a entrega dos Pedidos será realizada por prestadores de
                  serviços cadastrados na plataforma da LOOCAL (“Parceiros de
                  Entrega”). 1.2. Como condição essencial para a prestação dos
                  serviços de agência previstos neste Contrato, a LOOCAL se
                  compromete a contratar às suas expensas os Parceiros de
                  Entrega, para a coleta dos Pedidos no endereço do Restaurante
                  e a sua entrega nos endereços informados pelos Clientes
                  Finais. 1.3. A LOOCAL, no caso de opção do Plano Logística
                  Completa, será responsável por (a) definir a área de entrega,
                  o tempo de entrega e a disponibilidade do Restaurante na
                  Plataforma LOOCAL; e (b) eventuais problemas relacionados com
                  a entrega dos Pedidos. 1.4. A LOOCAL assume o compromisso de
                  manter o Restaurante livre e indenizado de todas e quaisquer
                  perdas, danos, prejuízos e outras responsabilidades (exceto
                  danos indiretos e lucros cessantes) que venham a ser
                  comprovadamente incorridos ou de qualquer outra forma sofridos
                  pelo Restaurante, decorrentes de problemas com as entregas dos
                  Pedidos (“Perdas”). 1.5. Na hipótese de ser proposta contra o
                  Restaurante qualquer reivindicação, ação, reclamação ou outra
                  forma de procedimento judicial ou administrativo que possa
                  resultar em uma Perda, incluindo, mas sem se limitar a isto,
                  ações decorrentes de acidentes de trânsito envolvendo os
                  Parceiros de Entrega ou seus funcionários, ações trabalhistas
                  propostas pelos Parceiros de Entrega ou por seus funcionários
                  contra o Restaurante ou que o Restaurante compareça no polo
                  passivo e ações de indenização propostas pelos Clientes Finais
                  contra o Restaurante por problemas nas entregas dos Pedidos
                  (em qualquer caso, uma “Demanda”), o Restaurante deverá
                  notificar a LOOCAL a respeito da Demanda em questão no prazo
                  máximo de 5 (cinco) dias após tomar conhecimento de sua
                  existência ou em até 48 (quarenta e oito) horas antes do prazo
                  legal para a apresentação de defesa, o que ocorrer primeiro,
                  fornecendo cópia dos documentos que lhe tenham sido
                  encaminhados (“Aviso de Demanda”). 1.6. O descumprimento da
                  obrigação de entregar o Aviso de Demanda na forma e no prazo
                  aqui previstos será considerado como renúncia irrevogável e
                  irretratável do Restaurante ao direito de pleitear indenização
                  da LOOCAL. 1.7. A LOOCAL deverá, no prazo máximo de 5 (cinco)
                  dias úteis contados a partir da data de recebimento do Aviso
                  de Demanda e, em qualquer hipótese, 1 (um) dia útil antes do
                  término do prazo para a apresentação de Defesa, informar ao
                  Restaurante se: (i) irá proceder diretamente à liquidação
                  integral e imediata da Demanda, hipótese em que ficará
                  obrigado a fazer o respectivo pagamento em até 2 (dois) dias
                  antes do término do prazo de Defesa inerente à respectiva
                  Demanda; ou (ii) a Demanda deverá ser discutida administrativa
                  ou judicialmente. 1.7.1. Caso a LOOCAL tenha optado pela
                  alternativa prevista no item (i), acima, mas não realize a
                  liquidação da respectiva Demanda no prazo ali previsto ou não
                  tenha se manifestado no prazo previsto na Cláusula 2.6, caberá
                  ao Restaurante, por conta, ordem e responsabilidade da LOOCAL,
                  efetuar o pagamento da Demanda ou, a exclusivo critério do
                  Restaurante, contratar escritório de advocacia para a sua
                  defesa na Demanda, sendo certo que os respectivos honorários
                  advocatícios, o valor e outros ônus de eventual condenação
                  deverão ser suportados pela LOOCAL. 1.7.2. Caso opte pela
                  alternativa (ii), acima, a LOOCAL terá o direito de escolher o
                  advogado responsável pela Defesa e de definir a estratégia a
                  ser adotada na Defesa. Não obstante, a LOOCAL se compromete a
                  manter o Restaurante informado sobre o andamento da Demanda. O
                  Restaurante não poderá celebrar qualquer acordo, compromisso
                  ou quitação em relação a qualquer Demanda sem a prévia
                  anuência por escrito da LOOCAL. As Partes se comprometem a
                  colaborar mutuamente e com o escritório de advocacia
                  contratado na forma desta Cláusula, apresentando todos e
                  quaisquer documentos e informações úteis ou necessários à
                  condução da Defesa. 1.8. Na hipótese de o Restaurante ser
                  obrigado a realizar depósito judicial ou oferecer qualquer
                  outra garantia para a continuidade de uma Demanda, a LOOCAL
                  será responsável pelo cumprimento de tal obrigação ou, então,
                  deverá reembolsar o Restaurante pelos custos incorridos com o
                  seu cumprimento, devendo o reembolso ser realizado no prazo
                  máximo de 5 (cinco) dias úteis contados a partir da data de
                  recebimento de notificação enviada pelo Restaurante à LOOCAL
                  com a evidência de tal fato. 1.9. Uma Perda somente será
                  considerada como tendo sido incorrida ou sofrida pelo
                  Restaurante na data do trânsito em julgado da decisão
                  definitiva não sujeita a recurso que condene o Restaurante a
                  realizar um pagamento, devendo o pagamento ser feito pela
                  LOOCAL ao Restaurante em até 10 (dez) dias úteis a contar da
                  data em que a Perda tiver sido incorrida ou sofrida, nos
                  termos desta Cláusula. 1.10. Em contrapartida das obrigações
                  assumidas nesta Cláusula, o Restaurante reconhece e concorda
                  que a LOOCAL também poderá cobrar uma taxa adicional dos
                  Clientes Finais, no âmbito da intermediação de negócios
                  realizada pela LOOCAL entre os Clientes Finais e o
                  Restaurante. CLÁUSULA SEGUNDA – DO COMPROMISSO DE
                  EXCLUSIVIDADE 2.1. O Restaurante expressamente declara que
                  opta pela contratação da LOOCAL em regime de exclusividade,
                  nos termos da cláusula 9.2 dos Termos e Condições Gerais de
                  Contratação da LOOCAL, e reconhece que as condições comerciais
                  aqui previstas valerão apenas enquanto o Restaurante for um
                  parceiro exclusivo da LOOCAL (“Compromisso de Exclusividade”).
                  2.1.1. Para todos os fins e efeitos do presente instrumento,
                  os termos e as expressões abaixo, terão os significados
                  definidos a seguir: (a) “Afiliadas” significa, em relação ao
                  Restaurante, (i) qualquer Pessoa que, direta ou indiretamente,
                  Controle o Restaurante, seja Controlada pelo Restaurante ou
                  esteja sob Controle comum com o Restaurante; e (ii) qualquer
                  outra Pessoa que opere sob a mesma marca utilizada pelo
                  Restaurante ou com a qual o Restaurante mantenha relação de
                  franqueado, franqueador ou de outra natureza similar; (b)
                  “Concorrentes” significa qualquer Pessoa que se dedique à
                  promoção das atividades de estabelecimentos comerciais
                  (incluindo, sem limitação, restaurantes, padarias, bares e
                  estabelecimentos similares) e/ou de quaisquer Pessoas
                  prestadoras de serviços de entrega rápida, por meio de
                  plataformas online ou offline de captação de pedidos de
                  entrega, incluindo, mas sem se limitar a isto, de pedidos de
                  entrega do gênero alimentício; (c) “Controle”, quando
                  empregado em relação a qualquer Pessoa, significa a
                  titularidade do poder de determinar a gestão, escolher a
                  maioria dos administradores, dirigir as atividades sociais e
                  orientar o funcionamento dos órgãos sociais de tal Pessoa,
                  seja (a) por meio de titularidade; (b) por contrato; (c) por
                  quaisquer valores mobiliários ou participações societárias com
                  direito a voto; ou (d) por qualquer outro meio que assegure,
                  de modo permanente, a maioria dos votos nas deliberações
                  sociais. As expressões e os termos “Controlador”, “Controlado
                  por”, “sob Controle comum” e “Controlada” têm os significados
                  logicamente decorrentes desta definição de Controle; (d)
                  “Período de Exclusividade” significa o prazo de vigência do
                  presente instrumento; e (e) “Pessoa” significa e inclui
                  qualquer pessoa física, parceria, joint venture, sociedade,
                  associação, sociedade anônima, sociedade limitada, sociedade
                  de economia mista, sociedade de fato, autoridade governamental
                  ou quaisquer de suas subdivisões políticas, espólio, massa
                  falida, condomínio, fundo de investimento ou qualquer outra
                  entidade, dotada de personalidade jurídica ou não. 2.2. Tendo
                  em vista o Compromisso de Exclusividade ora assumido no item
                  5.1, o Restaurante reconhece e concorda que não poderá, direta
                  ou indiretamente, por si ou por meio de quaisquer Afiliadas,
                  no território brasileiro e durante o Período de Exclusividade,
                  praticar qualquer uma das seguintes atividades: (i) contratar,
                  homologar como prestador de serviço autorizado do grupo do
                  Restaurante ou de qualquer outra forma firmar parceria
                  comercial com quaisquer Concorrentes da LOOCAL, incluindo, mas
                  sem se limitar a isto, envolvendo a prestação de serviços de
                  intermediação de negócios, de logística ou de pagamentos
                  (adquirência, subadquirência, split de pagamentos, QR Code,
                  gestão de contas de pagamento etc.); (ii) promover a
                  integração dos sistemas utilizados pelo Restaurante com as
                  plataformas de quaisquer Concorrentes da LOOCAL; e (iii)
                  permitir que as marcas e seus produtos comercializados pelo
                  Restaurante sejam promovidos e oferecidos por Concorrentes
                  diretos ou indiretos da LOOCAL, ainda que o Restaurante não
                  possua qualquer relação comercial com os Concorrentes em
                  questão. 2.3. Para os devidos fins do presente contrato, serão
                  consideradas como “Inadimplemento” as seguintes hipóteses: (i)
                  a rescisão imotivada deste Contrato durante o seu Prazo de
                  Vigência inicial pelo Restaurante ou pela LOOCAL; e (ii) a
                  violação do Compromisso de Exclusividade pelo Restaurante.
                  2.4. Em qualquer hipótese de Inadimplemento, sem prejuízo das
                  demais penalidades previstas na legislação aplicável, a Parte
                  que houver dado causa ao Inadimplemento (“Parte Inadimplente”)
                  ficará sujeita ao pagamento de uma multa no valor equivalente
                  a R$100.000,00 (Cem mil de reais), à outra Parte, observadas
                  as regras abaixo: (a) caso o Inadimplemento ocorra
                  anteriormente ao cumprimento DE, ao menos, 25% (vinte e cinco
                  por cento) do Prazo de Vigência do presente instrumento, a
                  Parte Inadimplente deverá pagar à Parte Inocente 100% (cem por
                  cento) da Multa. (b) caso o Inadimplemento ocorra após o
                  término do período previsto no item (a) desta Cláusula e antes
                  do cumprimento de, ao menos, 75% (setenta e cinco por cento)
                  do Prazo de Vigência do presente instrumento, a Parte
                  Inadimplente deverá pagar à Parte Inocente 75% (setenta e
                  cinco por cento) da Multa; e (c) caso o Inadimplemento ocorra
                  após o cumprimento de, ao menos, 75% (setenta e cinco por
                  cento) do Prazo de Vigência do presente instrumento, a Parte
                  Inadimplente deverá pagar à Parte Inocente 50% (cinquenta por
                  cento) da Multa. 2.5. Sem prejuízo da cobrança da Multa e do
                  direito da LOOCAL de rescindir o presente instrumento, a
                  violação do Compromisso de Exclusividade pelo Restaurante fará
                  com que a Comissão passe a ser equivalente a 27% (vinte e sete
                  por cento), com validade a partir da data de recebimento da
                  notificação de inadimplemento. CLÁUSULA TERCEIRA – DAS
                  CONDIÇÕES COMERCIAIS ESPECIAIS DIFERENCIADAS 3.1. Isenção de
                  Mensalidade: Como contrapartida ao Compromisso de
                  Exclusividade, a LOOCAL garantirá ao Restaurante isenção nos
                  valores devidos a título de Mensalidade durante a vigência do
                  Contrato, a partir de sua assinatura, e; desde que o
                  Restaurante esteja cumprindo com o Compromisso de
                  Exclusividade. SE NECESSÁRIO FOR, O CLIENTE DEVERÁ FORMALIZAR
                  AOS NOSSOS CUIDADOS, DEMAIS CONDIÇÕES DIFERENCIADAS OU
                  ESPECIAIS PARA PREENCHER O PRESENTE CONTRATO 3.2. Destaque na
                  Plataforma: As Partes concordam que o Compromisso de
                  Exclusividade fará com que as Marcas sejam exibidas com
                  destaque na Plataforma da LOOCAL durante o Período de
                  Exclusividade. 3.2.1. O Restaurante reconhece e concorda que o
                  sistema de exposição e destaque das Marcas poderá vir a ser
                  alterado pela LOOCAL em decorrência de aprimoramentos e
                  evoluções tecnológicas (“Evolução Tecnológica”), sendo certo
                  que, nessa hipótese, a LOOCAL envidará seus melhores esforços
                  para manter o destaque das Marcas na Plataforma da LOOCAL
                  devidamente alterada. 3.2.2. O Restaurante concorda ainda, que
                  na impossibilidade de manutenção do destaque das Marcas na
                  Plataforma LOOCAL em decorrência da Evolução Tecnológica,
                  caberá à LOOCAL enviar notificação ao Restaurante neste
                  sentido, visando formalizar a interrupção do destaque, sem que
                  isso gere à LOOCAL qualquer ônus ou penalidade. 3.2.3. Na
                  hipótese de envio da notificação descrita na Cláusula supra, a
                  LOOCAL envidará esforços comerciais razoáveis para a
                  manutenção das Marcas em destaque na Plataforma LOOCAL. 3.2.4.
                  Os Restaurantes reconhecem e concordam que para que as
                  Condições Comerciais listadas nesta Cláusula sejam aplicáveis,
                  o Restaurante deverá: (i) Manter a Loja Virtual do Restaurante
                  disponível na Plataforma LOOCAL, em média, por período
                  equivalente a, no mínimo, 90% (noventa por cento) do tempo
                  originalmente estipulado pelas Partes a cada mês; (ii) Manter
                  uma Avaliação mínima equivalente a 4,2 (quatro vírgula dois);
                  e, (iii) Manter o nível de cancelamento de Pedidos abaixo de
                  5% (cinco por cento) do total de Pedidos recebidos a cada mês.
                  3.3. Atendimento Dedicado: Como contrapartida ao Compromisso
                  de Exclusividade ora assumido, a LOOCAL se compromete a
                  designar 1 (um) de seus colaboradores como ponto focal das
                  comunicações entre as Partes (“Consultor”), o qual será o
                  responsável pelo atendimento do Restaurante. 3.3.1. Sem
                  prejuízo do disposto na Cláusula acima, o Restaurante
                  reconhece e concorda, por meio de sua assinatura aposta ao
                  Instrumento, que a LOOCAL poderá substituir o Consultor a
                  qualquer tempo, sem a necessidade de autorização ou
                  notificação prévia do Restaurante, sendo certo que a
                  substituição do Consultor não será considerada como causa e/ou
                  motivo para a rescisão deste Instrumento ou quebra do
                  Compromisso de Exclusividade. 3.4. Informações de Mercado: A
                  LOOCAL apresentará ao Restaurante, informações estratégicas
                  formuladas pela LOOCAL com base em seu banco de dados e
                  expertise, as quais serão pautadas na cozinha praticada pelo
                  Restaurante. 3.4.1. Sem prejuízo do disposto na Cláusula
                  acima, o Restaurante reconhece e concorda que as Informações
                  de Mercado garantirão somente dados e informações ao
                  Restaurante, sendo certo que a LOOCAL não terá qualquer
                  responsabilidade sobre a decisão pela utilização das
                  Informações de Mercado e os resultados de referida utilização,
                  as quais serão de responsabilidade única e exclusiva do
                  Restaurante. 3.4.2. As Informações de Mercado serão formuladas
                  com base nos dados e informações compiladas pela LOOCAL em seu
                  banco de dados, e em nenhuma hipótese indicarão ou serão
                  apresentadas de modo que possam identificar especificamente os
                  hábitos, números ou dados dos restaurantes, consumidores
                  finais ou qualquer terceiro que utiliza a Plataforma LOOCAL.
                  3.4.3. O Restaurante reconhece e concorda que o Investimento
                  deverá ser integralmente utilizado para a expansão da operação
                  do Restaurante, tal como, mas não se limitando a isso,
                  construção de uma nova filial do Restaurante ou reforma de
                  cozinha já existente (“Projeto de Expansão”), sendo certo que
                  as Partes, desde já, ajustam de comum acordo que: (a) a LOOCAL
                  também prestará os serviços para eventual nova filial do
                  Restaurante acima referida em regime de exclusividade; e (b)
                  na hipótese de eventual nova filial violar o Compromisso de
                  Exclusividade, o Restaurante ficará sujeito às penalidades
                  previstas neste Contrato. (acredito que essa parte pode ser
                  removida) 3.4.5. O Restaurante reconhece e concorda que a
                  LOOCAL poderá, a qualquer momento, solicitar a comprovação da
                  utilização do Investimento no Projeto de Expansão, devendo o
                  Restaurante disponibilizar os respectivos comprovantes à
                  LOOCAL no prazo máximo de 30 (trinta) dias contados da data de
                  recebimento da solicitação nesse sentido, sob pena de também
                  serem aplicadas as penalidades previstas no Contrato. CLÁUSULA
                  QUARTA – DA REMUNERAÇÃO 4.1. Comissão por entrega no valor de
                  R$ 2,00 (dois reais) por cada entrega realizada. 4.2. Modelo
                  pré-pago, sendo necessário inserir crédito através de (i) e
                  (ii): (i): Cartão de crédito: valor mínimo de 100 reais já
                  descontado o valor de 3.5% para antecipação do saldo,
                  disponível no mesmo dia; (ii): Boleto: valor mínimo 100 reais,
                  disponível até 48 horas; Saldo precisa ser maior ou igual ao
                  valor da entrega, e é consumido após a finalização da entrega.
                  Valor das entregas é considerado por km da distância entre o
                  estacionamento e o ponto de entrega e tabelado por região.
                  CLÁUSULA QUINTA – DOS TERMOS E CONDIÇÕES 5.1. O Restaurante
                  declara ter lido e expressamente concorda, sem quaisquer
                  reservas ou ressalvas, com os Termos e Condições Gerais de
                  Contratação da LOOCAL, os quais são parte integrante deste
                  Formulário de Contratação. O Restaurante reconhece e concorda
                  que a sua anuência integral com os Termos e Condições Gerais
                  de Contratação da LOOCAL é condição essencial para a
                  contratação dos serviços oferecidos pela LOOCAL. CLÁUSULA
                  SEXTA – DAS DISPOSIÇÕES GERAIS 6.1. Confidencialidade. O
                  Restaurante deverá manter sigilo absoluto sobre todas e
                  quaisquer informações a respeito da LOOCAL e dos Clientes
                  Finais a que tiver acesso em decorrência da contratação dos
                  serviços previstos no Contrato, incluindo das condições
                  comerciais definidas neste Formulário (“Informações
                  Confidenciais”), bem como deverá tomar todas as medidas
                  necessárias ou úteis para a manutenção da confidencialidade e
                  da integridade de referidas informações e somente poderá
                  utilizá-las para finalidades que resultem do presente
                  instrumento. Notificações. Quaisquer notificações referentes a
                  este Contrato deverão ser feitas por escrito; entregues em
                  mãos, com comprovante de recebimento; ou enviadas por
                  quaisquer meios que forneçam comprovante autenticado do seu
                  conteúdo e data de envio (incluindo por e-mail com confirmação
                  de recebimento). As notificações ao Restaurante deverão ser
                  enviadas ao endereço informado no preâmbulo deste Formulário.
                  As notificações à LOOCAL deverão ser enviadas entregues a R21
                  IMAGENS E TECNOLOGIA LIMITADA, com sede a Av. Senador Pinheiro
                  Machado, nº 544, Marape, Santos, SP, CEP: 11.075-000, e-mail:
                  comercial@loocal.online.
                </p>
              </div>

              <C.ButtonTerms onClick={handleModal}>Entendi</C.ButtonTerms>
            </C.CardTerms>
          </C.CardTermsContainer>
        )}

        <C.LeftContainer>
          <C.LeftArea>
            <div className="leftArea-header">
              <C.Logo src={Logo} />
            </div>
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
              </div>

              <div className="checkBox-container">
                <C.CheckBox type="checkbox" />
                <p className="remember">Lembre-me</p>

                <Link to="/login/senha" className="forgot-it">
                  Esqueci minha senha
                </Link>
              </div>

              <div className="rules">
                <p>
                  Ao acessar nosso sistema você concorda com nossos
                  <span onClick={handleModal}>Termos de Uso.</span>
                </p>
              </div>

              <C.ButtonSubmit>Entrar</C.ButtonSubmit>

              <div className="help">
                <p>
                  Precisa de ajuda?
                  <span>
                    <Link to="/login/ajuda"> Fale conosco</Link>
                  </span>
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
