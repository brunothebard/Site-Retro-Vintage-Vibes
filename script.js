document.getElementById('pagina-animacao').addEventListener('click', function(event) {
    event.preventDefault();  // Impede o redirecionamento imediato

    alert('Link "Tabuleiro" clicado');  // Adiciona um alert para verificar o clique

    const animationContainer = document.getElementById('animation-container');
    animationContainer.classList.add('show');

    setTimeout(() => {
        window.location.href = this.href;  // Redireciona para a página após a animação
    }, 1000);  // Duração da animação
});
