# MCD Soluções Elétricas — Site (cliente Leandro)

Landing page do cliente **MCD Soluções Elétricas** (EngeTech Reis). Eletricista técnico
premium no RJ, +30 anos, habilitado CFT/CREA. Responsável: **Leandro Moncada**.

## ⚠️ Regras inegociáveis
- **Grafia: MCD** (nunca MDC). Arquivos antigos de marca usam "MDC" errado — o logo oficial é `Logo MCD.png`.
- **Nunca usar "emergência 24h".** Atendimento é **mediante agendamento**.
- Sem prova social fabricada.

## O que é
- `index.html` — arquivo único (HTML/CSS/JS), conceito "blueprint elétrico vivo".
  SEO + JSON-LD (Electrician + FAQPage), AIO, chatbot "Assistente MCD", WhatsApp flutuante.
- Hero full-bleed com foto real do Leandro fardado; texto em HTML (não queimado na imagem).
- Seção "Obras realizadas" (galeria com fotos reais tratadas em `assets/img/`).

## Preview
Servidor estático na **porta 4192** (`python -m http.server 4192`).

## Deploy / Repo
- **No ar:** https://mcd-solucoes-eletricas.vercel.app (push na `main` faz auto-deploy)
- **Repo:** github.com/ClaudeReis/MCD — só o site (index.html + README + .gitignore)
- **NÃO subir** ao git: pasta `Fotos e Videos Cliente/` (824MB), áudios, estudo de mercado
  (preços internos). Já coberto por `.gitignore` / `.vercelignore` — mantenha assim.

## Marca
- Paleta: Navy `#071C2C`, Azul `#0057B8`, Ciano `#00AEEF`, Âmbar `#FFB800`
- Fontes: Space Grotesk + Inter + IBM Plex Mono
- Slogan: "Energia segura. Soluções precisas."
- WhatsApp real: **5521971448387**

## Imagens
- Sem ImageMagick/ffmpeg na máquina — use **Pillow** para tratar imagens. Vídeos ainda não processados.
