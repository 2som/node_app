// age, isAdmin, name, id
const express = require('express')
const app = express();
const port = 3000
const sequelize = require('./sequelize');
const cors = require('cors');

const  whitelist = ['http://localhost:3001', 'http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.get('/api/users', async (req, res) => {
    const users = await sequelize.models.user.findAll();
    res.send(users);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})