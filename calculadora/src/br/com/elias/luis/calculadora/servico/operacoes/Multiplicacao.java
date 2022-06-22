package br.com.elias.luis.calculadora.servico.operacoes;

import br.com.elias.luis.calculadora.servico.operacoes.comuns.Executor;

public class Multiplicacao implements Calculo{

	@Override
	public double calcula(String operacao) {
		RegraDoCalculo<Double> multiplicar = (double a, double b) -> a * b;
		return Executor.executaOperacao(operacao, "*", multiplicar);
	}

}
