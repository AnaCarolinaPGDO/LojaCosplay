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

function sair() {
    removerEmail();
    irParaHome();
}

function validarUsuario() {
    let logado = usuarioLogado();
    const caminho = window.location.pathname;

    if (caminho === "/html/login.html" && logado) {
      irParaHome();
    }
    // if (caminho === "/html/login.html") {
    //   if (logado) {
    //     irParaHome();
    //   }
    // } else if (caminho != "/html/login.html" && caminho != "/html/cadastrar.html") {
    //   if (!logado) {
    //     irParaLogin();
    //   }
    if (logado) {
      const loginBtn = document.getElementById("loginBtn");
      const sairBtn = document.getElementById("sairBtn");
      
      if (loginBtn) {
        sairBtn.style.display = "block";
        loginBtn.style.display = "none";
    }
  }else {
    sairBtn.style.display = "none"
    loginBtn.style.display = "block"
  }
}
  validarUsuario();

  function cadastro() {
    irParaCadastro();
}

function validarCadastro() {
const senha = document.getElementById("senha_cad").value;
const senhaConfirmada = document.getElementById("senha_confirmar_cad").value;
if (senha !== senhaConfirmada) {
alert("As senhas não correspondem!");
return false;
}

return true;
}

function irParaHome() {
  window.open("../html/home.html", "_self");
}

function irParaLogin() {
  window.open("../html/login.html", "_self");
}

function irParaCadastro() {
  window.location.href = "../html/cadastrar.html";
}