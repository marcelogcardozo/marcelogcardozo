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
      title: "Desenvolvedor de Software",
      scrollDown: "Role para baixo",
    },
    experience: {
      title: "Experiência Profissional",
      employmentTitle: "Empregos",
      freelanceTitle: "Projetos Freelance",
      viewDiagram: "Visualizar Diagrama",
      closeDiagram: "Fechar diagrama",
      employment: addIndexes(
        [
          {
            company: "Gino Terentim Academia de Desenvolvimento Empresarial",
            role: "Desenvolvedor de Software Pleno",
            period: "Out/2025 — Presente",
            description:
              "Desenvolvimento fullstack de plataforma educacional gamificada (Pionira) com tutor IA. Backend Node.js/TypeScript sobre Express, deployado em Firebase Functions (stage) e AWS Lambda containerizada (produção). Implementação de autenticação JWT, integração OpenAI Assistants API com cache de respostas, geração de certificados PDF com Handlebars, sistema de loja gamificada e pipelines CI/CD (GitHub Actions). Banco de dados MongoDB com Mongoose, e-mails transacionais via Brevo, observabilidade com Winston.",
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
            image:
              "https://ginoterentim.com/wp-content/uploads/2023/04/logo-gino-site.png",
            imageLight:
              "https://ginoterentim.com/wp-content/uploads/2023/04/logo-gino-site.png",
          },
          {
            company: "Quantum Finance",
            role: "Estagiário de Dados → Analista de Dados Jr.",
            period: "Jun/2021 — Set/2025",
            description:
              "Desenvolvimento de 100+ scrapers financeiros (APIs, HTML, PDFs, XML) e estruturação de 30+ pipelines ETL com arquitetura medalhão para processamento de dados de mercado. Migração e orquestração de processos do Rundeck para Apache Airflow com dockerização, pipelines CI/CD no GitLab e DAGs de automação. Implementação de Change Data Capture (CDC) no SQL Server para rastreabilidade e consistência. Modelagem de curvas de juros (Nelson-Siegel, cubic spline, flat-forward) e cálculos de Renda Fixa (preço, taxa, duration de Macaulay, %CDI, VNA). Integração com fontes B3, ANBIMA, IBGE e CVM. Criação de framework Python que abstraiu operações de atualização de bases de dados.",
            stack: [
              "Python",
              "SQL Server",
              "Airflow",
              "FastAPI",
              "ETL",
              "Docker",
              "Git",
            ],
            image:
              "https://quantumfinance.com.br/wp-content/uploads/2020/09/logo-quantum.png",
            imageLight:
              "https://quantumfinance.com.br/wp-content/uploads/2020/09/logo-quantum.png",
          },
          {
            index: 1,
            company: "Lab2M - LAMCE/COPPE/UFRJ",
            role: "Pesquisador de Iniciação Científica",
            period: "Jul/2019 — Abr/2023",
            description:
              "Criação de simuladores de migração sísmica 2D e interfaces para visualização de modelos geológicos em alta resolução.",
            stack: [
              "Python",
              "Modelagem Numérica",
              "Visualização",
              "Geofísica",
            ],
            image:
              "https://hub-digital.coppe.ufrj.br/wp-content/uploads/2021/10/logo-LAMCE.png",
            imageLight:
              "https://hub-digital.coppe.ufrj.br/wp-content/uploads/2021/10/logo-LAMCE.png",
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
            description:
              "Desenvolvimento de plataforma educacional, implementada com arquitetura de microserviços. Responsável pela construção de API Gateway em FastAPI para orquestração de serviços, microserviços Python especializados (autenticação, geração de dados de perfil via IA e adaptação de materiais), integração com Supabase (PostgreSQL + Auth + Storage), pipeline de processamento de documentos com conversão LaTeX-to-PDF via xelatex, e integração com workflows n8n orquestrando modelos de linguagem (OpenAI GPT-4o para geração de conteúdo e Google Gemini para geração de imagens). Frontend em React 19 + TypeScript + Vite gerenciando questionários dinâmicos, visualização de materiais e fluxo completo de caracterização pedagógica do aluno.",
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
            description:
              "Desenvolvimento de plataforma web para otimização de portfólios financeiros usando Teoria Moderna de Portfólios (Markowitz). Implementação de arquitetura em camadas (Views, Services, Infra) com fluxo completo de cadastro (solicitação, confirmação por e-mail, aprovação administrativa), sistema de autenticação seguro com hash de senhas e tokens, integração SendGrid para e-mails transacionais com templates HTML, e motor de cálculo de fronteira eficiente via simulação Monte Carlo.",
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
          title: "Migração Geofísica 2D",
          description:
            "Ferramenta para gerar sismogramas através da propagação de ondas acústicas em modelos geológicos de subsuperfície.",
          image: "/assets/migracao_sismica.png",
          url: "https://marcelogcardozo.github.io/migracao-sismica/",
          git: "https://github.com/marcelogcardozo/migracao-sismica",
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
          title: "Fronteira Eficiente de Markowitz",
          description:
            "Ferramenta que faz a otimização pelo método de Monte Carlo para calcular a fronteira eficiente de Markowitz para um portfólio de ativos.",
          image: "/assets/fronteira_markowitz.png",
          url: "https://markowitz-frontier.streamlit.app/",
          git: "https://github.com/marcelogcardozo/markowitz-frontier",
          private: false,
        },
        {
          title: "Recalc",
          description:
            "Ferramenta web para análise de adensamento de solos com gráfico e × log σ'v, cálculo da tensão de pré-adensamento (Casagrande e Pacheco Silva), índices Cr/Cc/Cs, OCR e exportação de relatório em PDF.",
          image: "/assets/recalc.png",
          url: "https://recalc-solos.vercel.app/",
          git: "",
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
          "Clean Architecture",
          "SOLID",
          "Testes Automatizados",
        ],
        backend: [
          "FastAPI",
          "Flask",
          "Django",
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
          "Pipelines de Dados",
          "CDC",
          "Apache Airflow",
          "Modelagem de Dados",
        ],
        cloud: ["Docker", "AWS", "Azure", "CI/CD"],
        frontend: ["React", "TypeScript", "Tailwind CSS", "Flutter"],
        ai: [
          "Integração com LLMs (OpenAI, Mistral, Gemini)",
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
        period: "Jan/2018 — Jul/2026 (Previsão)",
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
      scrollDown: "Scroll down",
    },
    experience: {
      title: "Professional Experience",
      employmentTitle: "Employment",
      freelanceTitle: "Freelance Projects",
      viewDiagram: "View Diagram",
      closeDiagram: "Close diagram",
      employment: addIndexes(
        [
          {
            company: "Gino Terentim Business Development Academy",
            role: "Mid-Level Software Developer",
            period: "Oct/2025 — Present",
            description:
              "Fullstack development of gamified educational platform (Pionira) with AI tutor. Node.js/TypeScript backend on Express, deployed to Firebase Functions (stage) and containerized AWS Lambda (production). Implementation of JWT authentication, OpenAI Assistants API integration with response caching, PDF certificate generation with Handlebars, gamified shop system, and CI/CD pipelines (GitHub Actions). MongoDB database with Mongoose, transactional emails via Brevo, observability with Winston.",
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
            image:
              "https://ginoterentim.com/wp-content/uploads/2023/04/logo-gino-site.png",
            imageLight:
              "https://ginoterentim.com/wp-content/uploads/2023/04/logo-gino-site.png",
          },
          {
            company: "Quantum Finance",
            role: "Data Intern → Junior Data Analyst",
            period: "Jun/2021 — Sep/2025",
            description:
              "Developed 100+ financial data scrapers (APIs, HTML, PDFs, XML) and structured 30+ ETL pipelines with medallion architecture for market data processing. Migrated and orchestrated processes from Rundeck to Apache Airflow with dockerization, CI/CD pipelines on GitLab, and automation DAGs. Implemented Change Data Capture (CDC) on SQL Server for traceability and consistency. Interest rate curve modeling (Nelson-Siegel, cubic spline, flat-forward) and Fixed Income calculations (price, rate, Macaulay duration, %CDI, VNA). Integration with B3, ANBIMA, IBGE, and CVM data sources. Created Python framework that abstracted database update operations.",
            stack: [
              "Python",
              "SQL Server",
              "Airflow",
              "FastAPI",
              "ETL",
              "Docker",
              "Git",
            ],
            image:
              "https://quantumfinance.com.br/wp-content/uploads/2020/09/logo-quantum.png",
            imageLight:
              "https://quantumfinance.com.br/wp-content/uploads/2020/09/logo-quantum.png",
          },
          {
            company: "Lab2M - LAMCE/COPPE/UFRJ",
            role: "Undergraduate Research Assistant",
            period: "Jul/2019 — Apr/2023",
            description:
              "Creation of 2D seismic migration simulators and interfaces for visualization of high-resolution geological models.",
            stack: [
              "Python",
              "Numerical Modeling",
              "Visualization",
              "Geophysics",
            ],
            image:
              "https://hub-digital.coppe.ufrj.br/wp-content/uploads/2021/10/logo-LAMCE.png",
            imageLight:
              "https://hub-digital.coppe.ufrj.br/wp-content/uploads/2021/10/logo-LAMCE.png",
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
            description:
              "Development of educational platform implemented with microservices architecture. Responsible for building API Gateway in FastAPI for service orchestration, specialized Python microservices (authentication, AI-driven profile data generation and material adaptation), integration with Supabase (PostgreSQL + Auth + Storage), document processing pipeline with LaTeX-to-PDF conversion via xelatex, and integration with n8n workflows orchestrating language models (OpenAI GPT-4o for content generation and Google Gemini for image generation). Frontend in React 19 + TypeScript + Vite managing dynamic questionnaires, material visualization and complete pedagogical student characterization flow.",
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
            description:
              "Development of web platform for financial portfolio optimization using Modern Portfolio Theory (Markowitz). Implementation of layered architecture (Views, Services, Infra) with complete registration flow (request, email confirmation, administrative approval), secure authentication system with password hashing and tokens, SendGrid integration for transactional emails with HTML templates, and efficient frontier calculation engine via Monte Carlo simulation.",
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
          title: "2D Geophysical Migration",
          description:
            "Tool to generate seismograms through acoustic wave propagation in subsurface geological models.",
          image: "/assets/migracao_sismica.png",
          url: "https://marcelogcardozo.github.io/migracao-sismica/",
          git: "https://github.com/marcelogcardozo/migracao-sismica",
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
          title: "Markowitz Efficient Frontier",
          description:
            "Tool that performs optimization using Monte Carlo method to calculate the Markowitz efficient frontier for an asset portfolio.",
          image: "/assets/fronteira_markowitz.png",
          url: "https://markowitz-frontier.streamlit.app/",
          git: "https://github.com/marcelogcardozo/markowitz-frontier",
          private: false,
        },
        {
          title: "Recalc",
          description:
            "Web tool for soil consolidation analysis with an e × log σ'v chart, preconsolidation stress estimation (Casagrande and Pacheco Silva), Cr/Cc/Cs indexes, OCR, and PDF report export.",
          image: "/assets/recalc.png",
          url: "https://recalc-solos.vercel.app/",
          git: "",
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
          "Clean Architecture",
          "SOLID",
          "Automated Testing",
        ],
        backend: [
          "FastAPI",
          "Flask",
          "Django",
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
          "Data Pipelines",
          "CDC",
          "Apache Airflow",
          "Data Modeling",
        ],
        cloud: ["Docker", "AWS", "Azure", "CI/CD"],
        frontend: ["React", "TypeScript", "Tailwind CSS", "Flutter"],
        ai: [
          "LLM Integration (OpenAI, Mistral, Gemini)",
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
        period: "Jan/2018 — Jul/2026 (Expected)",
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
