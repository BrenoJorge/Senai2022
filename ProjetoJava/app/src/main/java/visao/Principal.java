package visao;

import java.util.Calendar;
import java.util.Scanner;
import modelo.Aluno;
import modelo.Nota;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.io.IOException;
import java.util.Date;

public class Principal {

	public static void main(String[] args) throws IOException, ParseException {
	
		Calendar c1 = Calendar.getInstance();
		int hora = c1.get(Calendar.HOUR_OF_DAY);
		if(hora > 6 && hora < 12) {
			System.out.println("Bom Dia!");
		}else if(hora > 12 && hora < 18) {
			System.out.println("Boa Tarde!");
		}else {
			System.out.println("Boa Noite!");
		}
	   
	
	
	    Scanner leia = new Scanner(System.in);
	    
	  	Aluno alunos[] = new Aluno[10];
           int alunosC = 0;
		int menu = 0;
		
		while (menu != 8) {
			System.out.println("Escolha uma opcao:\n[1]Cadastrar Alunos.\t[2]\t[3]Lista de todos os alunos cadastrados.\t[4]\n[5]\t[6]\t[7]\nR:");
			menu = leia.nextInt();
			switch (menu) {
			case 1:
			          System.out.println("Alunos cadastrados: " + alunosC + "/10");
			        System.out.println("Escolha: [1]Cadastrar aluno 1 por 1\t[2]Cadastrar a quantidade de alunos que deseja.\t[3]Cadastrar todos os alunos (max 10.)");
			  int escolha = leia.nextInt();
	      		  if(escolha == 1){
			   for (int i = 0; i < alunos.length; i++) {
					if (alunos[9] == null) {
						if(alunos[i] == null) {
						
						System.out.println("Digite o RA do aluno:");
						int ra = leia.nextInt();
						
							System.out.println("Digite o nome do Aluno");
							String nome = leia.next();
							
							System.out.println("Digite a data de nascimento do Aluno (EX: 01/01/1999)");
							String nasc = leia.next();
						    Date nascimento = new SimpleDateFormat("dd/MM/yyyy").parse(nasc);
							
							
							alunosC ++;
							alunos[i] = new Aluno(ra, nome, nascimento);
							
							System.out.println("__________________________");
							break;
						}
					} else {
						System.out.println("Limite Excedido");
						break;
					}
				}
			   }else if(escolha == 2){
			   if (alunos[9] == null) {
			   System.out.println("Digite quantos alunos deseja cadastrar:");
			      int qtd = leia.nextInt();
                       
			   for(int c = 0; c < qtd; c++){
			   for (int i = 0; i < alunos.length; i++) {
					
						if(alunos[i] == null) {
						
						System.out.println("Digite o RA do aluno:");
						int ra = leia.nextInt();
						
							System.out.println("Digite o nome do Aluno");
							String nome = leia.next();
							
							System.out.println("Digite a data de nascimento do Aluno (EX: 01/01/1999)");
							String nasc = leia.next();
						    Date nascimento = new SimpleDateFormat("dd/MM/yyyy").parse(nasc);
							
							
							alunosC++;
							alunos[i] = new Aluno(ra, nome, nascimento);
							
							System.out.println("__________________________");
							break;
						}
					
					}
				}
				} else {
						System.out.println("Limite Excedido");
						break;
			   }
			   }else{
			     for (int i = 0; i < alunos.length; i++) {
					if (alunos[9] == null) {
						if(alunos[i] == null) {
						
						System.out.println("Digite o RA do aluno:");
						int ra = leia.nextInt();
						
							System.out.println("Digite o nome do Aluno");
							String nome = leia.next();
							
							System.out.println("Digite a data de nascimento do Aluno (EX: 01/01/1999)");
							String nasc = leia.next();
						    Date nascimento = new SimpleDateFormat("dd/MM/yyyy").parse(nasc);
							
							
							alunosC++;
							alunos[i] = new Aluno(ra, nome, nascimento);
							
							System.out.println("__________________________");
							
						}
					} else {
						System.out.println("Limite Excedido");
						break;
					}
				}
			   
             }    
                  
				break;
			case 2:
			      
				break;
			case 3:
			      System.out.println("RA\tNome\tNascimento\tIdade");
				for (int i = 0; i < alunos.length; i++) {
					if (alunos[i] != null) {
						System.out.println(alunos[i].ra + "\t" + alunos[i].nome + "\t" + new SimpleDateFormat("dd/MM/yyyy").format(alunos[i].nascimento) + "\t" + alunos[i].calcIdade());
					}
				}
				break;
			case 4:
			      
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				System.out.println("Obrigado por usar nossos sistemas!!!");
				break;
			default:
				System.out.println("tente novamente!!!");
				break;
			}
		}

	}
	
}

	