import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

export default function DisplayData({ values }) {
  return (
    <div>
      {values.map(cD => (
        <Row key={cD.label} className="justify-content-md-center">
          <Col lg={8}>{cD.label}</Col>
          <Col lg={4}>{cD.value}</Col>
        </Row>
      ))}
    </div>
  );
}

DisplayData.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  values: PropTypes.array.isRequired,
};
