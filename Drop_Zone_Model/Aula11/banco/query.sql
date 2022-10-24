DROP DATABASE IF EXISTS blobs;
CREATE DATABASE blobs CHARSET = UTF8 COLLATE = utf8_general_ci;
use blobs

CREATE TABLE clientes(
    id integer PRIMARY KEY not null AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    img mediumblob
);