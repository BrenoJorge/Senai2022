package correcao;

import java.util.Scanner;

public class LacoExe {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		int menu = 0;
		while (menu != 7) {
			System.out.print("Digite: ");
			menu = leia.nextInt();
			switch (menu) {
			case 1:
				exe1();
				break;
			case 2:
				exe2();
				break;
			case 3:
				exe3();
				break;
			case 4:
				exe4();
				break;
			case 5:
				exe5();
				break;
			case 6:
				exe6();
				break;
			case 7:
				System.out.println("obrigado por usar nossos sistemas!!!");
				break;
			default:
				System.out.println("tente novamente");
				break;
			}
		}
	}

	public static void exe1() {
		Scanner entrada = new Scanner(System.in);

		int num1, num2;

		System.out.println("Digite o Primeiro Valor");
		num1 = entrada.nextInt();

		System.out.println("Digite o Segundo Valor");
		num2 = entrada.nextInt();
		if (num1 % 2 != 0) {

			num1++;
		}
		for (int i = num1; i <= num2; i += 2) {
			System.out.println(i);
		}

	}

	public static void exe2() {
		Scanner entrada = new Scanner(System.in);

		int num1, num2;

		System.out.println("Digite o Primeiro Valor");
		num1 = entrada.nextInt();

		System.out.println("Digite o Segundo Valor");
		num2 = entrada.nextInt();
		if (num1 % 2 == 0) {

			num1++;
		}
		for (int i = num1; i <= num2; i += 2) {
			System.out.println(i);
		}

	}

	public static void exe4() {
		Scanner entrada = new Scanner(System.in);

		int num1, acu;

		System.out.println("Digite um Valor: ");
		num1 = entrada.nextInt();

		acu = 1;

		for (int i = num1; i >= 1; i--) {
			acu = acu * i;

		}
		System.out.println(acu);
	}

	public static void exe3() {
		Scanner entrada = new Scanner(System.in);
		int num[] = new int[10];
		int maior = 0, menor = 100;
		for (int i = 0; i < 10; i++) {
			System.out.println("digite um numero inteiro:");
			num[i] = entrada.nextInt();
		}
		for (int i = 0; i < num.length; i++) {
			if (maior < num[i]) {
				maior = num[i];
			}
		}
		for (int i = 0; i < num.length; i++) {
			if (menor > num[i]) {
				menor = num[i];
			}

		}
		System.out.println("maior numero: " + maior);
		System.out.println("menor numero: " + menor);
	}

	public static void exe5() {
		Scanner leia = new Scanner(System.in);
		double valor = 0;
		System.out.print("Digite o valor do xerox: ");
		valor = leia.nextDouble();
		System.out.println("Valor do Xerox: R$ " + valor);
		double acu = 0;
		double linha = 0;
		System.out.println("");

		for (int i = 1; i < 201; i++) {

			acu = i * valor;
			System.out.print(i);
			System.out.printf(" = %.2f" , acu);
			System.out.print(" ");
			linha = i % 10;
			if (linha == 0) {
				System.out.println("");
			}

		}

	}

	public static void exe6() {
		Scanner leia = new Scanner(System.in);
		int qtdeImp = 0;
		int qtdePar = 0;

		System.out.println("Digite um valor: ");
		int num1 = leia.nextInt();

		System.out.println("Digite um valor maior que o anterior: ");
		int num2 = leia.nextInt();

		for (int j = num1; j <= num2; j++) {

			if (j % 2 != 0) {

				qtdeImp += j;

			}
		}
		System.out.println("A soma dos valores ímpares é " + qtdeImp);

		for (int j = num1; j <= num2; j++) {

			if (j % 2 == 0) {

				qtdePar += j;

			}
		}

		System.out.println("A soma dos valores pares é " + qtdePar);
	}

}
