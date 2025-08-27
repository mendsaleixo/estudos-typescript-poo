// arquivo: estudo-caso-7.ts

console.log("--- Estudo de Caso 7: Abstratas, Interfaces e Generics ---");

// --- 1. Criar a Interface ---
// Contrato para qualquer coisa que possa ser "postada"
interface IPostavel {
  postar(): void;
}

// --- 2. Criar a Classe Abstrata ---
// Planta INCOMPLETA para todo tipo de conteúdo.
// Ninguém pode criar um 'new Conteudo()'.
abstract class Conteudo {
  public titulo: string;

  constructor(titulo: string) {
    this.titulo = titulo;
  }

  // Método CONCRETO, compartilhado por todas as filhas
  getTituloFormatado(): string {
    return this.titulo.toUpperCase();
  }

  // Método ABSTRATO, que OBRIGA as filhas a implementarem
  abstract getDescricaoDetalhada(): string;
}


// --- 3. Implementar e Especializar ---
// Artigo "é um" Conteudo e também "tem a capacidade de" ser Postavel.
class Artigo extends Conteudo implements IPostavel {
  private autor: string;

  constructor(titulo: string, autor: string) {
    super(titulo);
    this.autor = autor;
  }

  // É obrigada a implementar este método da classe pai abstrata
  getDescricaoDetalhada(): string {
    return `Artigo: "${this.getTituloFormatado()}" por ${this.autor}.`;
  }

  // É obrigada a implementar este método da interface
  postar(): void {
    console.log(`Postando o artigo "${this.titulo}" no blog...`);
  }
}

// Vídeo "é um" Conteudo, mas NÃO é Postavel.
class Video extends Conteudo {
  private duracaoSegundos: number;

  constructor(titulo: string, duracao: number) {
    super(titulo);
    this.duracaoSegundos = duracao;
  }

  getDescricaoDetalhada(): string {
    return `Vídeo: "${this.getTituloFormatado()}", Duração: ${this.duracaoSegundos}s.`;
  }
}


// --- 4. Usando Generics para criar uma classe de Repositório Flexível ---

// Esta classe pode guardar QUALQUER tipo de objeto.
// 'T' é o nosso tipo genérico.
class Repositorio<T> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
  }

  getItens(): T[] {
    return this.itens;
  }
}

// --- Utilizando tudo ---

const artigoReact = new Artigo("React para Iniciantes", "João Coder");
const videoPOO = new Video("POO em 5 Minutos", 300);

// Criamos um repositório que só aceita coisas do tipo 'Conteudo'
const repositorioDeConteudos = new Repositorio<Conteudo>();
repositorioDeConteudos.adicionar(artigoReact);
repositorioDeConteudos.adicionar(videoPOO);

console.log("--- Conteúdos no Repositório ---");
repositorioDeConteudos.getItens().forEach(c => {
  console.log(c.getDescricaoDetalhada());
});

// Usando a capacidade da interface
console.log("\n--- Postando Conteúdos ---");
artigoReact.postar();
// videoPOO.postar(); // Descomente para ver o ERRO! Video não implementa IPostavel.