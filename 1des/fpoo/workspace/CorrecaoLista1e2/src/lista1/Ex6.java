package lista1;

import java.util.Scanner;

/*Desenvolva um programa que leia o raio (cm) e a altura (cm) de um cilindro.
 * Calcule e mostre a �rea (cm2) e o volume (cm3) do cilindro.*/
public class Ex6 {

	public static float PI = (float) 3.14;
	
	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		System.out.println("Digite o raio (cm) e a altura (cm) de um cilindro:");
		int raio = read.nextInt();
		int altura = read.nextInt();
		
		// F�rmula da �rea do C�rculo (Al = 2p. r)
		float areaCirculo = (float) 2 * PI * raio;
		// F�rmula do volume do Cilindro (Al = 2p. r. h)
		float volumeCilindro = (float) 2 * PI * raio * altura;

		System.out.printf("A �rea do C�rculo � de %.2fcm2\n", areaCirculo);
		System.out.printf("O volume do Cilindro � de %.2fcm3", volumeCilindro);
	}
}
