// Array contendo os itens do cardápio
const cardapio = [
    {
        categoria: "Entradas",
        nome: "Caesar Salad",
        descricao: "Combinação de alface, queijo Parmesão, croutons Outback e Molho Caesar.",
        imagem: "Caesar-Salad-cmyk.jpg",
        tipo: "vegetariano" // Adicionando tipo para filtragem
    },
    {
        categoria: "Entradas",
        nome: "Bloomin Onion",
        descricao: "cebola gigante e dourada com o autêntico sabor do Outback. Acompanha nosso maravilhoso molho Bloom.",
        imagem: "Bloomin_Onion_cmyk_outback.png",
        tipo: "vegetariano" // Adicionando tipo para filtragem
    },
    {
        categoria: "Pratos Principais",
        nome: "Outback Megaribs",
        descricao: "Costela suculenta com molho especial, acompanhada de fritas e cebola empanada.",
        imagem: "Outback-Megaribs.jpg",
        tipo: "carnivoro" // Adicionando tipo para filtragem
    },
    {
        categoria: "Pratos Principais",
        nome: "Alice Springs Chicken",
        descricao: "Suculento peito de frango grelhado e temperado com o molho Honey Mustard, coberto de bacon, champignons e mix de queijos gratinados.",
        imagem: "alice_springs_chicken.png",
        tipo: "carnivoro" // Adicionando tipo para filtragem
    },
    {
        categoria: "Sobremesas",
        nome: "Havanna Thunder",
        descricao: "Brownie de chocolate com sorvete de baunilha e calda de doce de leite.",
        imagem: "havanna_thunder_sobremesa.jpg",
        tipo: "vegetariano" // Adicionando tipo para filtragem
    },
    {
        categoria: "Sobremesas",
        nome: "Smores Outback",
        descricao: "Uma sobremesa quente, que combina cookies de gotas de chocolate com nosso surpreendente brigadeiro Outback, marshmallow gratinado, calda de chocolate e raspas de chocolate para finalizar.",
        imagem: "Smores_outback.png",
        tipo: "vegetariano" // Adicionando tipo para filtragem
    }
];

let cartCount = 0;
const cartItems = [];

// Aguardando o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento onde o cardápio será inserido
    const container = document.getElementById("cardapio-container");

    // Itera sobre o array de itens do cardápio
    cardapio.forEach(item => {
        // Cria uma nova seção para cada categoria de prato
        const section = document.createElement("section");
        section.id = item.categoria.toLowerCase().replace(" ", "-"); // Define o ID da seção com base na categoria (sem espaços)

        // Cria um título para a categoria
        const h2 = document.createElement("h2");
        h2.textContent = item.categoria;
        section.appendChild(h2); // Adiciona o título à seção

        // Cria um artigo para o item do cardápio
        const article = document.createElement("article");
        article.classList.add(item.tipo); // Adiciona a classe para filtragem

        // Cria o elemento de figura para a imagem do prato
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = item.imagem; // Define a imagem do prato
        img.alt = `Prato de ${item.nome}`; // Define o texto alternativo da imagem
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = item.legenda; // Define a legenda para a imagem

        // Adiciona a imagem e a legenda à figura
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Adiciona a figura ao artigo
        article.appendChild(figure);

        // Cria o nome do prato
        const h3 = document.createElement("h3");
        h3.textContent = item.nome;
        article.appendChild(h3); // Adiciona o nome do prato ao artigo

        // Cria a descrição do prato
        const p = document.createElement("p");
        p.textContent = item.descricao;
        article.appendChild(p); // Adiciona a descrição ao artigo

        // Cria o botão "Adicionar ao Carrinho"
        const addButton = document.createElement("button");
        addButton.textContent = "Adicionar ao Carrinho";
        addButton.classList.add("add-to-cart");
        addButton.addEventListener("click", () => {
            addToCart(item.nome);
        });
        article.appendChild(addButton); // Adiciona o botão ao artigo

        // Adiciona o artigo à seção
        section.appendChild(article);

        // Adiciona a seção ao contêiner principal da página
        container.appendChild(section);
    });
});

// Função para atualizar a contagem de itens no carrinho
function updateCartCount() {
    document.getElementById("contador-itens").textContent = cartCount;
}

// Função para adicionar item ao carrinho
function addToCart(itemName) {
    cartCount++;
    cartItems.push(itemName);
    updateCartCount();
    renderCartItems();

    // Animação de feedback
    const feedback = document.createElement("div");
    feedback.textContent = `${itemName} adicionado ao carrinho!`;
    feedback.classList.add("feedback");
    document.body.appendChild(feedback);
    setTimeout(() => feedback.remove(), 2000); // Remove após 2 segundos
}

// Função para renderizar os itens no carrinho
function renderCartItems() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    listaCarrinho.innerHTML = ""; // Limpa a lista antes de renderizar

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaCarrinho.appendChild(li);
    });
}

// Função para filtrar os itens do cardápio
function filtrar(categoria) {
    const artigos = document.querySelectorAll("article");
    artigos.forEach(artigo => {
        if (categoria === 'todos' || artigo.classList.contains(categoria)) {
            artigo.style.display = 'block';
        } else {
            artigo.style.display = 'none';
        }
    });
}