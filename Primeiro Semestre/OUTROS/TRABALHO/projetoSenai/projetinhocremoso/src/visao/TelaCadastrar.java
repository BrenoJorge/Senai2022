package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import controle.ProcessaArquivo;
import modelo.Arquivo;

public class TelaCadastrar extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel dinheiro, Saldo;
	private JTextField entradaDinheiro, tfSaldo;
	private JButton entrada, saida;

	TelaCadastrar() {
		setTitle("Gerenciamento de seu dinheiro");
		setBounds(500, 500, 600, 800);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);

		dinheiro = new JLabel("Digite o valor : ");
		dinheiro.setBounds(20, 20, 100, 30);
		painel.add(dinheiro);

		Saldo = new JLabel("Saldo:");
		Saldo.setBounds(20, 55, 100, 30);
		painel.add(Saldo);
		tfSaldo = new JTextField(ProcessaArquivo.saldo + "".replace(".", ","));
		tfSaldo.setBounds(65, 60, 100,20);
		tfSaldo.setEnabled(false);
		painel.add(tfSaldo);

		entradaDinheiro = new JTextField();
		entradaDinheiro.setBounds(135, 20, 300, 30);
		painel.add(entradaDinheiro);

		entrada = new JButton("Entrada");
		saida = new JButton("Saida");
		entrada.setBounds(20, 90, 100, 30);
		saida.setBounds(125, 90, 100, 30);

		painel.add(entrada);
		painel.add(saida);

		entrada.addActionListener(this);
		saida.addActionListener(this);

	}

	
	public void Entrada() {
		DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
		Calendar cal = Calendar.getInstance();
		String data = df.format(cal.getTime());
		Arquivo a = new Arquivo(data, entradaDinheiro.getText(), "Entrada");
		ProcessaArquivo.dados.add(a);
		ProcessaArquivo.salvar();
		tfSaldo.setText(ProcessaArquivo.saldo+Double.parseDouble(entradaDinheiro.getText())+"");
	}
	
	public void Saida() {
		DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
		Calendar cal = Calendar.getInstance();
		String data = df.format(cal.getTime());
		Arquivo a = new Arquivo(data, entradaDinheiro.getText(), "saida");
		ProcessaArquivo.dados.add(a);
		ProcessaArquivo.salvar();
	}

	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == entrada) {
			
			Entrada();
			
		} else if (e.getSource() == saida) {
			
			Saida();
			
		}
	}

	public static void main(String[] args) throws ParseException {
		ProcessaArquivo.abrir();
		TelaCadastrar login = new TelaCadastrar();
		login.setVisible(true);
	}

}
