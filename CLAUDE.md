# MCD Soluções Elétricas — Site (cliente Leandro)

Landing page do cliente **MCD Soluções Elétricas** (EngeTech Reis). Eletricista técnico
premium no RJ, +30 anos, habilitado CFT/CREA. Responsável: **Leandro Moncada** (Técnico em Eletrotécnica).

## ⚠️ Regras inegociáveis
- **Grafia: MCD** (nunca MDC). Arquivos antigos de marca usam "MDC" errado — o logo oficial é `Logo MCD.png`.
- **Nunca usar "emergência 24h" / "plantão" / "atendimento imediato".** É **mediante agendamento**.
- Posicionamento **premium/técnico** — não parecer "eletricista popular/barato". Sem prova social fabricada.
- **Preview antes de commitar.** Só commitar/dar push quando o Jonathan pedir.
- **Materiais comerciais ficam locais** (propostas, GMB, estudo de mercado) — não vão pro GitHub. Só o site sobe.

## O que é
- `index.html` — página principal, conceito "blueprint elétrico vivo".
  SEO + JSON-LD (Electrician + FAQPage + OfferCatalog + founder), AIO, chatbot "Assistente MCD", WhatsApp flutuante.
- Hero full-bleed com foto real do Leandro fardado; headline = slogan empilhado (azul/âmbar); atalhos de serviço
  (deep-links `#svc-*`) + barra de confiança. Texto todo em HTML (não queimado na imagem).
- Seções: Serviços, Públicos, Diferenciais, Como funciona, **Obras realizadas** (galeria de fotos reais), Sobre
  (Leandro Moncada), FAQ, Chatbot.
- `assets/img/` — imagens web otimizadas (hero-leandro, sobre, obra-1..6). Geradas com **Pillow**.
- `assets/css/site.css` + `assets/js/site.js` — **design system e JS compartilhados** (jul/2026: extraídos do
  inline do `index.html` pra serem reaproveitados pelas páginas de bairro/serviço, sem duplicar ~400 linhas de CSS
  por página). Todo HTML novo deve linkar esses dois arquivos, não reinserir `<style>`/`<script>` inline.
- `servicos/` e `bairros/` — páginas internas de long-tail SEO (jul/2026), mesmo design system, path relativo `../`:
  - `servicos/instalacao-eletrica.html`, `servicos/aumento-de-carga.html`, `servicos/manutencao-eletrica-condominio.html`,
    `servicos/automacao-residencial.html` (as 4 do quick win original)
  - `bairros/barra-da-tijuca.html`, `bairros/ipanema.html`
  - Cada uma tem title/description/canonical próprios, JSON-LD (Service ou Electrician + BreadcrumbList + FAQPage),
    breadcrumb, FAQ e um bloco "relacionados" linkando as demais páginas de serviço + os 2 bairros (ou vice-versa
    nas páginas de bairro) + `index.html#servicos`/`#obras`.
  - Linkadas a partir do index: os 4 cards de serviço (`.svc-more`), rodapé (coluna "Serviços" com as 4 + coluna
    "Bairros atendidos" nova, 4 colunas no total), e a legenda da seção Obras (Barra da Tijuca / Ipanema).
  - **Para criar uma nova página de bairro/serviço:** copiar uma existente como molde (já tem toda a estrutura:
    header, breadcrumb, hero, JSON-LD, FAQ, relacionados, footer, fab, chatbot) e trocar conteúdo + JSON-LD + links.
    Ao adicionar uma nova, lembrar de atualizar o bloco "relacionados" e o rodapé "Serviços"/"Bairros atendidos"
    em **todas** as páginas existentes (não só na nova), senão o internal linking fica incompleto.
- `robots.txt`, `sitemap.xml` (agora lista 7 URLs: home + 4 serviços + 2 bairros), `googlee1d5961265de3586.html`
  (verificação Google) — na **raiz**.

## Preview
Servidor estático na **porta 4192** (server `mcd` no launch.json → `python -m http.server 4192`).

## Deploy / Repo
- **No ar:** https://www.mcdsolucoeseletricas.com.br (domínio próprio; hospedado na Vercel, push na `main` faz auto-deploy)
- Projeto Vercel `mcd-solucoes-eletricas`, scope `jonathan-s-projects-reis`. Deploy manual:
  `vercel deploy --prod --yes --scope jonathan-s-projects-reis` (na pasta).
- **Repo:** github.com/ClaudeReis/MCD — só o site (index.html, assets/img, robots, sitemap, verificação, README).
- **NÃO subir** ao git/vercel: `Fotos e Videos Cliente/` (824MB), áudios, estudo de mercado (preços internos),
  materiais de marca. Já coberto por `.gitignore` / `.vercelignore` — mantenha assim.
- Commits terminam com `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.

## SEO / Search Console
- Tem robots.txt + sitemap.xml + preload do hero (LCP). Canonical/OG/JSON-LD/sitemap/robots apontam para o domínio próprio `https://www.mcdsolucoeseletricas.com.br`.
- **PENDENTE:** criar nova propriedade no Search Console para o domínio próprio (a antiga era do prefixo da vercel), reenviar o sitemap e solicitar indexação.
- **No Search Console, enviar o sitemap como `sitemap.xml` (com PONTO)** — `sitemap-xml` (hífen) dá 404.
- **PENDENTE (maior alavanca local):** criar/reivindicar o Google Meu Negócio do MCD do Leandro. Não existe ficha própria hoje.

## Marca
- Paleta: Navy `#071C2C`, Azul `#0057B8`, Ciano `#00AEEF`, Âmbar `#FFB800` (só acento), Branco `#F4F7FA`, Grafite `#111827`
- Fontes: Space Grotesk (títulos) + Inter (corpo) + IBM Plex Mono (dados)
- Slogan: "Energia segura. Soluções precisas."
- WhatsApp real: **5521971448387** `(21) 97144-8387`. E-mail/bairros reais ainda a confirmar.

## Imagens
Sem ImageMagick/ffmpeg na máquina — use **Pillow**. Vídeos do acervo ainda não processados.

## Pendências
E-mail/bairros reais · cadastrar Google Meu Negócio (material em `Google Meu Negocio - MCD.md`) · domínio próprio ·
processar vídeos · próximas etapas do pacote (avaliações, automação follow-up, calendário Instagram).
