function login() {
    const email = document.getElementById("inputEmail4").value;
    const password = document.getElementById("inputPassword4").value;

    console.log("Email:", email); // Debug
    console.log("Senha:", password); // Debug

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log("Usuários:", usuarios); // Debug

    const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === password);

    if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
        salvarEmail(email); // Salva o email do usuário logado
        irParaHome(); // Redireciona para a home
    } else {
        alert("Email ou senha incorretos!"); // Mensagem de erro
    }
}
