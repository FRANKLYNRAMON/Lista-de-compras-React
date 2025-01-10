import { useRef, useState, useEffect } from "react";
import { v4 } from "uuid";
import { AddButton, Container, Product, TrashButton } from "./styles";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  // Carregar dados do localStorage ao montar o componente
  useEffect(() => {
    const produtoSalvo = JSON.parse(localStorage.getItem("ls_produtos"));
    if (produtoSalvo) setProdutos(produtoSalvo);
  }, []); // Executa apenas uma vez ao carregar a página

  // Atualizar o localStorage automaticamente sempre que 'produtos' mudar
  useEffect(() => {
    if (produtos.length > 0) {
      localStorage.setItem("ls_produtos", JSON.stringify(produtos));
    }
  }, [produtos]); // Observa mudanças no estado 'produtos'

  function cliqueiNoBotao() {
    const novoProduto = inputRef.current.value.trim(); // Remove espaços extras
    if (novoProduto === "") return; // Evita salvar valores vazios
    setProdutos([{ id: v4(), nome: novoProduto }, ...produtos]);
    inputRef.current.value = ""; // Limpa o input após adicionar
  }

  function deletarProduto(id) {
    // Atualiza o estado removendo o item pelo ID
    const produtosAtualizados = produtos.filter((produto) => produto.id !== id);
    setProdutos(produtosAtualizados);

    // Atualiza o localStorage com a lista atualizada
    localStorage.setItem("ls_produtos", JSON.stringify(produtosAtualizados));
  }
  
  return (
    <Container className="containe">
      <h1>Lista de Compras</h1>
      <input placeholder="Produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

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
