function login() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    
    if (name == "admin@admin.com" && password == 123) {
    irParaHome();
    salvarEmail(name);
    } else {
    alert("Por favor adicionar informações de login!");
    }
}

function cadastro() {
    const senha = document.getElementById("senha_cad").value;
    const senhaConfirmada = document.getElementById("senhacon_cad").value;
    if (senha !== senhaConfirmada) {
    alert("As senhas não correspondem!");
    return false;
    }
    irParaLogin
    return true;
    }

function irParaHome() {
    window.open("../html/home.html", "_self");
}

function irParaLogin() {
    window.open("../html/login.html", "_self");
}

function irParaResetarSenha() {
    window.open("../html/mudarsenha.html", "_self");
}


function sair() {
    irParaLogin();
    removerEmail()
}

function cadastro() {
    irParaCadastro();
}
