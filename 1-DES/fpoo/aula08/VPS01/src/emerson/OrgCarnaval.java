package emerson;

/*
*Organiza��o do Carnaval do Rio de Jaqueiro.
*Voc� foi contratado para desenvolver solu��es para a equipe organizadora do carnaval do Rio de Jaqueiro, para isso deve desenvolver um programa que solucione os quatro requisitos a seguir.O programa deve contar com uma estrutura de menu (Utilizando Switch/Case), onde o usu�rio selecione o problema a ser resolvido;
(1 Horas Extras, 2 Apura��o, 3 Mat�rias Primas, 4 Blocos, 5 Sair)
*/
import java.io.IOException;
import java.util.Scanner;

public class OrgCarnaval {

	public static Scanner read = new Scanner(System.in);

	public static void main(String[] args) throws IOException {
		int menu = 0;
		while (menu != 5) {
			System.out.println("###########Menu de calculos###########");
			System.out.println("1-Horas extras\n2-Apura��o\n3-Mat�rias Primas\n4-Bloco\n5-Sair");
			menu = read.nextInt();
			switch (menu) {
			case 1:
				/*
				 * A escola de samba unidos do JAVA est� com dificuldade para gerenciar o
				 * pagamento de seus funcion�rios, devido ao aumento das horas extras. Para
				 * auxili�-los crie um algoritmo que receba o total de horas e horas extras
				 * trabalhadas no m�s e informe o valor do sal�rio reajustado. Leve em
				 * considera��o que todos recebem em m�dia R$ 5,625 por hora trabalhada e que a
				 * hora extra vale 75% a mais do valor original.
				 */
				System.out.print("Informe a quantidade de horas normais trabalhadas no m�s: ");
				double hn = read.nextDouble(); // hn = hora normal
				System.out.print("Informe a quantidade de horas excedidas trabalhadas no m�s: ");
				double he = read.nextDouble(); // he = hora extra

				double hec = (5.625 * he) * 75 / 100 + (5.625 * he); // hec = hora extra calculada
				System.out.printf("Valor de Horas Extras a receber: %.3f\n", hec);
				double total = 5.625 * hn + hec;
				System.out.printf("Sal�rio total a receber: %.3f\n", total);
				break;
			case 2:
				/*
				 * A academia de artes carnavalescas precisa de um sistema que armazene o nome
				 * das escolas de samba concorrentes e os pontos obtidos nas categorias:
				 * bateria, samba-enredo e fantasias, e no final da apura��o informe o nome da
				 * escola, a m�dia dos pontos obtidos e a escola campe�. Sabe-se que 5 escolas
				 * de samba est�o competindo e que os pontos de cada categoria v�o de 0 a 10.
				 */
				System.out.println("Quantas escolas v�o ser avaliadas? ");
				int escola = read.nextInt();
				String[] nome = new String[escola];
				int[] nota = new int[escola];
				int[] bateria = new int[escola];
				int[] sambaenredo = new int[escola];
				int[] fantasia = new int[escola];

				for (int i = 0; i < escola; i++) {
					System.out.print("Nome da escola: " + i);
					nome[i] = read.next();
					System.out.print("Informe os pontos obtidos por categaoria\nBateria: ");
					bateria[i] = read.nextInt();
					System.out.print("Samba Enredo: ");
					sambaenredo[i] = read.nextInt();
					System.out.print("Fantasia: ");
					fantasia[i] = read.nextInt();

					int tn = sambaenredo[i] + fantasia[i] + bateria[i]; // tn = total das notas obtidas.
					System.out.println("pontos obtidos: " + tn);

				}

				break;
			case 3:
				/*
				 * A escola Rosas de Caf� est� passando por problemas financeiros e precisa da
				 * sua ajuda. Atualmente foi verificado que est�o gastando al�m do estimado com
				 * as mat�rias-primas utilizadas nas fantasias. Antes de tomar qualquer decis�o
				 * estrat�gica precisam identificar onde est� o maior gasto. Receba do usu�rio a
				 * quantidade utilizada em quilo dos materiais, seu valor e o valor estimado
				 * para ser utilizado e informe a rela��o dos materiais e se o valor est�
				 * excedendo o valor previsto. Sabe-se que as mat�rias-primas s�o: Lantejoulas,
				 * Penas de Avestruz do Himalaia e tecido de seda H�ngara (Mostrar as mat�rias
				 * primas mais caras primeiro - ordem decrescente).
				 */

				break;
			case 4:
				/*
				 * Para organizar o desfile da escola Imperatriz HTML, ser� necess�rio separar
				 * as pessoas nos blocos que ir�o se apresentar. Receba do usu�rio o total de pe
				 */
				break;
			default:
				break;
			}
		}
	}
}