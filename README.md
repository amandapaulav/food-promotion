```bash
FOOD PROMOTION/
├── 📁 infraestrutura/               # AWS CDK (IaC)
│   ├── 📁 bin/
│   │   └── app.js                   # Ponto de entrada CDK
│   ├── 📁 lib/
│   │   └── food-promotion-stack.js  # VPC, RDS, Redis, ECS, S3
│   ├── cdk.json
│   └── package.json
│
└── 📁 food-promotion-frontend/      # Aplicação React + Vite
    ├── 📁 public/
    │   └── vite.svg
    ├── 📁 src/
    │   ├── 📁 assets/               # Imagens e estilos globais
    │   ├── 📁 components/           # Navbar, rotas protegidas
    │   ├── 📁 pages/                # Telas (Dashboard, Produtos, Promocoes, Clientes)
    │   ├── 📁 services/             # API HTTP e WebSockets
    │   ├── 📁 utils/                # Descontos e validações
    │   ├── App.jsx
    │   └── main.jsx
    ├── .dockerignore
    ├── Dockerfile                   # Build multi-stage (Node + Nginx)
    ├── package.json
    └── vite.config.js
