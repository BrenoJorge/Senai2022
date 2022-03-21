package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Aluno {

	// Atributos
	public int ra;
	public String nome;
	public Date nascimento;
	public Componente[] componentes = new Componente[4];
	// Campo para formatar a data em dia/M�s/Ano
	public SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	// M�todos
	public int calcIdade() {
		Date hoje = new Date();
		@SuppressWarnings("deprecation")
		int anoDif = hoje.getYear() - nascimento.getYear();
		@SuppressWarnings("deprecation")
		int mesDif = hoje.getMonth() - nascimento.getMonth();
		@SuppressWarnings("deprecation")
		int diaDif = hoje.getDay() - nascimento.getDay();
		if (mesDif < 0) {
			anoDif -= 1;
		}
		if (mesDif == 0) {
			if(diaDif <=0)
			anoDif -= 1;
		}
		return anoDif;
	}
	/*
	 * Para calcular a idade � necess�rio obter a data de hoje E verificar as
	 * diferen�as entre dia, m�s e ano Os m�todos aparecem riscados, pois est�o
	 * obsoletos Por�m didaticamente e para estudar l�gica s�o �tens ainda Os
	 * m�todos mais precisos est�o na classe java.util.Calendar
	 */

	public String obterConceito() {
		int totComponentesCadastrados = 0;
		String conceito = "Aprovado";
		for (int i = 0; i < componentes.length; i++)
			if (componentes[i] != null)
				totComponentesCadastrados++;
		for (int i = 0; i < totComponentesCadastrados; i++)
			if (componentes[i].obterMedia() < 50)
				conceito = "Reprovado";
		return conceito;
	}
	/*
	 * Este m�todo verifica as m�dias de todas os componentes cadastrados At� 4
	 * componentes, caso algum componente apresente nota inferior a 50 o conceito
	 * ser� reprovado
	 */

	public String paraString() {
		return ra + "\t" + nome + "\t" + df.format(nascimento) + "\t" + calcIdade();
	}

	/*
	 * Como estamos trabalhando com a classe Date utilizanos outra classe para
	 * formatar os dados da data SimpleDateFormat tambme de java.util Esta classe
	 * converte as entradas de String para Date e formata a saida da data
	 */
	public String paraStringNotas() {
		int totNotasCadastradas = 0;
		String dados = ra + "\t" + nome + "\t" + df.format(nascimento) + "\t" + calcIdade();
		for (int i = 0; i < componentes.length; i++)
			if (componentes[i] != null)
				totNotasCadastradas++;
		dados += "\nComp.\tNota1\tNota2\tNota3\tMedia\n";
		for (int i = 0; i < totNotasCadastradas; i++) {
			dados += componentes[i].componente + "\t";
			for (int j = 0; j < 3; j++)
				if (componentes[i].nota[j] != -1)
					dados += componentes[i].nota[j] + "\t";
				else
					dados += "-\t";
			dados += componentes[i].obterMedia() + "\n";
		}
		dados += obterConceito();
		return dados;
	}
}
