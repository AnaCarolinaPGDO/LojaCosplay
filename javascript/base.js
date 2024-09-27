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
    irParaLogin();
}

function validarUsuario() {
    let logado = usuarioLogado();
    const caminho = window.location.pathname;
  
    if (caminho === "/html/login.html") {
      if (logado) {
        irParaHome();
      }
    } else if (caminho != "/html/login.html" && caminho != "/html/cadastrar.html") {
      if (!logado) {
        irParaLogin();
      }
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