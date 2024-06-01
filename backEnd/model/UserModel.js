const { DataTypes, Sequelize } = require('sequelize');
const {sequelize} = require('../config/db');

exports.User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    full_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'Users'
});

