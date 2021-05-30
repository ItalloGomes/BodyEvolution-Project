'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let MedidaUsuario = sequelize.define('MedidaUsuario',{
		id: {
            field: 'idMedidaUsuario',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		peso: {
            field: 'pesoMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: false
        },
        altura: {
            field: 'alturaMedidaUsuario',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gorduraCorporal: {
            field: 'gorduraCorporalMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        pescoco: {
            field: 'pescocoMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        cinturaEscapular: {
            field: 'cinturaEscapularMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        bracoDireito: {
            field: 'bracoDireitoMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        bracoEsquerdo: {
            field: 'bracoEsquerdoMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        peito: {
            field: 'peitoMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        cintura: {
            field: 'cinturaMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        quadril: {
            field: 'quadrilMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        coxaDireita: {
            field: 'coxaDireitaMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        coxaEsquerda: {
            field: 'coxaEsquerdaMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        panturrilhaDireita: {
            field: 'panturrilhaDireitaMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        panturrilhaEsquerda: {
            field: 'panturrilhaEsquerdaMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
        },
        dataHora: {
            field: 'dataHoraMedidaUsuario',
            type: DataTypes.FLOAT,
            allowNull: true
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

    return MedidaUsuario;
};
