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
    console.log(`Produto ${nome} cadastrado, agora a loja tem ${lista.length} produtos.`);
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
            console.log(`Produto encontrado: ${produto.nome} | ${produto.categoria} | R$ ${produto.preco.toFixed(2)} | ${produto.quantidade} un. | ${produto.vendido} vendidos`);
            return true;
        }
    }

    console.log("Produto não encontrado.");
    return false;
}