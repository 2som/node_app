// age, isAdmin, name, id
const express = require('express')
const app = express();
const port = 3000
const sequelize = require('./sequelize');

app.get('/api/users', async (req, res) => {
    const users = await sequelize.models.user.findAll();
    res.send(users);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})