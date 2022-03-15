package objeto;

public class Objeto {

         String modelo;
          int memoria;
          boolean teclado = true;
          boolean mouse = true;
          boolean wifi = true;
         
         void paraString(){
              System.out.println(this.modelo);
         }
          
          void hackear(){
          if(this.memoria > 200 && this.teclado == true && this.wifi == true){
            System.out.println("Estou hackeando...SISTEMA INVADIDO 100%");
          }else if(this.memoria > 200 && this.wifi == true){
            System.out.println("Estou hackeando...SISTEMA INVADIDO 50%");
          }else{
            System.out.println("Estou hackeando...ERROR NÃO FOI POSSIVEL CONCLUIR OPERAÇÃO");
          }
         }
         
         void media(){
              
         }
              
}
