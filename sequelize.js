const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_app', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      timestamps: false
    },
  });

const modelDefiners = [
    require('./models/User'),
]

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;