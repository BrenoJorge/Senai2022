const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

const con = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database: 'clientes'
})

app.get('/', (req,res) => {

    let string = "SELECT * FROM clientes"
    con.query(string, (err,ress) => {
        if(err == null) {
            res.json(ress)
        }    
    })
})

app.listen(5000, () => {
    console.log("5000")
})