const express = require('express')
const mysql = require('mysql')
const app = express()

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
})

app.use(express.json())

app.get("/pedidos", (req, res) => {
    let clientes = `insert into clientes value(null, '${req.query.firstName}', '${req.query.lastName}','${req.query.cep}')`
    con.query(clientes, (err, result) => {
        let tel = req.query.number.split("\r\n")
        if (err == null) {
                let telefones = `insert into telefones value('${result.insertId}', '${req.query.number}')`
                con.query(telefones, (err, result) => {
                    if (err == null) {
                        res.send("Dados recebidos com sucesso, enviando para o banco de dados! erro : ")
                    } else {
                        res.send("Dados recebidos com sucesso, porém não conseguimos enviar para o banco de dados! erro : " + err)
                    }
                })
    }

        
})

app.listen(3000, () => {
    console.log("Hello world! 3000")
})