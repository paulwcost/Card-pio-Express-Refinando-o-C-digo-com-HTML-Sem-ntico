// Carrinho.js
import React from "react";

function Carrinho({ carrinho, removerDoCarrinho, calcularTotal, toggleCarrinho }) {
  return (
    <div className={`painel-carrinho aberto`}>
      <h2>Carrinho</h2>
      <button className="fechar-carrinho" onClick={toggleCarrinho}>×</button>
      {carrinho.length === 0 ? (
        <p className="mensagem-vazio">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className="lista-carrinho">
            {carrinho.map((item, index) => (
              <li key={index}>
                <div className="item-carrinho">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <button onClick={() => removerDoCarrinho(index)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-carrinho">
            <strong>Total:</strong> R$ {calcularTotal()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
