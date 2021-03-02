const express = require('express')
const app = express();
const sequelize = require('./sequelize');

const port = process.env.NODE_PORT || 3000


app.get('/api/users', async (req, res) => {
  const users = await sequelize.models.user.findAll();
  res.send(users);
})

app.get('/', async (req, res) => {
  res.send("Hello world");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})