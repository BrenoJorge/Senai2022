package exercicios;

import java.util.Scanner;

public class Idade {

	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		int idade;
		
		System.out.print("Digite a sua idade: ");
		idade = read.nextInt();
		
		if(idade >= 18) {
			System.out.println("Voc� � maior de idade");
		}else {
			System.out.println("Voc� � menor de idade");
		}
	}
}
