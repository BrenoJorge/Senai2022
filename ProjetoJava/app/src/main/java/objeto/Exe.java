package objeto;

import objeto.Objeto;


public class Exe {

  public static void main(String[] args) {
             Objeto computador = new Objeto();
             computador.modelo = "Ryzer";
             computador.memoria = 500;
             computador.teclado = true;
             computador.mouse = true;
             computador.wifi = true;
             
             computador.paraString();
             computador.hackear();
             
             Objeto computador2 = new Objeto();
             computador2.modelo = "Intel Core 65";
             computador2.memoria = 300;
             computador2.teclado = false;
             computador2.mouse = false;
             computador2.wifi = true;
             
             computador2.paraString();
             computador2.hackear();
             
             Objeto computador3 = new Objeto();
             computador3.modelo = "Intel 3 geração";
             computador3.memoria = 100;
             computador3.teclado = false;
             computador3.mouse = false;
             computador3.wifi = false;
             
             computador3.paraString();
             computador3.hackear();
             
            
  }

}
