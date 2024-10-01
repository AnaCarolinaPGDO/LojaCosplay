window.onload = function() {
    console.log("Função window.onload executada");
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioAdmin = usuarios.find(usuario => usuario.email === "admin@admin.com");
    
    if (!usuarioAdmin) {
        const usuarioTeste = {
            email: "admin@admin.com",
            senha: "123",
            endereco: "Rua dos Testes, 123",
            endereco2: "Apt. 1",
            cidade: "Teste City",
            estado: "RJ",
            cep: "12345-678"
        };
        usuarios.push(usuarioTeste);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
};
