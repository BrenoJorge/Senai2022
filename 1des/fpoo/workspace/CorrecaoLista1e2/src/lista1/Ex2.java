package lista1;

import java.util.Scanner;

/*Desenvolva um programa que leia a
 * velocidade de um carro (km/h) e a
 * dist�ncia(Km) a ser per-corrida (km)
 * por ele. Calcule e apresente na tela,
 * quanto tempo (horas) ser� necess�rio
 * para o carro percorrer a dist�ncia
 * informada*/
public class Ex2 {
	public static void main(String[] args) {
		Scanner info = new Scanner(System.in);
		
		System.out.print("Velocidade Km/h: ");
		int velocidade = info.nextInt();
		System.out.print("Dist�ncia Km: ");
		int distancia = info.nextInt();
		
		int tempo = distancia / velocidade;
		
		System.out.print("O tempo gasto ser� de: "+tempo+" horas");
	}
}
