// Função genérica para exibir alerta personalizado com qualquer mensagem
function mostrarAlertaPersonalizado(mensagemTexto, titulo = null) {
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
  
  // Mensagem do alerta (suporta HTML, como <br>)
  const mensagem = document.createElement('p');
  mensagem.style.fontSize = '18px';
  mensagem.style.margin = '0 0 20px 0';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.color = '#ffffff';
  mensagem.style.lineHeight = '1.5';
  mensagem.innerHTML = mensagemTexto;  // permite quebras de linha com <br>
  
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
    // Se houver uma função callback para executar após fechar, chama aqui
    if (typeof callback === 'function') {
      callback();
    }
  };
  
  // Monta a caixa
  caixa.appendChild(mensagem);
  caixa.appendChild(botaoOk);
  modal.appendChild(caixa);
  
  // Adiciona o modal ao body
  document.body.appendChild(modal);
}

// Função que exibe o primeiro alerta e, ao fechá-lo, mostra o segundo
function exibirAlertasSequenciais() {
  // Primeiro alerta (com as notas 1 e 2)
  const primeiraMensagem = 'dwba4-semana-08-PT3025527-ednilton<br>Nome do aluno: Ednilton Moraes<br>Nota 1: 7<br>Nota 2: 7.6';
  
  // Cria o primeiro modal manualmente, pois precisamos de um callback específico
  const modal = document.createElement('div');
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
  
  const caixa = document.createElement('div');
  caixa.style.backgroundColor = '#000000';
  caixa.style.color = '#ffffff';
  caixa.style.padding = '20px 30px';
  caixa.style.borderRadius = '8px';
  caixa.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  caixa.style.textAlign = 'center';
  caixa.style.fontFamily = 'Arial, sans-serif';
  caixa.style.minWidth = '250px';
  caixa.style.border = '1px solid #333';
  
  const mensagem = document.createElement('p');
  mensagem.style.fontSize = '18px';
  mensagem.style.margin = '0 0 20px 0';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.color = '#ffffff';
  mensagem.style.lineHeight = '1.5';
  mensagem.innerHTML = primeiraMensagem;
  
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
  
  botaoOk.onmouseover = () => { botaoOk.style.backgroundColor = '#dddddd'; };
  botaoOk.onmouseout = () => { botaoOk.style.backgroundColor = '#ffffff'; };
  
  // Ao clicar no OK do primeiro alerta, remove e chama o segundo
  botaoOk.onclick = () => {
    document.body.removeChild(modal);
    // Exibe o segundo alerta
    mostrarSegundoAlerta();
  };
  
  caixa.appendChild(mensagem);
  caixa.appendChild(botaoOk);
  modal.appendChild(caixa);
  document.body.appendChild(modal);
}

// Função para exibir o segundo alerta com a mensagem solicitada (Nota final)
function mostrarSegundoAlerta() {
  const modal = document.createElement('div');
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
  
  const caixa = document.createElement('div');
  caixa.style.backgroundColor = '#000000';
  caixa.style.color = '#ffffff';
  caixa.style.padding = '20px 30px';
  caixa.style.borderRadius = '8px';
  caixa.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  caixa.style.textAlign = 'center';
  caixa.style.fontFamily = 'Arial, sans-serif';
  caixa.style.minWidth = '250px';
  caixa.style.border = '1px solid #333';
  
  const mensagem = document.createElement('p');
  mensagem.style.fontSize = '18px';
  mensagem.style.margin = '0 0 20px 0';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.color = '#ffffff';
  mensagem.style.lineHeight = '1.5';
  
  // Mensagem do segundo alerta conforme solicitado:
  mensagem.innerHTML = 'dwba4-semana-08-PT3025527-ednilton<br>Nome do aluno: Ednilton Moraes<br>Nota final: 7.6000000000000005';
  
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
  
  botaoOk.onmouseover = () => { botaoOk.style.backgroundColor = '#dddddd'; };
  botaoOk.onmouseout = () => { botaoOk.style.backgroundColor = '#ffffff'; };
  
  botaoOk.onclick = () => {
    document.body.removeChild(modal);
  };
  
  caixa.appendChild(mensagem);
  caixa.appendChild(botaoOk);
  modal.appendChild(caixa);
  document.body.appendChild(modal);
}

// Quando a página carregar, inicia a sequência de alertas
window.addEventListener('DOMContentLoaded', exibirAlertasSequenciais);

// ======================= NOVO CÓDIGO ADICIONADO =======================
// questao03.js - Entrada e saída de dados para 3 alunos

function processarAlunos() {
  for (let i = 1; i <= 3; i++) {
    // 1. Receber a string com o nome do aluno
    let nome = prompt(`Aluno ${i}: Digite o nome do aluno:`);

    // 2. Receber um número inteiro (primeira nota)
    let nota1 = parseInt(prompt(`Aluno ${i} (${nome}): Digite a primeira nota (valor inteiro):`));

    // 3. Receber um número real (segunda nota)
    let nota2 = parseFloat(prompt(`Aluno ${i} (${nome}): Digite a segunda nota (valor real):`));

    // 4. Valor da multiplicação da primeira nota por 0.6
    let mult1 = nota1 * 0.6;

    // 5. Valor da multiplicação da segunda nota por 0.4
    let mult2 = nota2 * 0.4;

    // 6. Soma das duas multiplicações
    let notaTotal = mult1 + mult2;

    // 7. Alerta com nome e notas individuais
    alert(`Aluno: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}`);

    // 8. Alerta com a nota total do aluno
    alert(`Aluno: ${nome}\nNota total (após pesos): ${notaTotal.toFixed(2)}`);
  }

  // Mensagem final indicando que os 3 alunos foram processados
  alert("Dados dos 3 alunos exibidos com sucesso!");
}

// Executa a função ao carregar a página
window.onload = processarAlunos;
