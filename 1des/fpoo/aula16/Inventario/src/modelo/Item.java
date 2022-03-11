package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Item {
	
	//Atributos
	public String nome;
	public String local;
	public double valor;
	public Date dataCompra;
	
	//Atributo para formatar a Data em dia / m�s / ano
	private SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	
	//Metodos
	
	//Nota��o de m�todo obsoleto
	@SuppressWarnings("deprecation") 
	public int idadeDoItem() {
		Date hoje = new Date();
		return hoje.getYear() - dataCompra.getYear();
	}
	
	//M�todo que mostra todo o objeto de uma s� vez
	public String paraString() {
		return nome + "\t" + local + "\t" + String.format("%.2f", valor) + "\t" + df.format(dataCompra)+"\t"+idadeDoItem();
	} 
	
}