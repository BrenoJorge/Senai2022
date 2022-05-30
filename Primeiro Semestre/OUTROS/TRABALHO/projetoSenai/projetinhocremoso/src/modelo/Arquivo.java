package modelo;

import java.text.DecimalFormat;
import java.util.Currency;
import java.util.Locale;

import controle.ProcessaArquivo;

public class Arquivo {
	
	String data;
	String valor;
	String SaidaOuEntrada;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	
	public Arquivo() {
		
	}
	
	public Arquivo(String linha) {
		
		df.setCurrency(Currency.getInstance(BRASIL));
		
		this.data = linha.split(";")[0];
		this.valor = (linha.split(";")[1].replace(",", "."));
		this.SaidaOuEntrada = linha.split(";")[2];
		if(linha.split(";")[2].equals("Entrada")){
			ProcessaArquivo.saldo += Double.parseDouble(linha.split(";")[1].replace(",", "."));
			ProcessaArquivo.entrada += Double.parseDouble(linha.split(";")[1].replace(",", "."));
		}else if(linha.split(";")[2].equals("Saida")){
			ProcessaArquivo.saldo -= Double.parseDouble(linha.split(";")[1].replace(",", "."));
			ProcessaArquivo.saida += Double.parseDouble(linha.split(";")[1].replace(",", "."));
		}
	}

	public Arquivo(String data, String valor, String saidaOuEntrada) {
		this.data = data;
		this.valor = valor.replace(".",",");
		SaidaOuEntrada = saidaOuEntrada;
		if(SaidaOuEntrada.equals("Entrada")) {
			ProcessaArquivo.saldo += Double.parseDouble(valor);
		}else if(SaidaOuEntrada.equals("Saida")) {
			ProcessaArquivo.saldo -= Double.parseDouble(valor);
		}
	}

	public String toString() {
		return data + "\tR$ " + valor + "\t" + SaidaOuEntrada + "\n";
	}

	public String toCSV() {
		return data + ";" + valor + ";" + SaidaOuEntrada + "\r\n";
	}
	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public String getSaidaOuEntrada() {
		return SaidaOuEntrada;
	}

	public void setSaidaOuEntrada(String saidaOuEntrada) {
		SaidaOuEntrada = saidaOuEntrada;
	}
	
	
}
