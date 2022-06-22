package br.com.elias.luis.calculadora.servico.operacoes;

import br.com.elias.luis.calculadora.servico.operacoes.comuns.Executor;

public class Divisao implements Calculo{

	@Override
	public double calcula(String operacao) {
		RegraDoCalculo<Double> dividir = (double a, double b) -> a / b;
		return Executor.executaOperacao(operacao, "/", dividir);
	}

}
