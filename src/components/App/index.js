import React from 'react';
import { Row, Col } from 'antd';
import Form from '../Form';
import './App.css';

const App = () => (
  <div className="App">
    <Row align="middle" justify="centre" gutter={16}>
      <Col span={8} offset={8}>
        <h1>Во что поиграть вместе?</h1>
        <Form />
      </Col>
    </Row>
  </div>
);

export default App;
