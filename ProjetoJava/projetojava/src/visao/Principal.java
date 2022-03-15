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
	static Scanner leia = new Scanner(System.in);
	static Aluno alunos[] = new Aluno[10];
	static int alunosC = 0;
	static int menu = 0;

	public static void main(String[] args) throws IOException, ParseException {

		Calendar c1 = Calendar.getInstance();
		int hora = c1.get(Calendar.HOUR_OF_DAY);
		if (hora > 6 && hora < 12) {
			System.out.println("Bom Dia!");
		} else if (hora > 12 && hora < 18) {
			System.out.println("Boa Tarde!");
		} else {
			System.out.println("Boa Noite!");
		}

		while (menu != 8) {
			System.out.println(
					"Escolha uma opcao:\n[1]Cadastrar Alunos.\t[2]Cadastrar notas.\t[3]Lista de todos os alunos cadastrados.\t[4]Listar todas as notas.\n[5]Buscar dados de um aluno especifico.\t[6]Lista de alunos aprovados.\t[7]Lista de alunos reprovados.\nR:");
			menu = leia.nextInt();
			switch (menu) {
			case 1:
				cadastrarAlunos();
				break;
			case 2:
				cadastrarNota();
				break;
			case 3:
				listarAlunos();
				break;
			case 4:
				listarNotas();
				break;
			case 5:

				System.out.print("Digite o ra do aluno que deseja buscar: ");
				int ra = leia.nextInt();
				int aux = obterAluno(ra);
				if (aux != -1) {
					System.out.println("Nome do aluno " + alunos[aux].nome);
					System.out.println(
							"Nome do aluno " + new SimpleDateFormat("dd/MM/yyyy").format(alunos[aux].nascimento));
					System.out.println("Nome do aluno " + alunos[aux].calcIdade());
					System.out.println("Situacao do aluno " + alunos[aux].obterConceito());
					System.out.println("");
				} else {
					System.out.println("Alno não encontrado");
				}

				break;
			case 6:
				listarAprovados();
				break;
			case 7:
				listarReprovados();
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

	public static String listarReprovados() {
		System.out.println("Alunos REPROVADOS:");

		for (int i = 0; i < alunos.length; i++) {
			if (alunos[i] != null && alunos[i].obterConceito().equals("REPROVADOS")) {

				System.out.println(alunos[i].nome);
			}

		}
		return null;
		
	}

	public static String listarAprovados() {
		System.out.println("Alunos APROVADOS:");

		for (int i = 0; i < alunos.length; i++) {
			if (alunos[i] != null && alunos[i].obterConceito().equals("APROVADO")) {

				System.out.println(alunos[i].nome);
			}

		}
		return null;
		
	}

	public static int obterAluno(int ra) {
		int indice = -1;
		for (int i = 0; i < alunos.length; i++) {
			if (alunos[i] != null) {
				if (alunos[i].ra == ra) {
					indice = i;
				}
			}
		}
		return indice;
	}

	public static String listarNotas() {
		for (int i = 0; i < 10; i++) {
			if (alunos[i] != null) {

				System.out.println(alunos[i].nome);

				System.out.println("\tComp.\tNota 1\tNota 2\tNota 3\tMédia\n");
				for (int j = 0; j < 4; j++) {
					if (alunos[i].notas[j] != null) {
						System.out.print("\t" + alunos[i].notas[j].componente);
						for (int a = 0; a < 3; a++) {
							System.out.print("\t" + alunos[i].notas[j].nota[a]);
						}
						if (alunos[i].notas[j].obterMedia() < 50) {
							System.out.printf("\t|%.2f|", alunos[i].notas[j].obterMedia());
							System.out.println("\n");
						} else {
							System.out.printf("\t%.2f", alunos[i].notas[j].obterMedia());
							System.out.println("\n");
						}
					}
				}
				System.out.println(alunos[i].obterConceito());
				System.out.println("\n");

			}

		}
		return null;

	}

	public static String listarAlunos() {
		System.out.println("RA\tNome\tNascimento\tIdade");
		for (int i = 0; i < alunos.length; i++) {
			if (alunos[i] != null) {
				System.out.println(alunos[i].ra + "\t" + alunos[i].nome + "\t"
						+ new SimpleDateFormat("dd/MM/yyyy").format(alunos[i].nascimento) + "\t"
						+ alunos[i].calcIdade());
			}
		}
		return null;

	}

	public static void cadastrarNota() {
		System.out.print("Digite o ra: ");
		int ra = leia.nextInt();

		for (int i = 0; i < alunos.length; i++) {
			if (alunos[i] != null) {
				if (alunos[i].ra == ra) {

					System.out.println("Aluno que tera as notas cadastradas " + alunos[i].nome);

					Nota[] notas = alunos[i].notas;
					float nota[] = new float[3];
					String comp = "";
					for (int j = 0; j < 4; j++) {
						if (notas[j] == null) {
							System.out.print("Digite o nome da materia:");
							comp = leia.next();
							for (int a = 0; a < 3; a++) {
								System.out.print("Digite a nota do aluno:");
								nota[a] = leia.nextFloat();
							}
							notas[j] = new Nota(comp, nota);
							alunos[i].notas = notas;
							break;
						}

					}

				}
			}
		}

	}

	public static void cadastrarAlunos() throws ParseException {
		System.out.println("Alunos cadastrados: " + alunosC + "/10");
		System.out.print(
				"Escolha: [1]Cadastrar aluno 1 por 1\t[2]Cadastrar a quantidade de alunos que deseja.\t[3]Cadastrar todos os alunos (max 10.)");
		int escolha = leia.nextInt();
		if (escolha == 1) {
			for (int i = 0; i < alunos.length; i++) {
				if (alunos[9] == null) {
					if (alunos[i] == null) {

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
				} else {
					System.out.println("Limite Excedido");
					break;
				}
			}
		} else if (escolha == 2) {
			if (alunos[9] == null) {
				System.out.println("Digite quantos alunos deseja cadastrar:");
				int qtd = leia.nextInt();

				for (int c = 0; c < qtd; c++) {
					for (int i = 0; i < alunos.length; i++) {

						if (alunos[i] == null) {

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
			}
		} else {
			for (int i = 0; i < alunos.length; i++) {
				if (alunos[9] == null) {
					if (alunos[i] == null) {

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

	}

}