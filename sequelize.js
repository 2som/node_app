const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_app', 'mysql_user', 'password', {
    host: 'localhost',
    dialect: 'mariadb',
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