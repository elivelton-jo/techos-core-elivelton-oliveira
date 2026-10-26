export class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instance) {
            return GerenciadorOS.instance;
        }
        
        this.ordensServico = [];
        GerenciadorOS.instance = this;
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    }

    adicionarOS(os) {
        this.ordensServico.push(os);
    }

    listarOS() {
        return this.ordensServico;
    }
}
