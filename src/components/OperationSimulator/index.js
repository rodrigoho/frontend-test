import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Col } from 'react-bootstrap';

export default function OperationSimulator({ customerData }) {
  const [operationType, setOperationType] = useState('2');
  const [applicationType, setApplicationType] = useState('1');
  const [fieldsToShow, setFieldsToShow] = useState('1');

  const OPERATION_TYPES = [
    { label: 'Empréstimo', value: '1' },
    { label: 'Aplicação', value: '2' },
  ];

  const APPLICATION_TYPES = [
    { label: 'Fundos de investimento', value: '1' },
    { label: 'Ações', value: '2' },
  ];

  useEffect(() => {
    const handleOperationTypeChange = () => {
      setFieldsToShow(operationType);
    };

    handleOperationTypeChange();
  }, [fieldsToShow, operationType]);
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formOperationType">
          <Form.Label>Tipo de operação</Form.Label>
          <Form.Control
            as="select"
            size="sm"
            className="select-width"
            value={operationType}
            onChange={e => setOperationType(e.target.value)}
          >
            {OPERATION_TYPES.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formLoanAmount">
          <Form.Label>Limite</Form.Label>
          <Form.Control
            disabled
            size="sm"
            type="text"
            placeholder={`até R$ ${customerData.availableCredit}`}
          />
        </Form.Group>
      </Form.Row>

      {fieldsToShow === '2' ? (
        <Form.Row>
          <Form.Group as={Col} controlId="formApplicationType">
            <Form.Label>Tipo de aplicação</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              value={applicationType}
              onChange={e => setApplicationType(e.target.value)}
            >
              {APPLICATION_TYPES.map(o => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formApplicationAmount">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder={`até R$ ${customerData.availableCredit}`}
            />
          </Form.Group>
        </Form.Row>
      ) : (
        <Form.Row>
          <Form.Group as={Col} controlId="formLoanAmount">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder={`até R$ ${customerData.availableCredit}`}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formOperationType" />
        </Form.Row>
      )}
    </Form>
  );
}

OperationSimulator.propTypes = {
  customerData: PropTypes.shape([]).isRequired,
};
