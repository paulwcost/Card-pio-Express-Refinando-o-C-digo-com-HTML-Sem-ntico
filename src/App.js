import React, { useState } from "react";
import menuItems from "./data";
import MenuItem from "./componente/menuItem";
import "./App.css";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const toggleCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => {
      const preco = parseFloat(item.price.replace("R$", "").replace(",", "."));
      return total + preco;
    }, 0).toFixed(2);
  };

  return (
    <div>
      <button className="botao-carrinho" onClick={toggleCarrinho}>
        🛒 {carrinho.length}
      </button>

      <div className={`painel-carrinho ${mostrarCarrinho ? "aberto" : ""}`}>
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

      <main className="menu-container">
        <h1 className="menu-title">Cardápio Outback</h1>
        <section className="menu-grid">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} onAdd={() => adicionarAoCarrinho(item)} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
