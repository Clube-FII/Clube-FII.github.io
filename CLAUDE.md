# Clube FII — Repositório de Vagas

Site estático (GitHub Pages) que publica as vagas abertas da área de tecnologia do Clube FII, o maior ecossistema de fundos de investimentos imobiliários do Brasil.

## Estrutura

- [index.html](index.html) — página inicial. Renderiza as vagas em duas seções via JS:
  - **Vagas abertas** — em destaque, no topo.
  - **Vagas arquivadas** — menor destaque, ao final da página.
- Páginas de vagas abertas: arquivos `.html` na raiz do repositório.
- [archived/](archived/) — páginas de vagas que não estão mais abertas (continuam acessíveis via link permanente).
- [css/style.css](css/style.css) — estilos compartilhados (base Notion-export) usados por **todas** as páginas.
- [css/index.css](css/index.css) — estilos específicos da listagem do index.
- [js/vagas.js](js/vagas.js) — fonte única de dados (`vagasAbertas`, `vagasArquivadas`) e função `renderVagas` que monta a listagem no index.
- [img/](img/) — imagens compartilhadas (cover das páginas).
- [specs/](specs/) — descrições de vagas em markdown (fonte para criação/manutenção das páginas HTML).

## Como adicionar uma nova vaga

1. Criar `nome-da-vaga.html` na raiz a partir de uma vaga existente como template (ex.: [analista-qa-pleno.html](analista-qa-pleno.html)).
2. Linkar o CSS compartilhado: `<link rel="stylesheet" href="css/style.css"/>`.
3. Manter o cover: `<img class="page-cover-image" src="img/1688395468764.jpeg" .../>`.
4. Adicionar entrada em `vagasAbertas` no [js/vagas.js](js/vagas.js):
   ```js
   { titulo: "Título da vaga", href: "./nome-da-vaga.html" }
   ```
5. Opcional: criar `specs/nome-da-vaga.md` com a descrição em markdown.

## Como arquivar uma vaga

1. Mover o `.html` para `archived/` (`git mv`).
2. Ajustar caminhos relativos dentro do arquivo movido:
   - CSS: `css/style.css` → `../css/style.css`
   - Imagem: `img/...` → `../img/...`
3. Remover a entrada de `vagasAbertas` e adicionar em `vagasArquivadas` no [js/vagas.js](js/vagas.js), com `href` apontando para `./archived/...`.

## Convenções de estilo das páginas de vaga

Template visual baseado em export do Notion: classe `page sans`, cover image no topo (`page-cover-image`), título em `<h1 class="page-title">`, seções com `<h2>` (Sobre o Clube FII, Sobre a vaga, Responsabilidades/Pré-requisitos, Benefícios/O que oferecemos, Se interessou?). Listas com `<ul class="bulleted-list">`. Contato padrão: `maycon@clubefii.com.br`.

Toda a base visual vem de [css/style.css](css/style.css) — **não inline CSS** nas páginas de vaga; ajustes de aparência devem ir para o stylesheet compartilhado para se propagarem a todas as páginas.
