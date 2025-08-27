import type { IProduto } from "../interfaces/IProduto.js";

export class Jogo implements IProduto {
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
