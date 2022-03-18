package correcao;
import java.util.Scanner;
import java.util.Map;
public class Exerenie2 {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		
		System.out.print("Digite quantos contatos deseja cadastrar:");
		int qtd = leia.nextInt();
		String aluno[] = new String[qtd];
		int nota1[] = new int[qtd];
		int nota2[] = new int[qtd];
		int nota3[] = new int[qtd];
		int media[] = new int[qtd];
		
		for(int i = 0; i < aluno.length; i++) {
			System.out.println("Digite o nome do aluno: ");
			aluno[i] = leia.next();
			System.out.println("Primeira nota do aluno: ");
			nota1[i] = leia.nextInt();
			System.out.println("Segunda nota do aluno: ");
			nota2[i] = leia.nextInt();
			System.out.println("Terceira nota do aluno: ");
			nota3[i] = leia.nextInt();
		}
      for(int j = 0; j < aluno.length;j++) {
    	  nota1[j] /= 5;
    	  nota2[j] /= 3;
    	  nota3[j] /= 2;
    	  media[j] = (nota1[j] + nota2[j] + nota3[j])/3;
      }
      for(int b = 0; b < aluno.length;b++) {
    	  System.out.println("A media do aluno " + aluno[b] + " é " + media[b]);
    	  if(media[b] >= 6) {
    		  System.out.println("Aluno aprovado!");
    	  }else {
    		  System.out.println("Aluno reprovado!");
    	  }
      }
	}

}
