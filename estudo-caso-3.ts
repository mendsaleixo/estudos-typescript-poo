console.log("--- Estudo de Caso 3: Classes, Instâncias e Construtor ---");

class Produto {

  nome: string;
  preco: number;
  estoque: number;

  constructor(nomeInicial: string, precoInicial: number, estoqueInicial: number) {
    this.nome = nomeInicial;
    this.preco = precoInicial;
    this.estoque = estoqueInicial;
  }

  descrever(): string {
    return `Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`;
  }

  verificarEstoque(): boolean {
    return this.estoque > 0;
  }
}


// --- Instanciação de Objetos (Agora muito mais limpa!) ---

const caneta = new Produto("Caneta Bic", 1.50, 50);
const notebook = new Produto("Notebook Dell", 5500.00, 15);


// --- Utilizando os Objetos ---
console.log(caneta.descrever());
console.log(notebook.descrever());
console.log(`Tem caneta no estoque? ${caneta.verificarEstoque() ? 'Sim' : 'Não'}`);