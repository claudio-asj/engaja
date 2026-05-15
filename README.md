<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/c3317237-7596-4016-bc37-15165b011c2e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy no GitHub Pages

O projeto agora está configurado para deploy estático no GitHub Pages com GitHub Actions.

1. Faça push da branch para o GitHub.
2. No repositório, abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `GitHub Actions`.
4. O workflow `.github/workflows/deploy-pages.yml` vai gerar o build e publicar automaticamente a cada push na branch `main`.

### Observações

- O app usa `HashRouter`, então as rotas funcionam no Pages sem erro de refresh.
- O build usa caminhos relativos (`base: './'`), então funciona mesmo em repositórios publicados em subdiretórios.
- Se você mudar a branch principal, ajuste o gatilho do workflow.
