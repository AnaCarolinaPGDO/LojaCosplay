function salvarEmail(name) {
    localStorage.setItem("email", name);
}

function removerEmail() {
    localStorage.removeItem("email");
}

function pegarEmail() {
    return localStorage.getItem("email");
}

function usuarioLogado() {
    let email = pegarEmail();
    return !!email;
}

function irParaHome() {
    window.open("../html/home.html", "_self");
}

function irParaLogin() {
    window.open("../html/login.html", "_self");
}

function sair() {
    removerEmail();
    irParaLogin();
}
function validarUsuario() {
    let logado = usuarioLogado();
    const caminho = window.location.pathname;
  
    if (caminho === "/html/login.html") {
      if (logado) {
        irParaHome();
      }
    } else if (caminho != "/html/login.html") {
      if (!logado) {
        irParaLogin();
      }
    }
  } else {
    console.error("Página não encontrada.");
  
}
  validarUsuario();