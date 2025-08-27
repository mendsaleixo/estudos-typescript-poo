// arquivo: estudo-caso-5.ts

console.log("--- Estudo de Caso 5: Herança ---");

// --- 1. Criar a Classe Base (Superclasse) ---
// Esta é a nossa classe 'Produto' do estudo anterior, um pouco simplificada.
class Produto {
  // 'protected' permite que a classe e suas filhas acessem a propriedade, mas o código externo não.
  protected nome: string;
  protected preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  // Método que será compartilhado por todos os produtos.
  getDescricao(): string {
    return `Produto: ${this.nome}, Preço: R$${this.preco}`;
  }
}


// --- 2. Estender a Classe Base (Criar a Subclasse) ---
// A classe 'ProdutoEletronico' "é um" Produto, mas com algo a mais.
class ProdutoEletronico extends Produto {
  // 3. Especializar a Subclasse (Adicionar novas propriedades)
  private garantiaEmMeses: number;

  constructor(nome: string, preco: number, garantia: number) {
    // 4. Executar o construtor da classe pai via 'super()'
    // Isso inicializa as propriedades 'nome' e 'preco' usando a lógica da classe Produto.
    super(nome, preco); 
    this.garantiaEmMeses = garantia;
  }

  // 5. Sobrescrever (Override) um Método
  // Esta subclasse tem sua própria versão do método getDescricao.
  getDescricao(): string {
    // 6. Opcional: Executar o método da classe base via 'super'
    const descricaoPai = super.getDescricao();
    return `${descricaoPai}, Garantia: ${this.garantiaEmMeses} meses.`;
  }

  // Método que só existe na subclasse
  ativarGarantia(): void {
    console.log(`Garantia de ${this.garantiaEmMeses} meses ativada para ${this.nome}!`);
  }
}

// --- Utilizando as Classes ---

const caneta = new Produto("Caneta Esferográfica", 2.00);
const smartphone = new ProdutoEletronico("Smartphone Galaxy", 3500.00, 12);

console.log(caneta.getDescricao());      // Chama o método da classe PAI
console.log(smartphone.getDescricao()); // Chama o método SOBRESCRITO da classe FILHA

smartphone.ativarGarantia(); // Chama um método que só existe na classe FILHA

// O TypeScript impede isso, pois 'ativarGarantia' não existe na classe Produto
//caneta.ativarGarantia(); // Descomente para ver o erro!