package lista1;

import java.util.Scanner;

/*Um laborat�rio de F�sica est� estudando barras de calc�rio para Constru��o Civil,
 * e precisa saber a densidade de cada barra.
 * Fa�a um programa para ajud�-los. (Dado: densidade = massa / volume)*/
public class Ex7 {

	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		System.out.println("Digite a massa e o volume do calc�rio:");
		int massa = read.nextInt();
		int volume = read.nextInt();

		float densidade = (float) massa / volume;
		System.out.printf("A dencidade do calc�rio � de %.2f",densidade);
	}
}
