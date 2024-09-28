document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const categorySelect = document.getElementById('categoryFilter').value;
        const priceSelect = document.getElementById('priceFilter').value;

        const produtos = document.querySelectorAll('.produto');

        produtos.forEach(produto => {
            const produtoName = produto.querySelector('h2').innerText.toLowerCase();
            const categories = JSON.parse(produto.dataset.categories); // Obtém o array de categorias
            const produtoPrice = parseFloat(produto.querySelector('p').innerText.replace('R$ ', '').replace(',', '.'));

            // Verifica se o produto corresponde aos filtros
            const matchesSearch = produtoName.includes(searchInput);
            const matchesCategory = categorySelect === '' || categories.includes(categorySelect); // Verifica se a categoria está no array
            const matchesPrice = priceSelect === '' ||
                (priceSelect === 'baixo' && produtoPrice <= 50) ||
                (priceSelect === 'medio' && produtoPrice > 50 && produtoPrice <= 100) ||
                (priceSelect === 'alto' && produtoPrice > 100);

            // Exibe ou esconde o produto
            if (matchesSearch && matchesCategory && matchesPrice) {
                produto.style.display = 'block'; // Exibe o produto
            } else {
                produto.style.display = 'none'; // Esconde o produto
            }
        });
    });
});

document.querySelectorAll('.btn-leia-mais').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const textoCompleto = produto.querySelector('.texto-completo');
        const textoCurto = produto.querySelector('.texto-curto');

        if (textoCompleto.style.display === 'none') {
            textoCompleto.style.display = 'block';  // Mostra o texto completo
            textoCurto.style.display = 'none';      // Esconde o texto curto
            this.textContent = 'Mostrar menos';     // Altera o texto do botão
        } else {
            textoCompleto.style.display = 'none';   // Esconde o texto completo
            textoCurto.style.display = 'block';     // Mostra o texto curto
            this.textContent = 'Leia mais';         // Altera o texto do botão
        }
    });
});

