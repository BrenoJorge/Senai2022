package controle;

import java.text.ParseException;
import java.util.ArrayList;

import modelo.Arquivo;

public class ProcessaArquivo {

	public static ArrayList<Arquivo> dados = new ArrayList<>();
	public static ArquivoDAO dado = new ArquivoDAO();
	public static Double saldo = 0.0;
	public static Double entrada = 0.0;
	public static Double saida = 0.0;
	public static void abrir() throws ParseException {
		dados = dado.ler();
	}
	
	public static void salvar() {
		dado.escrever(dados);
	}
	

}
