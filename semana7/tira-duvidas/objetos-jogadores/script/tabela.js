function criarTabelaDeJogadores() {

    function criaTabelaECaption(titulo) {
        const tabela = document.createElement('table');
        const caption = document.createElement('caption');
        caption.innerText = titulo;

        tabela.appendChild(caption);
        return tabela;
    }

    function criarCabecario() {
        const tHead = document.createElement('thead');

        const thJogador = document.createElement('th');
        thJogador.innerText = 'Jogador';

        const thPosicao = document.createElement('th');
        thPosicao.innerText = 'Posição';

        tHead.appendChild(thJogador);
        tHead.appendChild(thPosicao);
        return tHead;
    }

    function criarLinhas() {
        //pega do banco
        const jogadoresDB = pegaJogadores();
        //transformando os dados em obejtos
        const jogadores = jogadoresDB.map(jogadorDoBanco => criaJogador(jogadorDoBanco));

        //criar as linhas da tabela para cada jogador
        const linhas = [];

        jogadores.forEach(jogador => {
            const linha = document.createElement('tr');

            const celulaNome = document.createElement('td');
            jogador.setNome('Sr ' + jogador.getNome())
            celulaNome.innerText = jogador.getNome();

            const celulaPosicao = document.createElement('td');
            celulaPosicao.innerText = jogador.getPosicao();

            linha.appendChild(celulaNome);
            linha.appendChild(celulaPosicao);

            linhas.push(linha);
        });

        return linhas;
    }

    function montarTabela() {
        const tabela = criaTabelaECaption('Seleção Brasileira de 94');
        const tHead = criarCabecario();

        tabela.appendChild(tHead);

        const linhas = criarLinhas();
        linhas.forEach(linha => tabela.appendChild(linha));

        document.body.appendChild(tabela);
    }

    return {
        montarTabela,
    }
}

const tabela = criarTabelaDeJogadores();
tabela.montarTabela();