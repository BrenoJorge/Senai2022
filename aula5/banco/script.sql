drop databese if exits lojinha;
create database lojinha;

use lojinha;

create table produtos(
    id integer auto_increment primary key,
    cod varchar(10) not null unique,
    nome varchar(50) not null,
    qtd integer not null,
    preco float(5,2) not null
);

insert into produtos values(null, '420', 'haxixe', 3, 20.00);
insert into produtos values(null, '42', 'shunk', 10, 40.00);
insert into produtos values(null, '1', 'dichavador', 5, 25.50);