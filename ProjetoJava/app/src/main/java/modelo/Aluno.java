package modelo;

import java.util.Date;

public class Aluno {
       public     int ra;
       public  String nome;
       public   Date nascimento;
       

public Aluno(int ra, String nome, Date nascimento){
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
}
