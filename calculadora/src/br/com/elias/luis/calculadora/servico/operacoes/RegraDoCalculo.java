package br.com.elias.luis.calculadora.servico.operacoes;

public interface RegraDoCalculo<T> {
	T executarFuncao(double a, double b);
}
