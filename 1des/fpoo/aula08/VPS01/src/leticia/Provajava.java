package leticia;

import java.io.IOException;
import java.util.Scanner;

public class Provajava{
	public static Scanner scan;
     public static Scanner entrada;  
      
     
	public static void main(String[] args)throws IOException {
		entrada = new Scanner(System.in);
		int menu = 0;
		while(menu != 5) {
			System.out.print("Escolha a op��o que deseja ver(*-*)");
			System.out.println("----------------------------");
			System.out.println( "1.Horas Extras\n2.Apura��o\n3.Mat�rias Primas\n4.Blocos\n5.Sair");
			System.out.println("--------------------------------------------------");
			menu = entrada.nextInt();
		switch(menu) {
		//Informar
		  // total de horas e horas extras que recebe
		//trabalhadas no m�s e informe o valor do sal�rio reajustado
		//R$ 5,625 por hora trabalhada *
		//75% horas extras
		case 1:
			
			 HorasExtras();   
			  
			
			break;
			
		case 2:
			GerarAResposta();
			break;
		case 3:
			
			break;
			//Receba do usu�rio o total de pessoas que ir�o participar do desfil
			// informe a quantidade de pessoas necess�ria em cada bloco.
		case 4:
			
			break;
		case 5:
			System.out.println("Obrigada :)");
			break;
			default:
				break;
		}
		}
}
	public static void HorasExtras() {
		  entrada = new Scanner(System.in);
		 double salario;
		 double horaTrab, horaExtraT;
		 double Totalhora, H = 5.625;
		 double HExtras;
		 float  porc = 75;
		 
		 //entrada
		 System.out.print("Degite a hora que vo� trabalhou:");
		 horaTrab = entrada.nextDouble();
		 System.out.print("Digite quantas horas extra voc� trabalhou nesse m�s:");
		 horaExtraT= entrada.nextDouble();
		 //
		 Totalhora = horaTrab * H;
		  HExtras =(H * 75)/100 + H;
		 salario = Totalhora + HExtras;
		 //Sa�da
		 System.out.printf("O seu salario vai ser, junto com as horas extras:%.2f", salario);
		 System.out.println("");
	 }
		  
     //armazene o nome das escolas de samba 
 //obtidos nas categorias: bateria, samba-enredo e fantasias
// o nome da escola, a m�dia dos pontos obtidos e a escola campe�.
//que 5  escolas de samba est�o competindo e que os pontos de cada categoria v�o de 0 a 10.

  public static void GerarAResposta() {
	 
	  Scanner scan = new Scanner(System.in);
		System.out.print("---------- :");
		int comprimento = scan.nextInt();
		comprimento = 5;
		String[] nomes = { "S�o Clemente", "Beija-Flor de Nil�polis", "Para�so do Tuiuti.", "Portela.", "Beijal�", "Cracat�"};
		String[] nome = {"bateria, samba-enredo e fantasias"};
		int[] pontos= new int[comprimento];
		for (int i = 0; i < comprimento; i++) {
			System.out.println("Digite o nome da Escola ["+i+"]: ");
			nomes[i]=entrada.next();
					
			System.out.print("Digite a nota que voc� da pra bateria:" );
			nome[i] = entrada.next();
			System.out.println("Digite a nota que voc� da pra samba-enredo:  ");
			nome[i] = entrada.next();
			
			System.out.println("Digite a nota que voc� da pra fantasia:  ");
			nome[i] = entrada.next();
		}
		for(int i = 0; i < comprimento; i++) {
			 
			System.out.println(nomes[i]);
			if(pontos[i]<5) {
				System.out.println(nome[i]+"+ i + ");
			
			
		}
			
  }
  }
  //Carros aleg�ricos (20%), Mestre-sala e Porta-bandeira (3%), Bateria (20%),
  //Madrinha de bateria (2%) e Recuo da bateria (20%)
  public static void GerarBloco() {
  entrada = new Scanner(System.in);
  int qtdp;
   float Comiss�ofrente = 15;
   float  Alas=5;
   float AlaBai = 15;
   float Carrosale = 20;
   float  MestreePorta = 3;
   float Bateria = 20;
   float Madrinha = 2;
   float Recuo = 20;
  System.out.println("Digite pessoas ir�o participar do desfile");
  qtdp = entrada.nextInt();
   System.out.printf("Comiss�ofrente:%.1f",Comiss�ofrente * qtdp);
  System.out.println("");
  }
}
