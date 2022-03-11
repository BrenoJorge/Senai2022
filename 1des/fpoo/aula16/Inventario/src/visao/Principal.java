package visao;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import modelo.Item;

public class Principal {

	static Scanner s = new Scanner(System.in);
	//Atributo para formatar a Data em dia / m�s / ano
	static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	public static void main(String[] args) throws IOException, ParseException {

		System.out.println("C�lculo de invent�rio");
		System.out.print("Digite quantos �tens deseja colocar no invent�rio:");
		int qtdInstancias = s.nextInt();
		Item[] itens = new Item[qtdInstancias]; //Inst�ncias
	
		System.out.println("Digite o "+qtdInstancias+" itens\nNome\tLocal\tValor\tData da Compra");
		for (int i = 0; i < qtdInstancias; i++) {
			itens[i] = new Item();//Objeto �nico
			itens[i].nome = s.next();
			itens[i].local = s.next();
			itens[i].valor = s.nextDouble();
			itens[i].dataCompra = df.parse(s.next()); //Converte String para Data
		}

		System.out.println("Nome\tLocal\tValor\tData Compra\tAnos");
		for (int i = 0; i < qtdInstancias; i++) {
			//Utiliza o m�todo para string
			System.out.println(itens[i].paraString());
		}
		
		//Algoritmo de acumula��o para somar o total
		double total = 0;
		for (int i = 0; i < qtdInstancias; i++) {
			total += itens[i].valor;
		}
		System.out.println("O total do Invent�rios � "+total);
	}

}
