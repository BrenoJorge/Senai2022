package nata;

import java.io.IOException;
import java.util.Scanner;

public class Parte1 {

	public static void main(String[] args) throws IOException {

		Scanner ler = new Scanner(System.in);
		int menu = 0;
		while (menu != 5) {

			System.out.println("Digite uma op��o");
			System.out.println("1-Salario \2-Academia Campe� \3-Gastos da escola");
			System.out.println("4-Pessoas desfile \5-Sair");
			menu = ler.nextInt();
			switch (menu) {
			case 1:
				double SLR, HRS, HREXT, SLRFNL;
				System.out.print("Coloque suas horas de trabalho feitas :");
				HRS = ler.nextDouble();
				System.out.print("Coloque seu tempo de hora extra:");
				HREXT = ler.nextDouble();
				SLRFNL = (HRS * 5.625) + (HREXT * 4.218);
				System.out.println("Sua remunera��o ser�: " + SLRFNL);
				System.out.println("--------------------------------");
				System.out.println("VAMOS VER OUTRAS OP��ES :)");
				System.out.println("_________________________________");

			case 2:
				double BATERIA, SAMBAENREDO, FANTASIAS, MEDIA;

				break;

			case 3:
				break;

			case 4:
				int PESSOAS;
				double CDF, ALS, ADB, CA, MSP, B, MDB, RDB;
				System.out.println("Quantas pessoas ir�o ao desfile?:");
				PESSOAS = ler.nextInt();
				System.out.println("___________________________________________________");
				CDF = (PESSOAS * 15) / 100;
				ALS = (PESSOAS * 5) / 100;
				ADB = (PESSOAS * 15) / 100;
				CA = (PESSOAS * 20) / 100;
				MSP = (PESSOAS * 3) / 100;
				B = (PESSOAS * 20) / 100;
				MDB = (PESSOAS * 2) / 100;
				RDB = (PESSOAS * 20) / 100;

				System.out.println("N�mero de pessoas por equipe na tabela a baixo");
				System.out.println("--------------------------------------------------");
				System.out.println("Comiss�o de frente ter�:" + CDF);
				System.out.println("Abre-Alas ter�:" + ALS);
				System.out.println("Ala das baianas ter�: " + ADB);
				System.out.println("Carros aleg�ricos ter�:" + CA);
				System.out.println("Mestre-sala e Porta-bandeira ter�: " + MSP);
				System.out.println("Bateria ter�: " + B);
				System.out.println("Madrinha de bateria ter�:" + MDB);
				System.out.println("Recuo da bateria ter�: " + RDB);
				System.out.println("___________________________________________________");
				System.out.println("Bom desfile ;)");
				System.out.println("E boa sorte <3");
				System.out.println("______________");

				break;

			case 5:
				System.out.println("Miss�o cumprida, BOA SOLDADO(A)! ;)");
				break;
			default:
				System.out.println("Op��o n�o aceitavel, tente novamente :)");
				System.out.println("--------------------");
				break;
			}
		}
	}
}