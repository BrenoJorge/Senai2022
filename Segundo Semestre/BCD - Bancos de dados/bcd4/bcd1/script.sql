-- excluir o banco se existir e criar um novo com o padrao utf8 de caracteres
drop database if exists clientes;
create database clientes charset=UTF8 collate utf8_general_ci;
use clientes;

create table clientes (
    id_cliente integer not null primary key auto_increment,
    nome varchar(20) not null,
    nascimento varchar(10) not null,
    sexo varchar(2) not null,
    peso varchar(1000) not null
);

create table telefones (
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;

-- Importação de arquivos CSV
LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd1/exercicio1clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


insert into telefones values(1,'(11)04023-4384');
insert into telefones values(1,"(14)3288-8530");
insert into telefones values(2,"(21)74746-1126");
insert into telefones values(2,"(14)64505-3435");
insert into telefones values(2,"(19)03086-1102");
insert into telefones values(3,"(14)64500-3435");
insert into telefones values(4,"(19)28260-0126");
insert into telefones values(5,"(21)34757-1544");
insert into telefones values(6,"(19)3030-4465");
insert into telefones values(6,"(19)93030-4460");

SELECT * FROM telefones;
SELECT * FROM clientes;

show tables;

create view vw_cliente as
select c.id_cliente, c.nome, c.nascimento, c.sexo, c.peso, t.telefone from clientes c
inner join telefones t
on c.id_cliente = t.id_cliente;

select * from vw_cliente;