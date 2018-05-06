import React, { Component } from 'react';
import './App.css';
import { Button, Row, Col } from 'antd';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row align="middle" justify="centre" gutter={16}>
          <Col span={8} offset={8}>
            <h1>Во что поиграть вместе?</h1>
            <Button type="primary">Button</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
