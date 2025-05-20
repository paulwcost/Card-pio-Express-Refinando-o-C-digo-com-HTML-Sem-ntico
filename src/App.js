import React, { Suspense, lazy, useState } from "react";
import menuItems from "./data";
import "./App.css";

// Importações dinâmicas com React.lazy()
const MenuItem = lazy(() => import("./componente/menuItem"));
const ExtraInfo = lazy(() => import("./componente/ExtraInfo"));
const Carrinho = lazy(() => import("./componente/carrinho")); 

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
    return carrinho
      .reduce((total, item) => {
        const preco = parseFloat(item.price.replace("R$", "").replace(",", "."));
        return total + preco;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      <button className="botao-carrinho" onClick={toggleCarrinho}>
        🛒 {carrinho.length}
      </button>

      {/* Carrinho separado em um componente dinâmico */}
      {mostrarCarrinho && (
        <Suspense fallback={<div>Carregando carrinho...</div>}>
          <Carrinho
            carrinho={carrinho}
            removerDoCarrinho={removerDoCarrinho}
            calcularTotal={calcularTotal}
            toggleCarrinho={toggleCarrinho}
          />
        </Suspense>
      )}

      <main className="menu-container">
        <h1 className="menu-title">Cardápio Outback</h1>
        <section className="menu-grid">
          <Suspense fallback={<div>Carregando itens do menu...</div>}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} onAdd={() => adicionarAoCarrinho(item)} />
            ))}
          </Suspense>
        </section>
      </main>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Suspense fallback={<div>Carregando informações extras...</div>}>
          <ExtraInfo />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
