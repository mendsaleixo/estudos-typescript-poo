console.log("--- Estudo de Caso 6: Interfaces e Membros Estáticos ---");

interface IProduto {
  nome: string;
  preco: number;
  getDescricao(): string;
}

class Livro implements IProduto {
  static contadorDeLivros: number = 0;

  nome: string;
  preco: number;
  private autor: string;

  constructor(nome: string, preco: number, autor: string) {
    this.nome = nome;
    this.preco = preco;
    this.autor = autor;

    Livro.contadorDeLivros++; //membro estático (static)
  }

  getDescricao(): string {
    return `Livro: ${this.nome} por ${this.autor}, Preço: R$${this.preco}`;
  }

  static gerarCodigoDeBarras(): string {
    return String(Math.floor(Math.random() * 1000000000));
  }
}

class Jogo implements IProduto {
  nome: string;
  preco: number;
  private genero: string;

  constructor(nome: string, preco: number, genero: string) {
    this.nome = nome;
    this.preco = preco;
    this.genero = genero;
  }

  getDescricao(): string {
    return `Jogo: ${this.nome} (${this.genero}), Preço: R$${this.preco}`;
  }
}

//Aplicando e chamando as classes com suas especificidades
const livroTS = new Livro("Aprendendo TypeScript", 80.0, "João da Silva");
const jogoAventura = new Jogo("Aventura na Montanha", 120.0, "Aventura");

// Graças à interface, podemos tratar Livro e Jogo como o mesmo "tipo": IProduto.
const prateleira: IProduto[] = [livroTS, jogoAventura];

//Exemplo de polimorfismo
prateleira.forEach((produto) => {
  console.log(produto.getDescricao());
});

// --- Acessando Membros Estáticos ---
console.log(`\nTotal de livros instanciados: ${Livro.contadorDeLivros}`);
// Chamamos o método estático diretamente da CLASSE, não do objeto.
console.log(`Novo código de barras para livro: ${Livro.gerarCodigoDeBarras()}`);
