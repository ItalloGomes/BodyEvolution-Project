'use strict';

module.exports = (sequelize, DataTypes) => {
    let Macro = sequelize.define('Macro',{
        id: {
            field: 'idMacros',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		proteina: {
            field: 'proteinaMacros',
            type: DataTypes.FLOAT,
            allowNull: false
        },
        gordura: {
            field: 'gorduraMacros',
            type: DataTypes.FLOAT,
            allowNull: false
        },
        carbo: {
            field: 'carboMacros',
            type: DataTypes.FLOAT,
            allowNull: false
        },
        taxaMetabolica: {
            field: 'taxaMetabolicaMacros',
            type: DataTypes.FLOAT,
            allowNull: false
        },
        gastoCaloricoTreino: {
            field: 'gastoCaloricoTreinoMacros',
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: true
        } 
    },
    {
        tableName: 'tbMedidaUsuario', 
        freezeTableName: true, 
        underscored: true,
        timestamps: false,
        
    });

    return Macro;
};