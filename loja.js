const nomeLoja = "Jonn Store";
let produtos = [
    {
        nome: "Camiseta",
        categoria: "Roupas",
        preco: 50.00,
        quantidade: 10,
        vendido: 0
    },
    {
        nome: "Calça",
        categoria: "Roupas",
        preco: 80.00,
        quantidade: 5,
        vendido: 3
    },
    {
        nome: "Tênis",
        categoria: "Calçados",
        preco: 120.00,
        quantidade: 8,
        vendido: 2
    },
    {
        nome: "Chinelo",
        categoria: "Calçados",
        preco: 30.00,
        quantidade: 15,
        vendido: 5
    },
    {
        nome: "Jaqueta",
        categoria: "Roupas",
        preco: 150.00,
        quantidade: 3,
        vendido: 1
    },
    {
        nome: "Boné",
        categoria: "Acessórios",
        preco: 25.00,
        quantidade: 20,
        vendido: 4
    }
];

function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        let produto = lista[i];
        console.log(`${i + 1}. ${produto.nome} | ${produto.categoria} | R$ ${produto.preco} | ${produto.quantidade} un. | ${produto.vendido} vendidos`);
    }
}

function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    let novoProduto = {
        nome: formatarNome(nome),
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendido: 0
    };
    lista.push(novoProduto);
    console.log(`Produto cadastrado! Agora a loja tem ${lista.length} produtos.`);
}

function valorEstoque(lista) {
    let valorTotal = 0;
    for (let i = 0; i < lista.length; i++) {
        let produto = lista[i];
        valorTotal += produto.preco * produto.quantidade;
    }
    return valorTotal;
}

function buscarProduto(lista, nome) {
    for (let i = 0; i < lista.length; i++) {
        let produto = lista[i];
        if (produto.nome.toLowerCase() === nome.toLowerCase()) {
            console.log(`Encontrado: ${produto.nome} - R$ ${produto.preco}`);
            return produto;
        }
    }

    console.log("Produto não encontrado.");
    return false;
}

let minimo = 5;

function produtosEmFalta(lista, minimo) {
    let produtosFaltando = [];
    for (let i = 0; i < lista.length; i++) {
        let produto = lista[i];
        if (produto.quantidade < minimo) {
            produtosFaltando.push(produto);
        }
    }
    return produtosFaltando;
}

let percentual = 10;
let categoria = "Roupas";

function aplicarDesconto(lista, categoria, percentual) {
    let quantidadeDescontada = 0;
    for (let i = 0; i < lista.length; i++) {
        let produto = lista[i];
        if (produto.categoria.toLowerCase() === categoria.toLowerCase()) {
            let novoPreco = produto.preco - (produto.preco * percentual / 100);
            produto.preco = novoPreco;
            quantidadeDescontada++;
        }
    }
    return quantidadeDescontada;
}

function registrarVenda(lista, nome, quantidade) {
    let produto = null;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome.toLowerCase() === nome.toLowerCase()) {
            produto = lista[i];
            break;
        }
    }

    if (produto === null || produto.quantidade < quantidade) {
        console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
        return false;
    }

    produto.quantidade -= quantidade;
    produto.vendido += quantidade;
    console.log(`Venda realizada! ${produto.nome}: ${produto.quantidade} un. em estoque, ${produto.vendido} vendidos.`);
    return true;
}

function formatarNome(texto) {
    texto = texto.trim();
    if (texto.length === 0) {
        return texto;
    }

    let primeiraLetra = texto[0].toUpperCase();
    let restanteDoTexto = texto.slice(1).toLowerCase();
    return primeiraLetra + restanteDoTexto;
}

function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

function lerJSON(texto) {
    return JSON.parse(texto);
}

function gerarRelatorio(nome, lista) {
    let totalEstoque = valorEstoque(lista);
    let itensEmFalta = produtosEmFalta(lista, 5);

    console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$ ${totalEstoque}`);
    console.log(`Produtos com estoque baixo: ${itensEmFalta.length}`);

    for (let i = 0; i < itensEmFalta.length; i++) {
        let produto = itensEmFalta[i];
        console.log(`- ${produto.nome} (${produto.quantidade} un.)`);
    }
}

    console.log("--- Tarefa 2: listar ---");
    listarProdutos(produtos);

    console.log("--- Tarefa 3: cadastrar ---");
    cadastrarProduto(produtos, "Caderno de desenho", "cadernos", 30, 4);

    console.log("--- Tarefa 4: valor do estoque ---");
    console.log(`Valor do estoque: R$ ${valorEstoque(produtos)}`);

    console.log("--- Tarefa 5: buscar ---");
    buscarProduto(produtos, "Tênis");
    buscarProduto(produtos, "Produto inexistente");

    console.log("--- Tarefa 6: em falta ---");
    console.log(`Produtos com menos de 5 unidades: ${produtosEmFalta(produtos, minimo).length}`);

    console.log("--- Tarefa 7: desconto ---");
    let produtosDescontados = aplicarDesconto(produtos, "Roupas", percentual);
    console.log(`${produtosDescontados} produtos receberam desconto.`);
    let camiseta = produtos.find(produto => produto.nome === "Camiseta");
    console.log(`Novo preço da camiseta: R$ ${camiseta.preco}`);

    console.log("--- Tarefa 8: registrar venda ---");
    registrarVenda(produtos, "Camiseta", 1);
    registrarVenda(produtos, "Produto inexistente", 1);

    console.log("--- Tarefa 9: formatar nome ---");
    console.log(formatarNome("  BORRACHA BRANCA  "));

    console.log("--- Tarefa 10: JSON ---");
    let produtosTexto = converterParaJSON(produtos);
    console.log(typeof produtosTexto);
    let produtosRecuperados = lerJSON(produtosTexto);
    console.log(`Itens recuperados: ${produtosRecuperados.length} | Primeiro: ${produtosRecuperados[0].nome}`);

    console.log("--- Tarefa 11: relatório ---");
    gerarRelatorio(nomeLoja, produtos);


