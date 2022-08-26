const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

const con = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database: 'entregas'
})

app.get('/clientes', (req,res) => {

    let string = "SELECT * FROM vw_clientes"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/entregadores', (req,res) => {

    let string = "SELECT * FROM entregadores"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/itens', (req,res) => {

    let string = "SELECT * FROM itens"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/pedidos', (req,res) => {

    let string = "SELECT * FROM pedidos"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/produtos', (req,res) => {

    let string = "SELECT * FROM produtos"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.listen(5000, () => {
    console.log("5000")
})