package correcao;
import java.io.IOException;
import java.util.Scanner;
public class A1 {

 

		public static void main(String[] args) throws IOException {
			Scanner scan = new Scanner(System.in);
			double capital = 0, renda = 0, taxa = 0.85;
			System.out.println("Simula��o de emprestimo com taxa de " + taxa + "% ao m�s:");
			System.out.print("Digite qual o valor deseja tomar emprestado: R$ ");
			capital = scan.nextDouble();
			System.out.print("Digite qual a sua renda mensal: R$ ");
			renda = scan.nextDouble();
			System.out.printf("Totalizando um montante de R$ %.2f\n", simulacaoEmprestimo(capital, renda, taxa));
		}

		public static double simulacaoEmprestimo(double capital, double rendaMensal, double jurosAm) {
			int parcelas = 1;
			double montante = capital, valorParcela = capital;
			double ultima = capital * 2;
			double valorLimite = rendaMensal * 30 / 100;
			while (valorParcela > valorLimite) {
				montante = capital * Math.pow(1 + jurosAm / 100, parcelas);
				valorParcela = montante / parcelas;
				System.out.printf("%d parcela de \t R$ %.2f\n", parcelas, valorParcela);
				parcelas++;
				//Interrompe o la�o caso o valor das parcelas aumentem
				if(valorParcela < ultima) {
					ultima = valorParcela;	
				}else {
					System.out.println("N�o � poss�vel aprovar este emprestimo com estas condi��es de juros");
					break;
				}
			}
			System.out.printf("A maior parcela deve ser 30%% de sua renda : R$ %.2f\n", valorLimite);
			System.out.printf("O total de juros ser� R$ %.2f\n", montante - capital);
			return montante;
		}
	}