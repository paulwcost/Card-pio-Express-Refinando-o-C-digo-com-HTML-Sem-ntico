import React from 'react';
import './Cardapio.css'; // Você pode criar um estilo separado

const itens = [
  { nome: 'Pizza Margherita', descricao: 'Molho de tomate, mussarela e manjericão', preco: 'R$ 35,00' },
  { nome: 'Hambúrguer Artesanal', descricao: 'Carne 100%, queijo, alface, tomate', preco: 'R$ 28,00' },
  { nome: 'Suco Natural', descricao: 'Suco de laranja espremido na hora', preco: 'R$ 8,00' },
];

function Cardapio() {
  return (
    <div className="cardapio">
      <h2>Cardápio</h2>
      {itens.map((item, index) => (
        <div className="item-cardapio" key={index}>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <span>{item.preco}</span>
        </div>
      ))}
    </div>
  );
}

export default Cardapio;
