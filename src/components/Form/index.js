import React, { Component } from 'react';
import { Button, Input, Icon, Form } from 'antd';

class LargeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUsers: 3,
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
      // Здесь запрашиваем данные из API
    };
    render() {
      const { totalUsers } = this.state;
      const inputs = [];
      for (let i = 0; i < totalUsers; i++) {
        const placeholderText = `Ссылка на пользователя ${i + 1}`;
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
        <Form onSubmit={this.onFormSubmit}>
          <div>{inputs}</div>
          <div onClick={this.onClickAddUser} style={{ cursor: 'pointer' }}>
            {<Icon type="plus-circle" style={{ color: 'rgba(0,0,0)' }} />}
             Добавить пользователя
          </div>
          <Button type="primary" htmlType="submit">
            Найти общие игры
          </Button>
        </Form>
      );
    }
  }
  
export default LargeForm;
  