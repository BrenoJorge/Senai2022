package modelo;

import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class BuscaAleatorios {
	
	static Random r = new Random();
	static Scanner scan = new Scanner(System.in);
	
	public static void main(String[] args) throws IOException{
		System.out.print("Digite quantos n�meros deseja:");
		int n = scan.nextInt();
		int dados[] = numerosAleatorios(n);
		System.out.print("Digite o n�mero que deseja buscar:");
		int b = scan.nextInt();
		mostrarDados(dados);
		boolean resultado = buscaSimples(dados,b);
		System.out.println("A busca obteve sucesso? "+resultado);
		
		//1 - Fa�a uma busca que ao encontrar retorne
		//em qual posi��o do vetor o valor foi encontrado
		
		//2 - Fa�a uma busca que caso encontre o valor
		//em mais de uma posi��o no vetor
		//retorne quantas vezes o valor foi encontrado
		
		//3 - Fa�a uma busca que caso encontre o valor
		//em mais de uma posi��o no vetor
		//Retorne em quais posi��es encontrou
		
		//4 - Faca um m�todo que gere uma matriz aleat�ria
		//que receba como par�metro o n�mero de
		//linhas e colunas
		
		//5 - Fa�a um m�todo que mostre a matriz
		//Ele deve receber a matriz como par�metro
		//e deve mostr�-la na tela
		
		//Fa�a os desafios 2 e 3 s� que com matriz
		
	}

	//Este m�todo retorna um valor booleando V ou F
	//Recebe um vetor como par�metro com dados
	//E um valor b a ser procurado
	private static boolean buscaSimples(int[] dados, int b) {
		for(int i = 0; i < dados.length; i++)
			if(dados[i] == b)
				return true;
		return false;
	}

	//M�todos que n�o retornam nada, s� fazem alguma coisa
	//Tamb�m s�o conhecidos como procedimento
	private static void mostrarDados(int[] dados) {
		for(int i = 0; i < dados.length; i++)
			System.out.println(dados[i]);
	}

	//Este m�todo recebe um par�metro inteiro
	//E retorna n n�meros aleat�rios em forma de vetor
	private static int[] numerosAleatorios(int n) {
		int[] x = new int[n];
		for(int i = 0; i < n; i++)
			x[i] = r.nextInt(1000);
		return x;
	}
}
