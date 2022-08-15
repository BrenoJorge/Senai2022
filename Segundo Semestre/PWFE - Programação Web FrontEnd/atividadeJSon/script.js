var dados = [
	{
		"funcionario": "Sancho Cedraz",
		"cargo": {
			"nome": "Analista",
			"nível": 2
		},
		"autorizado": true
	},
	{
		"funcionario": "Ionara Pederneiras",
		"cargo": {
			"nome": "Técnico",
			"nível": 2
		},
		"autorizado": true
	},
	{
		"funcionario": "Filipe Castanho",
		"cargo": {
			"nome": "Desenvolvedor",
			"nível": 2
		},
		"autorizado": false
	},
	{
		"funcionario": "Lívia Bicalho",
		"cargo": {
			"nome": "Analista",
			"nível": 3
		},
		"autorizado": true
	},
	{
		"funcionario": "Mauro Varanda",
		"cargo": {
			"nome": "Desenvolvedor",
			"nível": 3
		},
		"autorizado": false
	},
	{
		"funcionario": "Sandro Rosário",
		"cargo": {
			"nome": "Técnico",
			"nível": 3
		},
		"autorizado": true
	},
	{
		"funcionario": "Breno",
		"cargo": {
			"nome": "Técnico",
			"nível": 1
		},
		"autorizado": true
	}
]

let tabela = document.querySelector('.linha')
dados.forEach(dado => {
	let coluna = tabela.cloneNode(true)

	console.log(coluna)
	coluna.querySelector('.coluna1').innerHTML = dado.funcionario
	coluna.querySelector('.coluna2').innerHTML = dado.cargo.nome
	coluna.querySelector('.coluna4').innerHTML = dado.cargo.nível
	
	if (dado.cargo.nome == "Analista" || dado.cargo.nome == "Desenvolvedor") {
		if (dado.cargo.nível >= 3) {
			coluna.querySelector('.coluna3').innerHTML = "ADM"
		} else {
			coluna.querySelector('.coluna3').innerHTML = "Leitor"

		}
	} else {
		coluna.querySelector('.coluna3').innerHTML = "Leitor"
	}

	if (dado.cargo.nível < 3) {
		let string = '<td class="botao"><button onclick="remover(this)"><img src="https://cdn-icons-png.flaticon.com/512/18/18297.png?w=826&t=st=1659962825~exp=1659963425~hmac=1458a1e7d04115fd7277aa5133a6ff4ea693c50d57fa7a7e835273def5a6fc19" alt="lixeira" width="25px"></button></td>'
		coluna.querySelector('.coluna5').innerHTML = string
	}

	document.querySelector("table").appendChild(coluna)

})

function remover(element) {
	console.log(element.parentNode.parentNode)
	element.parentNode.parentNode.remove()
}