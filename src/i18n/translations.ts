// Shared index order - only define indexes once here
const experienceIndexes = {
  employment: {
    "Gino Terentim Academia de Desenvolvimento Empresarial": 6,
    "Gino Terentim Business Development Academy": 6, // Same company, English name
    "Quantum Finance": 2,
    "Lab2M - COPPE/UFRJ": 0,
  },
  freelance: {
    "Projeto Privado": 5,
    "Private Project": 5, // Same company, English name
    "Plataforma de Otimização de Portfólios": 3,
    "Portfolio Optimization Platform": 3, // Same company, English name
  },
};

// Helper function to add index to experiences
type ExperienceBase = {
  company: string;
};

const addIndexes = <T extends ExperienceBase>(
  experiences: T[],
  type: "employment" | "freelance",
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
        "Construo plataformas de ponta a ponta, de pipelines de dados e APIs a interfaces e sistemas com IA em produção.",
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
      employmentLabel: "CLT",
      freelanceLabel: "Freelance",
      viewDiagram: "Visualizar Diagrama",
      closeDiagram: "Fechar diagrama",
      employment: addIndexes(
        [
          {
            company: "Gino Terentim Academia de Desenvolvimento Empresarial",
            role: "Desenvolvedor de Software Pleno",
            period: "Out/2025 — Presente",
            summary:
              "Desenvolvimento fullstack da Pionira, plataforma educacional gamificada com tutor de IA.",
            highlights: [
              "Backend Node.js/TypeScript sobre Express, deployado em Firebase Functions (stage) e AWS Lambda containerizada (produção).",
              "Autenticação JWT e integração com a OpenAI Assistants API com cache de respostas.",
              "Geração de certificados PDF com Handlebars e sistema de loja gamificada.",
              "Pipelines CI/CD com GitHub Actions, MongoDB/Mongoose, e-mails transacionais via Brevo e observabilidade com Winston.",
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
            role: "Estagiário de Dados → Analista de Dados (Foco em Engenharia)",
            period: "Jun/2021 — Set/2025",
            summary:
              "Engenharia de dados de mercado financeiro, da coleta ao cálculo de renda fixa.",
            highlights: [
              "100+ scrapers financeiros (APIs, HTML, PDFs, XML) e 30+ pipelines ETL com arquitetura medalhão.",
              "Migração de processos do Rundeck para o Apache Airflow, com dockerização, CI/CD no GitLab e DAGs de automação.",
              "Change Data Capture (CDC) no SQL Server para rastreabilidade e consistência.",
              "Modelagem de curvas de juros (Nelson-Siegel, cubic spline, flat-forward) e cálculos de renda fixa (preço, taxa, duration de Macaulay, %CDI, VNA).",
              "Integração com fontes B3, ANBIMA, IBGE e CVM, e framework Python que abstraiu a atualização das bases.",
            ],
            stack: [
              "Python",
              "SQL Server",
              "Airflow",
              "FastAPI",
              "ETL",
              "Docker",
              "Git",
            ],
          },
          {
            index: 1,
            company: "Lab2M - LAMCE/COPPE/UFRJ",
            role: "Pesquisador de Iniciação Científica",
            period: "Jul/2019 — Abr/2023",
            summary:
              "Pesquisa em geofísica computacional aplicada à migração sísmica.",
            highlights: [
              "Simuladores de migração sísmica 2D.",
              "Interfaces para visualização de modelos geológicos em alta resolução.",
            ],
            stack: [
              "Python",
              "Modelagem Numérica",
              "Visualização",
              "Geofísica",
            ],
          },
        ],
        "employment",
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
          "Integrações de APIs",
          "Autenticação",
          "Controle de Acesso",
          "Observabilidade",
        ],
        data: [
          "SQL Server",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "ETL",
          "CDC",
          "Apache Airflow",
          "Modelagem de Dados",
        ],
        cloud: ["Docker", "AWS", "Azure", "Supabase", "Firebase", "CI/CD"],
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
          "RAG",
          "n8n",
          "Flowise",
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
        "I build end-to-end platforms, from data pipelines and APIs to interfaces and AI systems in production.",
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
      employmentLabel: "Employment",
      freelanceLabel: "Freelance",
      viewDiagram: "View Diagram",
      closeDiagram: "Close diagram",
      employment: addIndexes(
        [
          {
            company: "Gino Terentim Business Development Academy",
            role: "Mid-Level Software Developer",
            period: "Oct/2025 — Present",
            summary:
              "Fullstack development of Pionira, a gamified educational platform with an AI tutor.",
            highlights: [
              "Node.js/TypeScript backend on Express, deployed to Firebase Functions (stage) and containerized AWS Lambda (production).",
              "JWT authentication and OpenAI Assistants API integration with response caching.",
              "PDF certificate generation with Handlebars and a gamified shop system.",
              "CI/CD pipelines with GitHub Actions, MongoDB/Mongoose, transactional emails via Brevo, and observability with Winston.",
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
            role: "Data Intern → Data Analyst (Engineering Focus)",
            period: "Jun/2021 — Sep/2025",
            summary:
              "Financial market data engineering, from collection to fixed income calculations.",
            highlights: [
              "100+ financial data scrapers (APIs, HTML, PDFs, XML) and 30+ ETL pipelines with medallion architecture.",
              "Migration from Rundeck to Apache Airflow, with dockerization, CI/CD on GitLab, and automation DAGs.",
              "Change Data Capture (CDC) on SQL Server for traceability and consistency.",
              "Interest rate curve modeling (Nelson-Siegel, cubic spline, flat-forward) and fixed income calculations (price, rate, Macaulay duration, %CDI, VNA).",
              "Integration with B3, ANBIMA, IBGE, and CVM sources, plus a Python framework that abstracted database updates.",
            ],
            stack: [
              "Python",
              "SQL Server",
              "Airflow",
              "FastAPI",
              "ETL",
              "Docker",
              "Git",
            ],
          },
          {
            company: "Lab2M - LAMCE/COPPE/UFRJ",
            role: "Undergraduate Research Assistant",
            period: "Jul/2019 — Apr/2023",
            summary:
              "Research in computational geophysics applied to seismic migration.",
            highlights: [
              "2D seismic migration simulators.",
              "Interfaces for high-resolution geological model visualization.",
            ],
            stack: [
              "Python",
              "Numerical Modeling",
              "Visualization",
              "Geophysics",
            ],
          },
        ],
        "employment",
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
          "API Integrations",
          "Authentication",
          "Access Control",
          "Observability",
        ],
        data: [
          "SQL Server",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "ETL",
          "CDC",
          "Apache Airflow",
          "Data Modeling",
        ],
        cloud: ["Docker", "AWS", "Azure", "Supabase", "Firebase", "CI/CD"],
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
          "RAG",
          "n8n",
          "Flowise",
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
