package modelo;

import java.time.Period;
import java.util.Date;

import modelo.Nota;

public class Aluno {
	
	public int ra;
	public String nome;
	public Date nascimento;
	public Nota[] notas = new Nota[4];
	

	public Aluno(int ra, String nome, Date nascimento) {
		this.ra = ra;
		this.nome = nome;
		this.nascimento = nascimento;
	}
	
	public int calcIdade() {
		java.util.Date agora = new java.util.Date();  

		if (agora.getMonth() == nascimento.getMonth()) {
			if (agora.getDay() >= nascimento.getDay()) {
				return agora.getYear() - nascimento.getYear();
			} else {
				return agora.getYear() - nascimento.getYear() - 1;
			}
		} else if(agora.getMonth() > nascimento.getMonth()) {
			return agora.getYear() - nascimento.getYear();
		} else {
			return agora.getYear() - nascimento.getYear() - 1;
		}
	}
	
	public String obterConceito() {
        String aor="APROVADO";

        for (int i = 0; i < 4; i++) {
			if(notas[i] != null) {
				for (int j = 0; j < 4; j++) {
					if(notas[i].obterMedia() < 50) {
						aor = "REPROVADO";
					}
				}
				
			}
		}
		return aor;
	}

}