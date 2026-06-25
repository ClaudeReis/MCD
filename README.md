# MCD Soluções Elétricas — Landing Page

Landing page institucional da **MCD Soluções Elétricas**, empresa técnica especializada em soluções elétricas no Rio de Janeiro (instalações, reformas, manutenções, automação residencial, luminotécnica e painéis elétricos), com mais de 30 anos de experiência e profissionais habilitados pelo CFT e CREA.

> **Energia segura. Soluções precisas.**

## Sobre o projeto

- Página única, autocontida em `index.html` (HTML/CSS/JS, sem build, sem dependências externas além das fontes do Google).
- Conceito visual "blueprint elétrico" com a identidade oficial da marca (Navy, Azul Engenharia, Ciano Elétrico, acentos Âmbar).
- Otimizada para **SEO** (meta tags, Open Graph) e **AIO** (dados estruturados JSON-LD: `Electrician` + `FAQPage`).
- Mobile-first, acessível (contraste AA, `prefers-reduced-motion`, navegação por teclado).
- Chatbot "Assistente MCD" e botão flutuante de WhatsApp com mensagem pré-preenchida.

## Como rodar localmente

Por ser um arquivo estático, basta abrir `index.html` no navegador, ou servir a pasta:

```bash
python -m http.server 4192
# acesse http://localhost:4192
```

## Configuração editável

No final de `index.html`, no objeto `MCD`, ajuste os dados de contato:

```js
const MCD = {
  whatsapp: "5521971448387",   // DDI + DDD + número (só dígitos)
  email:    "contato@mcdsolucoeseletricas.com.br",
  regiao:   "Rio de Janeiro · RJ",
  msgPadrao:"..."
};
```

---

Desenvolvido por **EngeTech Reis — Engenharia Digital**.
