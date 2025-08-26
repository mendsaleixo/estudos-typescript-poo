// arquivo: estudo-caso-2.ts

console.log("--- Estudo de Caso 2: Tipos Primitivos, Arrays e Objetos ---");

// --- 1. Tipos Primitivos ---
let nome: string = "Mendelson";
let idade: number = 43;
let estudando: boolean = true;

// TypeScript infere o tipo aqui, não precisamos anotar
let hobbies = "Programação";

// nome = 123;
// idade = "trinta";
// isActive = "sim";

console.log(
  `Nome: ${nome}, Idade: ${idade}, Ativo: ${estudando}, Hobbies: ${hobbies}`
);

// --- 2. O Tipo 'any' (A Válvula de Escape) ---
// 'any' desliga a verificação de tipos. Deve ser evitado!
let algo: any = "Isso é um texto";
console.log(`'algo' inicial: ${algo}`);
algo = 100; // Sem erro, pois é 'any'
console.log(`'algo' agora é um número: ${algo}`);
algo = false; // Sem erro...
console.log(`'algo' agora é um booleano: ${algo}`);

// --- 3. Arrays ---
// Duas formas de declarar um array de strings
let nomes: string[] = ["João", "Maria", "José"];
let numeros: Array<number> = [10, 20, 30];

// nomes.push(123);
// numeros.push("quarenta");

console.log("Nomes:", nomes);
console.log("Números:", numeros);

// --- 4. Objetos Literais ---
// Definimos a "forma" do objeto diretamente na anotação de tipo
let pessoa: { nome: string; idade: number; email?: string };

pessoa = {
  nome: "Ana",
  idade: 25,
};

// Se a propriedade 'email' for adicionada, não há erro, pois ela é opcional (?)
pessoa.email = "ana@email.com";

// Tente descomentar para ver os erros:
// pessoa.idade = "vinte e cinco"; // Tipo errado
// pessoa.telefone = "12345"; // Propriedade não existe no "molde"

console.log("Pessoa:", pessoa);


