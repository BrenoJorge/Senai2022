package fill;

public class Agenda {

	public static void main(String[] args) {	
        Contato c1 = new Contato(30,"brenao",19,"+ 55 (19)1998908-1959");
		Contato c2 = new Contato(2,"joao",18,"+ 55 (19)4002-8922");
		System.out.println(c1.contatotab());
		System.out.println(c2.contatotab());
	}

}
