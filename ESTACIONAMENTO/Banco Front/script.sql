drop database if exists estacionamento;
create database estacionamento charset=UTF8 collate utf8_general_ci;
use estacionamento;

create table clientes(
    id integer not null primary key auto_increment,
    nome varchar(80) not null,
    telefone varchar(15) not null,
    endereco varchar(100) not null
);

CREATE TABLE veiculos(
    placa varchar(9) not null PRIMARY KEY,
    modelo varchar(30) not null,
    descricao varchar(10) not null,
    tipo varchar(10) not null
);

CREATE TABLE vagas(
    id varchar(3) not null PRIMARY KEY,
    disponivel boolean NOT NULL
);

CREATE TABLE entradas(
    id_entrada integer not null PRIMARY KEY auto_increment,
    id_cliente integer not null,
    placa varchar(9) not null,
    id_vaga varchar(3) not null,
    data_entrada DATETIME not null,
    data_saida DATETIME,
    valor float(5,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (placa) REFERENCES veiculos(placa),
    FOREIGN KEY (id_vaga) REFERENCES vagas(id)
);

DELIMITER $

CREATE TRIGGER alterarVaga after insert
ON entradas
FOR EACH ROW
BEGIN
    UPDATE vagas set disponivel = !disponivel where id = NEW.id_vaga;
END $

CREATE TRIGGER alterarVagaUpdt after update
ON entradas
FOR EACH ROW
BEGIN
    UPDATE vagas set disponivel = !disponivel where id = NEW.id_vaga;
END $


DELIMITER ;

CREATE VIEW vw_entradas as
SELECT e.id_entrada as id, c.nome as nome_cli, v.placa as placa, v.modelo as modelo, v.cor as cor, v.tipo as tipo, vg.id as vaga, e.data_entrada as data_entrada, e.data_saida as data_saida, e.valor as valor
FROM entradas e
INNER JOIN clientes c
ON e.id_cliente = c.id
INNER JOIN veiculos v
on e.placa = v.placa
INNER JOIN vagas vg
on e.id_vaga = vg.id;


INSERT INTO clientes
VALUES
(DEFAULT, 'Miguel Ferreira Pereira', '19 98708-7490', 'Rua das Palmeiras 231 Centro - Jundiaí SP'),
(DEFAULT, 'Luiza Silva', '19 92145-4523', 'Rua Roseira 25 Triunfo - Joanópolis SP'),
(DEFAULT, 'Felipe Alves', '11 96812-8510', 'Rua dos Bandeirantes 34 - Jarinu SP'),
(DEFAULT, 'Paulo Moreira', '11 95424-9984', 'Rua Branda 455 - Santos SP'),
(DEFAULT, 'Jéssica Helena Gonçalves', '11 95501-9898', 'Rua José Bonifácio 227 - Guarulhos SP');

INSERT INTO veiculos
VALUES
('EBD5V98', 'Renault Sandero', 'Prata', 'Carro'),
('AJP4T45', 'Peugeot 308', 'Azul', 'Carro'),
('POT8V25', 'Yamaha MT03', 'Cinza', 'Moto'),
('LKC7A43', 'Fiat Uno', 'Vermelho', 'Carro'),
('MOZ9F28', 'BMW 1200R', 'Preta', 'Moto');

INSERT INTO vagas
VALUES
('A1', true),
('A2', true),
('A3', true),
('A4', true),
('A5', true),
('A6', true),
('B1', true),
('B2', true),
('B3', true),
('B4', true),
('B5', true),
('B6', true),
('C1', true),
('C2', true),
('C3', true),
('C4', true),
('C5', true),
('C6', true),
('D1', true),
('D2', true),
('D3', true),
('D4', true),
('D5', true),
('D6', true);

INSERT INTO entradas
VALUES
(DEFAULT, 5, 'AJP4T45', 'A6', '2022-11-09 18:02:00', '2022-11-10 06:02:00', 180),
(DEFAULT, 2, 'POT8V25', 'B3', '2022-11-10 15:35:00', NULL, NULL),
(DEFAULT, 1, 'LKC7A43', 'A6', '2022-11-10 11:10:00', NULL, NULL),
(DEFAULT, 4, 'EBD5V98', 'A2', '2022-11-09 05:25:00', '2022-11-09 06:25:00', 15),
(DEFAULT, 3, 'MOZ9F28', 'A3', '2022-11-10 17:00:00', NULL, NULL);