export const siteConfig = {
  name: "Printfoco",
  tagline: "Design Digital & Soluções Audiovisuais",
  subtagline: "Convites interativos, retrospectivas e comunicação visual para eventos e empresas",
  founder: "Lucilia Rosa",
  foundedYear: 2017,
  contact: {
    // Número oculto no front-end conforme requisito de privacidade
    displayPhone: "Atendimento via WhatsApp",
    whatsappClean: "5511975855682",
    whatsappMessage: "Olá! Gostaria de solicitar uma proposta para meu projeto com a Printfoco.",
    whatsappInviteMessage: "Olá! Gostaria de mais informações sobre o Convite Virtual Interativo.",
    email: "printfocovideo@gmail.com",
    instagram: "printfoco",
    instagramUrl: "https://www.instagram.com/printfoco/",
    facebookUrl: "https://www.facebook.com/PrintFoco"
  }
};

export const institutionalData = {
  about: {
    title: "Trajetória Institucional",
    story: `Fundada em 2017 por Lucilia Rosa, a Printfoco atua no mercado de comunicação visual e produção digital. A empresa iniciou suas operações especializada na edição de retrospectivas comemorativas e, ao longo dos anos, expandiu seu portfólio para incorporar soluções tecnológicas de convites virtuais e design estratégico para redes sociais.`,
    evolution: `Hoje, a Printfoco combina domínio técnico em desenvolvimento web responsivo e edição audiovisual para entregar convites interativos com alta taxa de engajamento, retrospectivas cinematográficas e peças publicitárias digitais desenvolvidas sob medida.`
  },
  missao: {
    title: "Missão",
    text: "Desenvolver soluções de design digital e produções audiovisuais que aliem inovação tecnológica, apuro estético e funcionalidade, proporcionando aos anfitriões e marcas uma comunicação marcante, moderna e eficiente."
  },
  visao: {
    title: "Visão",
    text: "Consolidar-se como referência no segmento de convites virtuais interativos e produções audiovisuais personalizadas, sendo reconhecida pela pontualidade, precisão técnica e excelência no atendimento ao cliente."
  },
  valores: [
    {
      title: "Excelência em Design",
      desc: "Rigor estético, harmonia tipográfica e acabamento visual refinado em cada entrega."
    },
    {
      title: "Inovação Técnica",
      desc: "Uso de tecnologias web modernas para entregar recursos interativos intuitivos e responsivos."
    },
    {
      title: "Pontualidade & Compromisso",
      desc: "Cumprimento rigoroso de cronogramas para garantir tranquilidade no planejamento do evento."
    },
    {
      title: "Atendimento Consultivo",
      desc: "Comunicação direta, transparente e orientada às necessidades específicas de cada cliente."
    },
    {
      title: "Segurança & Privacidade",
      desc: "Tratamento confidencial e seguro de todas as fotos, vídeos e informações compartilhadas."
    }
  ]
};

export const inviteTypes = [
  {
    id: "interativo",
    path: "/convites/interativo",
    title: "Convite Virtual Interativo",
    tag: "Tecnologia Web Responsiva",
    badge: "Principal Solução",
    description: "Página web exclusiva com botões funcionais para confirmação de presença (RSVP direto no WhatsApp), integração de rota no Google Maps e Waze, cronômetro regressivo e chave Pix para presentes.",
    features: [
      "Confirmação de Presença (RSVP) em 1 clique",
      "Localização com GPS integrado (Google Maps e Waze)",
      "Contagem regressiva dinâmica para a data do evento",
      "Player de áudio com trilha sonora personalizada",
      "Galeria de fotos em alta resolução",
      "Chave Pix com função de cópia rápida",
      "Compatibilidade total com iOS e Android sem necessidade de app"
    ],
    highlight: true
  },
  {
    id: "video",
    path: "/convites/video",
    title: "Convite em Vídeo",
    tag: "Produção Audiovisual",
    badge: "Formato Dinâmico",
    description: "Edição audiovisual personalizada em formato vertical, combinando animações gráficas, fotos dos anfitriões e trilha sonora sincronizada para compartilhamento no WhatsApp e Stories.",
    features: [
      "Animações personalizadas de acordo com o tema",
      "Edição rítmica e trilha sonora selecionada",
      "Resolução otimizada para visualização móvel",
      "Ideal para envio em mensagens diretas e publicação em redes"
    ],
    highlight: false
  },
  {
    id: "imagem",
    path: "/convites/imagem",
    title: "Convite em Imagem Digital",
    tag: "Design Gráfico Estático",
    badge: "Formato Clássico",
    description: "Arte gráfica estática desenvolvida com tipografia corporativa e paleta de cores exclusiva, entregue em alta definição para envio eletrônico ágil ou impressão profissional.",
    features: [
      "Arquivo em alta definição para distribuição digital ou gráfica",
      "Identidade visual adaptada às especificações do cliente",
      "Formato leve e de carregamento instantâneo",
      "Composição visual elegante e objetiva"
    ],
    highlight: false
  }
];

export const interactiveTemplates = [
  {
    id: "natal",
    name: "Tema Natal em Família",
    subtitle: "Ceia Compartilhada & Bolinhas dos Pets",
    category: "Celebração de Fim de Ano",
    badge: "Disponível ao Vivo",
    icon: "TreePine",
    accentColor: "#9E3A4B",
    bannerImage: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Ceia de Natal da Família",
    hosts: "Família Elaine & Edson",
    eventDate: "24 de Dezembro de 2026 • 20:00",
    location: "Residência da Família • Bairro Jardim das Flores, 340",
    mapsQuery: "Jardim das Flores, São Paulo",
    musicTitle: "Noite Feliz & Jingle Bells Instrumental ♪",
    specialNotice: "Cada convidado deve levar 1 prato (doce ou salgado) e 1 bebida para compartilhar nossa ceia!",
    hasPotluck: true,
    liveUrl: "/projects/convites-virtuais/interativos/tema-natal/index.html",
    petFeature: "Árvore de Natal com bolinhas personalizadas dos pets Thor & Jade",
    registryTitle: "Mimos de Natal & Amigo Secreto",
    registryDesc: "Sua presença e seu carinho são nosso maior presente! Se desejar contribuir com o amigo secreto da família:"
  },
  {
    id: "princesas",
    name: "1º Ano • Reino das Princesas",
    subtitle: "O Primeiro Reinado Encantado",
    category: "Aniversário Infantil 1 Ano",
    badge: "Tema em Destaque",
    icon: "Crown",
    accentColor: "#C5A880",
    bannerImage: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "1º Aninho da Princesa Helena",
    hosts: "Mamãe Camila & Papai Rodrigo",
    eventDate: "18 de Outubro de 2026 • 16:00",
    location: "Buffet Castelo dos Sonhos • Salão Real Encantado",
    mapsQuery: "Buffet Castelo dos Sonhos",
    musicTitle: "Valsa dos Contos de Fadas Encantados ♪",
    specialNotice: "Venha celebrar o primeiro aninho da nossa princesa em um reino de alegria e encanto!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-infantil/princesas/index.html",
    petFeature: null,
    guestType: "adultsAndKids",
    registryTitle: "Guia de Mimos da Princesa",
    registryDesc: "Roupas: Tam 12 a 18 meses | Calçados: Nº 19 | Se preferir presentear com Pix para o cofrinho real:"
  },
  {
    id: "dinossauro",
    name: "1º Ano • Dino Aventura Baby",
    subtitle: "Expedição Jurássica do Primeiro Aninho",
    category: "Aniversário Infantil 1 Ano",
    badge: "Tema em Destaque",
    icon: "Footprints",
    accentColor: "#3B6B4C",
    bannerImage: "https://images.unsplash.com/photo-1569769332685-ef8b2ad59e3f?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "1º Aninho do Theo • Dino Park",
    hosts: "Equipe de Exploradores Papai & Mamãe",
    eventDate: "12 de Novembro de 2026 • 15:00",
    location: "Chácara Vale dos Dinossauros • Espaço Aventura Kids",
    mapsQuery: "Chácara Vale dos Dinossauros",
    musicTitle: "Trilha Sonora Safari Jurássico Baby ♪",
    specialNotice: "Preparem seus chapéus de exploradores para uma expedição cheia de diversão e rugidos de alegria!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-infantil/dinossauro/index.html",
    petFeature: null,
    registryTitle: "Dicas de Presente para o Pequeno Explorador",
    registryDesc: "Roupas: Tam 1 a 2 anos | Livros e brinquedos didáticos | Ou contribuição Pix para o explorador:"
  },
  {
    id: "casamento",
    name: "Casamento Rústico Chic",
    subtitle: "Beatriz & Gabriel • Amor & Bênçãos",
    category: "Casamento & Noivado",
    badge: "Novo • Rústico Chic",
    icon: "Heart",
    accentColor: "#C26743",
    bannerImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Casamento Beatriz & Gabriel",
    hosts: "Beatriz & Gabriel",
    eventDate: "14 de Novembro de 2026 • 17:00",
    location: "Espaço Quinta dos Bosques • Salão Panorâmico",
    mapsQuery: "Quinta dos Bosques",
    musicTitle: "Canon em Ré Maior (Pachelbel Instrumental) ♪",
    specialNotice: "Com a bênção de Deus e de nossos pais, convidamos você para celebrar o nosso amor!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-casamento/index.html",
    petFeature: null,
    registryTitle: "Cotas Divertidas de Lua de Mel & Pix",
    registryDesc: "Nossa casa já está montada! Se desejar nos presentear, criamos cotas simbólicas para nossa viagem:"
  },
  {
    id: "cha-revelacao",
    name: "Chá Revelação Interativo",
    subtitle: "Theo ou Lívia? Enquete ao Vivo",
    category: "Chá Revelação & Maternidade",
    badge: "Novo • Enquete ao Vivo",
    icon: "Baby",
    accentColor: "#F06292",
    bannerImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Chá Revelação: É Menino ou Menina?",
    hosts: "Juliana & Rafael",
    eventDate: "18 de Outubro de 2026 • 15:00",
    location: "Espaço Estrela Mágica Kids • Jardim Primavera",
    mapsQuery: "Espaco Estrela Magica",
    musicTitle: "Canção de Ninar em Caixa de Música ♪",
    specialNotice: "Enquete interativa em tempo real com integração automática para Planilha Google e projeção no telão!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-cha-revelacao/index.html",
    petFeature: null,
    registryTitle: "Mimos & Sugestão de Fralda",
    registryDesc: "Pacote de fralda M ou G + mimo de higiene do bebê."
  },
  {
    id: "aniversario-adulto",
    name: "Boteco do Rodrigo (40 Anos)",
    subtitle: "Samba, Chopp & Churrasco na Brasa",
    category: "Aniversário Adulto & 40 Anos",
    badge: "Novo • Boteco Chic",
    icon: "Beer",
    accentColor: "#F59E0B",
    bannerImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Boteco do Rodrigo • 40 Anos",
    hosts: "Rodrigo & Amigos",
    eventDate: "07 de Novembro de 2026 • 14:00",
    location: "Espaço Gourmet & Deck do Lago • Pinheiros",
    mapsQuery: "Espaco Gourmet do Lago",
    musicTitle: "Roda de Samba & Pagode Raiz ♪",
    specialNotice: "Chopp trincando, carne na brasa e samba de primeira! Confirme para reservarmos sua mesa e caneca.",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-aniversario-adulto/index.html",
    petFeature: null,
    registryTitle: "Seu maior presente é sua presença e alegria!",
    registryDesc: "Traga sua animação e venha fazer um brinde aos 40 anos bem vividos!"
  },
  {
    id: "passaporte",
    name: "Passaporte & Cartão de Embarque",
    subtitle: "Destination Wedding • Larissa & Bruno",
    category: "Destination Wedding & Viagens",
    badge: "Novo • Check-in Aéreo",
    icon: "Plane",
    accentColor: "#0D2238",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Destination Wedding Larissa & Bruno",
    hosts: "Larissa & Bruno",
    eventDate: "21 de Novembro de 2026 • 16:30",
    location: "Espaço Píer 150 • Ilhabela - SP",
    mapsQuery: "Ilhabela Pier",
    musicTitle: "Aviso de Voo & Sons do Mar ♪",
    specialNotice: "Faça o check-in do voo para liberar o roteiro completo de viagem, hotel parceiro e dicas da mala!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-passaporte/index.html",
    petFeature: null,
    registryTitle: "Mimos da Viagem & Pix",
    registryDesc: "Contribuições para a lua de mel e passeios em Ilhabela."
  },
  {
    id: "ingresso-vip",
    name: "Ingresso VIP de Festival",
    subtitle: "Yasmin 15 Anos • Pulseira & Neon",
    category: "15 Anos & Balada",
    badge: "Novo • Cartão 3D Flip",
    icon: "Ticket",
    accentColor: "#A855F7",
    bannerImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Yasmin 15 Anos VIP Festival",
    hosts: "Yasmin & Família",
    eventDate: "28 de Novembro de 2026 • 21:00",
    location: "Sky Lounge & Club Rooftop • Barra",
    mapsQuery: "Sky Lounge",
    musicTitle: "Live DJ Set & Batida Eletrônica ♪",
    specialNotice: "Gire o ingresso em 3D para ver o line-up da noite e resgate sua pulseira virtual para entrar!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-ingresso-vip/index.html",
    petFeature: null,
    registryTitle: "Mimos da Debutante",
    registryDesc: "Chave Pix para a viagem de 15 anos da debutante."
  },
  {
    id: "raspadinha",
    name: "Raspadinha Digital da Sorte",
    subtitle: "Secret Party • Murilo 30 Anos",
    category: "Festa Secreta & Adulto",
    badge: "Novo • Raspe na Tela",
    icon: "Sparkles",
    accentColor: "#EAB308",
    bannerImage: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Murilo 30 Anos • Secret Party",
    hosts: "Murilo & Amigos",
    eventDate: "05 de Dezembro de 2026 • 20:00",
    location: "Speakeasy Club • Entrada Secreta",
    mapsQuery: "Oscar Freire",
    musicTitle: "Jazz Lounge & House Music ♪",
    specialNotice: "Raspe com o dedo ou mouse a película dourada para revelar as coordenadas do evento!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-raspadinha/index.html",
    petFeature: null,
    registryTitle: "Presença Secreta",
    registryDesc: "Guarde o segredo e venha com sede de bons drinks!"
  },
  {
    id: "stories",
    name: "Story Interativo em Tela Cheia",
    subtitle: "Formato Instagram • Luiza 18 Anos",
    category: "Jovens & 18 Anos",
    badge: "Novo • Stories Nativos",
    icon: "Smartphone",
    accentColor: "#EC4899",
    bannerImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Luiza 18 Anos • The Big Party",
    hosts: "Luiza",
    eventDate: "19 de Dezembro de 2026 • 21:00",
    location: "Mansão dos Jardins • São Paulo",
    mapsQuery: "Mansao Jardins",
    musicTitle: "Lo-Fi Pop Beat & Synth ♪",
    specialNotice: "Navegação por toques na tela igual aos Stories do Instagram com enquete interativa no final!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-stories/index.html",
    petFeature: null,
    registryTitle: "Mimos para a Luiza",
    registryDesc: "A chave Pix para a nova maior de idade está no final do story!"
  },
  {
    id: "cinema",
    name: "Claquete de Cinema & Premiere",
    subtitle: "Arthur Faz 7 • Hollywood Kids",
    category: "Infantil & Cinema",
    badge: "Novo • Claquete com Som",
    icon: "Clapperboard",
    accentColor: "#E11D48",
    bannerImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Arthur: A Missão dos 7 Anos",
    hosts: "Arthur, Papai & Mamãe",
    eventDate: "10 de Outubro de 2026 • 15:30",
    location: "Buffet Cinema Kids • Sala Hollywood",
    mapsQuery: "Cinema Kids",
    musicTitle: "Trilha Sonora de Aventura & Pipoca ♪",
    specialNotice: "Toque na claquete de gravação para dar o 'Ação!' e abrir o pôster do aniversariante!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-cinema/index.html",
    petFeature: null,
    registryTitle: "Bomboniere & Presentes",
    registryDesc: "Roupas Tam 8 | Brinquedos de heróis e Lego | Ou contribuição Pix para o cofrinho do ator mirim!"
  },
  {
    id: "revista",
    name: "Revista Editorial de Luxo",
    subtitle: "Estilo Vogue • Valentina 15 Anos",
    category: "15 Anos Luxo & Gala",
    badge: "Novo • Flipbook de Revista",
    icon: "BookOpen",
    accentColor: "#C5A880",
    bannerImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Vogue 15 Anos Valentina",
    hosts: "Família Silva",
    eventDate: "14 de Novembro de 2026 • 20:30",
    location: "Palácio dos Cristais • Salão Nobre",
    mapsQuery: "Palacio Cristais",
    musicTitle: "Valsa Clássica & Piano de Cauda ♪",
    specialNotice: "Passe as páginas do editorial para ler a reportagem da debutante, o cronograma e o mapa da noite.",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-revista/index.html",
    petFeature: null,
    registryTitle: "Lista de Mimos da Debutante",
    registryDesc: "Assessoria do evento: mimos em cotas para o intercâmbio de 15 anos da Valentina."
  },
  {
    id: "game",
    name: "Arcade Game Quest 8-Bits",
    subtitle: "Level Up • Enzo Faz 8 Anos",
    category: "Infantil & Games",
    badge: "Novo • Som de 8-Bits",
    icon: "Gamepad2",
    accentColor: "#22C55E",
    bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    eventTitle: "Enzo Level 8 • Arcade Quest",
    hosts: "Player 1 Enzo & Equipe",
    eventDate: "22 de Novembro de 2026 • 14:00",
    location: "Buffet & Arena Pixel Kids",
    mapsQuery: "Pixel Kids",
    musicTitle: "Chiptune 8-bits Arcade Victory ♪",
    specialNotice: "Insira a ficha virtual para apertar o START e desbloquear os power-ups e a arena da festa!",
    hasPotluck: false,
    liveUrl: "/projects/convites-virtuais/interativos/tema-game/index.html",
    petFeature: null,
    registryTitle: "Inventário & Itens de Presente",
    registryDesc: "Jogos de Nintendo Switch/PlayStation | Roupas Tam 8 | Ou moedas de ouro Pix para o Player 1!"
  }
];

export const retrospectivesList = [
  {
    title: "Aniversário Infantil",
    desc: "Cronologia visual do desenvolvimento da criança com animações temáticas e trilha sonora sincronizada.",
    themes: ["Dinossauros", "Safari", "Circo", "Princesas", "Elementos Florais"]
  },
  {
    title: "Aniversário Adulto & 15 Anos",
    desc: "Edição comemorativa destacando marcos históricos, trajetória profissional, acadêmica e pessoal.",
    themes: ["Linha do Tempo", "Momentos Marcantes", "Depoimentos em Vídeo", "Comemorações Especiais"]
  },
  {
    title: "Retrospectiva de Viagens",
    desc: "Montagem dinâmica reunindo registros fotográficos e gravações em formato cinematográfico.",
    themes: ["Viagens Internacionais", "Expedições", "Roteiros em Família"]
  },
  {
    title: "Homenagens & Bodas",
    desc: "Produção audiovisual para celebrações de casamento, bodas e datas comemorativas institucionais.",
    themes: ["Bodas de Prata / Ouro", "Tributos Institucionais", "Homenagens Familiares"]
  }
];

export const socialMediaFormats = [
  {
    title: "Artes Estáticas para Feed",
    desc: "Composições gráficas em formato retrato (1080x1350) e quadrado (1080x1080) com alto impacto visual."
  },
  {
    title: "Vídeos & Reels / Stories",
    desc: "Produções verticais (1080x1920) com dinamismo, trilha sonora e elementos gráficos modernos."
  },
  {
    title: "Carrosséis Informativos",
    desc: "Peças sequenciais estruturadas para aumentar a retenção de leitura e taxa de salvamento."
  },
  {
    title: "Padronização Visual",
    desc: "Definição de paleta de cores, tipografia e diretrizes de design para consolidar a identidade da marca."
  }
];

export const socialMediaBenefits = [
  {
    title: "Engajamento",
    description: "Peças planejadas para estimular comentários, compartilhamentos e interação qualificada."
  },
  {
    title: "Posicionamento",
    description: "Comunicação visual consistente que transmite autoridade e profissionalismo ao público."
  },
  {
    title: "Visibilidade",
    description: "Design moderno que se destaca na rolagem do feed das principais plataformas."
  },
  {
    title: "Conversão de Tráfego",
    description: "Postagens com chamadas para ação claras que direcionam para WhatsApp ou catálogo."
  },
  {
    title: "Identidade de Marca",
    description: "Uniformidade gráfica que torna a marca facilmente reconhecível em qualquer canal."
  }
];

export const projectsCatalog = [
  {
    id: "convite-natal",
    title: "Convite Interativo • Tema Natal",
    category: "Convites Virtuais / Interativos",
    folder: "projects/convites-virtuais/interativos/tema-natal",
    liveUrl: "/projects/convites-virtuais/interativos/tema-natal/index.html",
    description: "Aplicação web interativa com contagem regressiva, confirmação de presença (RSVP), localização do evento via GPS, galeria fotográfica e player de áudio integrado.",
    badge: "Disponível para Teste Online"
  },
  {
    id: "convite-infantil",
    title: "Convite Interativo • Temas Infantis (Princesas & Dinossauro)",
    category: "Convites Virtuais / Interativos",
    folder: "projects/convites-virtuais/interativos/tema-infantil",
    liveUrl: "/projects/convites-virtuais/interativos/tema-infantil/index.html",
    description: "Projetos web interativos e responsivos de 1º aninho nos temas Reino das Princesas e Dino Park Aventura, com RSVP, mapas, contagem regressiva e efeitos mágicos.",
    badge: "Disponível para Teste Online"
  },
  {
    id: "convite-casamento",
    title: "Convite Interativo • Casamento Rústico Chic",
    category: "Convites Virtuais / Interativos",
    folder: "projects/convites-virtuais/interativos/tema-casamento",
    liveUrl: "/projects/convites-virtuais/interativos/tema-casamento/index.html",
    description: "Convite com envelope e lacre de cera 3D, pétalas flutuantes, Canon de Pachelbel, guia de traje, cotas de lua de mel e RSVP.",
    badge: "Disponível para Teste Online"
  },
  {
    id: "convite-cha-revelacao",
    title: "Convite Interativo • Chá Revelação com Enquete",
    category: "Convites Virtuais / Interativos",
    folder: "projects/convites-virtuais/interativos/tema-cha-revelacao",
    liveUrl: "/projects/convites-virtuais/interativos/tema-cha-revelacao/index.html",
    description: "Enquete interativa com placar ao vivo, confetes por time, integração para Planilha Google, sugestão de fralda e canção de ninar.",
    badge: "Disponível para Teste Online"
  },
  {
    id: "convite-boteco-adulto",
    title: "Convite Interativo • Aniversário Adulto Boteco 40 Anos",
    category: "Convites Virtuais / Interativos",
    folder: "projects/convites-virtuais/interativos/tema-aniversario-adulto",
    liveUrl: "/projects/convites-virtuais/interativos/tema-aniversario-adulto/index.html",
    description: "Estilo lousa e madeira rústica, caneca de chopp interativa, batucada de samba, brinde com som de taças, cardápio e playlist Spotify.",
    badge: "Disponível para Teste Online"
  },
  {
    id: "convite-video-aniversario",
    title: "Convite em Vídeo • Comemoração",
    category: "Convites Virtuais / Vídeos",
    folder: "projects/convites-virtuais/videos/tema-aniversario",
    description: "Edição audiovisual vertical com animações de tipografia, transições modernas e trilha sonora sincronizada para envio digital.",
    badge: "Projeto Audiovisual"
  },
  {
    id: "convite-imagem-classico",
    title: "Convite em Imagem • Design Clássico",
    category: "Convites Virtuais / Imagens",
    folder: "projects/convites-virtuais/imagens/tema-classico",
    description: "Arte gráfica de alta fidelidade desenvolvida para distribuição eletrônica ou impressão offset/digital em gráficas parceiras.",
    badge: "Design Gráfico"
  },
  {
    id: "retrospectivas-projeto",
    title: "Edições Audiovisuais de Retrospectivas",
    category: "Retrospectivas",
    folder: "projects/retrospectivas",
    description: "Estrutura de roteirização, timeline de fotos cronológicas, animações e tratamento sonoro para vídeos de celebração e marcos históricos.",
    badge: "Edição Audiovisual"
  },
  {
    id: "publicacoes-redes-projeto",
    title: "Design de Conteúdo para Redes Sociais",
    category: "Publicações Redes Sociais",
    folder: "projects/publicacoes-redes-sociais",
    description: "Pacotes de identidade visual, peças estáticas para feed, modelos de carrosséis e templates de vídeos para Reels e Stories.",
    badge: "Comunicação Digital"
  }
];

export const privacyPolicyData = {
  lastUpdated: "Outubro de 2026",
  title: "Política de Privacidade e Proteção de Dados (LGPD)",
  intro: `A Printfoco atua em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD). Esta política detalha de forma transparente os procedimentos de coleta, utilização, armazenamento e segurança das informações confiadas à nossa empresa.`,
  sections: [
    {
      title: "1. Coleta de Informações",
      content: `Coletamos dados fornecidos pelo próprio cliente para a execução dos serviços contratados: nome, endereço de e-mail, telefone para contato via WhatsApp, datas e preferências do evento, além dos arquivos de fotos e vídeos disponibilizados para a produção gráfica e audiovisual.`
    },
    {
      title: "2. Finalidade do Tratamento",
      content: `O tratamento dos dados e mídias destina-se exclusivamente à confecção dos convites virtuais, retrospectivas e postagens para redes sociais, bem como ao envio de propostas comerciais e suporte operacional solicitado pelo cliente.`
    },
    {
      title: "3. Confidencialidade de Imagens e Arquivos",
      content: `Reconhecemos a privacidade das imagens pessoais e familiares encaminhadas para produção. A Printfoco não comercializa, não compartilha e não cede fotos, vídeos ou dados pessoais a terceiros sem autorização prévia e documentada.`
    },
    {
      title: "4. Armazenamento e Retenção",
      content: `Os arquivos de projetos são armazenados em ambiente seguro pelo período estritamente necessário para garantia do serviço ou solicitação de cópias pelo cliente, sendo eliminados de forma segura após o encerramento do ciclo de entrega.`
    },
    {
      title: "5. Direitos do Titular de Dados",
      content: `Nos termos da LGPD, o titular poderá requerer a qualquer momento a confirmação da existência de tratamento, correção de dados incompletos ou a eliminação definitiva de seus registros através do e-mail oficial printfocovideo@gmail.com.`
    },
    {
      title: "6. Canal de Atendimento de Privacidade",
      content: `Para esclarecimentos sobre o tratamento de seus dados pessoais ou exercício de direitos, entre em contato pelo e-mail: printfocovideo@gmail.com.`
    }
  ]
};
