const birthYear = 1999;
let myAge = new Date().getUTCFullYear() - birthYear;

const dictionary = {
  portuguese: {
    // HEADER & FOOTER NAV LINKS
    linkHome: `Início`,
    linkAbout: `Sobre mim`,
    linkQualification: `Qualificação`,
    linkSkills: `Habilidades`,
    linkProjects: `Projetos`,
    linkContact: `Contate-me`,

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // HERO
    heroHeadingPrimary: `Olá, meu nome é Claudio. Muito prazer.`,
    heroSubheading: `Desenvolvedor Back-End`,
    heroDescription: `Técnico em Informática e Administração, Tecnólogo em Análise e Desenvolvimento de Sistemas em formação`,
    heroGetInTouch: `Entrar em contato`,
    heroProjects: `Veja meus projetos`,

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // ABOUT
    aboutSubheading: `Introdução`,
    aboutHeadingSecondary: `Sobre mim`,
    aboutTextIntro: `Meu nome é Claudio Vinicius Nogueira, tenho ${myAge} anos idade e sou natural de Mauá - SP, Brazil. Tenho formação técnica em informática e administração, e atualmente estou no 6º semestre do curso de tecnólogo em análise e desenvolvimento de sistemas. Tenho 1 ano e meio de experiência como estagiário, e atualmente estou à procura de um cargo de nível trainee ou júnior e seguir carreira na área como programador/desenvolvedor de software. `,
    aboutTextProficiency: `Tenho proficiência em HTML, CSS, Javascript e Java, com interesse particular em desenvolvimento Back-End utilizando Java e Spring Boot. Tenho boas noções de bancos de dados relacionais (MySQL, PostgreSQL, SQL Server) e recentemente tenho aprofundado meus conhecimentos em UI/UX design.`,
    aboutDownloadEnglishCV: `Baixar currículo em inglês`,
    aboutDownloadPortugueseCV: `Baixar currículo em português`,

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // QUALIFICATION
    qualificationSubheading: `Minha jornada pessoal`,
    qualificationHeadingSecondary: `Qualificação`,

    // QUALIFICATION WORK
    qualificationWorkHeadingTertiary: `Profissional`,
    qualificationWorkRole: `Cargo: `,
    qualificationWorkRoleContent: `Estagiário de desenvolvimento de sistemas`,
    qualificationWorkArea: `Área: `,
    qualificationWorkAreaContent: `Informática, TI, Telecomunicações (TI)`,
    qualificationWorkLevel: `Nível: `,
    qualificationWorkLevelContent: `Estagiário`,
    qualificationWorkCompany: `Empresa: `,
    qualificationWorkDate: `Período: `,
    qualificationWorkState: `Estado: `,
    qualificationWorkAssignments: `Atribuições do cargo: `,
    qualificationWorkAssignmentsContent: `Acompanhamento supervisionado nas operações de sistemas, colaborar no desenvolvimento de novos projetos que envolvam sistemas, conduzir apoio em pequenos desenvolvimentos de sistemas, conduzir avaliação e configuração de ferramentas de desenvolvimento de sistemas, conduzir o auxílio na alimentação do banco de dados nosistema, oferecer suporte interno na implantação de sistemas, operacionalizar codificação de programas.`,
    qualificationWorkWebsiteLink: `Ver site da empresa`,

    // QUALIFICATION EDUCATION
    qualificationEducationHeadingTertiary: `Acadêmica`,
    qualificationEducationCourse: `Curso: `,
    qualificationEducationLevel: `Nível: `,
    qualificationEducationLevelTechnical: `Técnico`,
    qualificationEducationInstitute: `Instituição: `,
    qualificationEducationDate: `Período: `,
    qualificationEducationWebsiteLink: `Ver site da instituição `,

    // QUALIFICATION CERTIFICATIONS
    qualificationCertificationsHeadingTertiary: `Certificações`,
    qualificationCertificationsCourse: `Curso: `,
    qualificationCertificationsTotalHours: `Total de horas: `,
    qualificationCertificationsConclusion: `Conclusão: `,
    qualificationCertificationsInstructor: `Instrutor: `,
    qualificationCertificationsCourseLink: `Site do curso `,

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // SKILLS
    skillsSubheading: `Meu Repertório Técnico`,
    skillsHeadingSecondary: `Minhas habilidades`,

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // PROJECTS
    projectsSubheading: `Meus Trabalhos Mais Recentes`,
    projectsheadingSecondary: `Meus Projetos`,
    projectslivePreview: `Ver projeto no ar`,
    projectsnotLive: `⚠ Fora do ar`,
    projectsviewCode: `Ver código`,

    // PROJECTS - SIMON GAME
    projectsSimonDescription: `O jogo mostra a primeira cor e toca o som correspondente na sequência (exemplo: verde). O jogador deve prestar atenção e clicar o botão certo (verde). Então, o jogo segue e mostra a próxima cor e som correspondente (exemplo: amarelo), e o jogador tem que lembrar a sequência (primeiro verde depois ...), amarelo e assim o jogo vai seguindo. Se o jogador errar o sequência, o jogo termina.`,

    // PROJECTS - QUIZ APP
    projectsQuizDescription: `Quiz com 10 questões (em português) de conhecimentos gerais. Cada questão tem um resposta correta. Depois da décima questão, é demonstrada a quantidade de acertos. Na página de pontuação existe um botão para recomeçar o quiz.`,

    // PROJECTS - KEEPER APP
    projectsKeeperDescription: `Clone do Google Keep feito com ReactJS e Material UI`,

    // PROJECTS - LOGISTICS API
    projectsLogisticsApiDescription: `Interface de Programação de Aplicações (Application Programming Interface) desenvolvida utilizando arquitetura REST (REpresentational State Transfer) destinada a um projeto de logística de entregas.`,

    // PROJECTS - DRUM KIT
    projectsDrumKitDescription: `Kit de baterias desenvolvimento utilizando HTML, CSS e Javascript. Clique nos botões ou pressione as teclas correspondentes.`,

    // PROJECTS - NEWS PROJECT
    projectsNewsProjectDescription: `Interface de Programação de Aplicações (Application Programming Interface) desenvolvida utilizando arquitetura REST (REpresentational State Transfer) destinada a um projeto de jornal online.`,

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // CONTACT
    contactSubheading: `Entrar em contato`,
    contactHeadingSecondary: `Contate-me`,

    contactCallMe: `Me ligue: `,
    contactEmailMe: `Me envie um email: `,
    contactMyLocation: `Minha localização: `,

    contactFormYourName: `Seu nome: `,
    contactFormYourEmail: `Seu E-mail: `,
    contactFormMessage: `Mensagem: `,
    contactFormPlaceholder: `e.g: Eu quero te contratar`,
    contactFormSend: `Enviar `,

    // ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////
    // FOOTER
    footerSubheading: `Desenvolvedor Back-End`,
  },
};

// SWITCH LANGUAGE
// Language changing function to PORTUGUESE
function translateToPortuguese() {
  const portuguese = dictionary.portuguese;
  // Convert portugueses object to array and map throw each value (which are the object attributes)
  Object.entries(portuguese).map((attribute) => {
    // attribute[0] = name of the attribute, which is the same name of the name attributes in the HTML
    // attribute[1] = value of the attribute (translated words and sentences)
    $(`[name="${attribute[0]}"]`).text(attribute[1]);
  });
}

document.getElementsByName(`changeLanguage`).forEach((button) => {
  button.addEventListener(`click`, () => {
    const switchLabel = document.getElementById(`switch-label`);
    if (button.classList.contains(`on`)) {
      switchLabel.textContent = `Trocar idioma para português`;
      location.reload();
    } else {
      switchLabel.textContent = `Change language to english`;
      translateToPortuguese();
    }

    button.classList.toggle(`on`);
  });
});
