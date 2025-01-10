# WEBAUTO 🚗

O WEBAUTO é uma aplicação desenvolvida para gerenciar anúncios de carros novos e usados. Ele permite que usuários visualizem detalhes de veículos, cadastrem novos anúncios, gerenciem seus próprios anúncios e se conectem com vendedores por meio do WhatsApp.

## Funcionalidades

- **Home:**
  - Lista carros disponíveis com informações como preço, ano, cidade e quilometragem.
  - Permite buscar veículos pelo nome.
- **Cadastro de Anúncios:**
  - Usuários podem cadastrar novos veículos com imagens e dados completos.
  - Upload de imagens integrado ao Firebase Storage.
- **Detalhes do Veículo:**
  - Exibe informações detalhadas de um veículo, incluindo fotos em carrossel.
  - Botão para entrar em contato com o vendedor via WhatsApp.
- **Painel do Usuário (Dashboard):**
  - Gerencie os veículos cadastrados.
  - Exclua anúncios diretamente do painel.
- **Autenticação:**
  - Login e registro de usuários utilizando Firebase Authentication.
  - Proteção de rotas privadas para usuários autenticados.

## Tecnologias Utilizadas

- **React** com React Router para navegação
- **TypeScript** para tipagem segura
- **TailwindCSS** para estilização moderna e responsiva
- **Firebase**:
  - Authentication para login e registro
  - Firestore para armazenamento de dados
  - Storage para upload de imagens
- **SwiperJS** para carrossel de imagens
- **React Hook Form** e **Zod** para validação de formulários
- **React Hot Toast** para notificações

## Estrutura do Projeto

- **App.tsx:** Define as rotas principais e organiza a estrutura do projeto.
- **Contexts:** Gerencia a autenticação do usuário e os estados globais.
- **Pages:**
  - **Home:** Página inicial com listagem e busca de carros.
  - **CarDetail:** Página de detalhes de um veículo.
  - **Dashboard:** Gerenciamento de anúncios cadastrados pelo usuário.
  - **New:** Cadastro de novos anúncios.
  - **Login e Register:** Formulários para login e registro de usuários.
- **Components:**
  - **Header:** Cabeçalho com links dinâmicos baseados na autenticação.
  - **Container:** Layout para centralizar conteúdo.
  - **Input:** Componente reutilizável para campos de formulário.
- **FirebaseConnection:** Configuração do Firebase Authentication, Firestore e Storage.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/webauto.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd webauto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o Firebase:
   - Substitua as variáveis de configuração no arquivo `firebaseConnection.ts` com as credenciais do seu projeto Firebase.

5. Execute a aplicação:
   ```bash
   npm run dev
   ```

6. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## Estrutura de Diretórios

```plaintext
src/
├── assets/
│   └── logo.svg
├── components/
│   ├── header
│   ├── container
│   └── input
├── contexts/
│   └── AuthContext.tsx
├── pages/
│   ├── home
│   ├── car
│   ├── dashboard
│   ├── login
│   └── register
├── services/
│   └── firebaseConnection.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por Yuri Teodoro**
