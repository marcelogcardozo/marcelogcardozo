// Shared index order - only define indexes once here
const experienceIndexes = {
  employment: {
    Maravi: 8,
    "BTG Pactual": 7,
    "Gino Terentim Desenvolvimento Profissional": 6,
    "Gino Terentim Professional Development": 6, // Same company, English name
    "Quantum Finance": 2,
    "Lab2M - LAMCE/COPPE/UFRJ": 0,
  },
  freelance: {
    "Projeto Privado": 5,
    "Private Project": 5, // Same company, English name
    "Plataforma de Otimização de Portfólios": 3,
    "Portfolio Optimization Platform": 3, // Same company, English name
  },
  volunteer: {
    "IEEE Robotics and Automation Society": 1,
  },
};

// Helper function to add index to experiences
type ExperienceBase = {
  company: string;
};

const addIndexes = <T extends ExperienceBase>(
  experiences: T[],
  type: keyof typeof experienceIndexes,
) => {
  return experiences.map((exp) => ({
    ...exp,
    index:
      experienceIndexes[type][
        exp.company as keyof (typeof experienceIndexes)[typeof type]
      ] ?? 0,
  }));
};

export const translations = {
  "pt-BR": {
    hero: {
      name: "Marcelo Cardozo",
      title: "Engenheiro de Software",
      tagline:
        "Construo sistemas robustos e orientados a dados para o mercado financeiro, de pipelines e precificação de renda fixa a APIs, interfaces e soluções com IA em produção.",
      scrollDown: "Role para baixo",
    },
    nav: {
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      education: "Formação",
      contact: "Contato",
      backToTop: "Voltar ao topo",
    },
    experience: {
      title: "Experiência Profissional",
      employmentTitle: "Empregos",
      freelanceTitle: "Projetos Freelance",
      volunteerTitle: "Voluntariado",
      employmentLabel: "CLT",
      freelanceLabel: "Freelance",
      viewDiagram: "Visualizar Diagrama",
      closeDiagram: "Fechar diagrama",
      employment: addIndexes(
        [
          {
            company: "Maravi",
            role: "Analista de Sistemas | Renda Fixa",
            period: "Set/2026 — Presente",
            summary:
              "Atuação na vertical de Pós-Trade de Renda Fixa, com foco em precificação de ativos.",
            highlights: [],
            stack: [],
          },
          {
            company: "BTG Pactual",
            role: "Assistant | Asset Servicing",
            period: "Jun/2026 — Set/2026",
            summary:
              "Equipe de Automation (Innovation), desenvolvendo software para automação, transformação e sustentação de processos no mercado financeiro, de novas aplicações à evolução de sistemas legados.",
            highlights: [
              "Aplicações web end-to-end com React + TypeScript no frontend e FastAPI + AWS Lambda no backend, utilizando API Gateway, SQS, Aurora MySQL, S3 e CloudFront.",
              "Chatbot com IA integrando Copilot Studio e AWS Lambda (LangChain), com interfaces via Adaptive Cards e integração ao Microsoft Teams e aplicações web.",
              "Melhorias e correções em aplicações legadas, SharePoint, Pipefy e automações em VBA/Excel, atendendo demandas diretamente das áreas de negócio.",
            ],
            stack: [
              "React",
              "TypeScript",
              "FastAPI",
              "AWS Lambda",
              "API Gateway",
              "SQS",
              "Aurora MySQL",
              "S3",
              "CloudFront",
              "LangChain",
              "Copilot Studio",
              "Microsoft Teams",
              "SharePoint",
              "Pipefy",
              "VBA",
            ],
          },
          {
            company: "Gino Terentim Desenvolvimento Profissional",
            role: "Desenvolvedor de Software Pleno",
            period: "Out/2025 — Jun/2026",
            summary:
              "Desenvolvimento da Pionira, plataforma educacional gamificada com temática de savana africana (~1.600 usuários), e de suas aplicações satélites. Responsável pela arquitetura, execução técnica e direção tecnológica do produto.",
            highlights: [
              "Arquitetura modular “Safari”, que isola cada curso em seu próprio ambiente e permite expandir para novos produtos sem retrabalho. Hoje hospeda o MBA em Gestão Estratégica de Valor, maior produto da empresa.",
              "Sistema de engajamento baseado no Octalysis Framework: comunidade, Q&A, ranking, streaks, XP, níveis, recompensas e skins para a mascote Makena.",
              "Definição de arquitetura, stack, padrões de código e processos de revisão, além da priorização do backlog com stakeholders e do suporte técnico aos usuários.",
              "Backend Node.js/TypeScript (Express) em AWS Lambda containerizada e Firebase Functions, com MongoDB, autenticação JWT, tutor de IA via OpenAI Assistants API e CI/CD com GitHub Actions.",
            ],
            stack: [
              "Node.js",
              "TypeScript",
              "Express",
              "MongoDB",
              "Mongoose",
              "AWS Lambda",
              "Firebase Functions",
              "Docker",
              "GitHub Actions",
              "OpenAI API",
              "JWT",
              "Brevo",
              "Handlebars",
              "Winston",
            ],
          },
          {
            company: "Quantum Finance",
            role: "Estagiário de Dados → Analista de Dados Jr | Renda Fixa",
            period: "Jun/2021 — Set/2025",
            summary:
              "Engenharia de dados para renda fixa, fundos de investimento e índices, da coleta à precificação.",
            highlights: [
              "+100 scrapers financeiros (APIs, HTML, PDF, XML) para ingestão e estruturação de dados de mercado.",
              "+20 pipelines de dados (ETL) integrando scrapers a bases internas, escalados com arquitetura medalhão para melhorar performance e padronização entre equipes.",
              "Pipelines de abastecimento do Consolidador de Carteiras e fluxo de atualização de carteiras de índices e fundos, integrando fontes como CVM, IBGE e ANBIMA.",
              "Migração de rotinas do Rundeck para o Airflow, com desenho das DAGs e refatoração dos processos de orquestração.",
              "Curvas de juros com modelo Nelson-Siegel e método de Newton-Raphson para precificação de ativos de renda fixa, além de módulos de métricas (prazo, preço, taxa, duration, dividend yield).",
              "Módulo Python reutilizável que padronizou atualizações de bases (Pandas/Polars + SQL Server), reduzindo operações de upsert a 2 linhas de código.",
              "Automação de rotinas críticas de atualização e validação de dados, reduzindo tempo operacional e erros manuais.",
              "Interfaces desktop internas para controle, auditoria e rastreabilidade de alterações nas bases de dados.",
            ],
            stack: [
              "Python",
              "SQL Server",
              "Airflow",
              "Pandas",
              "Polars",
              "FastAPI",
              "ETL",
              "Docker",
              "Git",
            ],
          },
          {
            company: "Lab2M - LAMCE/COPPE/UFRJ",
            role: "Aluno de Iniciação Científica",
            period: "Jul/2019 — Abr/2023",
            summary:
              "Soluções numéricas em Python para simulação e migração sísmica 2D, aplicando diferenças finitas e computação de alto desempenho com NumPy e Numba.",
            highlights: [
              "Modelos da equação da onda acústica e algoritmos de migração sísmica a partir de sismogramas.",
              "Aplicação desktop para visualização e interpretação de dados sísmicos no formato SEG-Y.",
            ],
            stack: [
              "Python",
              "NumPy",
              "Numba",
              "Modelagem Numérica",
              "Visualização",
              "Geofísica",
            ],
          },
        ],
        "employment",
      ),
      volunteer: addIndexes(
        [
          {
            company: "IEEE Robotics and Automation Society",
            role: "Voluntário",
            period: "Ago/2021 — Dez/2021",
            summary:
              "Equipe de Automação e Robótica, com foco em IoT e sistemas embarcados.",
            highlights: [
              "MVP de Home Assistant com Flutter, Arduino e ESP32, integrando sensores e dispositivos embarcados a uma aplicação mobile.",
            ],
            stack: ["Flutter", "Arduino", "ESP32", "IoT"],
          },
        ],
        "volunteer",
      ),
      freelance: addIndexes(
        [
          {
            company: "Projeto Privado",
            role: "Desenvolvedor Fullstack",
            period: "Jul/2025 — Out/2025",
            summary:
              "Plataforma educacional em arquitetura de microserviços, da orquestração ao frontend.",
            highlights: [
              "API Gateway em FastAPI orquestrando microserviços Python (autenticação, geração de perfil via IA e adaptação de materiais).",
              "Integração com Supabase (PostgreSQL, Auth e Storage).",
              "Pipeline de documentos com conversão LaTeX-to-PDF via xelatex.",
              "Workflows n8n orquestrando LLMs (OpenAI GPT-4o para conteúdo, Google Gemini para imagens).",
              "Frontend React 19 + TypeScript + Vite com questionários dinâmicos e caracterização pedagógica do aluno.",
            ],
            stack: [
              "React",
              "TypeScript",
              "FastAPI",
              "Supabase",
              "LaTeX",
              "Docker",
              "Flowise/n8n",
              "Mistral AI/OpenAI",
            ],
            miro: "uXjVGGvjBFA=",
          },
          {
            company: "Plataforma de Otimização de Portfólios",
            role: "Desenvolvedor Fullstack",
            period: "Fev/2025 — Jun/2025",
            summary:
              "Plataforma web de otimização de portfólios pela Teoria Moderna de Portfólios (Markowitz).",
            highlights: [
              "Arquitetura em camadas (Views, Services, Infra).",
              "Fluxo completo de cadastro: solicitação, confirmação por e-mail e aprovação administrativa.",
              "Autenticação segura com hash de senhas e tokens, e e-mails transacionais via SendGrid com templates HTML.",
              "Motor de cálculo da fronteira eficiente via simulação Monte Carlo.",
            ],
            stack: [
              "Python",
              "SQLAlchemy",
              "Pandas",
              "SendGrid",
              "Streamlit",
              "NumPy",
              "Hashing",
              "ORM",
            ],
          },
        ],
        "freelance",
      ),
    },
    projects: {
      title: "Projetos em Destaque",
      viewProject: "Ver Projeto",
      viewCode: "GitHub",
      privateRepo: "Repositório Privado",
      projects: [
        {
          title: "Processa AI",
          description:
            "SaaS de legaltech (descontinuado e liberado como open source sob AGPL-3.0) com gestão de escritório, ferramentas de IA, chat jurídico com RAG (pgvector + Gemini), calculadoras trabalhistas, billing via Stripe e portal do cliente. Monorepo com Vite 7 + React 19 no frontend, FastAPI assíncrono (Python 3.13 + psycopg 3) no backend e worker dedicado consumindo fila PostgreSQL.",
          image: "/assets/processa_ai.png",
          url: "",
          git: "https://github.com/marcelogcardozo/processa-ai",
          private: false,
        },
        {
          title: "Recalc",
          description:
            "Ferramenta web para análise de adensamento de solos com gráfico e × log σ'v, cálculo da tensão de pré-adensamento (Casagrande e Pacheco Silva), índices Cr/Cc/Cs, OCR (razão de pré-adensamento) e exportação de relatório em PDF.",
          image: "/assets/recalc.png",
          url: "https://recalc-solos.vercel.app/",
          git: "",
          private: false,
        },
        {
          title: "Migração Geofísica 2D",
          description:
            "Ferramenta para gerar sismogramas através da propagação de ondas acústicas em modelos geológicos de subsuperfície.",
          image: "/assets/migracao_sismica.png",
          url: "https://marcelogcardozo.github.io/migracao-sismica/",
          git: "https://github.com/marcelogcardozo/migracao-sismica",
          private: false,
        },
        {
          title: "Fronteira Eficiente de Markowitz",
          description:
            "Ferramenta que faz a otimização pelo método de Monte Carlo para calcular a fronteira eficiente de Markowitz para um portfólio de ativos.",
          image: "/assets/fronteira_markowitz.png",
          url: "https://markowitz-frontier.streamlit.app/",
          git: "https://github.com/marcelogcardozo/markowitz-frontier",
          private: false,
        },
        {
          title: "Calculadora Tensão de Flambagem",
          description:
            "Ferramenta para calcular tensão de flambagem através do método da Secante e de Euler.",
          image: "/assets/calculadora_tensao_critica.png",
          url: "https://calculadora-tensao-critica.streamlit.app/",
          git: "https://github.com/marcelogcardozo/calculadora-tensao-critica",
          private: false,
        },
        {
          title: "Weather App",
          description:
            "Aplicação para verificar o clima da semana, além de algumas métricas como temperatura, índice UV, umidade, chance de chuva e qualidade do ar.",
          image: "/assets/weather_app.png",
          url: "",
          git: "https://github.com/marcelogcardozo/weather-app",
          private: false,
        },
      ],
    },
    skills: {
      title: "Principais Habilidades",
      categories: {
        core: "Core Engineering",
        backend: "Backend & Platform",
        data: "Dados & Pipelines",
        cloud: "Cloud & Infra",
        frontend: "Frontend",
        ai: "IA & Automação",
      },
      list: {
        core: [
          "Python",
          "Go",
          "TypeScript",
          "SQL",
          "Arquitetura de APIs",
          "Design de Sistemas",
          "Microsserviços",
          "Clean Architecture",
          "SOLID",
          "Testes Automatizados",
        ],
        backend: [
          "FastAPI",
          "Flask",
          "Django",
          "Node.js",
          "Express",
          "REST",
          "RabbitMQ",
          "Integrações de APIs",
          "Autenticação",
          "Controle de Acesso",
          "Observabilidade",
        ],
        data: [
          "SQL Server",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "Pandas",
          "Polars",
          "ETL",
          "CDC",
          "Arquitetura Medalhão",
          "Apache Airflow",
          "Modelagem de Dados",
        ],
        cloud: [
          "Docker",
          "AWS (Lambda, API Gateway, SQS, S3, CloudFront)",
          "Azure",
          "Supabase",
          "Firebase",
          "CI/CD",
        ],
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
          "Flutter",
        ],
        ai: [
          "Integração com LLMs (OpenAI, Mistral, Gemini)",
          "LangChain",
          "LangGraph",
          "Langfuse",
          "Langflow",
          "RAG",
          "n8n",
          "Flowise",
          "Copilot Studio",
          "VBA",
          "Sistemas com IA em Produção",
        ],
      },
    },
    education: {
      title: "Formação & Certificações",
      degree: {
        title: "Engenharia Civil",
        institution: "Universidade do Estado do Rio de Janeiro (UERJ)",
        period: "Jan/2018 — Dez/2026",
        description:
          "Foco em modelagem numérica, análise estrutural e aplicação de métodos computacionais para engenharia e dados.",
      },
      certifications: {
        title: "Certificações",
        list: [
          {
            title: "Formação Data Science",
            provider: "Alura",
            year: "2022",
            url: "https://cursos.alura.com.br/degree/certificate/e11f4066-3536-42e6-adf2-d7c676711951?lang=pt_BR",
          },
          {
            title: "Engenharia de Dados na AWS",
            provider: "Alura",
            year: "2022",
            url: "https://cursos.alura.com.br/certificate/93e59fdc-367e-41ca-a076-2d28e4ebe642?lang=pt_BR",
          },
          {
            title: "IA e Machine Learning — Guia Completo",
            provider: "Udemy",
            year: "2021",
            url: "",
          },
          {
            title: "Python 3 do Básico ao Avançado",
            provider: "Udemy",
            year: "2021",
            url: "",
          },
          {
            title: "Renda Fixa do Brasil",
            provider: "FCE — Escola de Finanças",
            year: "2025",
            url: "https://drive.google.com/file/d/1nqRSyJ6153qDoeZHXOkncHZELllBeCyI/preview",
          },
          {
            title: "Cálculo de Preço de Títulos Públicos",
            provider: "FCE — Escola de Finanças",
            year: "2024",
            url: "https://drive.google.com/file/d/1MHpiBQPmtx6_Irg_Y5mYpgec5Dw6MAX1/view?usp=sharing",
          },
          {
            title: "Interpolação da Curva de Juros",
            provider: "FCE — Escola de Finanças",
            year: "2025",
            url: "https://drive.google.com/file/d/1EF5kjQnSNNh2OqkXkcwu9iQOqp-dYwOS/preview",
          },
        ],
      },
    },
    contact: {
      title: "Contato",
      subtitle: "Que tal trocarmos uma ideia?",
      location: "Rio de Janeiro, RJ",
      email: "Me envie uma mensagem",
      resume: "Ver currículo",
      connect: "Conecte-se comigo",
      rights: "Todos os direitos reservados.",
    },
  },
  "en-US": {
    hero: {
      name: "Marcelo Cardozo",
      title: "Software Engineer",
      tagline:
        "I build robust, data-driven systems for financial markets, from pipelines and fixed income pricing to APIs, interfaces and AI solutions in production.",
      scrollDown: "Scroll down",
    },
    nav: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      backToTop: "Back to top",
    },
    experience: {
      title: "Professional Experience",
      employmentTitle: "Employment",
      freelanceTitle: "Freelance Projects",
      volunteerTitle: "Volunteering",
      employmentLabel: "Employment",
      freelanceLabel: "Freelance",
      viewDiagram: "View Diagram",
      closeDiagram: "Close diagram",
      employment: addIndexes(
        [
          {
            company: "Maravi",
            role: "Systems Analyst | Fixed Income",
            period: "Sep/2026 — Present",
            summary:
              "Working in the Fixed Income Post-Trade vertical, focused on asset pricing.",
            highlights: [],
            stack: [],
          },
          {
            company: "BTG Pactual",
            role: "Assistant | Asset Servicing",
            period: "Jun/2026 — Sep/2026",
            summary:
              "Automation (Innovation) team, building software to automate, transform and sustain financial market processes, from new applications to the evolution of legacy systems.",
            highlights: [
              "End-to-end web applications with React + TypeScript on the frontend and FastAPI + AWS Lambda on the backend, using API Gateway, SQS, Aurora MySQL, S3 and CloudFront.",
              "AI chatbot integrating Copilot Studio and AWS Lambda (LangChain), with Adaptive Cards interfaces and integration with Microsoft Teams and web applications.",
              "Improvements and fixes to legacy applications, SharePoint, Pipefy and VBA/Excel automations, serving requests directly from business areas.",
            ],
            stack: [
              "React",
              "TypeScript",
              "FastAPI",
              "AWS Lambda",
              "API Gateway",
              "SQS",
              "Aurora MySQL",
              "S3",
              "CloudFront",
              "LangChain",
              "Copilot Studio",
              "Microsoft Teams",
              "SharePoint",
              "Pipefy",
              "VBA",
            ],
          },
          {
            company: "Gino Terentim Professional Development",
            role: "Mid-Level Software Developer",
            period: "Oct/2025 — Jun/2026",
            summary:
              "Development of Pionira, a gamified educational platform with an African savanna theme (~1,600 users), and its satellite applications. Responsible for the product's architecture, technical execution and technology direction.",
            highlights: [
              "“Safari” modular architecture, isolating each course in its own environment and enabling expansion to new products without rework. It now hosts the MBA in Strategic Value Management, the company's largest product.",
              "Engagement system based on the Octalysis Framework: community, Q&A, ranking, streaks, XP, levels, rewards and skins for the Makena mascot.",
              "Defined architecture, stack, coding standards and review processes, while prioritizing the backlog with stakeholders and providing technical support to users.",
              "Node.js/TypeScript (Express) backend on containerized AWS Lambda and Firebase Functions, with MongoDB, JWT authentication, an AI tutor via the OpenAI Assistants API and CI/CD with GitHub Actions.",
            ],
            stack: [
              "Node.js",
              "TypeScript",
              "Express",
              "MongoDB",
              "Mongoose",
              "AWS Lambda",
              "Firebase Functions",
              "Docker",
              "GitHub Actions",
              "OpenAI API",
              "JWT",
              "Brevo",
              "Handlebars",
              "Winston",
            ],
          },
          {
            company: "Quantum Finance",
            role: "Data Intern → Junior Data Analyst | Fixed Income",
            period: "Jun/2021 — Sep/2025",
            summary:
              "Data engineering for fixed income, investment funds and indexes, from collection to pricing.",
            highlights: [
              "100+ financial scrapers (APIs, HTML, PDF, XML) for ingesting and structuring market data.",
              "20+ data pipelines (ETL) integrating scrapers with internal databases, scaled with a medallion architecture to improve performance and standardization across teams.",
              "Data feed pipelines for the Portfolio Consolidator and the update flow for index and fund portfolios, integrating sources such as CVM, IBGE and ANBIMA.",
              "Migration of routines from Rundeck to Airflow, including DAG design and refactoring of orchestration processes.",
              "Yield curves with the Nelson-Siegel model and Newton-Raphson method for fixed income asset pricing, plus metric modules (term, price, rate, duration, dividend yield).",
              "Reusable Python module that standardized database updates (Pandas/Polars + SQL Server), reducing upsert operations to 2 lines of code.",
              "Automation of critical data update and validation routines, reducing operational time and manual errors.",
              "Internal desktop interfaces for control, auditing and traceability of database changes.",
            ],
            stack: [
              "Python",
              "SQL Server",
              "Airflow",
              "Pandas",
              "Polars",
              "FastAPI",
              "ETL",
              "Docker",
              "Git",
            ],
          },
          {
            company: "Lab2M - LAMCE/COPPE/UFRJ",
            role: "Undergraduate Research Student",
            period: "Jul/2019 — Apr/2023",
            summary:
              "Numerical solutions in Python for 2D seismic simulation and migration, applying finite differences and high-performance computing with NumPy and Numba.",
            highlights: [
              "Acoustic wave equation models and seismic migration algorithms from seismograms.",
              "Desktop application for visualizing and interpreting seismic data in SEG-Y format.",
            ],
            stack: [
              "Python",
              "NumPy",
              "Numba",
              "Numerical Modeling",
              "Visualization",
              "Geophysics",
            ],
          },
        ],
        "employment",
      ),
      volunteer: addIndexes(
        [
          {
            company: "IEEE Robotics and Automation Society",
            role: "Volunteer",
            period: "Aug/2021 — Dec/2021",
            summary:
              "Automation and Robotics team, focused on IoT and embedded systems.",
            highlights: [
              "Home Assistant MVP with Flutter, Arduino and ESP32, integrating sensors and embedded devices with a mobile application.",
            ],
            stack: ["Flutter", "Arduino", "ESP32", "IoT"],
          },
        ],
        "volunteer",
      ),
      freelance: addIndexes(
        [
          {
            company: "Private Project",
            role: "Fullstack Developer",
            period: "Jul/2025 — Oct/2025",
            summary:
              "Educational platform on microservices architecture, from orchestration to frontend.",
            highlights: [
              "API Gateway in FastAPI orchestrating Python microservices (authentication, AI-driven profile generation, and material adaptation).",
              "Integration with Supabase (PostgreSQL, Auth, and Storage).",
              "Document pipeline with LaTeX-to-PDF conversion via xelatex.",
              "n8n workflows orchestrating LLMs (OpenAI GPT-4o for content, Google Gemini for images).",
              "React 19 + TypeScript + Vite frontend with dynamic questionnaires and pedagogical student characterization.",
            ],
            stack: [
              "React",
              "TypeScript",
              "FastAPI",
              "Supabase",
              "LaTeX",
              "Docker",
              "Flowise/n8n",
              "Mistral AI/OpenAI",
            ],
            miro: "uXjVGGvjBFA=",
          },
          {
            company: "Portfolio Optimization Platform",
            role: "Fullstack Developer",
            period: "Feb/2025 — Jun/2025",
            summary:
              "Web platform for portfolio optimization using Modern Portfolio Theory (Markowitz).",
            highlights: [
              "Layered architecture (Views, Services, Infra).",
              "Complete registration flow: request, email confirmation, and administrative approval.",
              "Secure authentication with password hashing and tokens, plus transactional emails via SendGrid with HTML templates.",
              "Efficient frontier calculation engine via Monte Carlo simulation.",
            ],
            stack: [
              "Python",
              "SQLAlchemy",
              "Pandas",
              "SendGrid",
              "Streamlit",
              "NumPy",
              "Hashing",
              "ORM",
            ],
          },
        ],
        "freelance",
      ),
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      viewCode: "GitHub",
      privateRepo: "Private Repository",
      projects: [
        {
          title: "Processa AI",
          description:
            "Legal-tech SaaS (discontinued and released as open source under AGPL-3.0) with law-firm management, AI tools, legal chat with RAG (pgvector + Gemini), labor-law calculators, Stripe billing, and client portal. Monorepo with Vite 7 + React 19 on the frontend, async FastAPI (Python 3.13 + psycopg 3) on the backend, and a dedicated worker consuming a PostgreSQL queue.",
          image: "/assets/processa_ai.png",
          url: "",
          git: "https://github.com/marcelogcardozo/processa-ai",
          private: false,
        },
        {
          title: "Recalc",
          description:
            "Web tool for soil consolidation analysis with an e × log σ'v chart, preconsolidation stress estimation (Casagrande and Pacheco Silva), Cr/Cc/Cs indexes, OCR (over-consolidation ratio), and PDF report export.",
          image: "/assets/recalc.png",
          url: "https://recalc-solos.vercel.app/",
          git: "",
          private: false,
        },
        {
          title: "2D Geophysical Migration",
          description:
            "Tool to generate seismograms through acoustic wave propagation in subsurface geological models.",
          image: "/assets/migracao_sismica.png",
          url: "https://marcelogcardozo.github.io/migracao-sismica/",
          git: "https://github.com/marcelogcardozo/migracao-sismica",
          private: false,
        },
        {
          title: "Markowitz Efficient Frontier",
          description:
            "Tool that performs optimization using Monte Carlo method to calculate the Markowitz efficient frontier for an asset portfolio.",
          image: "/assets/fronteira_markowitz.png",
          url: "https://markowitz-frontier.streamlit.app/",
          git: "https://github.com/marcelogcardozo/markowitz-frontier",
          private: false,
        },
        {
          title: "Buckling Stress Calculator",
          description:
            "Tool to calculate buckling stress using the Secant and Euler methods.",
          image: "/assets/calculadora_tensao_critica.png",
          url: "https://calculadora-tensao-critica.streamlit.app/",
          git: "https://github.com/marcelogcardozo/calculadora-tensao-critica",
          private: false,
        },
        {
          title: "Weather App",
          description:
            "Application to check the weekly weather, plus metrics like temperature, UV index, humidity, chance of rain and air quality.",
          image: "/assets/weather_app.png",
          url: "",
          git: "https://github.com/marcelogcardozo/weather-app",
          private: false,
        },
      ],
    },
    skills: {
      title: "Key Skills",
      categories: {
        core: "Core Engineering",
        backend: "Backend & Platform",
        data: "Data & Pipelines",
        cloud: "Cloud & Infra",
        frontend: "Frontend",
        ai: "AI & Automation",
      },
      list: {
        core: [
          "Python",
          "Go",
          "TypeScript",
          "SQL",
          "API Architecture",
          "System Design",
          "Microservices",
          "Clean Architecture",
          "SOLID",
          "Automated Testing",
        ],
        backend: [
          "FastAPI",
          "Flask",
          "Django",
          "Node.js",
          "Express",
          "REST",
          "RabbitMQ",
          "API Integrations",
          "Authentication",
          "Access Control",
          "Observability",
        ],
        data: [
          "SQL Server",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "Pandas",
          "Polars",
          "ETL",
          "CDC",
          "Medallion Architecture",
          "Apache Airflow",
          "Data Modeling",
        ],
        cloud: [
          "Docker",
          "AWS (Lambda, API Gateway, SQS, S3, CloudFront)",
          "Azure",
          "Supabase",
          "Firebase",
          "CI/CD",
        ],
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
          "Flutter",
        ],
        ai: [
          "LLM Integration (OpenAI, Mistral, Gemini)",
          "LangChain",
          "LangGraph",
          "Langfuse",
          "Langflow",
          "RAG",
          "n8n",
          "Flowise",
          "Copilot Studio",
          "VBA",
          "AI Systems in Production",
        ],
      },
    },
    education: {
      title: "Education & Certifications",
      degree: {
        title: "Civil Engineering",
        institution: "State University of Rio de Janeiro (UERJ)",
        period: "Jan/2018 — Dec/2026",
        description:
          "Focus on numerical modeling, structural analysis and application of computational methods for engineering and data.",
      },
      certifications: {
        title: "Certifications",
        list: [
          {
            title: "Data Science Formation",
            provider: "Alura",
            year: "2022",
            url: "https://cursos.alura.com.br/degree/certificate/e11f4066-3536-42e6-adf2-d7c676711951?lang=pt_BR",
          },
          {
            title: "Data Engineering on AWS",
            provider: "Alura",
            year: "2022",
            url: "https://cursos.alura.com.br/certificate/93e59fdc-367e-41ca-a076-2d28e4ebe642?lang=pt_BR",
          },
          {
            title: "AI and Machine Learning — Complete Guide",
            provider: "Udemy",
            year: "2021",
            url: "",
          },
          {
            title: "Python 3 from Basics to Advanced",
            provider: "Udemy",
            year: "2021",
            url: "",
          },
          {
            title: "Fixed Income in Brazil",
            provider: "FCE — Finance School",
            year: "2025",
            url: "https://drive.google.com/file/d/1nqRSyJ6153qDoeZHXOkncHZELllBeCyI/preview",
          },
          {
            title: "Government Bonds Pricing Calculation",
            provider: "FCE — Finance School",
            year: "2024",
            url: "https://drive.google.com/file/d/1MHpiBQPmtx6_Irg_Y5mYpgec5Dw6MAX1/preview",
          },
          {
            title: "Interest Rate Curve Interpolation",
            provider: "FCE — Finance School",
            year: "2025",
            url: "https://drive.google.com/file/d/1EF5kjQnSNNh2OqkXkcwu9iQOqp-dYwOS/preview",
          },
        ],
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Let's have a chat?",
      location: "Rio de Janeiro, RJ",
      email: "Send me a message",
      resume: "View resume",
      connect: "Connect with me",
      rights: "All rights reserved.",
    },
  },
};
