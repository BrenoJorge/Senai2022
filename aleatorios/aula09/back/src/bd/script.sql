drop database if exists Patrimonio;
create database Patrimonio charset=UTF8 collate utf8_general_ci;
use Patrimonio;

create table itens(
    ni numeric(6) not null,
    aquisicao timestamp not null,
    denominacao varchar(100) not null,
    valor numeric(10,2),
    img varchar(200) default 'default.png',
    constraint pk_item primary key(ni)
) ;

describe itens;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Senai2022/aleatorios/aula09/back/src/bd/itens.csv'
INTO TABLE itens
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from itens;