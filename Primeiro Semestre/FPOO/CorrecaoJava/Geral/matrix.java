package correcao;
import java.util.Random;
import java.util.Scanner;
public class matrix {
	public static void main(String[] args) {
		
		Random rand = new Random();
		Scanner leia = new Scanner(System.in);
		System.out.println("digite quantos numeros quer ");
		int n = leia.nextInt();
		int dados[] = new int[n];
		for(int c = 0; c < dados.length; c++) {
			dados[c] = rand.nextInt(10);
		}
		System.out.println("digite o numero pra buscar ");
		int b = leia.nextInt();
		
		boolean encontrado = false;
		int pos = 1;
		for(int i = 0; i < dados.length; i++) {

			if(dados[i] == b) {
				encontrado = true;
				pos = i;
				
				
			}
			System.out.println("a busca teve sucesso ? " + encontrado);
			System.out.println("o numero existente " + dados[i]);
			System.out.println("a casa qie se encontra " + i);
		}
		
		
	}
}
