import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Icon, Form } from 'antd';

class LargeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUsers: 3,
      userName1: 'gwellir',
      userName2: 'hwestar',
      userName3: 'Tryr',
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
      const { userName1 } = this.state;
      axios.get(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=7D5F2FA02FF09ACA687DE979BE355B30&vanityurl=${userName1}`, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" } })
        .then(result => {
          axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1?key=7D5F2FA02FF09ACA687DE979BE355B30&include_played_free_games=1&format=json&steamid=${result.steamId}`)
            .then(games => {
              console.log(games);
            });
        })
        .catch(() => {
          this.errors = [{
            id: 'failed',
            message: 'Сервис недоступен, попробуйте позднее',
          }];
        });
    };
    render() {
      const { totalUsers } = this.state;
      const inputs = [];
      for (let i = 1; i <= totalUsers; i++) {
        const placeholderText = `Ссылка на пользователя ${i}`;
        inputs.push(
          <Input
            placeholder={placeholderText}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={this.state['userName' + i] || ''}
            onChange={this.onChangeUserName}
            ref={node => (this.userNameInput = node)}
            key={i}
            data-id={i}
            required
          />
        );
      }
      return (
        <Form onSubmit={e => this.onFormSubmit(e)}>
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
  