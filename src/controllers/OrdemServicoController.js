import { UsuarioFactory } from '../models/UsuarioFactory.js';
import { GerenciadorOS } from '../models/GerenciadorOS.js';

export class OrdemServicoController {
    constructor() {
        this.gerenciadorOS = new GerenciadorOS();
        console.log("[CONTROLLER] OrdemServicoController inicializado com sucesso.");
    }

    // Método acionado quando o formulário de cadastro/abertura de OS é submetido
    cadastrarChamado(tipoUsuario, dadosUsuario, descricaoServico) {
        try {
            // 1. Aciona a UsuarioFactory para instanciar o Cliente ou Técnico
            const usuario = UsuarioFactory.criarUsuario(tipoUsuario, dadosUsuario);
            console.log(`[FACTORY] Criando '${tipoUsuario}' via formulário UI -> ID: ${usuario.id}`);

            // 2. Cria a estrutura da Ordem de Serviço
            const novaOS = {
                id: Date.now(),
                responsavel: usuario,
                descricao: descricaoServico,
                status: 'ABERTA'
            };

            // 3. Salva no GerenciadorOS (Singleton)
            this.gerenciadorOS.adicionarOS(novaOS);
            console.log(`[SINGLETON] Ordem de Serviço #${novaOS.id} registrada com sucesso!`);

            // 4. Solicita a atualização da View (simulada no console por enquanto)
            this.atualizarView();

            return novaOS;
        } catch (erro) {
            console.error("[ERRO NO CONTROLLER]:", erro.message);
        }
    }

    atualizarView() {
        console.log("[VIEW] Tabela de OS atualizada dinamicamente com Flexbox/Grid.");
        const lista = this.gerenciadorOS.listarOS();
        console.table(lista);
    }
}
