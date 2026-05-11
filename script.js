// script.js - Comportamento JavaScript da página

// Exibe uma mensagem no console quando a página carregar
console.log("Página index.html carregada com sucesso!");

// Você pode adicionar outros comportamentos JavaScript aqui
// Por exemplo, um alerta de boas-vindas (descomente se quiser):
// alert("Bem-vindo à página principal!");

// Exemplo: Adicionar um efeito de clique nos links do menu
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log(`Navegando para: ${this.getAttribute('href')}`);
    });
  });
  
  console.log(`Total de links no menu: ${links.length}`);
});
