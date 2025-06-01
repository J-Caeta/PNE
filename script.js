document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('entrar');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o form de recarregar a página

    const email = emailInput.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
      alert('Por favor, preencha o campo de e-mail.');
    } else if (!emailValido) {
      alert('E-mail inválido. Digite um e-mail válido.');
    } else {
      alert('E-mail validado com sucesso!');
      // Redireciona ou faz outra ação:
      // window.location.href = 'dashboard.html';
       window.location.href = 'index2.html';
    }
  });
});
