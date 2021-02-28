// age, isAdmin, name, id
const express = require('express')
const app = express();
const sequelize = require('./sequelize');
// const cors = require('cors');
const path = require('path');

const port = process.env.NODE_PORT || 3000

// const  whitelist = ['http://localhost:3001', 'http://localhost:3000']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/users', async (req, res) => {
  const users = await sequelize.models.user.findAll();
  console.log(__dirname);
  res.send(users);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})