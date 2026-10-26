import { Cliente } from './Cliente.js';
import { Tecnico } from './Tecnico.js';

export class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        switch (tipo.toUpperCase()) {
            case 'CLIENTE':
                return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
            case 'TECNICO':
            case 'TÉCNICO':
                return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
            default:
                throw new Error(`Tipo de utilizador desconhecido: ${tipo}`);
        }
    }
}
