const express = require("express")
const mysql = require('mysql')
var bodyParser = require('body-parser')
var alert = require('alert')
const cors = require('cors')

const app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*")
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  app.use(cors())
  next()
})

/*
* POST = Inserir um dado
* GET = buscar um/mais dados
* PUT = Alterar um dado
* DELETE = Remover um dado
*/

//criando conexão com banco de dados
const con = mysql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'pedidos'
})

app.post("/inserir", urlencodedParser, function (request, response) {

  let { priNome, sobrenome, endereco, telefone } = request.body

  //Utilizando urlencodedParser para conseguir desestruturar a informação
  let prinome = request.body.priNome
  let segnome = request.body.sobrenome
  let ender = request.body.endereco
  let tel = request.body.telefone

  let enviado = true

  let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`
  con.query(string, (err, result) => {
    if (err == null) {

      let telefones = telefone.split('\r\n')
      telefones.forEach(function (tel) {
        string = `insert into telefones value(${result.insertId}, ${tel})`
        con.query(string, (err2, result2) => {
          if (err2 == null) {
            
          } else {
            enviado = false
          }
        })
      })

    } else {
      console.log(err)
    }
  })

  if (enviado == true) {
    response.json({
      'messagem': 'Dados recebidos com sucesso e enviados para o nosso Banco de Dados'
    })
  } else {
    response.json({
      'messagem': 'Dados recebidos com sucesso, porém não conseguimos enviar para o banco de dados'
    })
  }
})

app.get("/BuscarCliente/:id", (req, res) => {
  const { id } = req.params
  let string = `SELECT * FROM clientes WHERE id_cliente='${id}'`

  con.query(string, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      result = JSON.stringify(result[0])
      res.send(result)
      return result
    }
  })

})

app.get("/ListarClientes", (req, res) => {
  let string = `SELECT * FROM clientes`
  con.query(string, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      result = JSON.stringify(result)
      res.send(result)
      return result
    }
  })
})

app.get("/deletar/:id", (req, res) => {
  const { id } = req.params
  let string = `DELETE from clientes WHERE id_cliente='${id}'`

  con.query(string, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      return res.send('Item deletado com sucesso')
    }
  })

})

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001")
})