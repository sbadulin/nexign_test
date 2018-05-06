import React, { Component } from 'react';
import './App.css';
import { Button, Row, Col, Input, Icon } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUsers: 3,
      userName: ''
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  };
  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };
  render() {
    const { userName, totalUsers } = this.state;
    let inputs = [];
    for (let i = 0; i < totalUsers; i++) {
      inputs.push(
        <Input
          placeholder="Ссылка на пользователя"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => (this.userNameInput = node)}
        />
      );
    }
    return (
      <div className="App">
        <Row align="middle" justify="centre" gutter={16}>
          <Col span={8} offset={8}>
            <h1>Во что поиграть вместе?</h1>
            <div>{inputs}</div>
            <Button type="primary">Найти общие игры</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
