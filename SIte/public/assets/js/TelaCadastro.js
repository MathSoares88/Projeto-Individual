document.addEventListener('DOMContentLoaded', () => {
    const gifContainer = document.getElementById('gif-container');
    const cadastroContainer = document.getElementById('cadastro-container');

    // Espera 3 segundos antes de exibir a caixa de cadastro
    setTimeout(() => {
        gifContainer.style.display = 'none';
        cadastroContainer.style.display = 'flex';
    }, 3100); // 6000 milissegundos = 6 segundos
});