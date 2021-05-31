	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nomeUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		sexo: {
			field: 'sexoUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		biotipo: {
			field: 'biotipoUsuario',
			type: DataTypes.STRING,
			allowNull: true
		},
		dataNascto: {
			field: 'dataNasctoUsuario',
			type: DataTypes.DATE,
			allowNull: false
		},
		email: {
			field: 'emailUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senhaUsuario',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'tbUsuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
