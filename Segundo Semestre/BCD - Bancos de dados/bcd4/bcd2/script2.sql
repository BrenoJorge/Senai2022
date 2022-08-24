-- excluir o banco se existir e criar um novo com o padrao utf8 de caracteres
drop database if exists academia;

create database academia charset = UTF8 collate utf8_general_ci;

use academia;

create table aluno (
    id_aluno integer not null primary key auto_increment,
    nome varchar(20) not null,
    nascimento varchar(10) not null,
    sexo varchar(2) not null,
    peso varchar(1000) not null
);

create table aparelho (
    id_aparelho integer not null primary key auto_increment,
    aparelho varchar(20) not null
);

create table telefones (
    id_aluno integer not null,
    telefone varchar(15) not null,
    foreign key (id_aluno) references aluno(id_aluno)
);

create table exercicio (
    id_exercicio integer not null primary key auto_increment,
    descricao_exercicio varchar(20) not null,
    grupo_muscular varchar(20) not null,
    id_aparelho integer not null,
    foreign key (id_aparelho) references aparelho(id_aparelho)
);

create table ficha_exercicio (
    id_aluno integer not null,
    id_exercicio integer not null,
    foreign key (id_exercicio) references exercicio(id_exercicio),
    foreign key (id_aluno) references aluno(id_aluno),
    dia_semana varchar(20) not null,
    serie varchar(1000) not null
);

show tables;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd2/alunos.csv'
INTO TABLE aluno
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd2/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd2/ficha.csv'
INTO TABLE ficha_exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd2/aparelhos.csv'
INTO TABLE aparelho
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/Senai2022/Segundo Semestre/BCD - Bancos de dados/bcd4/bcd2/exercicios.csv'
INTO TABLE exercicio
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;