// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Alterna o modo escuro
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Atualiza o texto do botão conforme o modo ativo
    const isDarkMode = document.body.classList.contains("dark-mode");
    document.getElementById("dark-mode-toggle").innerText = isDarkMode ? "Modo Claro" : "Modo Escuro";
});



// Validação do formulário
document.getElementById('formulario')?.addEventListener('submit', function (event) {
    const mensagem = document.getElementById('mensagem').value;
    if (mensagem.length < 10) {
        alert('Mensagem deve ter pelo menos 10 caracteres.');
        event.preventDefault();
    }
});

// Animação de hover em cards (exemplo extra)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
