drop database if exists pizzaria;
create database pizzaria charset = UTF8 collate utf8_general_ci;
use pizzaria;

create table cliente(
    cliente_id integer not null auto_increment primary key,
    telefone varchar(15) not null,
    nome varchar(30) not null,
    logradouro varchar(30) not null,
    numero decimal(5,0) not null,
    complemento varchar(30) not null,
    bairro varchar(30) not null,
    referencia varchar(30) default "sem referencia"
) default charset = utf8;

create table pizza(
    pizza_id integer not null auto_increment primary key,
    nome varchar(30),
    descricao varchar(100),
    valor decimal(4,2)
) default charset = utf8;

create table pedido(
    pedido_id integer not null auto_increment primary key,
    cliente_id integer not null,
    data datetime not null,
    valor decimal(5,2),
    foreign key (cliente_id) references cliente(cliente_id)
) default charset = utf8;

create table item_pedido(
    pedido_id integer not null,
    pizza_id integer not null,
    quantidade decimal(2,0),
    valor decimal(5,2),
    foreign key (pedido_id) references pedido(pedido_id),
    foreign key (pizza_id) references pizza(pizza_id)
) default charset = utf8;

show tables;

insert into pizza values
(default,"Mussarela", "Massa tradicional, molho de tomate, mussarela, tomate e orégano.", 54.99),
(default,"Frango com Catupiry", "Massa tradicional, molho de tomate, frango, mussarela e catupiry.", 54.99),
(default,"Brócolis", "Massa tradicional, molho de tomate, brócolis, mussarela, alho frito e bacon.", 54.99),
(default,"Americana", "Masa tradicional, molho de tomate, presunto, mussarela e tomate.", 54),
(default,"Frango com Cheddar", "Massa tradicional, molho de tomate, frango, mussarela e cheddar.", 54.99),
(default,"Baiana", "Massa tradicional, molho de tomate, calabresa, mussarela, ovo, cebola e pimenta.", 54.99),
(default,"Palmito", "Massa tradicional, molho de tomate, palmito mussarela e catupiry.", 54.99),
(default,"Portuguesa", "Massa tradicional, molho de tomate, calabresa, presunto, mussarela, ovo, ervilha e cebola.", 54.99),
(default,"Milho", "masas tradicional, molho de tomate, milho, mussarela e catupiry.", 54.99),
(default,"Frango Especial", "Massa tradicional, molho de tomate, frango, mussarela, catupiry, bacon e palmito.", 54.99);

insert into cliente values
(default, "199929229", "joao", "sp", "199", "casa", "jardim planalto", default),
(default, "199929229", "breno", "sp", "19", "casa", "jardim", default),
(default, "199929229", "nata", "sp", "65", "casa", "centro", "academia"),
(default, "199929229", "vini", "sp", "192", "casa", "fazenda", "esquina"),
(default, "199929229", "carlos", "sp", "178", "casa", "doze", default);

insert into pedido values
(default, 1, "2012-08-23 20:53:32", 54.99),
(default, 2, "2012-08-23 20:53:32", 100.99),
(default, 3, "2012-08-23 20:53:32", 54.99),
(default, 4, "2012-08-23 20:53:32", 190.99),
(default, 5, "2012-08-23 20:53:32", 54.99);

insert into item_pedido values
(1, 1, 2, 54.99),
(2, 3, 2, 100.99),
(3, 2, 1, 54.99),
(4, 10, 4, 190.99),
(5, 1, 1, 54.99);

select * from cliente;
select * from pizza;
select * from pedido;
select * from item_pedido;