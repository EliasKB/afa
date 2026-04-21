import { chapterEvents } from './chapterEvents';

function withChapterEvents(language, items) {
  return items.map((item) => ({
    ...item,
    ...(chapterEvents[language][item.id] ?? {}),
  }));
}

export const siteContent = {
  sv: {
    navigation: {
      about: 'Om oss',
      chapters: 'Lokalavdelningar',
      purpose: 'Syfte & mål',
      policy: 'Regler & policy',
      news: 'Nyheter',
      contact: 'Kontakta oss',
      support: 'Stöd oss',
      engage: 'Engagera dig',
    },
    header: {
      brandName: 'AFA',
      utilityLinks: [
        { label: 'Stöd oss', target: 'support' },
        { label: 'Kontakt', target: 'contact' },
      ],
      languageToggle: 'EN',
      languageToggleAria: 'Byt till engelska',
      themeToggleAria: 'Byt tema',
      themeLabels: {
        dark: 'Light',
        light: 'Dark',
      },
      menuButtonLabel: 'Meny',
      menuButtonAria: 'Öppna sektionsmenyn',
      menuTitle: 'Navigera',
    },
    hero: {
      eyebrow: 'Nationellt akademiskt nätverk',
      title: 'AFA',
      subtitle: 'Akademiker från Afghanistan',
      tagline: 'Connecting Minds, Empowering Futures.',
      lead:
        'AFA samlar afghanska akademiker i Sverige i ett professionellt nätverk för kunskapsutbyte, yrkesmässig utveckling och långsiktig gemenskap.',
      body: '',
      primaryAction: {
        label: 'Läs om AFA',
        target: 'about',
      },
      secondaryAction: {
        label: 'Se våra mål',
        target: 'purpose',
      },
      socialLabel: 'Sociala medier',
      socialPrompt: 'Följ och anslut till oss på sociala medier',
      socialLinks: [
        { label: 'Discord', icon: 'discord', href: 'https://discord.gg/9RSMFK6W' },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/109980083' },
      ],
    },
    sidebar: {
      eyebrow: 'Regional närvaro',
      title: 'AFA:s lokalavdelningar',
      text:
        'Den fasta vänsterspalten visar hur organisationen är förankrad lokalt och leder vidare till kapitel som kan öppnas vid behov.',
      chapters: [
        { label: 'AFA Stockholm', target: 'chapter-stockholm' },
        { label: 'AFA Väst', target: 'chapter-west' },
        { label: 'AFA Söder', target: 'chapter-south' },
        { label: 'AFA Norrland', target: 'chapter-norrland' },
      ],
    },
    news: {
      id: 'news',
      eyebrow: 'Aktuellt',
      title: 'Nyheter',
      intro:
        'Uppdateringar presenteras i en tydlig och saklig form för att visa aktivitet, riktning och organisatorisk utveckling.',
      items: [
        {
          date: '20 april 2026',
          title: 'Lanseringsfas för webbplats och organisation',
          text:
            'AFA etablerar nu sin digitala närvaro med fokus på trovärdig information, tydlig struktur och långsiktig kommunikation.',
        },
        {
          date: 'Maj 2026',
          title: 'Regional organisering fortsätter',
          text:
            'Arbetet med att definiera AFA Stockholm, AFA Väst, AFA Söder och AFA Norrland fortsätter för att skapa tydliga kontaktpunkter i hela landet.',
        },
        {
          date: 'Kommande',
          title: 'Seminarier och mentorskap under planering',
          text:
            'Kommande initiativ kommer att presenteras som professionella aktiviteter med fokus på nätverk, karriärstöd och kunskapsdelning.',
        },
      ],
    },
    about: {
      id: 'about',
      eyebrow: 'Om AFA',
      title: 'En seriös samlingspunkt för afghanska akademiker i Sverige',
      intro:
        'AFA ska presenteras som en organisation med tydligt syfte, professionell identitet och en långsiktig ambition att skapa värde för medlemmar och samhälle.',
      paragraphs: [
        'Academics from Afghanistan, AFA, är en ideell community i Sverige som stöttar akademiker med afghansk bakgrund.',
        'Målet är att hjälpa medlemmar att omsätta sin kompetens till framgångsrika karriärer och bidra till samhällsutveckling både i Sverige och i Afghanistan.',
        'AFA är ett växande nätverk där afghanska akademiker kan mötas kring arbete, utbildning, erfarenhetsutbyte och gemensam utveckling. Sidan ska kommunicera trovärdighet, struktur och ansvarstagande snarare än kampanjkänsla.',
        'Innehållet ska hjälpa besökare att snabbt förstå organisationens roll: en plattform för samverkan, professionella relationer och kunskapsdelning mellan personer med olika bakgrund, kompetenser och regional förankring.',
      ],
      highlights: [
        'Professionell identitet',
        'Nationellt nätverk',
        'Kunskapsutbyte',
        'Lokal förankring',
      ],
      meetingLabel: 'Möten',
      meetingInfo: 'Torsdagar kl. 19:00, jämna veckor.',
      focusAreasTitle: 'Fokusområden',
      focusAreas: [
        {
          title: 'Karriärstöd',
          description: 'Mentorskap, karriärcoachning och CV-granskning.',
        },
        {
          title: 'Kunskapsutbyte',
          description: 'Kurser, YouTube-innehåll och diskussionsforum.',
        },
        {
          title: 'Innovation',
          description: 'Främjar entreprenörskap och nya initiativ, till exempel hackathons.',
        },
        {
          title: 'Samhällsbidrag',
          description: 'Inspirerar unga och stödjer utbildningsinsatser i Afghanistan.',
        },
      ],
    },
    purpose: {
      id: 'purpose',
      eyebrow: 'Inriktning',
      title: 'Syfte och mål',
      intro:
        'Målen ska presenteras som ett tydligt arbetsprogram, inte som marknadsförande slogans. Nummerordning och god läsbarhet är viktigare än dekorativa boxar.',
      goals: [
        'Hjälpa akademiker i Sverige att hitta eller byta jobb.',
        'Stötta varandra med CV, ansökningar och jobbsökning.',
        'Bygga kompetens inom gruppen genom erfarenhetsutbyte.',
        'Synliggöra nätverket för fler akademiska och professionella målgrupper.',
        'Stötta småföretagare och startups inom nätverket.',
        'Hjälpa unga med vägledning kring utbildningsval.',
        'Bidra till hemlandet genom utbildningsinsatser och kunskapsstöd.',
        'Erbjuda kurser där medlemmar lär av varandra.',
        'Bygga nätverk med andra akademiker, arbetsgivare och företag.',
        'Utveckla framtida initiativ som YouTube-kanal och Startup Hackathon.',
      ],
    },
    chapters: {
      id: 'chapters',
      eyebrow: 'Lokal närvaro',
      title: 'Lokalavdelningar',
      intro:
        'När sektionen öppnas ska varje lokalavdelning framstå som en del av en större nationell struktur, med kortfattad men professionell information.',
      items: withChapterEvents('sv', [
        {
          id: 'chapter-stockholm',
          label: 'Lokalavdelning',
          title: 'AFA Stockholm',
          summary:
            'Fokus på nätverk, seminarier och professionella mötesplatser i Stockholmsregionen.',
        },
        {
          id: 'chapter-west',
          label: 'Lokalavdelning',
          title: 'AFA Väst',
          summary:
            'Samlar medlemmar i västra Sverige kring karriärfrågor, lokala initiativ och regional samverkan.',
        },
        {
          id: 'chapter-south',
          label: 'Lokalavdelning',
          title: 'AFA Söder',
          summary:
            'Skapar utrymme för kunskapsutbyte, medlemsaktiviteter och professionella kontakter i södra Sverige.',
        },
        {
          id: 'chapter-norrland',
          label: 'Lokalavdelning',
          title: 'AFA Norrland',
          summary:
            'Binder samman akademiker i norra Sverige och stärker kontaktytor över större geografiska avstånd.',
        },
      ]),
    },
    policy: {
      id: 'policy',
      eyebrow: 'Riktlinjer',
      title: 'Regler och policy',
      intro:
        'Policysektionen ska vara enkel att läsa och signalera trygghet, seriositet och professionella ramar för gemenskapen.',
      groups: [
        {
          title: 'Respekt och hövlighet',
          items: [
            'Alla deltagare ska bemötas med vänlighet och respekt.',
            'Diskriminering, hat och trakasserier accepteras inte.',
            'Språket ska vara vårdat, sakligt och inkluderande.',
          ],
        },
        {
          title: 'Relevanta inlägg',
          items: [
            'Diskussioner ska vara akademiska, professionella och konstruktiva.',
            'Politik och andra polariserande ämnen bör undvikas.',
            'Delat material ska vara relevant och tillföra värde.',
          ],
        },
        {
          title: 'Ingen spam eller reklam',
          items: [
            'Ingen reklam för personliga tjänster eller projekt utan godkännande.',
            'Massutskick, kedjemeddelanden och irrelevanta länkar är inte tillåtna.',
          ],
        },
        {
          title: 'Sekretess och trygghet',
          items: [
            'Känsliga personuppgifter ska inte delas.',
            'Anonymitet och integritet ska respekteras när medlemmar önskar det.',
          ],
        },
      ],
    },
    contact: {
      id: 'contact',
      eyebrow: 'Kontakt',
      title: 'Kontakta oss',
      intro:
        'Kontaktsektionen ska vara rak och professionell, med tydliga kontaktvägar och kort status där information ännu inte finns tillgänglig.',
      items: [
        { label: 'E-post', detail: 'Academicsfromafghanistan@gmail.com' },
        { label: 'Sociala medier', detail: 'Kommer snart' },
        { label: 'Community', detail: 'Kommer snart' },
      ],
    },
    support: {
      id: 'support',
      eyebrow: 'Bidra',
      title: 'Stöd oss',
      intro:
        'Den här delen ska signalera att stöd kan vara ekonomiskt, kompetensbaserat eller samarbetsinriktat utan att kännas som aggressiv insamling.',
      items: [
        { label: 'Ekonomiskt stöd', detail: 'Kommer snart' },
        { label: 'Dela kompetens', detail: 'Kommer snart' },
        { label: 'Samarbeta', detail: 'Kommer snart' },
      ],
    },
    engage: {
      id: 'engage',
      eyebrow: 'Delta',
      title: 'Engagera dig',
      intro:
        'Besökaren ska förstå att medlemskap, volontärinsatser och mentorskap är vägar in i organisationen, även om detaljer publiceras senare.',
      items: [
        { label: 'Bli medlem', detail: 'Kommer snart' },
        { label: 'Volontär', detail: 'Kommer snart' },
        { label: 'Mentorskap', detail: 'Kommer snart' },
      ],
    },
    footer: {
      title: 'AFA',
      tagline: 'Connecting Minds, Empowering Futures.',
      overviewTitle: 'Om AFA',
      overviewLinks: [
        { label: 'Om oss', target: 'about' },
        { label: 'Syfte & mål', target: 'purpose' },
        { label: 'Lokalavdelningar', target: 'chapters' },
      ],
      participateTitle: 'Delta',
      participateLinks: [
        { label: 'Nyheter', target: 'news' },
        { label: 'Stöd oss', target: 'support' },
        { label: 'Engagera dig', target: 'engage' },
      ],
      contactTitle: 'Kontakt',
      contactDetails: [
        'Academicsfromafghanistan@gmail.com',
      ],
      copyright: '© 2026 AFA. Alla rättigheter förbehållna.',
    },
  },
  en: {
    navigation: {
      about: 'About Us',
      chapters: 'Local Chapters',
      purpose: 'Purpose & Goals',
      policy: 'Rules & Policy',
      news: 'News',
      contact: 'Contact Us',
      support: 'Support Us',
      engage: 'Get Involved',
    },
    header: {
      brandName: 'AFA',
      utilityLinks: [
        { label: 'Support Us', target: 'support' },
        { label: 'Contact', target: 'contact' },
      ],
      languageToggle: 'SV',
      languageToggleAria: 'Switch to Swedish',
      themeToggleAria: 'Toggle theme',
      themeLabels: {
        dark: 'Light',
        light: 'Dark',
      },
      menuButtonLabel: 'Menu',
      menuButtonAria: 'Open section menu',
      menuTitle: 'Navigate',
    },
    hero: {
      eyebrow: 'National academic network',
      title: 'AFA',
      subtitle: 'Academics for Afghanistan',
      tagline: 'Connecting Minds, Empowering Futures.',
      lead:
        'AFA brings together Afghan academics in Sweden through a professional network focused on knowledge exchange, career development, and long-term community.',
      body: '',
      primaryAction: {
        label: 'Learn About AFA',
        target: 'about',
      },
      secondaryAction: {
        label: 'See Our Goals',
        target: 'purpose',
      },
      socialLabel: 'Social media',
      socialPrompt: 'Join us on social media',
      socialLinks: [
        { label: 'Discord', icon: 'discord', href: 'https://discord.gg/9RSMFK6W' },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/109980083' },
      ],
    },
    sidebar: {
      eyebrow: 'Regional presence',
      title: 'AFA Local Chapters',
      text:
        'The permanent sidebar shows how the organization is rooted locally and leads to chapter entries that can be opened when needed.',
      chapters: [
        { label: 'AFA Stockholm', target: 'chapter-stockholm' },
        { label: 'AFA West', target: 'chapter-west' },
        { label: 'AFA South', target: 'chapter-south' },
        { label: 'AFA Norrland', target: 'chapter-norrland' },
      ],
    },
    news: {
      id: 'news',
      eyebrow: 'Updates',
      title: 'News',
      intro:
        'Updates should appear in a clear editorial format that signals activity, direction, and organizational development.',
      items: [
        {
          date: 'April 20, 2026',
          title: 'Website and organization launch phase',
          text:
            'AFA is establishing its digital presence with an emphasis on credible information, clear structure, and long-term communication.',
        },
        {
          date: 'May 2026',
          title: 'Regional organization continues',
          text:
            'Work is ongoing to define AFA Stockholm, AFA West, AFA South, and AFA Norrland as clear contact points across Sweden.',
        },
        {
          date: 'Coming soon',
          title: 'Seminars and mentorship in preparation',
          text:
            'Upcoming initiatives will be presented as professional activities focused on networking, career support, and knowledge sharing.',
        },
      ],
    },
    about: {
      id: 'about',
      eyebrow: 'About AFA',
      title: 'A serious platform for Afghan academics in Sweden',
      intro:
        'AFA should be presented as an organization with a clear purpose, a professional identity, and a long-term ambition to create value for members and society.',
      paragraphs: [
        'Academics from Afghanistan, AFA, is a non-profit community in Sweden that supports academics with an Afghan background.',
        'Its goal is to help members turn their competence into successful careers and contribute to social development in both Sweden and Afghanistan.',
        'AFA is a growing network where Afghan academics can connect around work, education, knowledge exchange, and shared development. The site should communicate credibility, structure, and responsibility rather than campaign energy.',
        'The content should help visitors quickly understand the organization’s role: a platform for collaboration, professional relationships, and shared knowledge among people with different backgrounds, competencies, and regional ties.',
      ],
      highlights: [
        'Professional identity',
        'National network',
        'Knowledge exchange',
        'Local presence',
      ],
      meetingLabel: 'Meetings',
      meetingInfo: 'Thursdays at 19:00, every other week.',
      focusAreasTitle: 'Focus Areas',
      focusAreas: [
        {
          title: 'Career Support',
          description: 'Mentorship, career coaching, and CV review.',
        },
        {
          title: 'Knowledge Exchange',
          description: 'Courses, YouTube content, and discussion forums.',
        },
        {
          title: 'Innovation',
          description: 'Encourages entrepreneurship and new initiatives, such as hackathons.',
        },
        {
          title: 'Community Contribution',
          description: 'Inspires young people and supports educational efforts in Afghanistan.',
        },
      ],
    },
    purpose: {
      id: 'purpose',
      eyebrow: 'Direction',
      title: 'Purpose and Goals',
      intro:
        'The goals should read like a structured work program rather than promotional slogans. Numbering and readability matter more than decorative boxes.',
      goals: [
        'Help academics in Sweden find or change jobs.',
        'Support one another with CVs, applications, and job searches.',
        'Build competence within the group through shared experience.',
        'Increase visibility among wider academic and professional audiences.',
        'Support entrepreneurs and startups within the network.',
        'Help young people navigate educational choices.',
        'Support the homeland through education initiatives and knowledge sharing.',
        'Offer courses where members learn from one another.',
        'Build networks with other academics, employers, and companies.',
        'Develop future initiatives such as a YouTube channel and a Startup Hackathon.',
      ],
    },
    chapters: {
      id: 'chapters',
      eyebrow: 'Local presence',
      title: 'Local Chapters',
      intro:
        'When opened, each chapter should feel like part of a broader national structure, with concise but professional information.',
      items: withChapterEvents('en', [
        {
          id: 'chapter-stockholm',
          label: 'Local chapter',
          title: 'AFA Stockholm',
          summary:
            'Focused on networking, seminars, and professional meeting points in the Stockholm region.',
        },
        {
          id: 'chapter-west',
          label: 'Local chapter',
          title: 'AFA West',
          summary:
            'Brings together members in western Sweden around careers, local initiatives, and regional collaboration.',
        },
        {
          id: 'chapter-south',
          label: 'Local chapter',
          title: 'AFA South',
          summary:
            'Creates space for knowledge exchange, member activities, and professional contacts in southern Sweden.',
        },
        {
          id: 'chapter-norrland',
          label: 'Local chapter',
          title: 'AFA Norrland',
          summary:
            'Connects academics in northern Sweden and strengthens collaboration across greater geographic distances.',
        },
      ]),
    },
    policy: {
      id: 'policy',
      eyebrow: 'Guidelines',
      title: 'Rules and Policy',
      intro:
        'The policy section should be easy to read and signal safety, seriousness, and professional expectations for the community.',
      groups: [
        {
          title: 'Respect and courtesy',
          items: [
            'Everyone should be treated with kindness and respect.',
            'Discrimination, hate, and harassment are not accepted.',
            'Language should remain considerate, factual, and inclusive.',
          ],
        },
        {
          title: 'Relevant posts',
          items: [
            'Discussions should remain academic, professional, and constructive.',
            'Politics and other polarizing topics should be avoided.',
            'Shared material should be relevant and useful.',
          ],
        },
        {
          title: 'No spam or advertising',
          items: [
            'No promotion of personal services or projects without approval.',
            'Mass messages, chain messages, and irrelevant links are not allowed.',
          ],
        },
        {
          title: 'Privacy and safety',
          items: [
            'Sensitive personal information should not be shared.',
            'Privacy and anonymity should be respected when members request it.',
          ],
        },
      ],
    },
    contact: {
      id: 'contact',
      eyebrow: 'Contact',
      title: 'Contact Us',
      intro:
        'The contact section should be direct and professional, with clear routes and short status notes where information is still pending.',
      items: [
        { label: 'Email', detail: 'Academicsfromafghanistan@gmail.com' },
        { label: 'Social media', detail: 'Coming soon' },
        { label: 'Community', detail: 'Coming soon' },
      ],
    },
    support: {
      id: 'support',
      eyebrow: 'Contribute',
      title: 'Support Us',
      intro:
        'This section should signal that support can be financial, expertise-based, or collaborative without feeling like aggressive fundraising.',
      items: [
        { label: 'Financial support', detail: 'Coming soon' },
        { label: 'Share expertise', detail: 'Coming soon' },
        { label: 'Collaborate', detail: 'Coming soon' },
      ],
    },
    engage: {
      id: 'engage',
      eyebrow: 'Participate',
      title: 'Get Involved',
      intro:
        'Visitors should understand that membership, volunteering, and mentorship are entry points into the organization even when full details are published later.',
      items: [
        { label: 'Become a member', detail: 'Coming soon' },
        { label: 'Volunteer', detail: 'Coming soon' },
        { label: 'Mentorship', detail: 'Coming soon' },
      ],
    },
    footer: {
      title: 'AFA',
      tagline: 'Connecting Minds, Empowering Futures.',
      overviewTitle: 'About AFA',
      overviewLinks: [
        { label: 'About Us', target: 'about' },
        { label: 'Purpose & Goals', target: 'purpose' },
        { label: 'Local Chapters', target: 'chapters' },
      ],
      participateTitle: 'Participate',
      participateLinks: [
        { label: 'News', target: 'news' },
        { label: 'Support Us', target: 'support' },
        { label: 'Get Involved', target: 'engage' },
      ],
      contactTitle: 'Contact',
      contactDetails: [
        'Academicsfromafghanistan@gmail.com',
      ],
      copyright: '© 2026 AFA. All rights reserved.',
    },
  },
};
