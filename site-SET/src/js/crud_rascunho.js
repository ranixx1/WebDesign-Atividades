document.addEventListener("DOMContentLoaded", () => {
  carregarLocal();
  renderListaProdutos();
});

let db = {
  produtos: [],
  clientes: [],
  vendas: []
};

function salvarLocal() {
  localStorage.setItem("db", JSON.stringify(db));
}

function carregarLocal() {
  const salvo = localStorage.getItem("db");
  if (salvo) db = JSON.parse(salvo);
}
function cadastrarProduto(produto){
    db.produtos.push(produto);
    salvarLocal();
}

function listarProdutos(){
    return db.produtos;
}

function atualizarProduto(){
    const produto = db.produtos.find(p => p.id === id);

    if(!produto) return;

    Object.assign(produto,novoDados);
    salvarLocal();
}
function removerProduto(id){
    db.produtos = db.produtos.filter(p=> p.id !== id);
    salvarLocal();
}

function cadastrarCliente(cliente) {
  db.clientes.push(cliente);
  salvarLocal();
}
function listarClientes(){
    return db.clientes;
}