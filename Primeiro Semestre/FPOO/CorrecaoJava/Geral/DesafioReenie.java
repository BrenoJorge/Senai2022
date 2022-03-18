package correcao;

import java.util.Random;

public class DesafioReenie {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random rand = new Random();
		int numeros[][] = new int[3][3];
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				numeros[i][j] = rand.nextInt(100);
			}
		}
		
		for(int b = 0;b < 3; b++) {
			System.out.print(numeros[b][b] + " ");
			System.out.println(numeros[b][b = ] + " ");
		}
	}

}
