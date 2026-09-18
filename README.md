# 🛒 Food Promotion — Full Cycle [GT 4.0]

> Sistema de gestão e promoção de alimentos próximos da validade para mitigação de desperdício em mercados.

---

## 📁 Estrutura de Arquivos e Diretórios

```bash
FOOD PROMOTION/
└── food-promotion-frontend/
    ├── public/
    │   └── vite.svg                      # Logotipo e assets estáticos públicos
    │
    ├── src/
    │   ├── assets/                       # Recursos visuais e folhas de estilo
    │   │   ├── hero.png                  # Banner promocional principal
    │   │   ├── react.svg                 # Ícone do React
    │   │   ├── vite.svg                  # Ícone do Vite
    │   │   ├── App.css                   # Estilos dos componentes da aplicação
    │   │   └── index.css                 # Estilos globais e reset CSS
    │   │
    │   ├── pages/                        # Telas do sistema
    │   │   ├── ClientesPage.jsx          # Carteira de clientes e preferências (RF02)
    │   │   ├── DashboardPage.jsx         # Painel geral e lotes próximos do vencimento (RF05)
    │   │   ├── ProdutosPage.jsx          # Cadastro de produtos, lotes e validade (RF01, RF03, RF04)
    │   │   └── PromocoesPage.jsx         # Tabela de promoções com descontos automáticos (RF06)
    │   │
    │   ├── services/                     # Comunicação externa e lógica de suporte
    │   │   ├── api.js                    # Cliente HTTP para consumo de endpoints
    │   │   ├── discounts.js              # Regra de descontos progressivos (20%, 40%, 60%)
    │   │   └── websocket.js              # Atualização de estoque em tempo real (RNF04)
    │   │
    │   ├── App.jsx                       # Roteamento e estrutura das páginas
    │   └── main.jsx                      # Ponto de entrada do React no DOM
    │
    ├── .dockerignore                     # Exclusão de node_modules e dist no Docker
    ├── .env                              # Variáveis de ambiente locais
    ├── .gitignore                        # Arquivos ignorados pelo Git
    ├── Dockerfile                        # Multi-stage build com Node.js e Nginx (Porta 8080)
    ├── index.html                        # Página base do Single Page Application (SPA)
    ├── package.json                      # Dependências do projeto e scripts de execução
    ├── README.md                         # Documentação oficial do projeto
    └── vite.config.js                    # Configuração de build do Vite
