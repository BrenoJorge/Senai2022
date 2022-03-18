package fill;
import java.util.Scanner;
public class Agenda2 {

	public static void main(String[] args) {	
		
        Scanner leia = new Scanner(System.in);
        
        System.out.print("Digite a quantidade de contatos que deseja cadastrar:");
        int qtdcont = leia.nextInt();
		Contato contatos[] = new Contato[qtdcont];
		System.out.println("id \t nome \t idade \t telefone ");
		for(int i = 0; i < qtdcont; i++) {
			contatos[i] = new Contato();
			contatos[i].id = leia.nextInt();
			contatos[i].nome = leia.next();
			contatos[i].idade = leia.nextInt();
			contatos[i].telefone = leia.next();
		}
		
		int menu = 0;
        while(menu != 5) {
        	 System.out.println("escolha uma opcao:\n1.Mostrar Todos, 2.Buscar por Id, 3.Buscar por Nome, 4.Buscar por Telefone, 5.Sair");
             menu = leia.nextInt();
        switch(menu) {
        case 1:
        	for(int ip = 0;ip < qtdcont; ip++) {
    			System.out.println(contatos[ip].id +"\t" + contatos[ip].nome + "\t" + contatos[ip].idade + "\t" + contatos[ip].telefone);
    		}
        	break;
        case 2:
        	
        	break;
        case 3:
        	break;
        case 4:
        	break;
        case 5:
        	System.out.println("muito obrigado por utilazr nosso sistemas");
        	break;
        default:
        	System.out.println("tente novamente");
        	break;
        }
        }
	}

	private static void MostrarBusca(int b) {
		// TODO Auto-generated method stub
		
	}

}

