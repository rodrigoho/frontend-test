export const CUSTOMER = {
  name: 'Pedro',
  cpfNumber: '001.001.001-01',
  birthDate: '01/01/1993',
  birthAddress: 'Brasília, Distrito Federal',
  monthlyIncome: 8500,
  availableCredit: 150000,
  stocksApplications: 250000,
  realEstateFunds: 350000,
  currentLoanAmount: 110000,
  paidLoanAmount: 800000,
  withdrewApplications: 220000,
  serasaData: {
    contractsAmount: 3,
    score: 800,
  },
  bacenData: {
    delayedBills: 3,
    isNegative: true,
  },
  spcData: {
    delayedBills: 0,
    isNegative: false,
  },
};

export const SERASA_DATA = [
  {
    label: 'Número de contratos: ',
    value: CUSTOMER.serasaData.contractsAmount,
  },
  {
    label: 'Score: ',
    value: CUSTOMER.serasaData.score,
  },
];

export const BACEN_DATA = [
  {
    label: 'Faturas atrasadas: ',
    value: CUSTOMER.bacenData.delayedBills,
  },
  {
    label: 'Negativo: ',
    value: CUSTOMER.bacenData.isNegative ? 'Sim' : 'Não',
  },
];

export const SPC_DATA = [
  {
    label: 'Faturas atrasadas: ',
    value: CUSTOMER.spcData.delayedBills,
  },
  {
    label: 'Negativo: ',
    value: CUSTOMER.spcData.isNegative ? 'Sim' : 'Não',
  },
];

export const CUSTOMER_DATA = [
  {
    label: 'Nome: ',
    value: CUSTOMER.name,
  },
  {
    label: 'CPF: ',
    value: CUSTOMER.cpfNumber,
  },
  {
    label: 'Data de nascimento: ',
    value: CUSTOMER.birthDate,
  },
  {
    label: 'Local de nascimento: ',
    value: CUSTOMER.birthAddress,
  },
  {
    label: 'Renda mensal',
    value: `R$ ${CUSTOMER.monthlyIncome.toFixed(2)}`,
  },
];

export const APPLICATIONS_DATA = [
  {
    label: 'Saldo em Fundos de investimento: ',
    value: `R$ ${CUSTOMER.realEstateFunds.toFixed(2)}`,
  },
  {
    label: 'Saldo em Ações: ',
    value: `R$ ${CUSTOMER.stocksApplications.toFixed(2)}`,
  },
];

export const AVAILABLE_CREDIT = [
  {
    label: 'Crédito disponível: ',
    value: `R$ ${CUSTOMER.availableCredit.toFixed(2)}`,
  },
];

export const PAID_CREDIT_AND_LOAN_DATA = [
  {
    label: 'Empréstimos em aberto: ',
    value: `R$ ${CUSTOMER.currentLoanAmount.toFixed(2)}`,
  },
  {
    label: 'Empréstimos pagos: ',
    value: `R$ ${CUSTOMER.paidLoanAmount.toFixed(2)}`,
  },
  {
    label: 'Aplicações resgatadas: ',
    value: `R$ ${CUSTOMER.withdrewApplications.toFixed(2)}`,
  },
];
