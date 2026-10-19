// --- Classes de Domínio (POO) ---
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Cliente extends Usuario {
    constructor(id, nome, email, telefone) {
        super(id, nome, email);
        this.telefone = telefone;
    }
}

class Tecnico extends Usuario {
    constructor(id, nome, email, especialidade) {
        super(id, nome, email);
        this.especialidade = especialidade;
    }
}

class OrdemServico {
    constructor(id, cliente, tecnico, descricao, status = "ABERTA") {
        this.id = id;
        this.cliente = cliente.nome;
        this.tecnico = tecnico.nome;
        this.status = status;
        this.descricao = descricao;
    }
}

// --- Padrão Singleton: GerenciadorOS ---
class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instance) {
            return GerenciadorOS.instance;
        }
        GerenciadorOS.instance = this;
        this.ordensServico = [];
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    }

    adicionarOS(os) {
        this.ordensServico.push(os);
        console.log(`[SISTEMA] Ordem de Serviço #${os.id} registrada com sucesso!`);
    }

    listarOS() {
        console.log("[SISTEMA] Lista de OS ativas:");
        console.log(this.ordensServico);
    }
}

// --- Padrão Factory Method: UsuarioFactory ---
class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            console.log(`[FACTORY] Criando Usuário Tipo: CLIENTE... > Objeto 'Cliente' criado (ID: ${dados.id}, Nome: ${dados.nome}).`);
            return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
        } else if (tipo === 'TECNICO') {
            console.log(`[FACTORY] Criando Usuário Tipo: TECNICO... > Objeto 'Tecnico' criado (ID: ${dados.id}, Nome: ${dados.nome}).`);
            return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
        }
        throw new Error("Tipo de utilizador inválido.");
    }
}

// --- Execução da Aplicação ---
const gerenciador = new GerenciadorOS();

const clienteAna = UsuarioFactory.criarUsuario('CLIENTE', { 
    id: 101, 
    nome: 'Ana', 
    email: 'ana@email.com', 
    telefone: '912345678' 
});

const tecnicoCarlos = UsuarioFactory.criarUsuario('TECNICO', { 
    id: 202, 
    nome: 'Carlos', 
    email: 'carlos@email.com', 
    especialidade: 'Manutenção de Hardware' 
});

const os1 = new OrdemServico(1, clienteAna, tecnicoCarlos, "Troca de Tela");
gerenciador.adicionarOS(os1);

gerenciador.listarOS();
