//Aqui ele aplica o desconto de  30%

function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map((livro) => {
        return { ...livro, preco: livro.preco - livro.preco * desconto };
    });
    return livrosComDesconto;
}
