package poke;
import java.util.Scanner;
import java.util.Random;
public class CacaPokemon {
             
             public static void PokeCaca(){
            
             Scanner leia = new Scanner(System.in);
             Random rand = new Random();
             
               
               String poke[] = {"#001 Bulbasaur Tipo: Planta.","#002 Ivysaur Tipo: Planta.","#003 Venusaur Tipo: Planta e Veneno.","#004 Charmander Tipo: Fogo.","#005 Charmeleon Tipo: Fogo.","#006 Charizard Tipo: Fogo e Vento.","#007 Squirtle Tipo: �gua.","#008 Wartortle Tipo: �gua.","#009  Blastoise Tipo: �gua.","#010 Caterpie Tipo: Inseto.","#011 Metapod Tipo: Inseto.","#012 Butterfree Tipo: Inseto e Voador.","#013 Weedle Tipo: Inseto e Veneno.","#014 Kakuna Tipo: Inseto e Veneno.","#015 Beedrill Tipo: Inseto e Veneno.","#016 Pidgey Tipo: Normal e Voador.","#017 Pidgeotto Tipo: Normal e Voador.","#018 Pidgeot Tipo: Normal e Voador.","#019 Rattata Tipo: Normal.","#020 Raticate Tipo: Normal.","#021 Spearow Tipo: Normal e Voador.","#022 Fearow Tipo: Normal e Voador","#023 Ekans Tipo: Veneno.","#024 Arbok Tipo: Veneno.","#025 Pikachu Tipo: El�trico.","#026 Raichu Tipo: El�trico.","#027 Sandshrew Tipo: Terrestre.","#028 Sandslash Tipo: Terrestre.","#029 Nidoran F�mea Tipo: Veneno.","#030 Nidorina Tipo: Veneno.","#031 Nidoqueen Tipo: Veneno e Terrestre.","#032 Nidoran Macho Tipo: Veneno.","#033 Nidorino Tipo: Veneno.\n#034 Nidoking Tipo: Veneno e Terrestre.","#035 Clefairy Tipo: Fada.","#036 Clefable Tipo: Fada.","#037 Vulpix Tipo: Fogo.","#039 Ninetales Tipo: Fago.","#040 Jigglypuff Tipo: Normal e Fada.","#041 Wigglytuff Tipo: Normal e Fada.","#042 Zubat Tipo: Veneno e Voador.","#043 Oddish  Tipo: Veneno e Planta.","#044 Gloom Tipo: Veneno e Planta.","#045 Vileplume Tipo: Veneno e Planta.","#046 Paras Tipo: Inseto e Planta.","#047 Parasect Tipo: Inseto e Planta.","#048 Venonat Tipo: Veneno e Inseto.","#049 Venomoth Tipo: Veneno e Planta.","#050 Diglett Tipo: Terrestre.","#051 Dugtrio Tipo: Terrestre.","#052 Meowth Tipo: Normal.","#053 Persian Tipo: Normal.","#054 Psyduck Tipo: �gua.","#055 Golduck Tipo: �gua.","#056 Mankey Tipo: Lutador.","#057 Primeape Tipo: Lutador.","#058 Growlthe Tipo: Fogo.","#059 Arcanine Tipo: Fogo.","#060 Poliwag Tipo: �gua.","#061 Poliwhirl Tipo: �gua.","#062 Poliwrath Tipo: �gua e Lutador.","#063 Abra Tipo: Ps�quico.","#064 kadabra Tipo: Ps�quico.","#065 Alakazam Tipo: Ps�quico.","#066 Machop Tipo: Lutador.","#067 Machoke Tipo: Lutador.","#068 Machamp Tipo: Lutador.","#069 Bellsprout Tipo: Planta e Veneno.","#070 Weepinbell Tipo: Planta e Veneno.","#071 Victreebel Tipo: Planta e Veneno.","#072 Tentacool Tipo: �gua e Veneno.","#073 Tentacruel Tipo: �gua e Veneno.","#074 Geodude Tipo: Pedra e Terrestre.","#075 Graveler Tipo: Pedra e Terrestre.","#076 Golem Tipo: Pedra e Terrestre.","#077 Ponyta Tipo: Fogo.","#078 Rapidash Tipo: Fogo.","#079 Slowpoke Tipo: �gua e Ps�quico.","#080 Slowbro Tipo: �gua e Ps�quico.","#081 Magnemite Tipo: El�trico e A�o.","#082 Magneton Tipo: El�trico e A�o.","#083 Farfetch'd Tipo: Normal e voador.","#084 Doduo Tipo: Normal e voador.","#085 Dodrio Tipo: Normal e voador.","#086 Seel Tipo: �gua.","#087 Dewgong Tipo: �gua e Gelo.","#088 Grimer Tipo: Veneno.","#089 Muk Tipo: Veneno.","#090 Shellder Tipo: �gua.","#091 Gastly Tipo: Fantasma e Veneno","#92 Cloyster Tipo: �gua e Gelo","#093 Haunter Tipo: Fantasma e Veneno","#094 Gengar Tipo: Fantasma e Veneno","#095 Onix Tipo: Pedra e Terrestre","#096 Drowzee Tipo: Ps�quico","#097 Hypno Tipo: Ps�quico","#098 Krabby Tipo: �gua","#099 Kingler Tipo: �gua","#100 Voltorb Tipo: El�trico","#101 Electrode Tipo: El�trico","#102 Exeggcute Tipo: Planta e Ps�quico","#103 Exeggutor Tipo: Planta e Ps�quico","#104 Cubone Tipo: Terrestre","#105 Marowak Tipo: Terrestre","#106 Hitmonlee Tipo: Lutador","#107 Hitmonchan Tipo: Lutador","#108 Lickitung Tipo: Normal","#109 Koffing Tipo: Veneno","#110 Weezing Tipo: Veneno","#111 Rhyhorn Tipo: Terrestre e Pedra","#112 Rhydon Tipo: Terrestre e Pedra","#113 Chansey Tipo: Normal","#114 Tangela Tipo: Planta","#115 Kangaskhan Tipo: Normal","#116 Horsea Tipo: �gua","#117 Seadra Tipo: �gua","#118 Goldeen Tipo: �gua","#119 Seaking Tipo: �gua","#120 Staryu Tipo: �gua","#121 Starmie Tipo: �gua e Ps�quico","#122 Mr.Mime Tipo: Ps�quico e Fada","#123 Scyther Tipo: Inseto e Voador","#124 Jynx Tipo: Gelo e Ps�quico","#125 Electabuzz Tipo: El�trico","#126 Magmar Tipo: Fogo","#127 Pinsir Tipo: Inseto","#128 Tauros Tipo: Normal","#129 Magikarp Tipo: �gua","#130 Gyarados Tipo: �gua e Voador","#131 Lapras Tipo: �gua e Gelo","#132 Ditto Tipo: Normal.","#133 Eevee Tipo: Normal","#134 Vaporeon Tipo: �gua","#135 Jolteon Tipo: El�trico","#136 Flareon Tipo: Fogo","#137 Porygon Tipo: Normal","#138 Omanyte Tipo: Pedra e �gua","#139 Omaster Tipo: Pedra e �gua","#140 Kabuto Tipo: Pedra e �gua","#141 Kabutops Tipo: Pedra e �gua","#142 Aerodactyl Tipo: Pedra e Voador","#143 Snorlax Tipo: Normal","#147 Dratini Tipo: Drag�o","#148 Dragonair Tipo: Drag�o","#149 Dragonite Tipo: Drag�o e Voador","#151 Meltan Tipo: A�o","#152 Melmetal Tipo: A�o\n"};
               String pokeL[] = {"#150 MEWTWO Tipo: Ps�quico LEND�RIO","#150 MEW Tipo: Ps�quico LEND�RIO","#144 ARTICUNO Tipo: Gelo e Voador LEND�RIO","#145 ZAPDOS Tipo: El�trico e Voador LEND�RIO","#146 MOLTRES Tipo: Fogo e Voador LEND�RIO"};
               
               System.out.print("Voc� est� em VIRIDIAN FOREST na regi�o de Kanto.\nQuantos passos deseja dar a frente?:");
               int passo = leia.nextInt();
               
               for(int p =0; p < passo; p++){
                     int chance = rand.nextInt(10);
                     if(chance >=7){
                         int aleatorio = rand.nextInt(poke.length);
                         String pokea = poke[aleatorio];
                         System.out.println(p + " Voc� encontrou um " + pokea);
                         System.out.print("Deseja capturar?[1]Sim [2] N�o\nR:");
                         int cap = leia.nextInt();
                               if(cap == 1){
                                 int pokebola = rand.nextInt(10);
                                 int pokemon = rand.nextInt(10);
                                   if(pokebola >= pokemon){
                                     System.out.println("Pokemon capturado!");
                           
                                   
                                      }else{
                                     System.out.println("Pokemon fugiu!");
                                   }
                               }
                     }else{
                       System.out.println(p + " Andando...");
                     }
                     
               }
               
             }
}
