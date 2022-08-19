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
    num_duplicate integer not null primary key,
    cod_cliente integer not null,  
    data_compra DATE,
    vencimento DATE,
    pagamento DATE,
    valor DECIMAL(5,2) not null,
    difecenca DECIMAL(5,2) not null,
    v_final DECIMAL(5,2) not null,
    status varchar(10) not null,
    foreign key (cod_cliente) references cliente(cod_cliente)
);

show tables;