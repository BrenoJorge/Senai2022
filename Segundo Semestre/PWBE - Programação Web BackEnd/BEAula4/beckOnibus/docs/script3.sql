-- excluir o banco se existir e criar um novo com o padrao utf8 de caracteres
drop database if exists onibus;

create database onibus charset = UTF8 collate utf8_general_ci;

use onibus;

create table motorista (
    cpf varchar(18) not null primary key,
    nome varchar(20) not null
);

create table linha (
    id_linha varchar(100) not null primary key,
    descricao_linha varchar(30) not null
);

create table telefones (
    cpf_motorista varchar(18) not null,
    telefone varchar(15) not null,
    foreign key (cpf_motorista) references motorista(cpf)
);

create table horario_linha (
    id_linha varchar(100) not null,
    horario varchar(20) not null,
    foreign key (id_linha) references linha(id_linha)
);

create table mot_linha (
    cpf_motorista varchar(18) not null,
    id_linha varchar(100) not null,
    foreign key (cpf_motorista) references motorista(cpf),
    foreign key (id_linha) references linha(id_linha),
    dia_data DATE
);

show tables;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd3/mot.csv'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM motorista;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd3/linhas.csv'
INTO TABLE linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM linha;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd3/tel.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM telefones;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd3/horario.csv'
INTO TABLE horario_linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM horario_linha;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd3/mot_linha.csv'
INTO TABLE mot_linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM mot_linha;

create view vw_cliente as
select m.cpf, m.nome, t.telefone from motorista m
inner join telefones t
on m.cpf = t.cpf_motorista;

select * from vw_cliente;