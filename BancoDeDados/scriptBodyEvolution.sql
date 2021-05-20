create database bdBodyEvolution;

use bdBodyEvolution;

create table tbUsuario(
	idUsuario int primary key auto_increment
    ,nomeUsuario varchar(100) not null
    ,dataNasctoUsuario date not null
    ,emailUsuario varchar(100) not null
    ,senhaUsuario varchar(50) not null
);

create table tbMedidaUsuario(
	idMedidaUsuario int primary key auto_increment
    ,pesoMedidaUsuario float
    ,alturaMedidaUsuario int
    ,gorduraCorporalMedidaUsuario float
    ,pescocoMedidaUsuario float
    ,cinturaEscapularMedidaUsuario float
    ,bracoDireitoMedidaUsuario float
    ,bracoEsquerdoMedidaUsuario float
    ,


);