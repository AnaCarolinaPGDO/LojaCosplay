// Função de cadastro
function cadastro() {
    const email = document.getElementById("inputEmail4").value;
    const senha = document.getElementById("inputPassword4").value;
    const senhaConfirmada = document.getElementById("senhaConfirmada").value; // Certifique-se de ter um campo para confirmar a senha
    const endereco = document.getElementById("inputAddress").value;
    const endereco2 = document.getElementById("inputAddress2").value;
    const cidade = document.getElementById("inputCity").value;
    const estado = document.getElementById("inputState").value;
    const cep = document.getElementById("inputZip").value;

    if (senha !== senhaConfirmada) {
        alert("As senhas não correspondem!");
        return false;
    }

    // Cria um objeto para armazenar todas as informações
    const usuario = {
        email: email,
        senha: senha,
        endereco: endereco,
        endereco2: endereco2,
        cidade: cidade,
        estado: estado,
        cep: cep
    };

    // Salva o usuário no localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    irParaLogin(); // Redireciona para a página de login
}

// Funções de navegação
function irParaLogin() {
    window.location.href = "../html/login.html"; // Redireciona para a página de login
}

// Para que o cadastro funcione, você deve chamar a função cadastro em um evento, como um botão de cadastro
document.getElementById("cadastroBtn").addEventListener("click", cadastro);
