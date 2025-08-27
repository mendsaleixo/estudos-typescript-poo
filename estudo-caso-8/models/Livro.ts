import type { IProduto } from "../interfaces/IProduto.js";

export class Livro implements IProduto {
  static contadorDeLivros: number = 0;

  nome: string;
  preco: number;
  private autor: string;

  constructor(nome: string, preco: number, autor: string) {
    this.nome = nome;
    this.preco = preco;
    this.autor = autor;
    Livro.contadorDeLivros++;
  }

  getDescricao(): string {
    return `Livro: ${this.nome} por ${this.autor}, Preço: R$${this.preco}`;
  }
}
