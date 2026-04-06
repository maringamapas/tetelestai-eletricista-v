// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema
  cores: {
    primaryColor: "#10b981", // Verde profissional para serviços técnicos
    secondaryColor: "#1f2937", // Cinza escuro
    accentColor: "#059669", // Verde escuro
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5521970161801",
    whatsappLink: "https://wa.me/5521970161801?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "",
    endereco: "R. Saquarema, 68 - Campo Grande - Rio de Janeiro - RJ, CEP: 23050-110",
    telefone: "(21) 97195-6489",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Tetelestai: Serviços Técnicos Profissionais no Rio de Janeiro",
    subtitulo: "Soluções Completas em Serviços!\nBombeiro hidráulico, eletricista, pintura e refrigeração. Atendimento profissional, técnicas especializadas e qualidade garantida. Resolvemos seus problemas com soluções eficazes e confiáveis!",
    sobreNos:
      "Somos a Tetelestai, especialistas em serviços técnicos residenciais com atendimento profissional em Campo Grande e região metropolitana do Rio de Janeiro. Oferecemos soluções completas em bombeiro hidráulico, eletricista, pintura e refrigeração. Nossa equipe experiente oferece atendimento rápido e confiável para residências e comércios, com garantia de trabalho seguro e eficaz.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Bombeiro Hidráulico",
      descricao: "Consertos em encanação, vazamentos, tubulações e sistemas hidráulicos",
      icone: "Wrench",
    },
    {
      id: 2,
      titulo: "Eletricista",
      descricao: "Instalações elétricas, reparo de fiação e manutenção de circuitos",
      icone: "Lightbulb",
    },
    {
      id: 3,
      titulo: "Pintura",
      descricao: "Pintura residencial, comercial e acabamentos de alta qualidade",
      icone: "Paintbrush",
    },
    {
      id: 4,
      titulo: "Refrigeração",
      descricao: "Instalação, manutenção e reparo de sistemas de ar condicionado",
      icone: "Thermometer",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Atendimento Profissional",
      descricao: "Equipe qualificada e experiente em todos os serviços",
    },
    {
      titulo: "Técnicas Especializadas",
      descricao: "Soluções eficazes e seguras para residências e comércios",
    },
    {
      titulo: "Campo Grande, Rio de Janeiro",
      descricao: "Serviços em toda a região metropolitana do RJ",
    },
  ],

  // Testemunhos de clientes
  depoimentos: [
    {
      id: 1,
      nome: "Fernando C.",
      profissao: "Residencial",
      imagem: "/cliente-fernando.jpg",
      texto: "Excelente trabalho! Resolveram meu problema de vazamento rapidamente. Profissionais qualificados e muito prestáveis.",
    },
    {
      id: 2,
      nome: "Mariana S.",
      profissao: "Comercial",
      imagem: "/cliente-mariana.jpg",
      texto: "Contratamos para a revisão elétrica da loja. Equipe muito competente, pontual e segura. Recomendo!",
    },
    {
      id: 3,
      nome: "Anderson L.",
      profissao: "Pintura e Refrigeração",
      imagem: "/cliente-anderson.jpg",
      texto: "Fizeram a pintura e instalação do ar condicionado. Trabalho de qualidade, atentos aos detalhes e preço justo.",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Tetelestai Serviços Residenciais | Bombeiro, Eletricista, Pintura e Refrigeração | Rio de Janeiro",
    description:
      "Tetelestai - Serviços técnicos profissionais no Rio de Janeiro. Bombeiro hidráulico, eletricista, pintura e refrigeração. Atendimento profissional em Campo Grande e região metropolitana. (21) 97195-6489",
    url: "https://tetelestai-servicos.vercel.app",
    ogImage: "/og-image.jpg",
  },
}
