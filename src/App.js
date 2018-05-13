import React, { Component } from 'react';
import './App.css';
import { Button, Row, Col, Input, Icon, Form } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUsers: 3
    };
  }
  onChangeUserName = e => {
    this.setState({ ['userName' + e.target.dataset.id]: e.target.value });
  };
  onClickAddUser = e => {
    this.setState({
      totalUsers: this.state.totalUsers + 1
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.getValue());
    // Здесь запрашиваем данные из API
  };
  render() {
    const { totalUsers } = this.state;
    let inputs = [];
    for (let i = 0; i < totalUsers; i++) {
      let placeholderText = `Ссылка на пользователя ${i + 1}`;
      inputs.push(
        <Input
          placeholder={placeholderText}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          value={this.state['userName' + i] || ''}
          onChange={this.onChangeUserName}
          ref={node => (this.userNameInput = node)}
          key={i}
          data-id={i}
        />
      );
    }
    return (
      <div className="App">
        <Row align="middle" justify="centre" gutter={16}>
          <Col span={8} offset={8}>
            <h1>Во что поиграть вместе?</h1>
            <Form onSubmit={this.onFormSubmit}>
              <div>{inputs}</div>
              <h3 onClick={this.onClickAddUser} style={{ cursor: 'pointer' }}>
                {<Icon type="plus-circle" style={{ color: 'rgba(0,0,0)' }} />}
                 Добавить пользователя
              </h3>
              <Button type="primary" htmlType="submit">
                Найти общие игры
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
