package lista1;

import java.util.Scanner;

/*Fa�a um programa que leia dois valores,
 * divida o primeiro valor digitado pelo segundo valor digita-do
 * e informe para o usu�rio qual ser� o valor de resto dessa divis�o.*/
public class Ex8 {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		System.out.println("Digite dois valores inteiros A e B:");
		int a = leia.nextInt();
		int b = leia.nextInt();
		int resto = a % b;
		System.out.println("O resto da divis�o de A por B � "+resto);
	}
}
