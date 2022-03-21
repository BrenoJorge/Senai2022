package lista1;
/*
 * Um caminh�o consegue transportar 18 toneladas de laranjas
 * em uma viagem que faz entre a fazenda e a f�brica de suco de laranja.
 * Um alqueire de terra produz em m�dia 250 toneladas de laranjas.
 * Fa�a um programa que leia quantos caminh�es
 * e quantos alqueires uma fazenda produtora de laranjas possui,
 * calcule e apresente na tela quantas viagens de caminh�o ser�o necess�rias
 * para transportar toda a colheita de laranjas.
 * */

import java.io.IOException;
import java.util.Scanner;

public class Ex5 {

	public static void main(String[] args) throws IOException {
		Scanner read = new Scanner(System.in);
		int tonCaminhao = 18;
		int tonAlqueire = 250;
		int caminhoes;
		int alqueires;
		int viagens;
		
		//Entrada
		System.out.print("Quantos caminh�es voc� possui: ");
		caminhoes = read.nextInt();
		System.out.print("Quantos alqueires voc� possui: ");
		alqueires = read.nextInt();
		
		//Processamento
		int producao = alqueires * tonAlqueire;
		int carga = caminhoes * tonCaminhao;
		viagens = (int) Math.ceil(producao / carga);//Arredonda para cima
		
		//Sa�da
		System.out.printf("Voc� precisar� de %d viagens.",viagens);

	}

}
