package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;

import modelo.Arquivo;

public class ArquivoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String path = "C:\\Users\\des\\Desktop\\TRABALHO\\projetoSenai\\projetinhocremoso\\Dados\\Arquivo.csv";
	
	public ArrayList<Arquivo> ler() throws ParseException {
		ArrayList<Arquivo> linhas = new ArrayList<>();
		Arquivo dado;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while(linha != null) {
				dado = new Arquivo(linha);
				linhas.add(dado);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		return linhas;
	}
	
	public void escrever(ArrayList<Arquivo> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(path));
			for (Arquivo p : linhas) {
				bw.write(p.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
		System.out.println("sucesso");
	}

}
