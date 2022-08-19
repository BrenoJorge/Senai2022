-- excluir o banco se existir e criar um novo com o padrao utf8 de caracteres
drop database if exists cliente;
create database clientes charset=UTF8 collate utf8_general_ci;
use clientes;

create table clientes (
    id_cliente integer not null primary key auto_increment,
    nome varchar(20) not null,
    nascimento varchar(10) not null,
    peso DECIMAL(3,2) not null,
    sexo varchar(2) not null,
);

create table telefones (
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;

show tables;