package petshop;

import java.util.Scanner;
import petshop.Animais;

public class Main {

	static Scanner leia = new Scanner(System.in);
	static Animais animal[] = new Animais[10];
	static double dinheiro;

	public static void main(String[] args) {

		for (int i = 0; i < 10; i++) {
			animal[i] = new Animais();
		}

		System.out.println("Digite a quantidade de dinheiro que voce tem:");
		dinheiro = leia.nextDouble();
		int menu = 0;
		while (menu != 5) {
			System.out.println("Saldo: R$ " + dinheiro);
			System.out.println(
					"Escolhe uma opcao:\n[1]Cadastrar pet.\t[2]Lista dos pets cadastrados.\t[3] Adicionar dinheiro.\n[4]Excluir pet da lista.\t[5]Sair.");
			menu = leia.nextInt();
			switch (menu) {
			case 1:
				opcao1();
				break;
			case 2:
				opcao2();
				break;
			case 3:
				opcao3();
				break;
			case 4:
				opcao4();
				break;
			case 5:
				System.out.println("Obrigado por usar nossos sistemas!!!");
				break;
			default:
				System.out.println("Opcao incorreta! tente novamente.");
				break;
			}

		}
	}

	private static void opcao4() {
		System.out.println("Digite o id da compra:");
		int id = leia.nextInt();
		for (int a = 0; a < animal.length; a++) {
			if (animal[a].id != 0) {
				if (animal[a].id == id) {
					System.out.println("Valor " + animal[a].valor + " voltado ao saldo");
					dinheiro += animal[a].valor;
					animal[a] = new Animais();
					System.out.println("Excluido com sucesso;");
				} else {
					System.out.println("Id nao encontrado!");
				}
			}
		}

	}

	private static void opcao3() {
		System.out.println("Digite a quantidade de dinheiro que desenar adicionar ao saldo:");
		double soma = leia.nextDouble();
		dinheiro += soma;
		System.out.println("Dinheiro adicionado com sucesso\nSaldo atual: R$ " + dinheiro);

	}

	private static void opcao2() {
		for (int i = 0; i < animal.length; i++) {
			if (animal[i].id != 0) {
				animal[i].paraString();
				{
				}
			}
		}

	}

	private static void opcao1() {
		for (int i = 0; i < animal.length; i++) {

			if (animal[i].id == 0) {
				System.out.println("Digite o id da compra:");
				int id = leia.nextInt();
				System.out.println("Digite a raca:");
				String raca = leia.next();
				System.out.println("Digite a cor:");
				String cor = leia.next();
				System.out.println("Digite o tamanho:");
				String tamanho = leia.next();
				System.out.println("filhote?[s]sim [n]não");
				String aux = leia.next();
				boolean filhote = true;
				if (aux.equals("n")) {
					filhote = false;
				}
				System.out.println("Digite o valor:");
				double valor = leia.nextDouble();
				if (dinheiro < valor) {
					System.out.println("NAO FOI POSSIVEL COMPRAR, FALTA DINHEIRO!");

				} else {
					System.out.println("Comprado com sucesso!");
					animal[i] = new Animais(id, raca, cor, tamanho, filhote, valor);
					dinheiro -= valor;
				}

				break;
			}

		}

	}

}
