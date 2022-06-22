package br.com.elias.luis.calculadora.controller.terminal;

import java.util.Scanner;

public class Terminal {

	private Scanner reader;

	public Terminal() {
		this.reader = new Scanner(System.in);
	}

	public String carregaCalculadoraNoTerminal() {
		System.out.println("Escreva sua operação:");

		String operacao = reader.nextLine();
		System.out.println("A operação é: " + operacao);

		if (operacao.equals("fim")) {
			return null;
		}
		
		return operacao;
	}
}
