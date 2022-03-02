package eduardo;

import java.util.Scanner;
import java.io.IOException;

	public class Prova {

		public static void main(String[] args) throws IOException{

			Scanner leia = new Scanner(System.in);
			System.out.println("==== Organiza��o do Carnaval do Rio de Jaqueiro - VERSION 1.0 ====");
			int menu = 0;
			System.out.println("Digite um dos n�meros abaixo\n1- Horas Extras\n2- Apura��o\n3- Mat�rias Primas\n4- Blocos\n5- Sair");
			menu = leia.nextInt();
			
			switch(menu) {
			
			case 1:
				int horasTrabalhadas, horasExtras;
				double valorHoras, valorExtras, resultadoHoras, resultadoExtras;
				System.out.println("==== CALCULADORA HORAS MENSAIS E HORAS EXTRAS ====");
				System.out.print("Digite a quantidade de horas que voc� trabalha por m�s: ");
				horasTrabalhadas = leia.nextInt();
				
				System.out.print("Digite a quantidade de horas extras:");
				horasExtras = leia.nextInt();
				
				valorHoras = 5.625;
				resultadoHoras = horasTrabalhadas * 5.625;
				
				valorExtras = ((valorHoras * 0.75) + 5.625);
				resultadoExtras = valorExtras * horasExtras;
				
				System.out.println("\nCerto! Ent�o:\n");
				System.out.printf("Valor a receber Horas: R$%.3f \n", resultadoHoras);
				System.out.printf("Valor a receber de Horas Extras: R$%.3f \n", resultadoExtras);
				System.out.printf("\nVALOR A RECEBER TOTAL: R$%.3f \n", (resultadoHoras + resultadoExtras));
				
				break;
				
			case 2:
				
				System.out.println("==== Apura��o Escolas de Samba ====");
				int size = 6;
				
				String[] escolas = new String[size];
				int[] pontosBat = new int[size], pontosSam = new int[size], pontosFan = new int[size], media = new int[size];;
				
				for(int i = 1; i < size; i++) {
					System.out.println("Nome da " + i + "� escola: ");
					escolas[i] = leia.next();
					System.out.println("Pontos de Bateria (0 a 10): ");
					pontosBat[i] = leia.nextInt();
					System.out.println("Pontos de Samba-Enredo (0 a 10): ");
					pontosSam[i] = leia.nextInt();
					System.out.println("Pontos de Fantasias (0 a 10): ");
					pontosFan[i] = leia.nextInt();
					
				}
				for(int i = 1; i < size; i++) {
					media[i] = pontosBat[i] + pontosSam[i] + pontosFan[i] / 3; 
					}
				for(int i = 1; i < size; i++) {
					System.out.println("Escola " +escolas[i]+ " com m�dia de pontos: "+media[i]);
				}
					if (media[1] > media[2] || media[1] > media[3] || media[1] > media[4] || media[1] > media[5]) {
						System.out.println("Escola " +escolas[1]+ " � a campe�");
					} else if (media[2] > media[1] || media[2] > media[3] || media[2] > media[4] || media[2] > media[5]) {
						System.out.println("Escola " +escolas[2]+ " � a campe�");
					} else if (media[3] > media[1] || media[3] > media[2] || media[3] > media[4] || media[3] > media[5]) {
						System.out.println("Escola " +escolas[3]+ " � a campe�");
					}else if (media[4] > media[1] || media[4] > media[2] || media[4] > media[3] || media[4] > media[5]) {
						System.out.println("Escola " +escolas[4]+ " � a campe�");
					}else if (media[5] > media[1] || media[5] > media[2] || media[5] > media[3] || media[5] > media[4]) {
						System.out.println("Escola " +escolas[5]+ " � a campe�");
					}else {
						System.out.println("Empate.");
					}
					
					
				break;
				
			case 3:
				System.out.println("==== C�lculo Mat�ria Prima ====");
				double pesoKg, valorEstimado, valorLan, valorPenas, valorSeda;
				
				System.out.println("Digite o peso em KG dos materiais: ");
				pesoKg = leia.nextFloat();
				System.out.println("Digite o valor estimado que gastar�: ");
				valorEstimado = leia.nextFloat();
				System.out.println("Digite o valor das lantejoulas: ");
				valorLan = leia.nextFloat();
				System.out.println("Digite o valor das Penas de Avestruz do Himalaia: ");
				valorPenas = leia.nextDouble();
				System.out.println("Digite o valor da Seda H�ngara");
				valorSeda = leia.nextDouble();
				
				double valorTotal = valorLan + valorPenas + valorSeda;
				System.out.printf("Total de R$%.2f\n", valorTotal);
				if(valorTotal>valorEstimado) {
					System.out.println("O valor passa do estimado.");
				} else {
					System.out.println("Est� dentro do or�amento.");
				}
				
				
				break;
				
			case 4:
				int totalPessoas, comissaoFrente, abreAlas, alaBaianas, carrosAleg, mestreSala, portaBandeira, bateria, madrinhaBateria, recuoBateria;
				
				System.out.println("==== C�lculo Pessoas Desfile ====");
				System.out.println("Quantas pessoas no total far�o parte do desfile? Digite o valor: ");
				totalPessoas = leia.nextInt();
				comissaoFrente = (totalPessoas * 15) / 100 ;
				abreAlas = (totalPessoas * 5) / 100;
				alaBaianas = (totalPessoas * 15) / 100;
				carrosAleg = (totalPessoas * 20) / 100;
				mestreSala = (totalPessoas * 3) / 100;
				portaBandeira = (totalPessoas * 3) / 100;
				bateria = (totalPessoas * 20) / 100;
				madrinhaBateria = (totalPessoas * 2) / 100;
				recuoBateria = (totalPessoas * 20) / 100;
				
				System.out.println("Quantidade de pessoas [Comiss�o da Frente]: " + comissaoFrente);
				System.out.println("Quantidade de pessoas [Abre-Alas]: " + abreAlas);
				System.out.println("Quantidade de pessoas [Ala das Baianas]: " + alaBaianas);
				System.out.println("Quantidade de pessoas [Carros Aleg�ricos]: " + carrosAleg);
				System.out.println("Quantidade de pessoas [Mestre-sala]: " + mestreSala);
				System.out.println("Quantidade de pessoas [Porta-Bandeira]: " + portaBandeira);
				System.out.println("Quantidade de pessoas [Bateria]: " + bateria);
				System.out.println("Quantidade de pessoas [Madrinha de Bateria]: " + madrinhaBateria);
				System.out.println("Quantidade de pessoas [Mestre-sala]: " + recuoBateria);
				
				break;
				
			case 5:
				System.out.println("Voc� saiu.");
				break;
				
				default:
					System.out.println("Op��o Incorreta. Por favor, digite novamente.");
					break;
			}
			
		}

			
	}