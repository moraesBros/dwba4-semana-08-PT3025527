// script.js - Comportamento JavaScript unificado (index.html e questao01.html)

// ==================== FUNÇÃO DO ALERTA PERSONALIZADO (Questão 01) ====================
function mostrarAlertaPersonalizado() {
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
  
  // Mensagem do alerta com duas linhas (usando <br>)
  const mensagem = document.createElement('p');
  mensagem.style.fontSize = '18px';
  mensagem.style.margin = '0 0 20px 0';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.color = '#ffffff';
  mensagem.style.lineHeight = '1.5';
  mensagem.innerHTML = 'dwba4-semana-08-PT3025527-ednilton<br>Alerta: Questão 01';
  
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
  
  botaoOk.onmouseover = () => {
    botaoOk.style.backgroundColor = '#dddddd';
  };
  botaoOk.onmouseout = () => {
    botaoOk.style.backgroundColor = '#ffffff';
  };
  
  botaoOk.onclick = () => {
    document.body.removeChild(modal);
  };
  
  caixa.appendChild(mensagem);
  caixa.appendChild(botaoOk);
  modal.appendChild(caixa);
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

  // 3. Se a página contiver a div .questao-container (usada na Questão 01), exibe o alerta personalizado
  const questaoContainer = document.querySelector('.questao-container');
  if (questaoContainer) {
    mostrarAlertaPersonalizado();
    console.log('Alerta personalizado exibido (Questão 01)');
  }
});
