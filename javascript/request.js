
const function cadastro() {
    

} cadastro() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    const user = {
        name: nome,//+
        email: email,
    }

    fetch(base_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    })
    .then(resposta => resposta.json())
    .then(resultado => alert('Informação inválida!'))
    .catch(error => console.log(error))
}
