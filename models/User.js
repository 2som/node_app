const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define('user', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING,
		},
        age: {
            type: DataTypes.INTEGER
        },
        isadmin: {
            type: DataTypes.BIGINT
        }, 
	});
}