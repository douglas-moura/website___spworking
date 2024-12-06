# Site Institucional Coworking SPWorking

Este repositório contém o código-fonte do site institucional do **SPWorking**, um espaço de coworking localizado na região do Butantã, em São Paulo. O projeto foi desenvolvido com foco em responsividade, otimização e manutenção, utilizando tecnologias modernas e boas práticas de desenvolvimento front-end.

## Sobre o Projeto

O site foi projetado para atender às seguintes necessidades:
- Apresentar os serviços e benefícios do coworking.
- Exibir informações claras sobre planos de assinatura.
- Facilitar o contato e a navegação para localização física.
- Proporcionar uma experiência visual agradável e responsiva.

### Estrutura do Projeto

- **Páginas principais**: 
  - **Home:** Introdução ao SPWorking e seus serviços.
    - Banner
    - Vantagens e sobre o coworking
    - Tipos de espaços e serviços
    - Galeria
    - Comentários de clientes
    - Localização
    - Formulário da newsletter
  - **Planos:** Informações detalhadas sobre os planos oferecidos.
    - Planos e preços disponíveis
    - Perguntas frequentes
    - Formulário de dúvidas
    
- **Organização do Código**:
  
        ├── src/                      # Diretório principal do código-fonte
        │   ├── assets/               # Recursos estáticos como imagens e arquivos de estilo
        │   │   ├── css/              # Arquivo principal de estilização
        │   │   ├── img/              # Imagens utilizadas no site
        │   ├── functions/            # Código TypeScript modular
        │   ├── pages/                # Arquivos HTML adicionais
        │   ├── index.ts              # Arquivo principal de lógica TypeScript
        │   └── index.html            # Página inicial do site
        ├── dist/                     # Diretório gerado pelo Webpack para produção
        │   ├── img/                  # Imagens otimizadas
        │   ├── pages/                # Páginas HTML otimizadas
        │   └── dd42591fdae4...ts     # Página TypeScript empacotado pelo Webpack
        │   ├── index.css             # Arquivo CSS otimizados
        │   ├── index.js              # Arquivo JavaScript empacotado pelo Webpack
        │   └── index.html            # Página inicial otimizada
        ├── node_modules/             # Dependências instaladas via npm
        ├── webpack.config.js         # Configuração do Webpack
        ├── tailwind.config.js        # Configuração do Tailwind CSS
        ├── package.json              # Gerencia dependências e scripts
        └── package-lock.json         # Versões bloqueadas das dependências                               

## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica e acessível do conteúdo.
- **CSS3**: Estilização com foco em design responsivo e moderno.
- **Tailwind CSS**: Framework utilitário para estilização ágil e padronizada.
- **Webpack**: Empacotador de módulos para otimizar o fluxo de trabalho.
- **JavaScript**: Scripts para interatividade e comportamento dinâmico.
- **TypeScript**: Extensão do JavaScript para adicionar tipagem estática e melhorar a qualidade do código. 

### Como Rodar o Projeto

1. Clone o repositório:
   
   ```bash
   git clone https://github.com/douglas-moura/website__spworking.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o projeto:

   ```bash
   npm start
   ```

4. Acesse o site localmente: Abra o navegador e acesse http://localhost:3000.

### Licença

Este projeto está licenciado sob a MIT License.
