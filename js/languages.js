const myAge = new Date().getUTCFullYear() - 1999;

const languages = {
  portuguese: {
    // HEADER & FOOTER NAV LINKS
    links: {
      about: "Sobre mim",
      qualification: "Qualificação",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contate-me",
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // HERO
    hero: {
      headingPrimary: "Olá, eu sou o Claudio. Prazer em conhecê-lo",
      subheading: "Desenvolvedor Back-End",
      description:
        "Técnico em Informática e Administração, Tecnólogo em Análise e Desenvolvimento de Sistemas em formação",
      getInTouch: "Entrar em contato",
      projects: "Veja meus projetos",
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // ABOUT
    about: {
      subheading: "Minha introdução",
      headingSecondary: "Sobre mim",
      text:
        "Meu nome é Claudio Vinicius Nogueira, tenho " +
        { myAge } +
        " anos idade e sou natural de Mauá - SP, Brazil. Tenho formação técnica em informática e administração, e atualmente estou no 6º semestre do curso de tecnólogo em análise e desenvolvimento de sistemas. Tenho 1 ano e meio de experiência como estagiário, e atualmente estou à procura de um cargo de nível trainee ou júnior e seguir carreira na área como programador/desenvolvedor de software. \n\n Tenho proficiência em HTML, CSS, Javascript e Java, com interesse particular em desenvolvimento Back-End utilizando Java e Spring Boot. Tenho boas noções de bancos de dados relacionais (MySQL, PostgreSQL, SQL Server) e recentemente tenho aprofundado meus conhecimentos em UI/UX design.",
      downloadEnglishCV: "Download currículo em inglês",
      downloadPortugueseCV: "Download currículo em português",
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // QUALIFICATION
    qualification: {
      subheading: "Minha jornada pessoal",
      headingSecondary: "Qualificação",

      // QUALIFICATION WORK
      work: {
        headingTertiary: "Profissional",
        role: "Cargo: ",
        roleContent: "Estagiário de desenvolvimento de sistemas",
        area: "Área: ",
        areaContent: "Informática, TI, Telecomunicações (TI)",
        level: "Nível: ",
        levelContent: "Estagiário",
        company: "Empresa: ",
        date: "Período: ",
        state: "Estado: ",
        assignments: "Atribuições do cargo: ",
        assignmentsContent:
          "Acompanhamento supervisionado nas operações de sistemas, colaborar no desenvolvimento de novos projetos que envolvam sistemas, conduzir apoio em pequenos desenvolvimentos de sistemas, conduzir avaliação e configuração de ferramentas de desenvolvimento de sistemas, conduzir o auxílio na alimentação do banco de dados nosistema, oferecer suporte interno na implantação de sistemas, operacionalizar codificação de programas.",
        websiteLink: "Ver site da empresa",
      },

      // QUALIFICATION EDUCATION
      education: {
        headingTertiary: "Experiência acadêmica",
        course: "Curso: ",
        level: "Nível: ",
        institute: "Instituição: ",
        date: "Período: ",
        websiteLink: "Ver site da instituição ",
      },

      // QUALIFICATION CERTIFICATIONS
      certifications: {
        headingTertiary: "Certificações",
        course: "Curso: ",
        totalHours: "Total de horas: ",
        conclusion: "Conclusão: ",
        instructor: "Instrutor: ",
        courseLink: "Site do curso ",
      },
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // SKILLS
    skills: {
      subheading: "Meu Repertório Técnico",
      headingSecondary: "Minhas habilidades",
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // PROJECTS
    projects: {
      subheading: "Meus Trabalhos Mais Recentes",
      headingSecondary: "Meus Projetos",
      livePreview: "Ver projeto no ar",
      notLive: "⚠ Fora do ar",
      viewCode: "Ver código",

      // PROJECTS - SIMON GAME
      simonDescription:
        "O jogo mostra a primeira cor e toca o som correspondente na sequência (exemplo: verde). O jogador deve prestar atenção e clicar o botão certo (verde).\nEntão, o jogo segue e mostra a próxima cor e som correspondente (exemplo: amarelo), e o jogador tem que lembrar a sequência (primeiro verde depois ...), amarelo e assim o jogo vai seguindo. \nSe o jogador errar o sequência, o jogo termina",

      // PROJECTS - QUIZ APP
      quizDescription:
        "Quiz com 10 questões (em português) de conhecimentos gerais. \nCada questão tem um resposta correta \nDepois da décima questão, é demonstrada a quantidade de acertos \nNa página de pontuação existe um botão para recomeçar o quiz.",

      // PROJECTS - KEEPER APP
      keeperDescription: "Clone do Google Keep feito com ReactJS e Material UI",

      // PROJECTS - LOGISTICS API
      logisticsApiDescription:
        "Interface de Programação de Aplicações (Application Programming Interface) desenvolvida utilizando arquitetura REST (REpresentational State Transfer) destinada a um projeto de logística de entregas.",

      // PROJECTS - DRUM KIT
      drumKitDescription:
        "Kit de baterias desenvolvimento utilizando HTML, CSS e Javascript. Clique nos botões ou pressione as teclas correspondentes.",

      // PROJECTS - NEWS PROJECT
      newsProjectDescription:
        "Interface de Programação de Aplicações (Application Programming Interface) desenvolvida utilizando arquitetura REST (REpresentational State Transfer) destinada a um projeto de jornal online.",
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // CONTACT
    contact: {
      subheading: "Entrar em contato",
      headingSecondary: "Contate-me",

      callMe: "Me ligue: ",
      emailME: "Me envie um email: ",
      myLocation: "Minha localização: ",

      form: {
        yourName: "Seu nome: ",
        yourEmail: "Seu E-mail: ",
        message: "Mensagem: ",
        send: "Enviar ",
      },
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // FOOTER
    footer: {
      subheading: "Desenvolvedor Back-End",
    },
  },
};

// SWITCH LANGUAGE

// In case there is more language changing buttons in the future
document.getElementsByName("changeLanguage").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("id")) {
      if (button.getAttribute("id") === "portuguese") {
        const portuguese = languages.portuguese;

        // HEADER
        $("#aboutMeLink").text(portuguese.links.about);
        $("#qualificationLink").text(portuguese.links.qualification);
        $("#skillsLink").text(portuguese.links.qualification);
        $("#projectsLink").text(portuguese.links.projects);
        $("#contactMeLink").text(portuguese.links.contact);
      }
    }
  });
});
