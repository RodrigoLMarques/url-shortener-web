# Link Shortener - Encurtador de URL

Um aplicativo web moderno e responsivo para encurtar URLs, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Encurtador de URL**: Transforme URLs longas em links curtos e fáceis de compartilhar
- **Contador de Cliques**: Acompanhe quantas vezes sua URL foi acessada
- **Desencurtar URL**: Descubra qual é a URL original por trás do link encurtado
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Design Moderno**: Interface limpa e intuitiva com paleta de cores personalizada

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Query** - Gerenciamento de estado do servidor
- **React Hook Form** - Gerenciamento de formulários
- **React Router DOM** - Roteamento da aplicação
- **Axios** - Cliente HTTP para requisições à API
- **Material UI** - Componentes de interface
- **Vite** - Build tool e dev server

## 🎨 Paleta de Cores

- **Verde Principal**: `#27AE60` - Botões de ação, links válidos, feedback de sucesso
- **Preto**: `#1C1C1C` - Textos principais, cabeçalhos, ícones
- **Branco**: `#FFFFFF` - Fundo predominante, cartões, inputs
- **Laranja**: `#F39C12` - Destaque, botões secundários, hover, alertas
- **Verde Claro**: `#58D68D` - Hover em botões verdes
- **Cinza Claro**: `#F7F7F7` - Fundos de cards, inputs, separadores

## 📁 Estrutura do Projeto

```
src/
├── App.tsx                 # Componente principal da aplicação
├── components/             # Componentes reutilizáveis
│   ├── Layout/            # Componentes de layout (Navbar, Footer)
│   └── UI/                # Componentes de interface (Button, Input, Card, Alert)
├── constants/             # Constantes e configurações
├── hooks/                 # Custom hooks
├── lib/                   # Bibliotecas e utilitários
├── modules/               # Módulos das features
│   ├── Shortener/        # Módulo do encurtador
│   ├── Counter/          # Módulo do contador
│   └── Unshorten/        # Módulo do desencurtador
├── queries/               # Queries do React Query
├── routes/                # Configuração de rotas
├── services/              # Serviços para comunicação com API
├── store/                 # Gerenciamento de estado global
├── types/                 # Definições de tipos TypeScript
└── index.css              # Estilos globais
```

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/marquesdev/url-shortener-web.git
   cd url-shortener-web
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas configurações:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_APP_NAME=Link Shortener
   VITE_APP_DOMAIN=link.marquesdev.com
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🔧 Configuração da API

O frontend está configurado para se comunicar com uma API REST. Certifique-se de que sua API implemente os seguintes endpoints:

- `POST /api/shorten` - Encurtar URL
- `POST /api/stats` - Obter estatísticas de cliques
- `POST /api/unshorten` - Desencurtar URL
- `GET /api/url/:id` - Obter detalhes de uma URL
- `DELETE /api/url/:id` - Deletar uma URL
- `GET /api/urls/recent` - Obter URLs recentes

## 🎯 Funcionalidades Implementadas

### Encurtador de URL
- ✅ Validação de URL
- ✅ Alias personalizado opcional
- ✅ Feedback visual de sucesso/erro
- ✅ Cópia automática do link encurtado

### Contador de Cliques
- ✅ Busca de estatísticas por URL encurtada
- ✅ Exibição de total de cliques
- ✅ Histórico de cliques por data
- ✅ Informações da URL original

### Desencurtar URL
- ✅ Descoberta da URL original
- ✅ Validação de URL encurtada
- ✅ Opções de copiar e abrir URL
- ✅ Feedback visual

## 🎨 Design System

O projeto utiliza um design system consistente com:

- **Componentes Reutilizáveis**: Button, Input, Card, Alert
- **Classes Utilitárias**: Tailwind CSS com paleta personalizada
- **Tipografia**: Fonte Inter para melhor legibilidade
- **Responsividade**: Mobile-first approach
- **Acessibilidade**: Foco em navegação por teclado e screen readers

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Rodrigo Marques**
- GitHub: [@marquesdev](https://github.com/marquesdev)
- Website: [marquesdev.com](https://marquesdev.com)

---

Desenvolvido com ❤️ por [marquesdev](https://github.com/marquesdev)