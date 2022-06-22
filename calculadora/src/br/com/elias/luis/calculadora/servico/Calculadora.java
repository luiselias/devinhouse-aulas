package br.com.elias.luis.calculadora.servico;

import java.util.Arrays;

import br.com.elias.luis.calculadora.servico.operacoes.Adicao;
import br.com.elias.luis.calculadora.servico.operacoes.Divisao;
import br.com.elias.luis.calculadora.servico.operacoes.Multiplicacao;
import br.com.elias.luis.calculadora.servico.operacoes.Calculo;
import br.com.elias.luis.calculadora.servico.operacoes.Subtracao;

public class Calculadora {

	private Calculo operacaoFactory(String expressao) throws Exception {
		String[] operacoesConhecidas = { "+", "-", "*", "/" };

		String conta = Arrays.stream(operacoesConhecidas)
				.filter(oper -> expressao.indexOf(oper) > 0)
				.findFirst()
				.orElse(null);

		if (conta == null) {
			throw new Exception("Operacao Inválida!");
		}

		switch (conta) {
		case "+":
			return new Adicao();
		case "-":
			return new Subtracao();
		case "/":
			return new Divisao();
		case "*":
			return new Multiplicacao();
		default:
			throw new IllegalArgumentException("Unexpected value: " + conta);
		}
	};

	public double calcula(String expressao) throws Exception {
		Calculo operacao = operacaoFactory(expressao);
		return operacao.calcula(expressao);
	}
}
