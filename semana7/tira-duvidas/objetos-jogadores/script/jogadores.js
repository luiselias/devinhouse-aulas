function criaJogador(jogadorDB) {
    const jogador = jogadorDB;

    return {
        getNome: () => jogador.nome,
        setNome: novoNome => jogador.nome = novoNome,
        getPosicao: () => jogador.posicao,
        setPosicao: novaPosicao => jogador.posicao = novaPosicao,
    }
}