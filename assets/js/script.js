// script.js

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verifica se o modo escuro está salvo no localStorage e aplica-o
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Função para alternar entre os modos
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Salva a preferência no localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.removeItem('dark-mode');
  }
});
