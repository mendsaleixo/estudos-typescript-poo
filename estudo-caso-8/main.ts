console.log("--- Estudo de Caso 8: Modularização ---");

// Importamos as peças que precisamos de seus respectivos arquivos.
import type { IProduto } from "./interfaces/IProduto.js";
import { Livro } from "./models/Livro.js";
import { Jogo } from "./models/Jogo.js";

// O código para utilizar as classes é exatamente o mesmo do estudo de caso anterior.
const livroTS = new Livro("Aprendendo TypeScript", 80.0, "João da Silva");
const jogoAventura = new Jogo("Aventura na Montanha", 120.0, "Aventura");
const outroLivro = new Livro("POO para Iniciantes", 65.0, "Maria Souza");

const prateleira: IProduto[] = [livroTS, jogoAventura, outroLivro];

prateleira.forEach((produto) => {
  console.log(produto.getDescricao());
});

console.log(`\nTotal de livros instanciados: ${Livro.contadorDeLivros}`);
