package petshop;

public class Animais {

	public int id = 0;
	public String raca;
	public String tamanho;
	public String cor;
	public boolean filhote = true;
	public double valor;

	public Animais() {

	}

	public Animais(int id, String raca, String cor, String tamanho, boolean filhote, double valor) {
		this.id = id;
		this.raca = raca;
		this.tamanho = tamanho;
		this.cor = cor;
		this.filhote = filhote;
		this.valor = valor;
	}

	void paraString() {
		System.out.println("____________________");
		System.out.println("Id da compra: " + this.id + "\nRa�a: " + this.raca + "\nTamanho: " + this.tamanho
				+ "\nCor: " + this.cor + "\n� filhote? " + this.filhote + "\nValor: " + this.valor);
		System.out.println("____________________");
	}
}
                                                                                                                                                                           