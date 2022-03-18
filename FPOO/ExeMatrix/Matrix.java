package matrix;

import java.util.Scanner;
import java.util.Random;

public class Matrix {

	static Scanner leia = new Scanner(System.in);

	public static void main(String[] args) {

		int menu = 0;
		while (menu != 9) {
			System.out.print(
					"Escolha uma opção:\n[1] Exercício 1.\t[2] Exercício 2.\t[3] Exercício 3.\t[4] Exercício 4.\t[5] Exercício 5.\n[6] Exercício 6.\t[7] Exercício 7.\t[8] Exercício 8.\t [9] Sair.\nR:");
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
				exe8();
				break;
			case 9:
				System.out.println("Obrigado por usar nossos sistemas!!!");
				break;
			default:
				System.out.println("Tente novamente");
				break;
			}
		}

	}

	public static void exe8() {
		double a[][] = new double[2][2];
		double b[][] = new double[2][2];
		System.out.println("Matrix 1");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				a[i][j] = leia.nextDouble();
			}
		}
		System.out.println("Matrix 2");
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {
				b[i][j] = leia.nextDouble();
			}
		}
		int menuu = 0;
		while (menuu != 5) {
			System.out.println("[1]Somar as duas matrizes");
			menuu = leia.nextInt();
			switch (menuu) {
			case 1:
				double acu = 0;
				for (int i = 0; i < 2; i++) {
					for (int j = 0; j < 2; j++) {
						acu = acu + a[i][j] + b[i][j];
					}
				}
				System.out.println("A soma das matrizes é " + acu);
				break;
			case 2:
				double c[][] = new double[2][2];

				for (int i = 0; i < b.length; i++) {
					for (int j = 0; j < b.length; j++) {
						c[i][j] = b[i][j] - a[i][j];
					}
				}
				for (int i = 0; i < b.length; i++) {
					for (int j = 0; j < b.length; j++) {
						System.out.println("a subtracao da primeira matrix pela segunda: " + c[i][j]);
					}
				}
				break;
			case 3:
				System.out.print("Digite a constante que deseja adicionar:");
				double constante = leia.nextDouble();

				for (int i = 0; i < a.length; i++) {
					for (int j = 0; j < a.length; j++) {
						a[i][j] += constante;
					}
				}
				for (int i = 0; i < b.length; i++) {
					for (int j = 0; j < b.length; j++) {
						b[i][j] += constante;
					}
				}
				break;
			case 4:
				for (int i = 0; i < a.length; i++) {
					for (int j = 0; j < a.length; j++) {
						System.out.println(a[i][j] + " ");
					}
					System.out.println();
				}
				for (int i = 0; i < b.length; i++) {
					for (int j = 0; j < b.length; j++) {
						System.out.println(b[i][j] + " ");
					}
					System.out.println();
				}
				break;
			case 5:
				System.out.println("Obrigado por usar nossos sistemas!!!");
				break;
			default:
				System.out.println("Tente novamente!");
				break;
			}
		}

	}

	public static void exe7() {
		int matrix7[][] = new int[10][3];
		int id = 1;
		int prova1 = 0;
		int prova2 = 0;
		int prova3 = 0;

		for (int i = 0; i < 3; i++) {
			System.out.println("Aluno " + id);
			id++;
			for (int j = 0; j < 3; j++) {

				System.out.print("Digite a nota do aluno na prova: ");
				matrix7[i][j] = leia.nextInt();
			}
		}
		for (int i = 0; i < 3; i++) {
			int aux5 = matrix7[i][0];

			if (aux5 < matrix7[i][1] && aux5 < matrix7[i][2]) {
				prova1++;

			} else if (aux5 == matrix7[i][1] || aux5 == matrix7[i][2]) {
				prova1++;
			}

		}
		for (int i = 0; i < 3; i++) {
			int aux5 = matrix7[i][1];

			if (aux5 < matrix7[i][0] && aux5 < matrix7[i][2]) {
				prova2++;

			}

		}
		for (int i = 0; i < 3; i++) {
			int aux5 = matrix7[i][2];

			if (aux5 < matrix7[i][0] && aux5 < matrix7[i][1]) {
				prova3++;

			}

		}

		System.out.println("Quantidade de alunos que foram mal na primeira prova: " + prova1);
		System.out.println("Quantidade de alunos que foram mal na segunda prova: " + prova2);
		System.out.println("Quantidade de alunos que foram mal na terceira prova: " + prova3);

	}

	public static void exe6() {
		Random aleatorio = new Random();
		int matrix6[][] = new int[5][5];

		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				matrix6[i][j] = -1;
			}
		}

		boolean repetido = false;

		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {

				do {
					repetido = false;
					matrix6[i][j] = aleatorio.nextInt(99);
					for (int k = 0; k < 5; k++) {
						for (int k2 = 0; k2 < 5; k2++) {
							if (matrix6[i][j] == matrix6[k][k2] && k != i && k2 != j) {
								repetido = true;
							}
						}
					}
				} while (repetido);

			}
		}

		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				System.out.print(matrix6[i][j] + " ");
			}
			System.out.println();
		}

	}

	public static void exe5() {
		int matrix5[][] = new int[3][3];
		int acu3 = 0;
		for (int i = 0; i < 3; i++) {
			System.out.println("Linha: " + i);
			for (int j = 0; j < 3; j++) {
				System.out.println("Coluna: " + j);
				System.out.print("Digite um número: ");
				matrix5[i][j] = leia.nextInt();
				if (i == 0 && j == 1) {
					acu3 += matrix5[i][j];
				} else if (i == 0 && j == 2) {
					acu3 += matrix5[i][j];
				} else if (i == 1 && j == 2) {
					acu3 += matrix5[i][j];
				}

			}
		}
		System.out.println("A soma a cima da diagonal principal e " + acu3);

	}

	public static void exe4() {
		int matrix4[][] = new int[3][3];
		int acu2 = 0;
		for (int i = 0; i < 3; i++) {
			System.out.println("Linha: " + i);
			for (int j = 0; j < 3; j++) {
				System.out.println("Coluna: " + j);
				System.out.print("Digite um número: ");
				matrix4[i][j] = leia.nextInt();
				if (i == 1 && j == 0) {
					acu2 += matrix4[i][j];
				} else if (i == 2 && j == 0) {
					acu2 += matrix4[i][j];
				} else if (i == 2 && j == 1) {
					acu2 += matrix4[i][j];
				}

			}
		}
		System.out.println("A soma abaixo da diagonal principal e " + acu2);

	}

	public static void exe3() {
		int matrix3[][] = new int[3][3];
		int acu = 0;
		for (int i = 0; i < 3; i++) {
			System.out.println("Linha: " + i);
			for (int j = 0; j < 3; j++) {
				System.out.println("Coluna: " + j);
				System.out.print("Digite um número: ");
				matrix3[i][j] = leia.nextInt();
				acu += matrix3[i][j];
			}
		}
		System.out.println("A soma da matrix é " + acu);
	}

	public static void exe2() {
		int matrix2[][] = new int[5][5];

		for (int i = 0; i < 5; i++) {
			System.out.println("Linha: " + i);
			for (int j = 0; j < 5; j++) {
				System.out.println("Coluna: " + j);
				System.out.print("Digite um número: ");
				matrix2[i][j] = leia.nextInt();
			}
		}
		System.out.print("Digite o número que deseja buscar: ");
		int busca = leia.nextInt();

		int aux = 0;

		for (int a = 0; a < 5; a++) {
			for (int b = 0; b < 5; b++) {
				if (matrix2[a][b] == busca) {
					aux++;
				}
			}
		}

		int linha[] = new int[aux];
		linha[0] = -1;
		int coluna[] = new int[aux];
		int aux2 = 0;

		for (int c = 0; c < 5; c++) {
			for (int d = 0; d < 5; d++) {
				if (matrix2[c][d] == busca) {
					linha[aux2] = c;
					coluna[aux2] = d;
					aux2++;
				}
			}

		}
		if (linha[0] != -1) {
			for (int e = 0; e < aux; e++) {
				System.out.println("Numero encontrado na linha " + linha[e] + " e coluna " + coluna[e]);
			}
		} else {
			System.out.println("Nao encontrado");
		}

	}

	public static void exe1() {
		int matrix[][] = new int[2][2];
		int maior = 0;

		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 2; j++) {

				System.out.print("Digite um número: ");
				matrix[i][j] = leia.nextInt();

				if (maior < matrix[i][j]) {
					maior = matrix[i][j];
				}
			}
		}
		System.out.print("O maior número foi: " + maior);
		System.out.println();

	}

}