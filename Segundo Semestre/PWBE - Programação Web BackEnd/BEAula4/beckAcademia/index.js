const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*")
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})

const con = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database: 'academia'
})

app.get('/alunos', (req,res) => {

    let string = "SELECT * FROM vw_cliente"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/aparelhos', (req,res) => {

    let string = "SELECT * FROM aparelho"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/exercicios', (req,res) => {

    let string = "SELECT * FROM exercicio"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/fichas', (req,res) => {

    let string = "SELECT * FROM ficha_exercicio"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.listen(5000, () => {
    console.log("5000")
})