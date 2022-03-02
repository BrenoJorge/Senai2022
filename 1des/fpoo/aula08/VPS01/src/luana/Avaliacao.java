package luana;

import java.util.Scanner;
import java.io.IOException;

public class Avaliacao {

	public static Scanner scan;

	public static void main(String[] args) throws IOException {
		scan = new Scanner(System.in);
		int opcao = 0;

//*1 Horas Extras, 2 Apura��o, 3 Mat�rias Primas, 4 Blocos, 5 Sair

		while (opcao != 5) {

			System.out.println(" ");
			System.out.println("1-Horas Extras\t2-Apura��o\n3-Mat�rias Primas\n4-Blocos\n5- Sair");
			System.out.println(" ");

			System.out.println("Digite uma op��o: ");
			opcao = scan.nextInt();

			switch (opcao) {
			case 1:
				HorasExtras();

				break;

			case 2:
				Apura��o();
				break;

			case 3:
				Mat�riasPrimas();
				break;

			case 4:
				Blocos();
				break;

			case 5:
				System.out.print("obrigado!");
				break;

			default:
				System.out.print("Op�ao Invalida");
			}

		}
	}

	public static void HorasExtras() {
		scan = new Scanner(System.in);

		double HorasNormais, HorasExtras;
		double Pre�oNormais = 5.625, Pre�oExtras = 8.438;
		String nome;
		/*
		 * entrada
		 */

		System.out.println(".");

		System.out.println("solu��o das horas extras dos funcion�rios");

		System.out.println("nome do funcion�rio: ");
		nome = scan.next();

		System.out.println("quantas horas normais? ");
		HorasNormais = scan.nextDouble();

		System.out.println("quantas horas extras? ");
		HorasExtras = scan.nextDouble();

		System.out.println("o valor a receber em horas normais EM UM DIA ser�: " + HorasNormais * Pre�oNormais);

		System.out.println("o valor a receber em horas extras ser�: " + HorasExtras * Pre�oExtras);

		System.out.printf("o salario final do funcion�rio %s ser�: %.3f", nome,
				(HorasNormais * Pre�oNormais) + (HorasExtras * Pre�oExtras));

		System.out.println(" ");

		/*
		 * uso do print f %d = int %.(numero de casas dps da virgula)f = double ou float
		 * %s = string
		 */
	}

	public static void Apura��o() {
		scan = new Scanner(System.in);

		System.out.print("Apura��o");

		/*
		 * 2 � A academia de artes carnavalescas precisa de um sistema que armazene o
		 * nome das escolas de samba concorrentes e os pontos obtidos nas categorias:
		 *
		 * bateria, samba-enredo e fantasias, e no final da apura��o informe o nome da
		 * escola, a m�dia dos pontos obtidos e a escola campe�.
		 *
		 * Sabe-se que 5 escolas de samba est�o competindo e que os pontos de cada
		 * categoria v�o de 0 a 10.
		 * 
		 */

	}

	public static void Mat�riasPrimas() {
		scan = new Scanner(System.in);

		System.out.print("Mat�riasPrimas");

		System.out.println("quantidade real de material utilidada em kg");
		int qntdReal = scan.nextInt();

		System.out.println("quantidade de material programada em kg");
		int qntdPlano = scan.nextInt();

		System.out.println("pre�o do kg do material");
		int pre�o = scan.nextInt();

		System.out.println("pre�o total gasto");

		System.out.println("valor exedido");

	}

	public static void Blocos() {
		scan = new Scanner(System.in);
		System.out.print("Blocos da Imperatriz HTML");

		System.out.print("quantas pessoas v�o participar?");
		int qnt = scan.nextInt();

		System.out.println("Comiss�o de frente: " + qnt * 0.15);

		System.out.println("Abre-Alas: " + qnt * 0.05);

		System.out.println("Ala das baianas: " + qnt * 0.15);

		System.out.println("Carros aleg�ricos: " + qnt * 0.2);

		System.out.println("Mestre-sala: " + qnt * 0.03);

		System.out.println("Porta-bandeira: " + qnt * 0.03);

	}

	public static void sair() {
		scan = new Scanner(System.in);

		System.out.print("Obrirgado!");

	}

}
