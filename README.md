# BlessPlan Digital

Landing page institucional da BlessPlan Digital, criada em React + Vite e preparada para publicação no GitHub Pages.

## Rodar no computador

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

O terminal mostrará o endereço local, normalmente `http://localhost:5173`.

## Gerar o build

```bash
npm run build
```

A versão pronta para publicação será criada em `dist/`. Para gerar também a URL canônica e o sitemap:

```bash
SITE_URL="https://usuario.github.io/repositorio" npm run build
```

## Publicar no GitHub Pages

O projeto já inclui o workflow `.github/workflows/deploy-pages.yml`.

1. Crie um repositório no GitHub.
2. Envie todos os arquivos do projeto para a branch `main`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **GitHub Actions**.
5. A cada envio para `main`, o GitHub gera e publica a pasta `dist` automaticamente.

Não é necessário enviar a pasta `dist` ao repositório quando o workflow é usado.

## SEO

O projeto inclui:

- título e descrição voltados aos serviços;
- Open Graph e Twitter Cards;
- dados estruturados Schema.org;
- HTML semântico e textos alternativos;
- `robots.txt`, URL canônica e `sitemap.xml` gerados no build de produção;
- layout responsivo e recursos visuais locais.

Após conectar o domínio definitivo, cadastre a URL no Google Search Console e envie `/sitemap.xml`.
