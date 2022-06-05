const myAge = new Date().getUTCFullYear() - 1999;

const languages = {
  portuguese: {
    // HEADER & FOOTER NAV LINKS
    links: {
      home: "Início",
      about: "Sobre mim",
      qualification: "Qualificação",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contate-me",
    },

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // HERO
    hero: {
      headingPrimary: "Olá, meu nome é Claudio. Muito prazer.",
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
      text: {
        intro:
          "Meu nome é Claudio Vinicius Nogueira, tenho " +
          myAge +
          " anos idade e sou natural de Mauá - SP, Brazil. Tenho formação técnica em informática e administração, e atualmente estou no 6º semestre do curso de tecnólogo em análise e desenvolvimento de sistemas. Tenho 1 ano e meio de experiência como estagiário, e atualmente estou à procura de um cargo de nível trainee ou júnior e seguir carreira na área como programador/desenvolvedor de software. ",
        proficiency:
          "Tenho proficiência em HTML, CSS, Javascript e Java, com interesse particular em desenvolvimento Back-End utilizando Java e Spring Boot. Tenho boas noções de bancos de dados relacionais (MySQL, PostgreSQL, SQL Server) e recentemente tenho aprofundado meus conhecimentos em UI/UX design.",
      },
      downloadEnglishCV: "Baixar currículo em inglês",
      downloadPortugueseCV: "Baixar currículo em português",
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
        headingTertiary: "Acadêmica",
        course: "Curso: ",
        level: "Nível: ",
        levelTechnical: "Técnico",
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

        // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
        // HEADER & FOOTER NAV LINKS
        let dictionary = portuguese.links;
        $("[name='homeLink']").text(dictionary.home);
        $("[name='aboutMeLink']").text(dictionary.about);
        $("[name='qualificationLink']").text(dictionary.qualification);
        $("[name='skillsLink']").text(dictionary.skills);
        $("[name='projectsLink']").text(dictionary.projects);
        $("[name='contactMeLink']").text(dictionary.contact);

        // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
        // HERO
        dictionary = portuguese.hero;
        $("[name='heroHeadingPrimary']").text(dictionary.headingPrimary);
        $("[name='heroSubheading']").text(dictionary.subheading);
        $("[name='heroDescription']").text(dictionary.description);
        $("[name='heroGetInTouch']").text(dictionary.getInTouch);
        $("[name='heroProjects']").text(dictionary.projects);

        // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
        // ABOUT
        dictionary = portuguese.about;
        $("[name='aboutSubheading']").text(dictionary.subheading);
        $("[name='aboutHeadingSecondary']").text(dictionary.headingSecondary);
        $("[name='aboutTextIntro']").text(dictionary.text.intro);
        $("[name='aboutTextProficiency']").text(dictionary.text.proficiency);
        $("[name='aboutDownloadEnglishCV']").text(dictionary.downloadEnglishCV);
        $("[name='aboutDownloadPortugueseCV']").text(
          dictionary.downloadPortugueseCV
        );

        // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
        // QUALIFICATION
        dictionary = portuguese.qualification;
        $("[name='qualificationSubheading']").text(dictionary.subheading);
        $("[name='qualificationHeadingSecondary']").text(
          dictionary.headingSecondary
        );

        // WORK
        dictionary = portuguese.qualification.work;
        $("[name='workHeadingTertiary']").text(dictionary.headingTertiary);
        $("[name='workRole']").text(dictionary.role);
        $("[name='workRoleContent']").text(dictionary.roleContent);
        $("[name='workArea']").text(dictionary.area);
        $("[name='workAreaContent']").text(dictionary.areaContent);
        $("[name='workLevel']").text(dictionary.level);
        $("[name='workLevelContent']").text(dictionary.levelContent);
        $("[name='workCompany']").text(dictionary.company);
        $("[name='workDate']").text(dictionary.date);
        $("[name='workState']").text(dictionary.state);
        $("[name='workAssignments']").text(dictionary.assignments);
        $("[name='workAssignmentsContent']").text(
          dictionary.assignmentsContent
        );
        $("[name='workWebsiteLink']").text(dictionary.websiteLink);

        // EDUCATION
        dictionary = portuguese.qualification.education;
        $("[name='educationHeadingTertiary']").text(dictionary.headingTertiary);
        $("[name='educationCourse']").text(dictionary.course);
        $("[name='educationLevel']").text(dictionary.level);
        $("[name='educationLevelTechnical']").text(dictionary.levelTechnical);
        $("[name='educationInstitute']").text(dictionary.institute);
        $("[name='educationDate']").text(dictionary.date);

        // CERTIFICATIONS
        dictionary = portuguese.qualification.certifications;
        $("[name='certificationHeadingTertiary']").text(
          dictionary.headingTertiary
        );
        $("[name='certificationCourse']").text(dictionary.course);
        $("[name='certificationTotalHours']").text(dictionary.totalHours);
        $("[name='certificationConclusion']").text(dictionary.conclusion);
        $("[name='certificationInstructor']").text(dictionary.instructor);
      }
    }
  });
});
