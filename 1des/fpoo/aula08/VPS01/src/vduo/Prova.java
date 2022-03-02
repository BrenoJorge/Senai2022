package vduo;

import java.io.IOException;
import java.util.Scanner;

public class Prova {

	public static Scanner scan;

	public static void main(String[] args) throws IOException {
		scan = new Scanner(System.in);
		int menu = 0;

		while (menu != 5) {
			System.out.println("\n1. Horas Extras\n2. Apura��o\n3. Mat�rias Primas\n4. Blocos\n5. Sair");
			menu = scan.nextInt();

			switch (menu) {
			case 1:
				HoraExtra();
				break;
			case 2:
				Apuracao();
				break;
			case 3:
				MateriaPrima();
				break;
			case 4:
				Blocos();
				break;
			case 5:
				System.out.println("Obrigado.");
				break;
			default:
				System.out.println("Op��o inv�lida.");
				break;

			}

		}

	}

	public static void HoraExtra() {
		scan = new Scanner(System.in);
		double horas, extras, salary;

		System.out.println("Digite o total de horas trabalhadas: ");
		horas = scan.nextDouble();
		System.out.println("Digite o total de horas extras trabalhadas: ");
		extras = scan.nextDouble();

		salary = (horas * 5.625) + (extras * 9.843);

		System.out.printf("O valor total do sal�rio ser�: %.2f", salary);

	}

	public static void Apuracao() {
		scan = new Scanner(System.in);
		int escolas = 5;

		String[] nome = new String[escolas];

		System.out.println("Insira o nome da escola e as notas de 0 a 10: ");

		int nota1;
		int nota2;
		int nota3;
		int[] apuracao = new int[escolas];

		for (int i = 0; i < escolas; i++) {
			System.out.print("Nome da escola n�" + (i + 1) + ": ");
			nome[i] = scan.next();
			System.out.print("Nota na bateria n�" + (i + 1) + ": ");
			nota1 = scan.nextInt();
			System.out.print("Nota no samba-enredo n�" + (i + 1) + ": ");
			nota2 = scan.nextInt();
			System.out.print("Nota na fantasia n�" + (i + 1) + ": ");
			nota3 = scan.nextInt();
			apuracao[i] = (nota1 + nota2 + nota3) / 3;

		}

		for (int i = 0; i < escolas; i++) {
			System.out.println(+(i + 1) + " escola: " + nome[i] + " / apura��o: " + apuracao[i]);
		}
	}

	public static void MateriaPrima() {
		scan = new Scanner(System.in);
		int qnt = 3;

		String[] material = { "Lantejoula", "Penas de Avestruz do Himalaia", "Tecido de seda H�ngara" };
		int[] gasto = new int[qnt];

		for (int i = 0; i < qnt; i++) {
			System.out.println("Digite os quilos de " + material[i] + " utilizado: ");
			int peso = scan.nextInt();
			System.out.println("Digite o pre�o de " + material[i] + ":");
			int preco = scan.nextInt();

			gasto[i] = peso * preco;
		}

		for (int i = 0; i < qnt; i++) {
			System.out.printf("%s custa R$%d 3", material[i], gasto[i]);
		}

	}

	public static void Blocos() {
		scan = new Scanner(System.in);
		int valor;

		System.out.println("Qual o total de pessoas que ir�o participar? ");
		valor = scan.nextInt();

		System.out.println("Ser�o necess�rias: " + (valor * 0.15) + " pessoas na Comiss�o de Frente.");
		System.out.println("Ser�o necess�rias: " + (valor * 0.05) + " pessoas na Abre-Alas.");
		System.out.println("Ser�o necess�rias: " + (valor * 0.15) + " pessoas Ala das Baianas");
		System.out.println("Ser�o necess�rias: " + (valor * 0.20) + " pessoas nos Carros Aleg�ricos.");
		System.out.println("Ser�o necess�rias: " + (valor * 0.02) + " pessoas na Madrinha da Bateria.");
		System.out.println("Ser�o necess�rias: " + (valor * 0.20) + " pessoas no Recuo da Bateria.");

	}
}