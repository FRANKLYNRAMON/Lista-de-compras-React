import { useRef, useState, useEffect } from "react";
import { v4 } from "uuid";
import { AddButton, Container, Product, TrashButton } from "./styles";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  // Função para salvar os dados no LocalStorage
  const salvar = (chave, valor) => {
    localStorage.setItem(chave, JSON.stringify(valor));
  };

  // Função responsavel por pegar os dados do localStorage
  useEffect(() => {
    const produtoSalvo = JSON.parse(localStorage.getItem("ls_produtos"));
    if (produtoSalvo) setProdutos(produtoSalvo);
  }, []); // Executa apenas uma vez ao carregar a página

  function cliqueiNoBotao() {
    const novoProduto = inputRef.current.value.trim();
    if (novoProduto === "") return; // Evita salvar valores vazios
    setProdutos([{ id: v4(), nome: novoProduto }, ...produtos]);
    inputRef.current.value = ""; // Limpa o input após adicionar
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }

  return (
    <Container className="containe">
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
      <AddButton onClick={() => salvar("ls_produtos", produtos)}>
        salvar
      </AddButton>

      <div className="content">
        {produtos.map((produto) => (
          <Product key={produto.id}>
            <p>{produto.nome}</p>
            <TrashButton onClick={() => deletarProduto(produto.id)}>
              🗑️
            </TrashButton>
          </Product>
        ))}
      </div>
    </Container>
  );
}

export default Home;
