package correcao;
import java.util.Random;
public class ExeRenie {

public static void main(String[] args) {
	
		Random rand = new Random();
        int numeros [][] = new int[5][5];
        for(int i = 0; i < 5; i++){
          for(int j = 0; j < 5; j++){
            numeros[i][j] = rand.nextInt(100);
          }
        }
        MostrarMatrix(numeros);
        MostrarImparMaior(numeros);
        MostrarImparMenor(numeros);
        MostrarParMaior(numeros);
        MostrarParMenor(numeros);
        MostrarParMedia(numeros);
        MostrarImparMedia(numeros);

}
public static void MostrarMatrix(int numeros[][]) {

	for(int i = 0; i < 5; i++){
        for(int j = 0; j < 5; j++){
          System.out.print(numeros[i][j] + " ");
        }
        System.out.println(" ");
	}
}

public static void MostrarImparMaior(int numeros[][]){
int maior[] = new int[1];
int acu[] = new int[1];

for(int i = 0; i < 5; i++){
         for(int j = 0; j < 5; j++){
                    acu[0] = numeros[i][j]%2;

                     if(acu[0] == 1 ){
                       if(maior[0] < numeros[i][j]){
                         maior[0] = numeros[i][j];
  
                         }
                         
                       }
                       
     
           }
        
       
}
System.out.println("O maior impar: " + maior[0]);      
}

public static void MostrarImparMenor(int numeros[][]){
int menor[] = new int[1];
int acu[] = new int[1];
menor[0] = 99;
for(int i = 0; i < 5; i++){
         for(int j = 0; j < 5; j++){
                    acu[0] = numeros[i][j]%2;

                     if(acu[0] == 1 ){
                       if(menor[0] > numeros[i][j]){
                         menor[0] = numeros[i][j];
  
                         }
                         
                       }
                       
     
           }
        
       
}
System.out.println("O menor impar: " + menor[0]);      
}

public static void MostrarParMaior(int numeros[][]){
int maior[] = new int[1];
int acu[] = new int[1];

for(int i = 0; i < 5; i++){
         for(int j = 0; j < 5; j++){
                    acu[0] = numeros[i][j]%2;

                     if(acu[0] == 0 ){
                       if(maior[0] < numeros[i][j]){
                         maior[0] = numeros[i][j];
                         }
                         
                       }
                       
     
           }
        
       
}
System.out.println("O maior par: " + maior[0]);

}

public static void MostrarParMenor(int numeros[][]){
int menor[] = new int[1];
int acu[] = new int[1];
menor[0] = 100;
for(int i = 0; i < 5; i++){
         for(int j = 0; j < 5; j++){
                    acu[0] = numeros[i][j]%2;

                     if(acu[0] == 0 ){
                       if(menor[0] > numeros[i][j]){
                         menor[0] = numeros[i][j];
                         }
                         
                       }
                       
     
           }
        
       
}
System.out.println("O menor par: " + menor[0]);
System.out.println(" ");
}

public static void MostrarParMedia(int numeros[][]) {
	
	int acu[] = new int[1];
	int acu2[] = new int[1];
	int media = 0;
	System.out.println("Numeros pares: ");
	for(int i = 0; i < 5; i++){
	         for(int j = 0; j < 5; j++){
	                    acu[0] = numeros[i][j]%2;

	                     if(acu[0] == 0 ){
	                         acu2[0] += numeros[i][j];
	                         media++;
	                         System.out.print(numeros[i][j] + " ");
	                         }
	                         
	                       }
	                       
	     
	           }
	      acu2[0] = acu2[0]/media;
	      System.out.println(" ");
	      System.out.println("A media entre os pares: " + acu2[0]);
	      System.out.println(" ");
	}
public static void MostrarImparMedia(int numeros[][]) {
	
	int acu[] = new int[1];
	int acu2[] = new int[1];
	int media = 0;
	System.out.println("Numeros impares: ");
	for(int i = 0; i < 5; i++){
	         for(int j = 0; j < 5; j++){
	                    acu[0] = numeros[i][j]%2;

	                     if(acu[0] == 1 ){
	                    	 acu2[0] += numeros[i][j];
	                         media++;
	                        System.out.print(numeros[i][j] + " ");
	                         }
	                         
	                  }
	           }
	acu2[0] = acu2[0]/media;
	System.out.println(" ");
	System.out.println("A media entre os impares: " + acu2[0]); 
}
}


