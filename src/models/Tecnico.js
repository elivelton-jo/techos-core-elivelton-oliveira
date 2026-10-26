import { Usuario } from './Usuario.js';

export class Tecnico extends Usuario {
    constructor(id, nome, email, especialidade) {
        super(id, nome, email);
        this.especialidade = especialidade;
    }
}
