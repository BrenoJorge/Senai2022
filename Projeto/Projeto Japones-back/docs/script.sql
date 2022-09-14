drop database if exists loja_japa;

create database loja_japa charset=utf8 collate utf8_unicode_ci;

use loja_japa;

create table produtos(
    n_lancamento integer primary key not null auto_increment,
    data date not null,
    descricao varchar(100) not null,
    valor float(5,2) not null,
    tipo varchar(1) not null
);

describe produtos;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Projeto/Projeto Japones-back/docs/dados.csv'
INTO TABLE produtos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from produtos;