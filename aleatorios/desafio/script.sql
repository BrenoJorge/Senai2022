drop database if exists agiota;
create database agiota charset = UTF8 collate utf8_general_ci;
use agiota;

create table cliente(
    cpf varchar(11) not null primary key,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    cep varchar(20) not null,
    complemento varchar(20) default "sem complemento"

) default charset = utf8;

create table telefone(
    cpf varchar(11) not null,
    tipo varchar(10) not null,
    telefone varchar(20) not null primary key,
    foreign key (cpf) references cliente(cpf)
) default charset = utf8;

create table emprestimo(
   id integer not null primary key,
   cpf varchar(11) not null,
   data datetime not null,
   capital decimal(5,2) not null,
   n_parcelas integer not null,
   montante decimal(5,2) not null,
   taxa_juros decimal(5,2),
   imposto decimal(5,2) not null
) default charset = utf8;

create table parcela(
    id integer primary key,
    vencimento date not null,
    pagamento date not null,
    valor decimal(5,2) not null,
    val_recebido decimal(5,2) not null,
    foreign key(id) references emprestimo(id)
) default charset = utf8;

create table logTeste(
    teste decimal(5,2) not null
) default charset = utf8;

--> importacao de dados
LOAD DATA INFILE 'C:/Users/Aluno/Desktop/desafio/csv/clientes.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
set complemento = default;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/desafio/csv/emprestimos.csv'
INTO TABLE emprestimo
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Aluno/Desktop/desafio/csv/telefones.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--> view cliente e telefones
create view vw_cliente as 
select c.cpf, c.pri_nome, c.sobrenome, c.cep, c.complemento, t.tipo, t.telefone
as telefone from cliente c inner join telefone t on c.cpf = t.cpf;

 select * from vw_cliente ORDER BY pri_nome ASC;

--> TRIGGERS
DELIMITER $

CREATE PROCEDURE parcelas_mes(out teste float)
BEGIN
    insert into logTeste values(teste);
END $


CREATE TRIGGER calcular_parcelas BEFORE INSERT ON emprestimo
FOR EACH ROW 
BEGIN
    declare montante float;
    SET montante = NEW.capital * (power((1 + NEW.taxa_juros), NEW.n_parcelas)) + NEW.imposto;
    call parcelas_mes(montante);
END $

DELIMITER ;
