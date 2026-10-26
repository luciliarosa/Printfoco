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
    title: "Convite Interativo • Tema Infantil",
    category: "Convites Virtuais / Interativos",
    folder: "projects/convites-virtuais/interativos/tema-infantil",
    description: "Template web responsivo para celebrações infantis com controle de confirmação para adultos e crianças, mapas do local da festa e paleta customizável.",
    badge: "Projeto Estruturado"
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
