package correcao;

import java.util.Arrays;
import java.util.Scanner;

public class VetorExe {

	public static void main(String[] args) {

		Scanner leia = new Scanner(System.in);

		int menu = 0;

		while (menu != 8) {
			System.out.print(
					"escolha uma opcao:\n[1]Problema 1.\t[2]Problema 2.\t[3]Problema 3.\n[4]Problema 4.\t[5]Problema 5.\t[6]Problema 6.\n[7]Problema 7.\nR: ");
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
				exe7();
				break;
			case 8:
				System.out.println("Obrigado por usar nossos sistemas!!!");
				break;
			default:
				System.out.println("Opcao invalida digite novamente");
				break;
			}
		}

	}

	public static void exe1() {
		Scanner leia = new Scanner(System.in);
		int vetor[] = new int[10];

		for (int i = 0; i < 10; i++) {
			System.out.println("Digite um numero: ");
			vetor[i] = leia.nextInt();
		}
		for (int j = 0; j < 10; j++) {
			System.out.print(vetor[j] + " ");
		}
		System.out.println("");
		for (int b = 9; b > 1; b--) {
			System.out.print(vetor[b]);
		}
	}

	public static void exe2() {
		Scanner leia = new Scanner(System.in);
		int a[] = new int[10];
		int b[] = new int[10];
		int aux = 0;

		for (int i = 0; i < 10; i++) {
			System.out.println("Digite um numero: ");
			a[i] = leia.nextInt();
		}
		for (int j = 9; j >= 0; j--) {

			b[j] = a[aux];
			aux = aux + 1;
		}
		for (int j = 0; j < 10; j++) {
			System.out.print(a[j] + " ");
		}
		System.out.println("");
		for (int j = 0; j < 10; j++) {
			System.out.print(b[j] + " ");
		}
		System.out.println("");
	}

	public static void exe3() {
		Scanner leia = new Scanner(System.in);
		int a[] = new int[10];
		int p2 = 0;
		int i2 = 0;

		for (int i = 0; i < a.length; i++) {
			System.out.println("Digite um numero: ");
			a[i] = leia.nextInt();
		}
		for (int k = 0; k < 10; k++) {
			if (a[k] % 2 == 0) {
				p2++;
			} else if (a[k] % 2 == 1) {
				i2++;
			}
		}

		int par[] = new int[p2];
		int impar[] = new int[i2];

		for (int j = 0; j < a.length; j++) {

			if (a[j] % 2 == 0) {
				for (int g = 0; g < par.length; g++) {
					par[g] = a[j] / 2;
				}

			} else {
				for (int h = 0; h < impar.length; h++) {
					impar[h] = a[j] * 3;
				}

			}
		}
		for (int c = 0; c < 10; c++) {
			System.out.print(a[c] + " ");
		}
		System.out.println();
		for (int i = 0; i < par.length; i++) {
			System.out.print(par[i] + " ");
		}
		System.out.println();
		for (int z = 0; z < impar.length; z++) {
			System.out.print(impar[z] + " ");
		}
		System.out.println();
	}

	public static void exe4() {
		Scanner leia = new Scanner(System.in);

		String nome[] = new String[10];

		for (int i = 0; i < 10; i++) {
			System.out.println("Digite um nome: ");
			nome[i] = leia.next();
		}
		System.out.print("Digite o nome que deseja buscar: ");
		String b = leia.next();

		boolean achou = false;

		for (int i = 0; i < 10; i++) {
			if (nome[i].equals(b)) {
				System.out.println("ACHEI");
				achou = true;

			}
		}
		if (!achou) {
			System.out.println("NÃO ACHEI");
		}
	}

	public static void exe5() {
		Scanner leia = new Scanner(System.in);

		int[] v1 = new int[20];
		int[] v2 = new int[20];
		int[] v3 = new int[20];
		int[] v4 = new int[20];
		int[] v5 = new int[20];
		System.out.println("Vetor 1:");

		for (int i = 0; i < 20; i++) {
			System.out.println("Digite um número inteiro");
			v1[i] = leia.nextInt();
		}

		System.out.println("\nVetor 2:");

		for (int i = 0; i < 20; i++) {
			System.out.println("Digite um número inteiro");
			v2[i] = leia.nextInt();
		}

		System.out.println("\nVetor 3:");

		for (int i = 0; i < 20; i++) {

			v3[i] = v2[i] - v1[i];
			System.out.print(v3[i] + " ");
		}

		System.out.println("\nVetor 4:");

		for (int i = 0; i < 20; i++) {

			v4[i] = v2[i] + v1[i];
			System.out.print(v4[i] + " ");
		}

		System.out.println("\nVetor 5:");

		for (int i = 0; i < 20; i++) {

			v5[i] = v2[i] * v1[i];
			System.out.print(v5[i] + " ");
		}
	}

	public static void exe6() {

		Scanner leia = new Scanner(System.in);

		System.out.println("Digite quantos números deseja inserir no vetor");
		int qtde = leia.nextInt();

		int[] vec = new int[qtde];

		int qtdeImp = 0, qtdePar = 0;

		for (int i = 0; i < vec.length; i++) {
			System.out.println("Digite um número");
			vec[i] = leia.nextInt();

			if (vec[i] % 2 == 0) {
				qtdePar++;
			} else {
				qtdeImp++;
			}
		}

		int[] imp = new int[qtdeImp];
		int[] par = new int[qtdePar];

		for (int i = 0; i < par.length; i++) {
			par[i] = 1;
		}

		for (int i = 0; i < imp.length; i++) {
			imp[i] = 0;
		}

		for (int i = 0; i < vec.length; i++) {
			if (vec[i] % 2 == 0) {
				for (int j = 0; j < par.length; j++) {
					if (par[j] == 1) {
						par[j] = vec[i];
						break;
					}
				}
			} else {
				for (int j = 0; j < imp.length; j++) {
					if (imp[j] == 0) {
						imp[j] = vec[i];
						break;
					}
				}
			}
		}

		Arrays.sort(par);
		Arrays.sort(imp);

		System.out.println("Pares:");

		for (int i = 0; i < par.length; i++) {
			System.out.print(par[i] + " ");
		}

		System.out.println("\n\nImpares:");

		for (int i = imp.length - 1; i >= 0; i--) {
			System.out.print(imp[i] + " ");
		}
		System.out.println("");
	}

	public static void exe7() {
		Scanner leia = new Scanner(System.in);

		System.out.println("Digite o tamanho dos vetores:");
		int qtd = leia.nextInt();

		int[] vec1 = new int[qtd];
		int[] vec2 = new int[qtd];

		System.out.println("Vetor 1\n");

		for (int i = 0; i < vec2.length; i++) {
			System.out.println("Digite um número:");
			vec1[i] = leia.nextInt();
		}

		System.out.println("\n\nVetor 2\n");

		for (int i = 0; i < vec2.length; i++) {
			System.out.println("Digite um número:");
			vec2[i] = leia.nextInt();
		}

		boolean iguais = false;

		for (int i = 0; i < vec2.length; i++) {
			if (vec1[i] == vec2[i]) {
				iguais = true;
			} else {
				iguais = false;
				break;
			}
		}

		if (iguais) {
			System.out.println("São IGUAIS");
		} else {
			System.out.println("São DIFERENTES");
		}

	}
}
