-- excluir o banco se existir e criar um novo com o padrao utf8 de caracteres
drop database if exists onibus;

create database onibus charset = UTF8 collate utf8_general_ci;

use onibus;

create table motorista (
    cpf integer (11) not null primary key,
    nome varchar(20) not null
);

create table linha (
    id_linha integer(100) not null primary key,
    descricao_linha varchar(30) not null
);

create table telefones (
    cpf_motorista integer not null,
    telefone varchar(15) not null,
    foreign key (cpf_motorista) references motorista(cpf)
);

create table horario_linha (
    id_linha integer not null,
    horario varchar(20) not null,
    foreign key (id_linha) references linha(id_linha)
);

create table mot_linha (
    cpf_motorista integer not null,
    id_linha integer not null,
    foreign key (cpf_motorista) references motorista(cpf),
    foreign key (id_linha) references linha(id_linha),
    dia_data DATE
);

show tables;