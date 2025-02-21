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

// -----------------------------
// Função para trocar a imagem principal do produto
// -----------------------------

document.addEventListener("DOMContentLoaded", function() {
    console.log("JS carregado"); // Teste para ver se o JS carregou

    // Verifica se existe uma imagem principal no produto
    const imgGrande = document.getElementById("imgGrande");
    
    if (imgGrande) {
        // Captura todas as miniaturas e adiciona evento de clique
        const miniaturas = document.querySelectorAll(".miniatura");
        
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener("click", function() {
                const novaImagem = this.getAttribute('data-grande') || this.src;
                imgGrande.src = novaImagem; // Troca a imagem principal pela correspondente
                console.log("Imagem trocada para:", novaImagem);
            });
        });
    }
});