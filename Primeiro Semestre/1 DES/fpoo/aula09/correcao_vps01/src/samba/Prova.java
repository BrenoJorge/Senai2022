package samba;

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
		float horas, extras, salHora = 5.625f, totalExtras, salario, salarioTotal;

		System.out.println("Digite o total de horas trabalhadas: ");
		horas = scan.nextFloat();
		System.out.println("Digite o total de horas extras trabalhadas: ");
		extras = scan.nextFloat();

		salario = (horas * salHora);
		totalExtras = (extras * (salHora + salHora * 75 / 100));
		salarioTotal = salario + totalExtras;
		System.out.printf("Seu sal�rio Base � R$ %.2f\n", salario);
		System.out.printf("O total em horas extras R$ %.2f\n", totalExtras);
		System.out.printf("O valor total do sal�rio ser�: %.2f\n", salarioTotal);
	}

	public static void Apuracao() {
		/*
		 * ViraOuro 10 8 7 Mo�aIdade 5 8 6 Gabic�es 10 10 10 RozasDeCouro 3 5 8
		 * RozasDePapel 7 5 9
		 */
		scan = new Scanner(System.in);
		int escolas = 5;
		System.out.println("Insira o nome da escola e as notas de 0 a 10: ");
		int nota1;
		int nota2;
		int nota3;
		String[] nome = new String[escolas];
		float[] media = new float[escolas];
		System.out.println("Ordem\tEscola\tBateria\tS.Enredo\tFantasia");
		for (int i = 0; i < escolas; i++) {
			System.out.print((i + 1) + "�:");
			nome[i] = scan.next();
			nota1 = scan.nextInt();
			nota2 = scan.nextInt();
			nota3 = scan.nextInt();
			media[i] = (nota1 + nota2 + nota3) / 3f;
		}

		String nomeCampea = "";
		float campea = 0;
		for (int i = 0; i < escolas; i++) {
			System.out.printf("%d escola %s / apura��o: %.2f\n",(i + 1), nome[i], media[i]);
			if (campea <= media[i]) {
				nomeCampea = nome[i];
				campea = media[i];
			}
		}
		System.out.printf("\nA escola campe� foi: %s com %.2f pontos de m�dia.\n",nomeCampea,campea);
	}

	public static void MateriaPrima() {
		scan = new Scanner(System.in);
		int qnt = 3;
		String[] material = { "Lantejoula", "Penas de Avestruz do Himalaia", "Tecido de seda H�ngara" };
		float[] gasto = new float[qnt];
		float orcamento, total = 0;
		System.out.print("Digite quanto voc� tem reservado para estes �tens de or�amento R$:");
		orcamento = scan.nextFloat();
		for (int i = 0; i < qnt; i++) {
			System.out.print("Digite os quilos de " + material[i] + " utilizado: ");
			int peso = scan.nextInt();
			System.out.print("Digite o pre�o de " + material[i] + ":");
			float preco = scan.nextFloat();
			gasto[i] = peso * preco;
		}
		
		System.out.println();
		for (int i = 0; i < qnt; i++) {
			System.out.printf("%s custou R$%.2f\n", material[i], gasto[i]);
			total+=gasto[i];
		}
		System.out.printf("Seu or�amento �ra %.2f voc� gastou %.2f\n",orcamento,total);
		if(orcamento >= total)
			System.out.println("Seus gastos foram dentro do or�amento");
		else
			System.out.println("Voc� estorou o or�amento");
			
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