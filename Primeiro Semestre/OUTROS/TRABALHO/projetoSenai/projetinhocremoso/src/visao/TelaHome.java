package visao;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.text.ParseException;

import javax.imageio.ImageIO;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import controle.ProcessaArquivo;
import modelo.Arquivo;

public class TelaHome extends JFrame implements ActionListener {


	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel saldo, textsaldo, textentrada, textsaida;
	private JButton entrada, saida, cadastrar;
	private JTextArea tabela;
	private String texto = "";

	TelaHome() throws IOException {

		setTitle("Tela de usuario");
		setBounds(450, 100, 800, 600);
		painel = new JPanel();
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		painel.setBackground(new Color(57, 57, 67));

		saldo = new JLabel("R$" + ProcessaArquivo.saldo + "".replace(".", ","));
		saldo.setFont(new Font("Courier", Font.BOLD + Font.ITALIC, 60));
		saldo.setBounds(310, 5, 500, 200);
		saldo.setForeground(new Color(231, 232, 234));
		painel.add(saldo);

		textsaldo = new JLabel("Saldo em conta");
		textsaldo.setBounds(320, 15, 100, 100);
		textsaldo.setForeground(new Color(172, 173, 179));
		painel.add(textsaldo);

		textentrada = new JLabel("Entradas");
		textentrada.setBounds(190, 150, 100, 100);
		textentrada.setForeground(new Color(172, 173, 179));
		painel.add(textentrada);

		textsaida = new JLabel("Saidas");
		textsaida.setBounds(480, 150, 100, 100);
		textsaida.setForeground(new Color(172, 173, 179));
		painel.add(textsaida);

		entrada = new JButton("R$" + ProcessaArquivo.entrada + "".replace(".", ","));
		entrada.setBorderPainted(false);
		entrada.setFocusPainted(false);
		entrada.setForeground(new Color(101, 166, 105));
		entrada.setContentAreaFilled(false);
		entrada.setFont(new Font("Serif", Font.BOLD, 40));
		saida = new JButton("R$" + ProcessaArquivo.saida + "".replace(".", ","));
		saida.setBorderPainted(false);
		saida.setFocusPainted(false);
		saida.setContentAreaFilled(false);
		saida.setForeground(new Color(201, 87, 84));
		saida.setFont(new Font("Serif", Font.BOLD, 40));
		entrada.setBounds(10, 200, 500, 50);
		saida.setBounds(300, 200, 500, 50);

		BufferedImage buttonIcon = ImageIO.read(new File(
				"C:\\Users\\des\\Desktop\\TRABALHO\\projetoSenai\\projetinhocremoso\\imgs\\sinal-de-mais.png" + ""));
		cadastrar = new JButton(new ImageIcon(buttonIcon));
		cadastrar.setBorderPainted(false);
		cadastrar.setFocusPainted(false);
		cadastrar.setContentAreaFilled(false);
		cadastrar.setBounds(350, 470, 100, 100);

		cadastrar.addActionListener(this);

		tabela = new JTextArea();
		tabela.setBounds(10, 280, 760, 250);
		tabela.setEnabled(true);
		tabela.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		tabela.setBackground(new Color(24, 23, 28));
		tabela.setEnabled(false);

		painel.add(entrada);
		painel.add(saida);
		painel.add(cadastrar);
		painel.add(tabela);

		entrada.addActionListener(this);
		saida.addActionListener(this);

	}

	private void verEntradas() {
		texto = "";
		for (Arquivo p : ProcessaArquivo.dados) {
			if (p.getSaidaOuEntrada().equals("Entrada")) {
				texto += p.toString();
			}
		}
		tabela.setText(texto);
	}

	private void verSaidas() {
		texto = "";
		for (Arquivo p : ProcessaArquivo.dados) {
			if (p.getSaidaOuEntrada().equals("Saida")) {
				texto += p.toString();
			}
		}
		tabela.setText(texto);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == entrada) {
			verEntradas();
		}else if(e.getSource() == saida) {
			verSaidas();
		}
	}
	
	public static void main(String[] args) throws IOException {
		try {
			ProcessaArquivo.abrir();
		} catch (ParseException e) {
			System.out.println(e);
		}
		TelaHome tela = new TelaHome();
		tela.setVisible(true);
	}

}