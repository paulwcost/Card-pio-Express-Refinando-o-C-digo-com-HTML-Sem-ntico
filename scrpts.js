// Array contendo os itens do cardápio
const cardapio = [
    {
        categoria: "Entradas",
        nome: "Caesar Salad",
        descricao: "Combinação de alface, queijo Parmesão, croutons Outback e Molho Caesar.",
        imagem: "Caesar-Salad-cmyk.jpg",
        legenda: "Caesar Salad com parmesão e croutons."
    },
    {
        categoria: "Pratos Principais",
        nome: "Outback Megaribs",
        descricao: "Costela suculenta com molho especial, acompanhada de fritas e cebola empanada.",
        imagem: "Outback-Megaribs.jpg",
        legenda: "Outback Megaribs - Costela suculenta com fritas e cebola empanada."
    },
    {
        categoria: "Sobremesas",
        nome: "Havanna Thunder",
        descricao: "Brownie de chocolate com sorvete de baunilha e calda de doce de leite.",
        imagem: "havanna_thunder_sobremesa.jpg",
        legenda: "Havanna Thunder - Brownie de chocolate com sorvete de baunilha e doce de leite."
    }
];

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

        // Adiciona o artigo à seção
        section.appendChild(article);

        // Adiciona a seção ao contêiner principal da página
        container.appendChild(section);
    });
});
