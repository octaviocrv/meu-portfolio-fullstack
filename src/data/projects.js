
const baseUrl = import.meta.env.BASE_URL
const asset = (path) => `${baseUrl}${path.replace(/^\//, '')}`

export const projectsData = [
  {
    id: 1,
    title: 'Self-Payment Terminal — Solução de Checkout Autônomo para Varejo',
    category: 'Enterprise | React + Docker',
    shortDesc: 'Terminal de auto-pagamento seguro e customizável para Livraria Leitura. Redução de 60-70% no tempo de checkout.',
    heroDesc:
      'A Livraria Leitura enfrentava filas longas prejudicando a experiência do cliente e reduzindo vendas. Desenvolvi um terminal de auto-pagamento (self-checkout) intuitivo, seguro e escalável, implantável em múltiplas lojas com customização de branding sem rebuild.',

    overview: [
      'Desenvolvido um sistema PDV (Ponto de Venda) completo com múltiplas telas e fluxos, implementado em React com segurança em nível corporativo. O terminal de auto-atendimento funciona como uma solução de checkout autônomo integrada a um ecosistema maior de gerenciamento de vendas',
      'A interface do cliente (customer-facing) é otimizada para kiosk touchscreen e implementa segurança robusta em 5 camadas contra manipulação de SO e interações maliciosas: teclado completamente desabilitado, context menu bloqueado, drag & drop desativado, long-press monitorado com vibração feedback, e seleção de texto impedida. Todos os eventos perigosos são capturados com preventDefault e stopImmediatePropagation para garantir que apenas o fluxo esperado seja executável.',
      'O sistema compreende múltiplos módulos: (1) tela de catálogo de produtos com busca e filtros, (2) carrinho de compras com gestão de itens e quantidades, (3) tela de pagamento com suporte a cartão de crédito, cartão de débito, PIX e dinheiro, (4) confirmação da transação com recibo digital, (5) cancelamento de compras com reembolso automático e (6) painel administrativo com relatórios em tempo real e gestão de inventário.',
      'A infraestrutura é baseada em Docker Compose, orquestrando três serviços sincronizados: client React, NIC (camada de integração) e Nginx como gateway reverso. O backend integra APIs fiscais (NFC-e e NFSe), persistência em MySQL e armazenamento em AWS S3 para escalabilidade.',
      'Por ser um projeto empresarial sob NDA e em produção, o código-fonte não está disponível publicamente.',
    ],

    challenges: [
      {
        title: 'Segurança em Kiosk Público',
        solution: 'Implementei hook customizado useLongPressBlock que monitora toque prolongado e useKeyboardBlock que desativa completamente o teclado. Combinei com listeners de eventos capturando drag, seleção de texto e context menu, todos com preventDefault e stopImmediatePropagation. Injetei CSS que desativa affordances visuais de toque e aparências nativas.'
      },
      {
        title: 'Fullscreen Multiplataforma',
        solution: 'Criei hook useFullscreenState que abstrai variações de API (webkit, ms, standard) entre navegadores e sistemas operacionais, oferecendo interface uniforme e gerenciando listeners de eventos de fullscreen.'
      },
      {
        title: 'Configurabilidade em Runtime',
        solution: 'Implementei sistema onde o servidor Node injeta variáveis de configuração em window.__NERUSWEB_CONFIG__ ao servir index.html, permitindo que SELFPAY_LOGO e outras configs sejam alteradas apenas no docker-compose.yml sem rebuild.'
      }
    ],

    results: [
      { metric: 'Redução de Tempo', value: '60-70%', desc: 'no checkout manual vs autônomo' },
      { metric: 'Capacidade Simultânea', value: '3-4 clientes', desc: 'por terminal concorrentemente' },
      { metric: 'Customização', value: '0 rebuild', desc: 'necessário para mudanças de branding' },
      { metric: 'Escalabilidade', value: 'Multi-loja', desc: 'pronto para toda rede de varejo' },
    ],

    tools: ['React', 'JavaScript', 'Node.js', 'Docker', 'Docker Compose', 'Nginx', 'MySQL', 'AWS S3', 'Material-UI', 'Git'],

    image: asset('/assets/svg/terminal.png'),

    status: 'Em Produção',
    client: 'Livraria Leitura',
    codeLink: '#', // Privado
    liveLink: '#',
    isPrivate: true,
    privateNote: 'Código-fonte privado (NDA). Detalhes arquiteturais e snippets disponíveis sob solicitação.',
  },
  {
    id: 2,
    title: ' Sistema de Diagnóstico Inteligente de Vendas',
    shortDesc: 'Diagnóstico estratégico interativo que mapeia maturidade comercial e identifica gargalos de crescimento.',
    heroDesc:
      'Plataforma de diagnóstico empresarial que utiliza quiz personalizado para avaliar posicionamento de mercado, gerar análise estratégica e conectar empresas com soluções de crescimento.',
    image: asset('/assets/svg/raioxcomercial.png'),
    overview: [
      'Aplicação web interativa desenvolvida para a Sense House que permite empresas avaliarem sua maturidade comercial através de um questionário estratégico. O sistema analisa 8 dimensões críticas do negócio: posicionamento de mercado, reconhecimento de marca, geração de demanda, comunicação, estratégia de eventos, gargalos de crescimento e investimento em estruturação.',
      'A solução oferece três etapas principais: captura de dados corporativos com validação, quiz progressivo com feedback visual em tempo real, e relatório estratégico completo com score de maturidade, gap de crescimento e plano de ação personalizado. O design premium utiliza a identidade visual da marca com transições suaves e interface responsiva.',
    ],
    tools: ['React', 'Tailwind CSS', 'Shadcn/ui', 'Lucide Icons', 'JavaScript', 'Vite'],
    liveLink: 'https://diagnostico-vendas.vercel.app/',
    codeLink: 'https://github.com/octaviocrv/diagnostico-vendas',
  },
  {
    id: 3,
    title: 'Integração API ViaCEP - Autocompletar Endereços',
    shortDesc: 'Solução de preenchimento automático de formulários usando API ViaCEP para otimizar experiência do usuário.',
    heroDesc:
      'Aplicação web que integra a API ViaCEP para preencher automaticamente campos de endereço em tempo real, reduzindo erros de digitação e acelerando o processo de cadastro em até 80%.',
    image: asset('/assets/svg/cep.png'),
    overview: [
      'Sistema desenvolvido para otimizar formulários de cadastro através da integração com a API pública ViaCEP. Ao digitar um CEP válido (8 dígitos), a aplicação realiza uma requisição assíncrona e preenche automaticamente os campos de logradouro, bairro, cidade e estado, proporcionando uma experiência fluida e livre de erros.',
      'A solução utiliza JavaScript vanilla com Fetch API para consumir dados em tempo real, implementa validação de CEP, tratamento de erros robusto para CEPs inexistentes, e feedback visual para o usuário durante o carregamento. O projeto demonstra boas práticas de desenvolvimento frontend, manipulação de DOM e consumo de APIs REST.',
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'ViaCEP API', 'Git'],
    liveLink: 'https://octaviocrv.github.io/authcomplet-viacep/',
    codeLink: 'https://github.com/octaviocrv/authcomplet-viacep',
  },
  {
    id: 4,
    title: 'Quintal Voo Livre do Saber - Website Institucional',
    shortDesc: 'Website institucional responsivo para escola infantil com foco em experiência do usuário e conversão de leads.',
    heroDesc:
      'Landing page completa desenvolvida para escola de educação infantil, apresentando serviços, valores educacionais e facilitando agendamento de visitas através de navegação intuitiva e design acolhedor.',
    image: asset('/assets/svg/quintal.png'),
    overview: [
      'Website institucional desenvolvido para o Quintal Voo Livre do Saber, escola de educação infantil que valoriza o desenvolvimento através da imaginação e das relações sociais. O projeto apresenta uma estrutura completa com seções estratégicas: hero section impactante com call-to-action, sobre a instituição, serviços oferecidos (cuidados, alimentação e diversão), depoimentos de pais e formulário de contato.',
      'A solução foi construída com HTML5 semântico, CSS3 moderno e JavaScript vanilla, implementando navegação smooth scroll, menu responsivo mobile-first, seções bem estruturadas e design acolhedor que reflete os valores da marca. O layout prioriza conversão através de CTAs estratégicos para agendamento de visitas, otimizando a jornada do usuário desde a descoberta até o contato.',
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git', 'GitHub Pages'],
    liveLink: 'https://octaviocrv.github.io/My-first-project---QuintalVooLivre/',
    codeLink: 'https://github.com/octaviocrv/My-first-project---QuintalVooLivre',
  },
  {
    id: 5,
    title: 'Divide Já • Divisão de Contas',
    shortDesc: 'Aplicação web para divisão inteligente de contas entre amigos, permitindo gerenciar mesas, itens e valores individuais de forma automática e transparente.',

    heroDesc:
      'Sistema web desenvolvido para simplificar a divisão de contas em grupos, permitindo criar mesas, adicionar itens consumidos e calcular automaticamente quanto cada participante deve pagar com precisão e clareza. Projeto está passando por um refactoring completo, logo mais vai estar disponível uma versão completa atualizada.',

    image: asset('/assets/jpeg/divide-ja.png'),

    overview: [
      'O Divide Já é uma aplicação web criada para resolver um problema comum no dia a dia: a dificuldade de dividir contas entre amigos de forma justa e sem confusão. A solução permite criar mesas virtuais, adicionar itens consumidos e associar cada item aos participantes, realizando o cálculo automático dos valores individuais.',

      'A aplicação foi desenvolvida com foco em usabilidade e organização de estado, lidando com cenários como divisão parcial de itens, múltiplos participantes e atualização dinâmica dos valores. A interface foi projetada para ser simples e intuitiva, reduzindo atrito na experiência do usuário e tornando o processo de divisão rápido e transparente.'
    ],

    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'GitHub'],

    liveLink: 'https://octaviocrv.github.io/divide-ja/src/pages/login/index.html',
    codeLink: 'https://github.com/octaviocrv/divide-ja',
  },
  {
    id: 6,
    title: 'Game Catalog • RAWG API',
    shortDesc: 'Aplicação web para exploração de jogos utilizando dados em tempo real da API RAWG, com busca, listagem dinâmica e páginas de detalhamento.',

    heroDesc:
      'Aplicação web desenvolvida para consumir a API pública RAWG e exibir um catálogo dinâmico de jogos, permitindo buscar títulos, visualizar detalhes e explorar informações sobre o universo gamer em tempo real.',

    image: asset('/assets/jpeg/brasilgames.png'),

    overview: [
      'O Game Catalog é uma aplicação web focada na exibição de dados reais sobre jogos digitais, consumindo diretamente a API pública RAWG. A aplicação permite listar jogos automaticamente, buscar títulos específicos e acessar páginas de detalhes com informações completas, como data de lançamento, avaliação e imagem de capa.',

      'O projeto demonstra domínio na integração com APIs REST, manipulação dinâmica do DOM e controle de navegação via parâmetros de URL. A lógica envolve múltiplas requisições assíncronas, tratamento de dados retornados e renderização dinâmica da interface, garantindo uma experiência fluida e responsiva para o usuário.'
    ],

    tools: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Fetch API', 'REST API', 'Git', 'GitHub'],

    liveLink: 'https://octaviocrv.github.io/game-catalog-rawg-api/',
    codeLink: 'https://github.com/octaviocrv/game-catalog-rawg-api',
  },
  {
    id: 7,
    title: 'AI Voice Receptionist • Automação de Atendimento',
    shortDesc: 'Sistema de atendimento por voz com IA para empresas de marketing, automatizando ligações, qualificação de leads e agendamentos.',

    heroDesc:
      'Plataforma de recepção inteligente baseada em voz, desenvolvida para empresas de marketing automatizarem o atendimento inicial, qualificação de leads e agendamentos, utilizando IA, fluxos orquestrados e integrações com ferramentas externas.',

    image: asset('/assets/png/ia.png'),

    overview: [
      'O AI Voice Receptionist é uma solução de automação de atendimento projetada para empresas de marketing que recebem alto volume de contatos. O sistema permite que clientes liguem diretamente para um número, onde são atendidos por uma IA capaz de entender, responder e conduzir a conversa de forma natural, reduzindo a necessidade de atendimento humano no primeiro contato.',

      'A arquitetura é baseada em um fluxo de voz onde a chamada é processada por uma plataforma de Voice AI (VAPI), responsável por converter áudio em texto (STT) e texto em áudio (TTS). As transcrições são enviadas via webhook para um agente inteligente, que utiliza modelos da OpenAI para interpretar a intenção do usuário, executar ações e gerar respostas. O fluxo é orquestrado com n8n, permitindo integrações com ferramentas como Google Calendar (agendamentos), envio de SMS e persistência de dados em banco. O sistema funciona em tempo real, com múltiplas etapas de decisão e possibilidade de expansão para diferentes cenários de atendimento.',

      'Por ser um projeto empresarial sob NDA e em produção, o código-fonte não está disponível publicamente. Existem credenciais de conexão e integrações sensíveis que não podem ser expostas.'
    ],

    tools: [
      'n8n',
      'Node.js',
      'JavaScript',
      'OpenAI API',
      'VAPI (Voice AI)',
      'Google Calendar API',
      'Twilio',
      'PostgreSQL',
      'Nginx',
      'Python',
      'REST API',
      'Git',
      'GitHub'
    ],

    status: 'Em Produção',
    client: 'Confidencial (NDA)',
    liveLink: '#',
    codeLink: '#',
    isPrivate: true,
    privateNote: 'Código-fonte privado (NDA). O projeto utiliza credenciais de conexão e integrações sensíveis que não podem ser expostas publicamente.',
  }




]
