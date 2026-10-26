# TechOS Core (Sprint Express)

## 1. User Stories (INVEST)
* **US01:** "Como técnico, quero abrir uma Ordem de Serviço para registrar um conserto."[cite: 2]
  * **C.A.01:** Deve validar o ID do cliente.[cite: 2]
  * **C.A.02:** O status inicial deve ser sempre 'ABERTA'.[cite: 2]
* **US02:** "Como cliente, quero visualizar o status do meu equipamento."[cite: 2]

## 2. Requisitos Não-Funcionais (RNF)
* **RNF01 (Segurança):** Sanitização de inputs contra XSS/OWASP no cadastro.[cite: 2]
* **RNF02 (Desempenho):** Tempo de resposta na criação de chamados < 2s.[cite: 2]

## 3. Diagrama de Classes (Mermaid)
```mermaid
classDiagram
    class Usuario {
        <<Abstrata>>
        +int id
        +string nome
        +string email
        +getId()
        +getNome()
        +getEmail()
    }
    class Cliente {
        +string telefone
    }
    class Tecnico {
        +string especialidade
    }
    class OrdemServico {
        +int id
        +Cliente cliente
        +string status
    }
    Usuario <|-- Cliente : Herança
    Usuario <|-- Tecnico : Herança
    OrdemServico --> Cliente : Referencia# techos-core-elivelton-oliveira
# DOCUMENTAÇÃO DE UI/UX E COMPONENTES (SPRINT 3)

## 1. ARQUITETURA DA INFORMAÇÃO E DASHBOARD
- **Painel Superior:** Exibe totalizadores consumidos do GerenciadorOS (Singleton).
- **Formulário Lateral:** Cadastra novos utilizadores/chamados acionando a UsuarioFactory.
- **Tabela Central:** Lista dinâmica e filtrável de Ordens de Serviço.

## 2. COMPONENTES UI
- **StatusBadge:** Amarelo (ABERTA), Azul (EM ANDAMENTO), Verde (CONCLUÍDA).
- **UserCard:** Exibe avatar e dados do Cliente ou Técnico instanciado.
- **OSTable:** Tabela responsiva para visualização dos chamados.

## 3. CHECKLIST DE ACESSIBILIDADE (WCAG)
- [x] Contraste mínimo de 4.5:1 nas tabelas e badges.
- [x] Navegação por TAB em todos os campos de formulário.
- [x] Rótulos ARIA para ações de alteração de status.
