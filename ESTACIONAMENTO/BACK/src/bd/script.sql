drop database if exists Estacionamento;
create database Estacionamento charset=UTF8 collate utf8_general_ci;
use Estacionamento;


create table cliente(
    id_cli integer not null auto_increment primary key,
    nome varchar(100) not null,
    cpf varchar(11) not null
) ;

create table telefones(
    id_cli integer not null,
    telefone varchar(15),
    foreign key (id_cli) references cliente(id_cli) on delete cascade
);

create table veiculo(
    placa varchar(8) not null primary key,
    modelo varchar(20) not null,
    descricao varchar(100)
);

create table entrada(
    id_cli integer not null,
    placa_veiculo varchar(8) not null,
    entrada datetime not null,
    saida datetime not null,
    valor numeric(5,2) not null,
    foreign key (id_cli) references cliente(id_cli),
    foreign key(placa_veiculo) references veiculo(placa)
);

create view vw_cliente as select c.id_cli, c.nome, c.cpf, telefone from 
cliente c left outer join telefones t on t.id_cli = c.id_cli order by c.id_cli ASC;

insert into cliente values(null, "rodolfo", "40028922009");
insert into telefones values(LAST_INSERT_ID(), "5253525122");
insert into telefones values(1, "133225122");
insert into telefones values(1, "133225122");
insert into veiculo values("ABC_DEFG", "fiat uno", "lateral traseira amassada");
insert into entrada values(2, "HBV2020", now(),  "2022-10-7T14:25:10", 50);

-- procedure
drop procedure if exists insere_dados;
delimiter //
create procedure insere_dados(nome varchar(100), cpf varchar(11), telefone varchar(15))
	begin
	    declare erro_sql tinyint default false;
	    declare continue handler for sqlexception set erro_sql = true;
        
        insert into cliente values(null, nome, cpf);
        insert into telefones values(LAST_INSERT_ID(), telefone);
    end//
delimiter ;
