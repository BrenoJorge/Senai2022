package modelo;

public class Veiculo {
	public String placa;
	public String marca;
	public String modelo;
	public int anoModelo;
	public int anoFabricado;
	public String cor;
	
	Veiculo(){
		}
	public Veiculo(String placa,String marca,String modelo, int anoModelo,int anoFabricacao, String cor){
		this.placa = placa;
		this.marca = marca;
		this.modelo = modelo;
		this.anoModelo = anoModelo;
		this.anoFabricado = anoFabricado;
		this.cor = cor;
	}
	public String paraString() {
		return "A placa do carro e: " + this.placa + "\nA marca: " + this.marca + "\nAno do modelo: " + this.anoModelo + "\nAno fabricado: " + this.anoFabricado + "\nCor: " + this.cor + "\n";
		
	}

}
