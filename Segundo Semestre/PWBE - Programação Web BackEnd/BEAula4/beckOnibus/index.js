const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

const con = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database: 'onibus'
})

app.get('/motoristas', (req,res) => {

    let string = "SELECT * FROM vw_cliente"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/horario_linha', (req,res) => {

    let string = "SELECT * FROM horario_linha"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/linha', (req,res) => {

    let string = "SELECT * FROM linha"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.get('/mot_linha', (req,res) => {

    let string = "SELECT * FROM mot_linha"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.listen(5000, () => {
    console.log("5000")
})