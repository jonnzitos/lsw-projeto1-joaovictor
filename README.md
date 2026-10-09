  # Minha Loja - Jonn Store

Aluno(a): João Victor Ribeiro Oliveira - 202612010018

Como executar: node loja.js
## Funções

### `listarProdutos(lista)`
Percorre a lista e exibe cada produto com número, nome, categoria, preço, quantidade em estoque e unidades vendidas.

### `cadastrarProduto(lista, nome, categoria, preco, quantidade)`
Cria um produto com os dados informados, formata o nome com `formatarNome` e adiciona o novo produto à lista. O campo `vendido` começa em `0`.

### `valorEstoque(lista)`
Calcula o valor total do estoque multiplicando o preço pela quantidade de cada produto e somando os resultados.

### `buscarProduto(lista, nome)`
Procura um produto pelo nome, sem diferenciar letras maiúsculas de minúsculas. Exibe uma mensagem com o resultado.

### `produtosEmFalta(lista, minimo)`
Seleciona os produtos cuja quantidade em estoque é menor que o limite informado.

### `aplicarDesconto(lista, categoria, percentual)`
Aplica o percentual de desconto ao preço de cada produto da categoria indicada. A comparação de categoria não diferencia maiúsculas de minúsculas.

### `registrarVenda(lista, nome, quantidade)`
Procura o produto pelo nome e verifica se existe estoque suficiente. Se a venda for possível, reduz a quantidade em estoque e aumenta o total vendido.

### `formatarNome(texto)`
Remove espaços no início e no fim do texto, transforma a primeira letra em maiúscula e as letras restantes em minúsculas.

### `converterParaJSON(lista)`
Converte a lista de produtos para uma representação em texto JSON.

### `lerJSON(texto)`
Interpreta o texto JSON e reconstrói o valor JavaScript correspondente.

### `gerarRelatorio(nome, lista)`
Exibe um resumo da loja com nome em maiúsculas, quantidade de produtos, valor total do estoque e lista de produtos com menos de 5 unidades. Reutiliza `valorEstoque` e `produtosEmFalta`.
