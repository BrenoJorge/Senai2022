package correcao;
import java.util.Random;
public class CartaoCreditoDebito {
	public class Randow {

	}

	public static void main(String[] args) {
		System.out.println();
		System.out.println();
		System.out.println(simples());
		System.out.println(aleatorio(345));
		System.out.println("fatorial: " + fatorial(5));

	}
	public static int simples() {

		int x = 0;
		for(int i = 0;i < 10;i++) {
			x+= i;
		}
		return x;
	}
	public static int aleatorio(int simples) {
		Random rand = new Random();
		int x = 0;
		for(int i = 0;i < 10;i++) {
			int r = rand.nextInt(10);
			
			System.out.println("aleatorio " + r);
			x+=r;
			System.out.println("acumulo " + x);
			
		}
		return x;
	}
	public static int fatorial(int f) {
		int a = f;
		int f2 = f;
		for(int i = 0; i < f--; i++) {
			f2--;
			a = a * f2;
			
		}
		
		return a;
		
	}
			
}
