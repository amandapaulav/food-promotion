FOOD PROMOTION/
│
├── infraestrutura/                          # Infraestrutura como Código (IaC em JS / AWS CDK)
│   ├── bin/
│   │   └── app.js                           # Inicialização do CDK App e injeção de variáveis de ambiente
│   ├── lib/
│   │   └── food-promotion-stack.js          # Definição de VPC Multi-AZ, RDS PostgreSQL, Redis, ECS e S3
│   ├── cdk.json                             # Configurações de execução do AWS CDK
│   └── package.json                         # Dependências do CDK (aws-cdk-lib, constructs)
│
└── food-promotion-frontend/                 # Aplicação Web (React + Vite)
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── assets/                          # Estilos globais e imagens
    │   │   ├── hero.png
    │   │   ├── react.svg
    │   │   ├── App.css
    │   │   └── index.css
    │   │
    │   ├── components/                      # Componentes visuais reutilizáveis
    │   │   ├── Navbar.jsx                   # Barra de navegação do sistema
    │   │   └── ProtectedRoute.jsx           # Bloqueio de rotas protegidas
    │   │
    │   ├── pages/                           # Telas mapeadas nos requisitos
    │   │   ├── Dashboard/                   # RF05/RF06: Métricas de lotes próximos do vencimento
    │   │   │   └── index.jsx
    │   │   ├── Produtos/                    # RF01/RF03/RF04: Cadastro de mercadorias, lotes e validades
    │   │   │   └── index.jsx
    │   │   ├── Promocoes/                   # RF06: Cálculo e exibição de descontos (20%, 40%, 60%)
    │   │   │   └── index.jsx
    │   │   └── Clientes/                    # RF02: Carteira de clientes e histórico de interesses
    │   │       └── index.jsx
    │   │
    │   ├── services/                        # Comunicação externa e tempo real
    │   │   ├── api.js                       # Conexão HTTP/REST com o backend
    │   │   └── websocket.js                 # RNF04: Atualização em tempo real de estoque/reservas
    │   │
    │   ├── utils/                           # Regras de cálculo e validadores
    │   │   ├── discounts.js                 # Algoritmo de descontos progressivos por dias restantes
    │   │   └── validators.js                # Validações de formulários
    │   │
    │   ├── App.jsx                          # Roteamento e layout geral
    │   └── main.jsx                         # Ponto de montagem no DOM
    │
    ├── .dockerignore                        # Ignora node_modules, dist e logs no build
    ├── Dockerfile                           # Multi-stage build (Node + Vite -> Nginx na porta 8080)
    ├── package.json                         # Dependências do React e scripts de build
    └── vite.config.js                       # Configuração do Vite
