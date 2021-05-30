'use strict'

module.exports = (sequelize, DataTypes) => {
    let ExercicioUsuario = sequelize.define('ExercicioUsuario',{
        fkExercicio: {
            field: 'fkExercicio',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        carga:{
            field: 'cargaExercicioUsuario',
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: 'tbExercicioUsuario',
        freezeTableName: true,
        underscored: true,
        timestamps: false
    })

    return ExercicioUsuario;
};