document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('entrar');
  const emailInput = document.getElementById('email');

  botao.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o form de recarregar (caso exista)

    const email = emailInput.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
      alert('Preencha o campo de e-mail!');
    } else if (!emailValido) {
      alert('E-mail inválido! Use algo como nome@dominio.com');
    } else {
      // ✅ Tudo certo, redireciona:
      window.location.href = 'index2.html';
    }
  });
});
