const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'entregas'
})

app.get('/clientes', (req, res) => {
    let string = "select * from vw_clientes";
    con.query(string, (err, result) => {
        if (err == null) {
            let id
            let repIndex = []
            result.forEach(c => {

                c.telefone = [c.telefone]
                if (result.indexOf(c) > 0) {
                    if (id == c.id_cliente) {
                        result[(result.indexOf(c) - 1)].telefone.forEach(tele => {
                            c.telefone.push(tele)
                        });

                        repIndex.push(result.indexOf(c) - 1)
                    }
                }
                tel = c.telefone
                id = c.id_cliente

            });
            repIndex.forEach(ind => {
                result.splice(ind, 1)
            });
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.get('/entregadores', (req, res) => {

    let string = "SELECT * FROM entregadores"
    con.query(string, (err, ress) => {
        if (err == null) {
            res.json(ress)
        }
    })
})

app.get('/itens', (req, res) => {

    let string = "SELECT * FROM itens"
    con.query(string, (err, ress) => {
        if (err == null) {
            res.json(ress)
        }
    })
})

app.get('/pedidos', (req, res) => {

    let string = "SELECT * FROM pedidos"
    con.query(string, (err, ress) => {
        if (err == null) {
            res.json(ress)
        }
    })
})

app.get('/produtos', (req, res) => {

    let string = "SELECT * FROM produtos"
    con.query(string, (err, ress) => {
        if (err == null) {
            res.json(ress)
        }
    })
})

app.listen(5000, () => {
    console.log("5000")
})