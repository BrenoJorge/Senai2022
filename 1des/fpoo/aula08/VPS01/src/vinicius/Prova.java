package vinicius;

import java.io.IOException;

import java.util.Scanner;

public class Prova {

	public static Scanner ler;

	public static void main(String[] args) throws IOException {

		ler = new Scanner(System.in);
		int menu = 0;
		while (menu != 5) {

			System.out.println("Selecione a fun��o que queira utilizar");
			System.out.println("1-Horas Extras, 2-Apura��o, 3-Mat�rias Primas, 4-Blocos, 5-Sair");
			menu = ler.nextInt();
			switch (menu) {
			case 1:
				double S, H, SE, ST, HE;

				System.out.println("Digite o total de horas de trabalho do m�s: ");
				H = ler.nextDouble();
				System.out.println("Digite o total de horas extras do m�s: ");
				HE = ler.nextDouble();
				S = H * 5.625;
				SE = HE * 4.218;
				ST = S + SE;
				System.out.println("O salario com o total de horas trabalhadas �: " + ST);
				System.out.printf("O valor do salario de horas normais trabalhadas �: %.3f e ", S);
				System.out.printf("o valor do salario de horas extras trabalhadas �: %.3f.", SE);

				break;
			case 2:
				int escola = 0;
				while (escola != 5) {
					System.out.println("Escolha a escola de samba");
					System.out.println(
							"1-Unidos do JAVA/2-Rosas de Caf�/3-Imperatriz HTML/4-P�tons da Amazonia/5-Visual Basico");
					escola = ler.nextInt();
					switch (escola) {
					case 1:
						int batera, samba, fantasia;
						System.out.println("digite as notas na ordem, bateria, samba-enredo e fantasias");
						batera = ler.nextInt();
						samba = ler.nextInt();
						fantasia = ler.nextInt();

						break;

					case 2:

						break;

					case 3:

						break;

					case 4:

						break;

					case 5:

						break;

					}
				}
				break;
			case 3:
				System.out.println("");
				break;

			case 4:
				int p;
				System.out.println("Digite o numero de pessoas que ir�o participar: ");
				p = ler.nextInt();
				double pp, comissao, abrealas, baianas, carros, mestreporta, bateria, madrinha, recuo;
				pp = (p * 15) / 100;
				comissao = (p * 15) / 100;
				abrealas = (p * 5) / 100;
				baianas = (p * 15) / 100;
				carros = (p * 20) / 100;
				mestreporta = (p * 3) / 100;
				bateria = (p * 20) / 100;
				madrinha = (p * 2) / 100;
				recuo = (p * 20) / 100;

				System.out.printf("O numero de pessoas para cada bloco sera de ");
				System.out.printf("%.0f pessoas na Comiss�o de frente, ", comissao);
				System.out.printf("%.0f pessoas na Abre-Alas, ", abrealas);
				System.out.printf("%.0f pessoas na Ala das baianas, ", baianas);
				System.out.printf("%.0f pessoas no Carros aleg�ricos, ", carros);
				System.out.printf("%.0f pessoas nos Mestre-sala e Porta-bandeira, ", mestreporta);
				System.out.printf("%.0f pessoas na Bateria, ", bateria);
				System.out.printf("%.0f pessoas na Madrinha de bateria e ", madrinha);
				System.out.printf("%.0f pessoas no Recuo da bateria.", recuo);
				System.out.println("");
				System.out.println("");

				break;

			case 5:
				System.out.println("Tchau ;)");
				break;
			}
		}
	}
}