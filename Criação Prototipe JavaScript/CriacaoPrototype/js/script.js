class Livro {

	constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }

	getId() {
		return this.id;
	}

	setId(id) {
		this.id = id;
	}

	getNome() {
		return this.nome;
	}

	setNome(name) {
		this.nome = name;
	}

	toString() {
		return "Livro [id=" + id + ", nome=" + nome + "]";
	}

}

class Livraria{

    constructor(nomeLivraria) {
        this.nomeLivraria = nomeLivraria
        this.carregarDados()
    }

	livros = [];

	getNomeLivraria() {
		return this.nomeLivraria;
	}

	setNomeLivraria(nomeLivraria) {
		this.nomeLivraria = nomeLivraria;
	}

	getLivros() {
		return this.livros;
	}

	setLivros(livros) {
		this.livros = livros;
	}

	carregarDados() {
		for (let i = 1; i <= 10; i++) {
			let l = new Livro();
			l.setId(i);
			l.setNome(" livro " + i);
			this.livros.push(l);
		}
	}

    toString() {
		return "Livraria [nomeLivraria=" + nomeLivraria + ", livros=" + livros + "]";
	}
    
    // @Override
	// public Livraria clone() throws CloneNotSupportedException {
	// 	Livraria livraria = new Livraria();
	// 	/*
	// 	for (Livro l : getLivros()) {
	// 		livraria.getLivros().add(l);
	// 	}
	// 	*/
	// 	livraria.carregarDados();
	// 	return livraria;
	// }

}

class Cliente{
    static livraria1 = new Livraria("livraria1");
    static livraria2 = new Livraria("livraria2");
}