package poke;
import java.util.Scanner;
import poke.BolsaPoke;
import poke.CacaPokemon;
public class PokeHome {

  public static void main(String[] args) {
             
             Scanner leia = new Scanner(System.in);
             int menu = 0;
             while( menu != 4){
             System.out.print("Bem vindo ao PokeJava!\nEscolha uma opção:\n[1] Caça Pokémons em kanto.\t[2] Pokedex.\n[3] Bolsa de pokémons.\t\t[4] Sair.\nR:");
             menu = leia.nextInt();
             switch(menu){
                       
                       case 1:
                             CacaPokemon.PokeCaca();
                       break;
                       case 2:
                             Pokedex.DexJava();
                       break;
                       case 3:
                             BolsaPoke.Bag();
                       break;
                       case 4:
                                System.out.print("Obrigado por jogar! Agradecimentos especiais:\nCarlos 3-des\nMatheus 3-des\nWelligton melhor professor\nReenye o MESTRE!!");
                       break;
                       default:
                                 System.out.print("Resposta invalida, tente novamente.\n");
                       break;
                
               
             }
        }

  }

}
