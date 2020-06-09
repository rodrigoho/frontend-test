import React from 'react';
import { Container } from 'react-bootstrap';
import DisplayData from '~/components/DisplayData';
import ColContent from '~/components/ColContent';
import OperationSimulator from '~/components/OperationSimulator';

import { Box, SectionHeader } from './styles';
import * as Customer from '~/MockData/constants';

export default function Dashboard() {
  return (
    <Container>
      <Box>
        <SectionHeader>Dados pessoais</SectionHeader>
        <DisplayData values={Customer.CUSTOMER_DATA} />

        <SectionHeader>Aplicações</SectionHeader>
        <DisplayData values={Customer.APPLICATIONS_DATA} />

        <SectionHeader>Limite disponível</SectionHeader>
        <DisplayData values={Customer.AVAILABLE_CREDIT} />

        <SectionHeader>Operações</SectionHeader>
        <DisplayData values={Customer.PAID_CREDIT_AND_LOAN_DATA} />

        <SectionHeader>
          <h5>Restrições e Impedimentos</h5>
        </SectionHeader>
        <ColContent
          values={[
            Customer.SERASA_DATA,
            Customer.BACEN_DATA,
            Customer.SPC_DATA,
          ]}
        />
      </Box>
      <Box>
        <SectionHeader className="black-color">
          <h4>Simulador de operações</h4>
        </SectionHeader>

        <OperationSimulator customerData={Customer.CUSTOMER} />
      </Box>
    </Container>
  );
}
