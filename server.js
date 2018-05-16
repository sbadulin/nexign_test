const express = require('express');
const axios = require('axios');

const app = express();

// импортируем переменные окружения из файла variables.env
require('dotenv').config({ path: 'variables.env' });

app.set('port', 4000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express запущен → PORT ${server.address().port}`);
});

app.get('/getUser/:userName', async (req, res) => {
  try {
    const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAM_KEY}&vanityurl=${req.params.userName}`;
    console.log(url);
    axios
      .get(url, (err, response, body) => {
        if (!err && response.statusCode < 400) {
          console.log(body);
          // res.setHeader('Content-Type', 'application/json');
          // res.send(body);
        }
      });
  } catch (e) {
    console.error(e);
  }
});
