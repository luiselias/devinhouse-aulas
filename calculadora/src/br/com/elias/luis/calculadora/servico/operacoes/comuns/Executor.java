package br.com.elias.luis.calculadora.servico.operacoes.comuns;

import java.util.Arrays;

import br.com.elias.luis.calculadora.servico.operacoes.RegraDoCalculo;

public class Executor {
	public static double executaOperacao(String operacao, String sinal, RegraDoCalculo<Double> operation) {
		double[] valores = Arrays.stream(operacao.split("\\" + sinal)).mapToDouble(x -> Double.parseDouble(x))
				.toArray();
		double total = valores[0];

		for (int i = 1; i < valores.length; i++) {
			total = operation.executarFuncao(total, valores[i]);
		}

		return total;
	}
}
