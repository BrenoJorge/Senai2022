package julia;

import java.util.Scanner;

public class pt1 {
	public static Scanner sc;

	public static void main(String[] args) {

		sc = new Scanner(System.in);

		int menu = 0;

		while (menu != 4) {
			System.out.println("1- Horas Extras\n2- Apura��o\n3- Mat�rias Primas \n4- Sair");
			menu = sc.nextInt();

			switch (menu) {
			case 1:

				public class atv1 {

					public static void main(String[] args) {
						Scanner entrada = new Scanner(System.in);
// 1 � A escola de samba unidos do JAVA est� com dificuldade para gerenciar
//o pagamento de seus funcion�rios, devido ao aumento das horas extras. Para auxili�-los
//crie um algoritmo que receba o total de horas e horas extras trabalhadas no m�s e informe
//o valor do sal�rio reajustado. Leve em considera��o que todos recebem em m�dia R$ 5,625 por
//hora trabalhada e que a hora extra vale 75% a mais do valor original.

						double a, b, c;

						System.out.println("Quantidade de horas trabalhadas: ");
						a = entrada.nextDouble();
						System.out.println("Quantidade de horas EXTRAS trabalhadas: ");
						b = entrada.nextDouble();
						c = (a * 5.625) + (b * 0.75);
						System.out.println("O valor do sal�rio reajustado �: " + c);
					}

				}

				break;
			case 2:

				public class Atv2 {
					public static Scanner sc;

					public static void main(String[] args) {
						/*
						 * 2 � A academia de artes carnavalescas precisa de um sistema que armazene o
						 * nome das escolas de samba concorrentes e os pontos obtidos nas categorias:
						 * bateria, samba-enredo e fantasias, e no final da apura��o informe o nome da
						 * escola, a m�dia dos pontos obtidos e a escola campe�. Sabe-se que 5 escolas
						 * de samba est�o competindo e que os pontos de cada categoria v�o de 0 a 10.
						 */

						sc = new Scanner(System.in);

						int menu = 0;

						while (menu != 4) {
							System.out.println("1- Escola1 \n2- Escola2 \n3- Escola3 \n4- Sair");
							menu = sc.nextInt();

							int media;
							switch (menu) {
							case 1:
								System.out.println("Escola1:");
								System.out.println("Notas: Bateria - 10, Samba-enredo - 10, Fantasias - 10");
								media = 10 + 10 + 10;
								System.out.println("M�dia : " + media);
								break;

							case 2:
								System.out.println("Escola2:");
								System.out.println("Notas: bateria - 0, samba-enredo - 0, fantasias - 0");
								media = 10 + 10 + 10;
								System.out.println("A m�dia da escola1 �: " + media);
								break;

							case 3:
								System.out.println("Escola3:");
								System.out.println("Notas: bateria - 0, samba-enredo - 0, fantasias - 0");
								media = 10 + 10 + 10;
								System.out.println("A m�dia da escola1 �: " + media);
								break;

							case 4:
								System.out.print("Obrigado!");
								break;

							default:
								System.out.print("Op��o Inv�lida");
								break;

							}

						}
					}
				}

				break;
			case 3:

				break;
			case 4:
				System.out.print("Obrigado!");
				break;
			default:
				System.out.print("Op��o Inv�lida");
				break;
			}
		}
	}

}