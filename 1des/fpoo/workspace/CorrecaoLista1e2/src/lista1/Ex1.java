package lista1;
import java.util.Scanner;

/* Desenvolva um programa que leia tr�s vari�veis (a, b, c)
 * e resolva a express�o: ( a + b ) / c */
public class Ex1 {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		System.out.println("Digite valores inteiros para A, B, C:");
		int a = leia.nextInt();
		int b = leia.nextInt();
		int c = leia.nextInt();
		float resultado = (float)(a + b) / c;
		System.out.printf("O resultado da (A + B) / C = %.2f",resultado);
	}

}
