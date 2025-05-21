import { useRef, useState, useEffect } from "react";
import { v4 } from "uuid";
import { AddButton, Container, Product, TrashButton } from "./styles";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();
  const inputQnt = useRef();
  const inputValor = useRef();
 
  
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
    const novaQnt = inputQnt.current.value.trim();
    const novoValor = inputValor.current.value.trim();
    if (novoProduto === "") return; // Evita salvar valores vazios
    if (novaQnt === "0") return; // Evita salvar valores vazios
    //if (novoValor === "") return; // Evita salvar valores vazios
    setProdutos([{ id: v4(), nome: novoProduto, qnt: novaQnt, valor: novoValor}, ...produtos]);
    inputRef.current.value = ""; // Limpa o input após adicionar
    inputQnt.current.value = "";
    inputValor.current.value = "";  
  }

  // Função para multiplicar a quantidade pelo valor de cada item
  const produtosComTotal = produtos.map((produto) => {
    const qnt = parseFloat(produto.qnt).toFixed(2) || 0;
    const valor = parseFloat(produto.valor).toFixed(2) || 0;
    return {
      ...produto,
      total: qnt * valor
  }})

  // Função para somar o total de todos os itens
  const somaTotal = produtosComTotal.reduce((acc, item) => acc + (isNaN(item.total) ? 0 : item.total), 0);
  /*
  Se item.total não for um número (isNaN(...) === true), retorna 0.
  Se item.total for um número válido, usa item.total como está.
  */

 // Formata os valores motetarios
  const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

  // função para update
    const atualizarProduto = (id, novosDados) => {
    const produtosAtualizados = produtos.map((produto) => produto.id === id ? { ...produto, ...novosDados} : produto);
    setProdutos(produtosAtualizados); // Atualiza o estado
    localStorage.setItem("ls_produtos", JSON.stringify(produtosAtualizados));
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
      <div className="divInput">
      <input placeholder="Produto..." ref={inputRef} maxLength={20} />
     <input type="number" placeholder="Quantidade" ref={inputQnt} onInput= {(e) => { const maxDigits = 5;
    if (e.target.value.length > maxDigits) {
      e.target.value = e.target.value.slice(0, maxDigits);
    }}}/>
      <input type="number" placeholder="Valor" ref={inputValor} onInput= {(e) => { const maxDigits = 7;
    if (e.target.value.length > maxDigits) {
      e.target.value = e.target.value.slice(0, maxDigits);
    }}}/> 
      </div>
      <div className="btn">
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
      </div>

      <div className="content">
        <div>
       {produtos.map((produto) => (
          
          <Product key={produto.id}>
            <p>nome: {produto.nome} </p>
            <p>qnt: {produto.qnt ? produto.qnt : "0"} </p>
            <p>Valor: {formatador.format(Number(produto.valor ?? 0))}</p>
            <p>total: {formatador.format(Number(produto.qnt) * Number(produto.valor))}</p>
            <button onClick={() => atualizarProduto(produto.id, {nome: prompt("Novo Nome do Produto:", produto.nome),
              qnt: prompt("Nova Quantidade:", produto.qnt),
              valor: prompt("Novo Valor:", produto.valor)
            })}>✏️
            </button>
            <TrashButton onClick={() => deletarProduto(produto.id)}>
              🗑️
            </TrashButton>
          </Product>
        ))}
        </div>

      </div>
        <div className="totalGeral">
        <br />
          <h3>Total Geral: R$ { formatador.format(Number(somaTotal)) }</h3>
        </div>

    </Container>
  );
}

export default Home;
