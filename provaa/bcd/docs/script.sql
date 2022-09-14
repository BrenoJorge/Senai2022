drop database if exists Locadoura;
create database Locadoura charset=UTF8 collate utf8_general_ci;
use Locadoura;


create table clientes(
    codigo integer not null primary key,
    nome varchar(50) not null,
    endereco varchar(100) not null,
    telefone varchar(100) not null
);

create table filmes(
    codigo integer not null primary key auto_increment,
    nome varchar(50) not null,
    genero varchar(100) not null
);

create table locacoes(
    id integer not null primary key auto_increment,
    codigo_cli integer not null,
    foreign key (codigo_cli) references clientes(codigo),
    codigo_filme integer not null,
    foreign key (codigo_filme) references filmes(codigo),
    data_locacao date,
    data_davolucao date
);


show tables;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/provaa/bcd/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/provaa/bcd/docs/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/provaa/bcd/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/provaa/bcd/docs/locacoes.csv'
INTO TABLE locacoes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;
select * from clientes;
select * from filmes;
select * from locacoes;
