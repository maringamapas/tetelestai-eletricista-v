// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema
  cores: {
    primaryColor: "#10b981", // Verde profissional para dedetização
    secondaryColor: "#1f2937", // Cinza escuro
    accentColor: "#059669", // Verde escuro
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5544999324635",
    whatsappLink: "https://wa.me/5544999324635?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "",
    endereco: "Rua Deodoro da Fonseca, s/n - Zona Norte - Maringá - PR, CEP: 87.1000-000",
    telefone: "(44) 99932-4635",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Lady Bug: Dedetizadora e Desentupidora em Maringá",
    subtitulo: "Proteção Completa Contra Pragas!\nDedetização, desratização, descupinização e controle de pragas urbanas. Atendimento profissional, técnicas especializadas e segurança garantida. Protegemos sua casa ou empresa com soluções eficazes!",
    sobreNos:
      "Somos a Dedetizadora e Desentupidora Lady Bug, especialistas em controle de pragas com atendimento profissional na Zona Norte de Maringá. Utilizamos técnicas especializadas e produtos de qualidade para resolver problemas com baratas, formigas, roedores, cupins e outras pragas. Nossa equipe experiente oferece soluções rápidas e confiáveis para residências, comércios e condomínios, com garantia de trabalho seguro e eficaz.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Dedetização",
      descricao: "Controle especializado de baratas, formigas e pragas rasteiras",
      icone: "Worm",
    },
    {
      id: 2,
      titulo: "Desratização",
      descricao: "Controle preventivo e corretivo de roedores com monitoramento",
      icone: "Rat",
    },
    {
      id: 3,
      titulo: "Descupinização",
      descricao: "Tratamento técnico contra cupins de solo e madeira seca",
      icone: "BugOff",
    },
    {
      id: 4,
      titulo: "Controle de Pragas Urbanas",
      descricao: "Gestão integrada para condomínios e empresas",
      icone: "ShieldCheck",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Atendimento Profissional",
      descricao: "Equipe qualificada e experiente",
    },
    {
      titulo: "Técnicas Especializadas",
      descricao: "Soluções eficazes e seguras para todos os tipos de pragas",
    },
    {
      titulo: "Zona Norte de Maringá",
      descricao: "Serviços em toda a região metropolitana",
    },
  ],

  // Testemunhos de clientes
  depoimentos: [
    {
      id: 1,
      nome: "Claudio M.",
      profissao: "Residencial",
      imagem: "/cliente-claudio.jpg",
      texto: "Excelente atendimento. Estávamos com problema de baratas e resolveram de primeira. Muito limpos e educados.",
    },
    {
      id: 2,
      nome: "Juliana F.",
      profissao: "Comercial",
      imagem: "/cliente-juliana.jpg",
      texto: "Contratamos para a nossa loja. Precisávamos do certificado sanitário e de um controle rígido. Equipe nota 10, super pontuais.",
    },
    {
      id: 3,
      nome: "Roberto S.",
      profissao: "Descupinização",
      imagem: "/cliente-roberto.jpg",
      texto: "Fizeram um trabalho técnico de descupinização no meu telhado. Explicaram todo o processo e o preço foi muito justo pela qualidade.",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Lady Bug Dedetizadora e Desentupidora | Controle de Pragas Maringá | (44) 99932-4635",
    description:
      "Lady Bug - Dedetizadora e Desentupidora em Maringá. Controle especializado de baratas, formigas, roedores e cupins. Atendimento profissional na Zona Norte e região metropolitana.",
    url: "https://san-dedetizadora-verde.vercel.app",
    ogImage: "/og-image.jpg",
  },
}
