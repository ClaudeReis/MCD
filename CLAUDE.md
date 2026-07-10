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
- `index.html` — arquivo único (HTML/CSS/JS), conceito "blueprint elétrico vivo". Design system inline em `:root`.
  SEO + JSON-LD (Electrician + FAQPage + OfferCatalog + founder), AIO, chatbot "Assistente MCD", WhatsApp flutuante.
- Hero full-bleed com foto real do Leandro fardado; headline = slogan empilhado (azul/âmbar); atalhos de serviço
  (deep-links `#svc-*`) + barra de confiança. Texto todo em HTML (não queimado na imagem).
- Seções: Serviços, Públicos, Diferenciais, Como funciona, **Obras realizadas** (galeria de fotos reais), Sobre
  (Leandro Moncada), FAQ, Chatbot.
- `assets/img/` — imagens web otimizadas (hero-leandro, sobre, obra-1..6). Geradas com **Pillow**.
- `robots.txt`, `sitemap.xml`, `googlee1d5961265de3586.html` (verificação Google) — na **raiz**.

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
