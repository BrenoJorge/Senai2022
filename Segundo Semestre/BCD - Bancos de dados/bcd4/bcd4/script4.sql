-- excluir o banco se existir e criar um novo com o padrao utf8 de caracteres
drop database if exists duplicate;

create database duplicate charset = UTF8 collate utf8_general_ci;

use duplicate;

create table cliente (
    cod_cliente integer not null primary key auto_increment,
    nome varchar(20) not null,
    endereco varchar(20) not null,
    bairro varchar(10) not null,
    cidade varchar(10) not null,
    uf varchar(10) not null
);

create table telefones (
    cod_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (cod_cliente) references cliente(cod_cliente)
);

create table compra (
    num_duplicate integer not null,
    cod_cliente integer not null,  
    data_compra DATE,
    vencimento DATE,
    pagamento DATE,
    valor varchar(255) not null,
    difecenca varchar(255) not null,
    v_final varchar(255) not null,
    status varchar(10) not null,
    foreign key (cod_cliente) references cliente(cod_cliente)
);

show tables;


LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd4/cliente.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd4/telefone.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd4/dupli.csv'
INTO TABLE compra
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

create view duplicatas_aberto as
select * from compra where status = "Em aberto"