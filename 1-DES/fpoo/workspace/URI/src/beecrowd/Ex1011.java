package beecrowd;

/*
 * Compara��o matem�tica entre dois n�meros
 * A soma dos dois n�meros mais a diferen�a dos dois n�meros
 * dividido por dois � o maior n�mero
 * */

import java.io.IOException;
import java.util.Scanner;

public class Ex1011 {

	public static void main(String[] args) throws IOException{
		Scanner read = new Scanner(System.in);
		double raio = read.nextDouble();
		double volume = (4.0/3) * 3.14159 * Math.pow(raio,3);
		System.out.printf("VOLUME = %.3f\n",volume);
	}

}
