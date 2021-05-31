create database bdBodyEvolution;
-- drop database bdBodyEvolution;

use bdBodyEvolution;

create table tbUsuario(
	idUsuario int primary key auto_increment
    ,nomeUsuario varchar(100) not null
    ,sexoUsuario varchar(1) not null
    ,check (sexoUsuario = 'm' or sexoUsuario = 'f')
    ,biotipoUsuario varchar(5)
    ,check (biotipoUsuario = 'ecto' or biotipoUsuario = 'meso' or biotipoUsuario = 'endo')
    ,dataNasctoUsuario date not null
    ,emailUsuario varchar(100) not null
    ,senhaUsuario varchar(50) not null
);

create table tbMedidaUsuario(
	idMedidaUsuario int primary key auto_increment
    ,pesoMedidaUsuario float
    ,alturaMedidaUsuario int
    -- ,gorduraCorporalMedidaUsuario float
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

create table tbMacros(
	idMacros int primary key auto_increment
    
    ,proteinaMacros float not null
    ,gorduraMacros float not null
    ,carboMacros float not null
    
    ,taxaMetabolicaMacros float not null
    ,gastoCaloricoTreinoMacros float not null
    ,consumoObjetivoMacros float not null
    
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
    ,primary key(fkExercicio, fkUsuario)
    ,cargaExercicioUsuario float
);

/* SELECTS E DESCS*/

desc tbUsuario;
desc tbMedidaUsuario;
desc tbMacros;
desc tbExercicioUsuario;
desc tbExercicio;

select * from tbUsuario;
select * from tbMacros;
select * from tbMedidaUsuario;
select * from tbExercicio;


/* INSERTS */

insert into tbExercicio(nomeExercicio, musculoRecrutadoExercicio) 
values ('Supino Reto', 'Peitoral')
		,('Supino Inclinado', 'Peitoral')
		,('Supino Declinado', 'Peitoral')
        ,('Crucifixo', 'Peitoral')
        ,('Pull Over', 'Peitoral')
        ,('Elevação Lateral', 'Ombro')
        ,('Elevação Frontal', 'Ombro')
        ,('Desenvolvimento Militar', 'Ombro')
        ,('Remada Baixa', 'Dorsal')
        ,('Remada Unilateral', 'Dorsal')
        ,('Pulley frente', 'Dorsal')
        ,('Remada curvada', 'Dorsal')
        ,('Pull Down', 'Dorsal')
        ,('Rosca Direta', 'Biceps')
        ,('Rosca Alternada', 'Biceps')
        ,('Extensão de Triceps', 'Triceps')
        ,('Triceps Francês', 'Triceps')
        ,('Extensão de Triceps Polia', 'Triceps')
        ,('Agachamento', 'Quadriceps')
        ,('Leg Press', 'Quadriceps')
		,('Cadeira Extensora', 'Quadriceps')
		,('Cadeira Flexora', 'Posterior de coxa')
        ,('Elevação de panturrilha', 'Panturrilha')
        ,('Abdominal', 'Abdomen')
        ,('Elevação de Pernas', 'Abdomen');





