function salvarEmail(email) {
  localStorage.setItem("usuarioLogado", email);
}

function removerEmail() {
  localStorage.removeItem("usuarioLogado");
}

function pegarEmail() {
  return localStorage.getItem("usuarioLogado");
}

function usuarioLogado() {
  let email = pegarEmail();
  return !!email;
}

function validarUsuario() {
  let logado = usuarioLogado();
  const caminho = window.location.pathname;

  if (caminho === "/html/login.html" && logado) {
      irParaHome();
  }

  const loginBtn = document.getElementById("loginBtn");
  const sairBtn = document.getElementById("sairBtn");

  if (logado) {
      if (sairBtn) {
          sairBtn.style.display = "block";
      }
      if (loginBtn) {
          loginBtn.style.display = "none";
      }
  } else {
      if (sairBtn) {
          sairBtn.style.display = "none";
      }
      if (loginBtn) {
          loginBtn.style.display = "block";
      }
  }
}

function sair() {
  removerEmail(); // Remove o email do localStorage
  irParaHome(); // Redireciona para a home
}


function irParaHome() {
  window.location.href = "../html/home.html";
}

function irParaLogin() {
  window.location.href = "../html/login.html";
}

function irParaCadastro() {
  window.location.href = "../html/cadastrar.html";
}

// Chama a função para validar o usuário ao carregar a página
validarUsuario();
