# MAPA

Sistema institucional de gestao e monitoramento de acessibilidade e inclusao academica.

## Executar localmente

Pre-requisitos:
- Node.js

Passos:
1. Instale as dependencias com `npm install`
2. Copie `.env.example` se precisar definir a URL base da aplicacao
3. Inicie o ambiente com `npm run dev`

## Build de producao

- Gere o build com `npm run build`
- Valide tipos com `npm run lint`

## Deploy no GitHub Pages

O projeto esta configurado para deploy estatico no GitHub Pages com GitHub Actions.

1. Faça push da branch para o GitHub
2. No repositorio, abra `Settings > Pages`
3. Em `Build and deployment`, selecione `GitHub Actions`
4. O workflow `.github/workflows/deploy-pages.yml` vai gerar o build e publicar automaticamente a cada push na branch `main`

## Observacoes

- O app usa `HashRouter`, entao as rotas funcionam no Pages sem erro de refresh
- O build usa caminhos relativos (`base: './'`), entao funciona mesmo em repositorios publicados em subdiretorios
- Se voce mudar a branch principal, ajuste o gatilho do workflow
