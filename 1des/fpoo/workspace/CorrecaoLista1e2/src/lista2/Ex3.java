package lista2;

import java.io.IOException;
import java.util.Scanner;

public class Ex3 {

	public static void main(String[] args) throws IOException {
		Scanner read = new Scanner(System.in);
		double salFilho = 56.47, salFam = 0;
		
		System.out.print("Digite seu sal�rio: ");
		double salario = read.nextDouble();
		
		if(salario > 1655.98) {
			System.out.println("\"Se vira\", voc� n�o tem direito ao sal�rio fam�lia");
		}else {
			System.out.print("Quantos filhos que se enquadra na regra voc� t�m:");
			int filhos = read.nextInt();
			salFam = filhos * salFilho;
		}
		
		System.out.printf("O montante do sal�rio fam�lia �: %.2f\n",salFam);
		System.out.printf("Seu sal�rio total �: %.2f\n",salario + salFam);
	}

}
