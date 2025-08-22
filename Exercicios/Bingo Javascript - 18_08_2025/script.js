document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos da página
    const botaoSortearElemento = document.getElementById('botaoSortear');
    const botaoBingoElemento = document.getElementById('botaoBingo');
    const botaoResetarElemento = document.getElementById('botaoResetar');
    const numeroAtualSorteadoElemento = document.getElementById('numeroAtualSorteado');
    const listaNumerosSorteadosElemento = document.getElementById('listaNumerosSorteados');
    const corpoTabelaBingoElemento = document.getElementById('corpoTabelaBingo');
    
    // Variáveis de estado do jogo
    let numerosDisponiveis = [];
    let numerosSorteados = [];
    const todasAsCelulas = corpoTabelaBingoElemento.getElementsByTagName('td');

    // Função para inicializar ou reiniciar 
    function resetarJogo() {
        numerosDisponiveis = Array.from({ length: 75 }, (_, i) => String(i + 1).padStart(2, '0'));
        numerosSorteados = [];
        numeroAtualSorteadoElemento.textContent = "-";
        listaNumerosSorteadosElemento.innerHTML = "";
        botaoSortearElemento.disabled = false;
        
        for (const celula of todasAsCelulas) {
            celula.classList.remove('marcado');
        }
    }

    // Função para sortear um novo número
    function sortearNumero() {
        if (numerosDisponiveis.length === 0) {
            numeroAtualSorteadoElemento.textContent = "FIM";
            botaoSortearElemento.disabled = true;
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length);
        const numeroSorteado = numerosDisponiveis.splice(indiceAleatorio, 1)[0];
        numerosSorteados.push(numeroSorteado);
        numeroAtualSorteadoElemento.textContent = numeroSorteado;
        
        const spanNumero = document.createElement('span');
        spanNumero.textContent = numeroSorteado;
        spanNumero.classList.add('numeroSorteado');
        listaNumerosSorteadosElemento.appendChild(spanNumero);
        
        for (const celula of todasAsCelulas) {
            if (celula.textContent === numeroSorteado) {
                celula.classList.add('marcado');
                break;
            }
        }
    }

    //Função dos confetes, colcoar outras cores
    function lancarConfetes() {
        const cores = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#A142F4'];
        const quantidade = 250; 

        for (let i = 0; i < quantidade; i++) {
            const confete = document.createElement('div');
            confete.classList.add('confete');

            // Posição, cor e animação aleatórias
            confete.style.left = `${Math.random() * 100}vw`;
            confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
            confete.style.animationDelay = `${Math.random() * 2}s`;
            confete.style.width = `${Math.floor(Math.random() * 8) + 8}px`;
            confete.style.height = confete.style.width;


            document.body.appendChild(confete);

            // Remove o confete da tela após a animação para não sobrecarregar
            setTimeout(() => {
                confete.remove();
            }, 5000); // 5 segundo
        }
    }

    // Adiciona os eventos aos botões
    botaoSortearElemento.addEventListener('click', sortearNumero);
    botaoResetarElemento.addEventListener('click', resetarJogo);
    
    // Evento do botão BINGO agora chama a função de confetes
    botaoBingoElemento.addEventListener('click', () => {
        lancarConfetes();
    });

    // Inicia o jogo pela primeira vez
    resetarJogo();
});