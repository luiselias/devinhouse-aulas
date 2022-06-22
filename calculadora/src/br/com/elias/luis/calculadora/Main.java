package br.com.elias.luis.calculadora;

import br.com.elias.luis.calculadora.controller.terminal.Terminal;
import br.com.elias.luis.calculadora.servico.Calculadora;

public class Main {

	public static void main(String[] args) {
		Terminal view = new Terminal();
		Calculadora calculadora = new Calculadora();
		String operacao = "estado Inicial";		
		
		while (operacao != null) {
			operacao = view.carregaCalculadoraNoTerminal();
			if (operacao != null) {
				double resultado;
				try {
					resultado = calculadora.calcula(operacao);
					System.out.println("O resultado da operação é " + resultado);				
				} catch (Exception e) {					
					e.printStackTrace();
					operacao = null;
				}
			}
		}
		
		System.out.println("Finalizando calculadora");
	}
}
