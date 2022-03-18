package correcao;

public class Atividade {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			metodo();
	}
	
	public static void metodo() {
		int[] num = new int[5];
		num[0] = 2;
		num[1] = 4;
		num[2] = 5;
		num[3] = 6;
		num[4] = 8;
		System.out.println("indice    valor");
		for(int i = 0; i < num.length; i++) {
			System.out.print(i + "           ");
			System.out.println(num[i]);
		}
	}

}
