package lista1;

import java.util.Scanner;

/*Sabendo-se que a velocidade de cruzeiro de um avi�o 747-300
 *� de 900 km/h, fa�a um programa que leia uma dist�ncia (km),
 *calcule e apresente na tela, quanto tempo (horas)
 *ser� necess�rio para um 747-300 sobrevoar a
 *dist�ncia informada.*/
public class Ex4 {

	public static int VELCRUZ = 900;
	
	public static void main(String[] args) {
		Scanner info = new Scanner(System.in);
		System.out.print("Digite a dist�ncia em Km: ");
		int distancia = info.nextInt();
		
		int tempo = distancia / VELCRUZ;
		
		System.out.println("O tempo gasto ser� de "+tempo+" horas.");
	}
}
