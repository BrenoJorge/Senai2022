package poke;
import java.util.Arrays;
import poke.CacaPokemon;
public class BolsaPoke {
           
           public static void Bag(){
                    
                    
                    String bolsa[] = new String[10];
                    Arrays.fill(bolsa, "vazio");
                    
                    System.out.println("Sua bolsa PokeJava!\nEspaço atual: " + bolsa.length + "\n");
                    
                    System.out.println("Bolsa aberta...\n\n");
                    bolsa[0] = "#001 Bulbasaur Tipo: Planta.";
                    bolsa[1] = "#004 Charmander Tipo: Fogo.";
                    bolsa[2] = "#007 Squirtle Tipo: Água.";
                    
                    for(String valor:bolsa) {
                      System.out.println(valor);
                    }
                    System.out.println(" ");
                    System.out.println("Bolsa fechada...\n");
                 
                  }
                  
           }

