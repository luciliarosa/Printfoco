# Printfoco • Website Oficial Institucional & Comercial

Website oficial da **Printfoco**, desenvolvido em **React 19 + React Router 7 + Vite + Tailwind CSS**, com suporte nativo **Bilingue (Português / Inglês)**, arquitetura multi-páginas e estética clara, executiva e refinada.

---

## Identidade Visual & Diretrizes Estéticas

- **`#f4f1e8`** • Creme Claro (Plano de fundo principal suave)
- **`#ffffff`** • Branco Puro (Containers, cartões e superfícies)
- **`#d9d6c1`** • Areia / Nude Neutro (Bordas e divisores estruturais)
- **`#ab9a7d`** • Dourado Champanhe (Acentos nobres e ícones)
- **`#191919`** • Preto Grafite (Tipografia de alto contraste e botões primários)

---

## Suporte Bilingue Integrado (PT | EN)

A interface conta com um alternador de idioma no cabeçalho:
- **Português (PT):** Conteúdo corporativo em português brasileiro.
- **English (EN):** Full translation of navigation, services, institutional content, and forms.
- A preferência do visitante é salva automaticamente no `localStorage` do navegador.

---

## Mapa de Navegação Oficial

1. **Início (`/`):** Apresentação executiva da Printfoco, hero clean, os 3 serviços principais, destaque tecnológico do convite interativo e CTAs diretos.
2. **Sobre Nós ▾**
   - **Nossa História (`/sobre`):** Trajetória institucional de Lucilia Rosa desde 2017.
   - **Missão, Visão & Valores (`/missao-visao-valores`):** Diretrizes estratégicas, missão, visão e os 5 valores da empresa.
3. **Convites Virtuais ▾**
   - **Convite Virtual Interativo (`/convites/interativo`):** Apresentação técnica do convite web responsivo e simulador interativo de smartphone.
   - **Convite em Vídeo Animado (`/convites/video`):** Detalhes da produção audiovisual animada e trilha sonora.
   - **Convite em Imagem Digital (`/convites/imagem`):** Especificações de design para peças estáticas em alta resolução.
   - **Comparativo de Formatos (`/convites`):** Visão geral e comparativo técnico dos 3 formatos.
4. **Retrospectivas (`/retrospectivas`):** Categorias de edições comemorativas em vídeo para aniversários e viagens.
5. **Posts para Redes (`/posts-redes-sociais`):** Soluções de comunicação visual e benefícios para marcas.
6. **Contato & Orçamento (`/contato`):** Formulário comercial e acionamento do WhatsApp.
7. **Política de Privacidade (`/politica-de-privacidade`):** Diretrizes de conformidade com a LGPD (Lei nº 13.709/2018).

---

## Organização Interna de Projetos (`Printfoco/projects/`)

Para desenvolvimento interno e versionamento de templates, os projetos da empresa ficam organizados em:

```text
projects/
├── convites-virtuais/
│   ├── interativos/
│   │   ├── tema-natal/                     # Convite web responsivo (HTML, CSS, JS, assets)
│   │   └── tema-infantil/                  # Base estrutural para aniversários infantis
│   ├── videos/
│   │   └── tema-aniversario/               # Edição vertical para WhatsApp e Stories
│   └── imagens/
│       └── tema-classico/                  # Artes gráficas estáticas em alta definição
│
├── retrospectivas/
│   ├── infantil/                           # Roteiros e cronologia temática infantil
│   ├── adulto/                             # Marcos históricos e comemorações de 15 anos
│   └── viagens/                            # Montagens dinâmicas de férias e expedições
│
└── publicacoes-redes-sociais/
    ├── artes-feed/                         # Composições estáticas 1080x1350 / 1080x1080
    ├── videos-reels/                       # Vídeos dinâmicos para Reels e Stories
    └── carrosseis/                         # Peças sequenciais informativas e comerciais
```

---

## Privacidade do Contato WhatsApp

O número de telefone nunca é renderizado em texto na interface. Toda a navegação exibe botões elegantes como *"Atendimento via WhatsApp"* ou *"Chat on WhatsApp"*, com o acionamento direto do chat oficial ao clicar.

---

## Execução do Projeto

```bash
# Iniciar o servidor local
npm run dev

# Compilar build de produção
npm run build
```
O servidor local é executado em `http://localhost:3000`.
