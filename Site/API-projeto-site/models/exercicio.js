'use strict'

module.exports = (sequelize, DataTypes) => {
    let Exercicio = sequelize.define('Exercicio', {
        id: {
            field: 'idExercicio',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            field: 'nomeExercicio',
            type: DataTypes.STRING,
            allowNull: false
        },
        musculoRecrutado: {
            field: 'musculoRecrutadoExercicio',
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tbExercicio',
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
    });

    return Exercicio;
};