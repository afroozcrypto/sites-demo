# sites-demo

Três sites de demonstração em Astro (estáticos, PT-PT) e uma página de oferta.
Marcas, moradas e números são fictícios.

| Página | Caminho |
|---|---|
| Restaurante | `/sites-demo/restaurante/` |
| Oficina | `/sites-demo/oficina/` |
| Alojamento local | `/sites-demo/alojamento-local/` |
| Oferta | `/sites-demo/oferta/` |

```bash
npm ci
npm run build   # gera dist/
npm run preview # http://localhost:4321/sites-demo/
```

Deploy: GitHub Pages via Actions (`.github/workflows/deploy.yml`) em cada push para `main`.
Requer Settings → Pages → Source: "GitHub Actions". Sem segredos.
