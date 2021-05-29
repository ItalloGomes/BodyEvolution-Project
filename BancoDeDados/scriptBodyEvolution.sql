create database bdBodyEvolution;
-- drop database bdBodyEvolution;

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
    ,peitoMedidaUsuario float
    ,cinturaMedidaUsuario float
	,quadrilMedidaUsuario float
	,coxaDireitaMedidaUsuario float
    ,coxaEsquerdaMedidaUsuario float
    ,panturrilhaDireitaMedidaUsuario float
    ,panturrilhaEsquerdaMedidaUsuario float
    ,dataHoraMedidaUsuario datetime default current_timestamp
    ,fkUsuario int
    ,foreign key(fkUsuario) references tbUsuario(idUsuario)
);

create table tbExercicio(
	idExercicio int primary key auto_increment
    ,nomeExercicio varchar(50) not null
    ,musculoRecrutadoExercicio varchar(50)
);

create table tbExercicioUsuario(
	fkExercicio int
    ,foreign key(fkExercicio) references tbExercicio(idExercicio)
    ,fkUsuario int
    ,foreign key(fkUsuario) references tbUsuario(idUsuario)
    ,cargaExercicioUsuario float
);









