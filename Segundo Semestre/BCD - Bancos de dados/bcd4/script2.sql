-- excluir o banco se existir e criar um novo com o padrao utf8 de caracteres
drop database if exists academia;

create database academia charset = UTF8 collate utf8_general_ci;

use academia;

create table aluno (
    id_aluno integer not null primary key auto_increment,
    nome varchar(20) not null,
    nascimento varchar(10) not null,
    peso DECIMAL(3, 2) not null,
    sexo varchar(2) not null
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
    id_aparelho integer not null,
    id_exercicio integer not null primary key auto_increment,
    descricao_exercicio varchar(20) not null,
    grupo_muscular varchar(20) not null,
    foreign key (id_aparelho) references aparelho(id_aparelho)
);

create table ficha_exercicio (
    id_aparelho integer not null,
    id_aluno integer not null,
    foreign key (id_aparelho) references aparelho(id_aparelho),
    foreign key (id_aluno) references aluno(id_aluno),
    dia_semana varchar(20) not null,
    serie varchar(30) not null
);

show tables;