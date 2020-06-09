import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import { SectionHeader } from './styles';
import DisplayData from '~/components/DisplayData';

export default function ColContent({ values }) {
  const serasaData = values[0];
  const bacenData = values[1];
  const spcData = values[2];
  return (
    <div>
      <Row>
        <Col>
          <SectionHeader>
            <h6>SERASA</h6>
          </SectionHeader>
          <DisplayData values={serasaData} />
        </Col>
        <Col>
          <SectionHeader>
            <h6>BACEN</h6>
          </SectionHeader>
          <DisplayData values={bacenData} />
        </Col>
        <Col>
          <SectionHeader>
            <h6>SPC</h6>
          </SectionHeader>
          <DisplayData values={spcData} />
        </Col>
      </Row>
    </div>
  );
}

ColContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  values: PropTypes.array.isRequired,
};
