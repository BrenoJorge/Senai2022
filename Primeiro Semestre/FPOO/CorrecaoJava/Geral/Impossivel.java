package correcao;
import java.util.Scanner;
public class Impossivel {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner leia = new Scanner(System.in);
         
         double a = 2000;
         double b = 10000;
         
         double menor = (a*30)/100;
         
         double monte = (b*0.85)/100;
           

         
               for(int i = 1; i < 36; i++){
            	 
            	   double monte2 = Math.pow(monte, i);
            	   
            	   double par = monte2/i;
            	 
            	   double ultimo = par;
            	   
       			System.out.printf("%d parcela de \t R$ %.2f\n", i, par);
       			
       			
       		}
               
                      
	}

}
