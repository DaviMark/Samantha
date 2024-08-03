document.addEventListener('DOMContentLoaded', function () {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = document.querySelector('input[name=name]').value;
        const text = document.querySelector('textarea[name=text]').value;

        fetch('https://api.sheetmonkey.io/form/5CieySz5QL1Gukf48wWJ8r', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, text }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar dados');
            }
            return response.json();
        })
        .then(data => {
            // Sucesso - recarregar a página
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        })
        .finally(() => {
            // Recarregar a página
            window.location.reload();
        });
    };

    // Adiciona o event listener ao formulário
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});


// Começo do Loading
window.addEventListener('load', function() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');
  
    // Remove the spinner after a short delay (e.g., 3 seconds)
    setTimeout(function() {
        overlay.classList.remove('active');
        setTimeout(function() {
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 1000); // Allow time for the opacity transition to complete
    }, 1000); // 3000 milliseconds = 3 seconds
  });