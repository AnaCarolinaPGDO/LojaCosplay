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


const texts = [
    "A MAIS COMPLETA LOJA DE COSPLAY DO BRASIL",
    "07 DIAS PARA TROCA E DEVOLUÇÃO",
    "Explorando o mundo do cosplay!",
    "Encontre os melhores produtos!",
    "Transforme sua aparência!",
    "Sinta-se como seu personagem favorito!"
];

let currentIndex = 0;
const dynamicTextElement = document.getElementById('dynamic-text');

function updateText() {
    // Diminui a opacidade para 0 antes de mudar o texto
    dynamicTextElement.style.opacity = 0;

    // Espera a transição de opacidade terminar antes de mudar o texto
    setTimeout(() => {
        // Atualiza o texto dinâmico
        dynamicTextElement.textContent = texts[currentIndex];
        // Aumenta a opacidade para 1
        dynamicTextElement.style.opacity = 1;
        // Move para o próximo texto
        currentIndex = (currentIndex + 1) % texts.length;
    }, 500); // Tempo de espera igual ao da transição (0.5s)
}

// Chama a função a cada 3 segundos
setInterval(updateText, 3000);

// Inicializa com o primeiro texto
updateText();

// Seleciona o elemento do pop-up
// Seleciona o elemento do pop-up
const popup = document.getElementById('popup');
const popupContent = popup.querySelector('.popup-content');

function openPopup(button) {
    // Pega os dados do botão clicado
    const nome = button.getAttribute('data-nome');
    const preco = button.getAttribute('data-preco');
    const imagem = button.getAttribute('data-imagem'); // Adiciona a imagem
    
    // Atualiza o conteúdo do pop-up
    popupContent.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <img src="${imagem}" alt="${nome}" style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 15px;">
        <p>Você deseja adicionar <strong>${nome}</strong> ao carrinho por <strong>${preco}</strong>?</p>
        <button onclick="goToCart()">Comprar</button>
    `;

    // Exibe o pop-up
    popup.style.display = 'flex'; // Mude para 'flex' para centralizar

}

function closePopup() {
    popup.style.display = 'none';
}

function goToCart() {
    // Aqui você pode adicionar a lógica para adicionar o item ao carrinho
    alert('Item adicionado ao carrinho!'); // Exemplo simples
    closePopup(); // Fecha o pop-up após a ação
}

let currentSlide = 0; // Índice da imagem atual
const slides = document.querySelectorAll('.banner-images img'); // Seleciona todas as imagens

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove a classe ativa de todas as imagens
    });
    slides[index].classList.add('active'); // Adiciona a classe ativa à imagem atual
}

function changeSlide(direction) {
    currentSlide += direction; // Muda o índice da imagem atual
    if (currentSlide < 0) currentSlide = slides.length - 1; // Volta para a última imagem se for menor que 0
    if (currentSlide >= slides.length) currentSlide = 0; // Volta para a primeira imagem se for maior que o número de imagens
    showSlide(currentSlide); // Mostra a imagem atual
}

// Intervalo para mudar as imagens automaticamente a cada 5 segundos
setInterval(() => {
    changeSlide(1); // Muda a imagem para a próxima
}, 5000);

// Exibe a primeira imagem inicialmente
showSlide(currentSlide);









