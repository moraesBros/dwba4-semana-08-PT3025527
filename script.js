// ==================== FUNÇÃO DO ALERTA PERSONALIZADO (Dinâmico) ====================
function mostrarAlertaPersonalizado(numeroQuestao) {
  // Cria a estrutura do modal dinamicamente
  const modal = document.createElement('div');
  modal.id = 'customAlert';
  
  // Estilos do modal (overlay escuro semi-transparente)
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '9999';
  
  // Caixa de diálogo principal (fundo preto, texto branco)
  const caixa = document.createElement('div');
  caixa.style.backgroundColor = '#000000';   // fundo preto
  caixa.style.color = '#ffffff';             // letras brancas
  caixa.style.padding = '20px 30px';
  caixa.style.borderRadius = '8px';
  caixa.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  caixa.style.textAlign = 'center';
  caixa.style.fontFamily = 'Arial, sans-serif';
  caixa.style.minWidth = '250px';
  caixa.style.border = '1px solid #333';
  
  // Mensagem do alerta com duas linhas (número da questão dinâmico)
  const mensagem = document.createElement('p');
  mensagem.style.fontSize = '18px';
  mensagem.style.margin = '0 0 20px 0';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.color = '#ffffff';
  mensagem.style.lineHeight = '1.5';
  mensagem.innerHTML = `dwba4-semana-08-PT3025527-ednilton<br>Alerta: Questão ${numeroQuestao}`;
  
  // Botão OK
  const botaoOk = document.createElement('button');
  botaoOk.textContent = 'OK';
  botaoOk.style.backgroundColor = '#ffffff';
  botaoOk.style.color = '#000000';
  botaoOk.style.border = 'none';
  botaoOk.style.padding = '8px 20px';
  botaoOk.style.borderRadius = '4px';
  botaoOk.style.fontSize = '16px';
  botaoOk.style.cursor = 'pointer';
  botaoOk.style.fontWeight = 'bold';
  botaoOk.style.transition = '0.2s';
  
  // Efeito hover no botão
  botaoOk.onmouseover = () => {
    botaoOk.style.backgroundColor = '#dddddd';
  };
  botaoOk.onmouseout = () => {
    botaoOk.style.backgroundColor = '#ffffff';
  };
  
  // Fechar modal ao clicar no botão
  botaoOk.onclick = () => {
    document.body.removeChild(modal);
  };
  
  // Monta a caixa
  caixa.appendChild(mensagem);
  caixa.appendChild(botaoOk);
  modal.appendChild(caixa);
  
  // Adiciona o modal ao body
  document.body.appendChild(modal);
}

// ==================== FUNÇÕES GLOBAIS (index.html e outras páginas) ====================
function configurarCliqueNosLinks() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log(`Navegando para: ${this.getAttribute('href')}`);
    });
  });
  console.log(`Total de links no menu: ${links.length}`);
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', function() {
  // 1. Sempre exibe a mensagem no console (para index.html)
  console.log("Página carregada com sucesso!");

  // 2. Configura os logs de clique nos links do menu (funciona em qualquer página)
  configurarCliqueNosLinks();

  // 3. Verifica se há um container de questão
  const questaoContainer = document.querySelector('.questao-container');
  if (questaoContainer) {
    // Tenta extrair o número da questão do texto do h1 dentro do container
    const titulo = questaoContainer.querySelector('h1');
    let numeroQuestao = 'desconhecido';
    if (titulo) {
      const match = titulo.textContent.match(/\d+/);
      if (match) {
        numeroQuestao = match[0];
      }
    }
    mostrarAlertaPersonalizado(numeroQuestao);
    console.log(`Alerta personalizado exibido (Questão ${numeroQuestao})`);
  }
});
