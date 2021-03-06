package visao;
import java.util.Scanner;
import modelo.Veiculo;
public class Menu {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		
		Veiculo veiculos[] = new Veiculo[10];
		int contCar = 0;
		
		int menu = 0;
		while(menu != 3) {
			System.out.println(contCar + "/10 carros cadastrados");
			System.out.println("Escolha:\n[1]Cadastrar veiculos.\n[2]mostrar veiculos cadastrados.");
			menu = leia.nextInt();
			switch(menu) {
			case 1:
				for (int i = 0; i < veiculos.length; i++) {
					if(veiculos[i] == null) {
						System.out.println("Digite a placa do veiculo:");
						String placa = leia.next();
						System.out.println("Digite a marca do veiculo:");
						String marca = leia.next();
						System.out.println("Digite o modelo do veiculo:");
						String modelo = leia.next();
						System.out.println("Digite o ano do modelo do veiculo:");
						int anoModelo = leia.nextInt();
						System.out.println("Digite o ano fabricado do veiculo:");
						int anoFabricado = leia.nextInt();
						System.out.println("Digite a cor do veiculo:");
						String cor = leia.next();
						
						veiculos[i] = new Veiculo(placa,marca,modelo,anoModelo,anoFabricado, cor);
						contCar++;
						break;
					}
				}
				break;
			case 2:
				for (int i = 0; i < veiculos.length; i++) {
					if(veiculos[i]!= null){
						System.out.println(veiculos[i].paraString());
					}
				}
				break;
			}
		}
	}
}