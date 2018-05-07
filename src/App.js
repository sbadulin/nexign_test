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
  onClickAddUser = e => {
    this.setState({ totalUsers: this.state.totalUsers + 1 });
  };
  render() {
    const { userName, totalUsers } = this.state;
    let inputs = [];
    for (let i = 0; i < totalUsers; i++) {
      let placeholderText = `Ссылка на пользователя ${i + 1}`;
      inputs.push(
        <Input
          placeholder={placeholderText}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => (this.userNameInput = node)}
          key={i}
        />
      );
    }
    return (
      <div className="App">
        <Row align="middle" justify="centre" gutter={16}>
          <Col span={8} offset={8}>
            <h1>Во что поиграть вместе?</h1>
            <div>{inputs}</div>
            <h3 onClick={this.onClickAddUser}>
              {<Icon type="plus-circle" style={{ color: 'rgba(0,0,0)' }} />}
              Добавить пользователя
            </h3>
            <Button type="primary">Найти общие игры</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
