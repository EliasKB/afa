import { chapterEvents } from './chapterEvents';
import eventApril19Image1 from '../assets/IMG_20260419_232456_132.jpg';
import eventApril19Image2 from '../assets/IMG_20260419_232456_1321.jpg';

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
    navigationHints: {
      about: 'vilka vi är',
      purpose: 'tio mål',
      policy: 'våra regler',
      chapters: 'fyra regioner',
      support: 'bidra ekonomiskt',
      engage: 'bli aktiv',
      news: 'senaste nytt',
      contact: 'nå oss',
    },
    navigationGroups: {
      'who-we-are': 'Vem vi är',
      'get-involved': 'Engagera dig',
      'follow': 'Följ oss',
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
      eyebrow: '',
      title: 'AFA',
      subtitle: 'Akademiker från Afghanistan',
      tagline: 'Connecting Minds, Empowering Futures.',
      lead:
        'AFA samlar svenska akademiker med rötter i Afghanistan i ett professionellt nätverk för kunskapsutbyte, yrkesmässig utveckling och långsiktig gemenskap.',
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
      text: '',
      chapters: [
        { label: 'AFA Stockholm', target: 'chapter-stockholm', accent: 'ocean' },
        { label: 'AFA Väst', target: 'chapter-west', accent: 'violet' },
        { label: 'AFA Söder', target: 'chapter-south', accent: 'sun' },
        { label: 'AFA Norrland', target: 'chapter-norrland', accent: 'frost' },
      ],
    },
    news: {
      id: 'news',
      eyebrow: '',
      title: 'Nyheter',
      intro: '',
      items: [
        {
          date: '19 april 2026',
          title: 'Tack för en fantastisk dag!',
          text: 'Vi är djupt tacksamma för alla er som var med och bidrog till att göra dagen så speciell.',
          images: [
            { src: eventApril19Image1, alt: 'Bilder från AFA-evenemang 19 april 2026' },
            { src: eventApril19Image2, alt: 'Bilder från AFA-evenemang 19 april 2026' },
          ],
          body: [
            'Vi vill rikta ett varmt tack till er alla som bidrog till en fantastisk dag! Det är tack vare er närvaro och engagemang som dagen blev så minnesvärd och fylld av glädje.',
          ],
          link: { label: 'Besök vårt Instagram för fler bilder och videos', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        },
        {
          date: '2 maj 2026',
          upcoming: true,
          title: 'AFA Event #4: Inspirationsdag Göteborg',
          text:
            'Nästa stopp är Göteborg — en dag fylld av karriärsamtal, CV-tips och entreprenörskap på Krokslätts Fabriker i Mölndal. Start kl. 13:00. Du får ta med upp till tre gäster. Anmäl dig via Discord senast 1 maj.',
        },
        {
          date: 'Kommande',
          upcoming: true,
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
      eyebrow: '',
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
      eyebrow: '',
      title: 'Lokalavdelningar',
      intro: '',
      items: withChapterEvents('sv', [
        {
          id: 'chapter-stockholm',
          label: '',
          title: 'AFA Stockholm',
          accent: 'ocean',
          summary:
            'Fokus på nätverk, seminarier och professionella mötesplatser i Stockholmsregionen.',
        },
        {
          id: 'chapter-west',
          label: '',
          title: 'AFA Väst',
          accent: 'violet',
          summary:
            'Samlar medlemmar i västra Sverige kring karriärfrågor, lokala initiativ och regional samverkan.',
        },
        {
          id: 'chapter-south',
          label: '',
          title: 'AFA Söder',
          accent: 'sun',
          summary:
            'Skapar utrymme för kunskapsutbyte, medlemsaktiviteter och professionella kontakter i södra Sverige.',
        },
        {
          id: 'chapter-norrland',
          label: '',
          title: 'AFA Norrland',
          accent: 'frost',
          summary:
            'Binder samman akademiker i norra Sverige och stärker kontaktytor över större geografiska avstånd.',
        },
      ]),
    },
    policy: {
      id: 'policy',
      eyebrow: '',
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
      eyebrow: '',
      title: 'Kontakta oss',
      intro: '',
      channels: [
        { label: 'E-post', hint: 'Skriv till oss', icon: 'email', href: 'mailto:Academicsfromafghanistan@gmail.com' },
        { label: 'Discord', hint: 'Gå med i communityt', icon: 'discord', href: 'https://discord.gg/9RSMFK6W' },
        { label: 'Instagram', hint: 'Följ oss', icon: 'instagram', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        { label: 'LinkedIn', hint: 'Koppla upp dig', icon: 'linkedin', href: 'https://www.linkedin.com/company/109980083' },
      ],
    },
    support: {
      id: 'support',
      eyebrow: '',
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
      eyebrow: '',
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
      socialLinks: [
        { label: 'Discord', icon: 'discord', href: 'https://discord.gg/9RSMFK6W' },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/109980083' },
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
    navigationHints: {
      about: 'who we are',
      purpose: 'our 10 goals',
      policy: 'our standards',
      chapters: 'four regions',
      support: 'fund our work',
      engage: 'join us',
      news: 'latest updates',
      contact: 'reach the team',
    },
    navigationGroups: {
      'who-we-are': 'Who We Are',
      'get-involved': 'Get Involved',
      'follow': 'Follow',
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
      menuTitle: '',
    },
    hero: {
      eyebrow: '',
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
      text: '',
      chapters: [
        { label: 'AFA Stockholm', target: 'chapter-stockholm', accent: 'ocean' },
        { label: 'AFA West', target: 'chapter-west', accent: 'violet' },
        { label: 'AFA South', target: 'chapter-south', accent: 'sun' },
        { label: 'AFA Norrland', target: 'chapter-norrland', accent: 'frost' },
      ],
    },
    news: {
      id: 'news',
      eyebrow: '',
      title: 'News',
      intro: '',
      items: [
        {
          date: 'April 19, 2026',
          title: 'Thank you for an amazing day!',
          text: 'We are deeply grateful for everyone who was there and helped make the day so special.',
          images: [
            { src: eventApril19Image1, alt: 'Photos from the AFA event on April 19, 2026' },
            { src: eventApril19Image2, alt: 'Photos from the AFA event on April 19, 2026' },
          ],
          body: [
            'We want to extend a warm thank you to all of you who contributed to a fantastic day! It is thanks to your presence and engagement that the day became so memorable and full of joy.',
          ],
          link: { label: 'Visit our Instagram for more photos and videos', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        },
        {
          date: 'May 2, 2026',
          upcoming: true,
          title: 'AFA Event #4: Inspiration Day Gothenburg',
          text:
            'Next stop is Gothenburg — a full day of career talks, CV tips, and entrepreneurship at Krokslätts Fabriker in Mölndal. Doors open at 13:00. You may bring up to three guests. Register via Discord by May 1.',
        },
        {
          date: 'Coming soon',
          upcoming: true,
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
      eyebrow: '',
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
      eyebrow: '',
      title: 'Local Chapters',
      intro: '',
      items: withChapterEvents('en', [
        {
          id: 'chapter-stockholm',
          label: '',
          title: 'AFA Stockholm',
          accent: 'ocean',
          summary:
            'Focused on networking, seminars, and professional meeting points in the Stockholm region.',
        },
        {
          id: 'chapter-west',
          label: '',
          title: 'AFA West',
          accent: 'violet',
          summary:
            'Brings together members in western Sweden around careers, local initiatives, and regional collaboration.',
        },
        {
          id: 'chapter-south',
          label: '',
          title: 'AFA South',
          accent: 'sun',
          summary:
            'Creates space for knowledge exchange, member activities, and professional contacts in southern Sweden.',
        },
        {
          id: 'chapter-norrland',
          label: '',
          title: 'AFA Norrland',
          accent: 'frost',
          summary:
            'Connects academics in northern Sweden and strengthens collaboration across greater geographic distances.',
        },
      ]),
    },
    policy: {
      id: 'policy',
      eyebrow: '',
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
      eyebrow: '',
      title: 'Contact Us',
      intro: '',
      channels: [
        { label: 'Email', hint: 'Write to us', icon: 'email', href: 'mailto:Academicsfromafghanistan@gmail.com' },
        { label: 'Discord', hint: 'Join the community', icon: 'discord', href: 'https://discord.gg/9RSMFK6W' },
        { label: 'Instagram', hint: 'Follow us', icon: 'instagram', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        { label: 'LinkedIn', hint: 'Connect with us', icon: 'linkedin', href: 'https://www.linkedin.com/company/109980083' },
      ],
    },
    support: {
      id: 'support',
      eyebrow: '',
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
      eyebrow: '',
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
      socialLinks: [
        { label: 'Discord', icon: 'discord', href: 'https://discord.gg/9RSMFK6W' },
        { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/academics_from_afghanistan/' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/109980083' },
      ],
      copyright: '© 2026 AFA. All rights reserved.',
    },
  },
};
