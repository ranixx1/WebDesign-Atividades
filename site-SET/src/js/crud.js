let db = {
  produtos: []
};

// ===== Persistência =====
function salvarDB() {
  localStorage.setItem("db", JSON.stringify(db));
}

function carregarDB() {
  const salvo = localStorage.getItem("db");
  if (salvo) {
    db = JSON.parse(salvo);
  }
}

// ===== CRUD PRODUTOS =====
function cadastrarProduto(produto) {
  db.produtos.push(produto);
  salvarDB();
}

function listarProdutos() {
  return db.produtos;
}
