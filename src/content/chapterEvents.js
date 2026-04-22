import gothenburgPoster from '../assets/events/gothenburg_event_andraMaj.png';
import stockholmMarchPoster from '../assets/events/stockholm_event_firstMars.png';
import stockholmAprilPoster from '../assets/events/stockholm_evet_19April.png';

export const chapterEvents = {
  sv: {
    'chapter-west': {
      events: [
        {
          id: 'event-gothenburg-2026-05-02',
          title: 'AFA Event #4: Inspirationsdag Göteborg',
          date: '2 maj 2026',
          location: 'Krokslätts Fabriker, Mölndal',
          paragraphs: [
            'En dag fylld av motivation, karriärutveckling, CV-tips och entreprenörskap — välkommen till Göteborg!',
            'Nu är det dags för årets fjärde event och den här gången återvänder vi till Göteborg! Under dagen kommer fokus att ligga på inspiration och personlig utveckling — med föreläsningar om karriär, CV-byggande och entreprenörskap inom flera spännande branscher.',
            'Ta med dig någon du vill inspirera — du får ta med upp till tre gäster. Kom i god tid, då sena ankomster inte garanteras insläpp.',
            'Vi ser verkligen fram emot att komma tillbaka till Göteborg och lära känna fler av er! Start kl. 13:00.',
          ],
          bullets: [
            'Intro & mingel — välkommen och lär känna varandra',
            'Föreläsningar om karriär — bygg, AI, projektledning och fler branscher',
            'Gruppmatchning & idégenerering — samarbete och kreativt tänkande',
            'Middag & mingel med utsikt — avslutning med mat och nätverkande',
          ],
          closing: 'Anmäl dig via Discord. Ange eventuella gäster — upp till tre personer. Sista anmälningsdag: 1 maj 2026.',
          image: {
            src: gothenburgPoster,
            alt: 'Affisch för AFA Väst Inspirationsdag Göteborg den 2 maj 2026',
          },
        },
      ],
    },
    'chapter-stockholm': {
      events: [
        {
          id: 'event-stockholm-2026-04-19',
          title: 'AFA Event #3: Entreprenörskap Acceleration',
          date: '19 april 2026',
          location: 'Kistatornet',
          paragraphs: [
            'Vi tar nästa steg och gör det från toppen. Välkommen till en dag av action på sista våningen i Kistatornet.',
            'Ta gärna med en person som inte har studerat på universitet eller någon med minst fem års erfarenhet inom exempelvis vård, industri, försvar, IT eller juridik.',
          ],
          bullets: [
            'Intro och mingel',
            'Deep dive i AI-applikationer och startups',
            'Gruppmatchning och idégenerering',
            'Pitch-tävling',
            'Middag och mingel med utsikt över Stockholm',
          ],
          closing:
            'Anmäl dig genom att reagera med ✅ och markera din gäst med 1️⃣, 2️⃣ eller 3️⃣.',
          image: {
            src: stockholmAprilPoster,
            alt: 'Affisch för AFA Stockholm Entreprenörskap Acceleration den 19 april 2026',
          },
        },
        {
          id: 'event-stockholm-2026-03-01',
          title: 'Entreprenörskapsdagen',
          date: '1 mars 2026',
          location: 'Luntmakargatan 22, Stockholm',
          paragraphs: [
            'Platserna var begränsade och medlemmar fick informationen före resten av gruppen för att vi skulle kunna planera rätt.',
            'Agenda presenterades på plats.',
            'Det bjöds på snacks och dryck, och gruppen åkte vidare till restaurang runt 17:00 för att hinna till iftar.',
            'Ta med laptop.',
            'Anmäl dig genom att reagera med ✅ så att mängden snacks kan planeras.',
          ],
          image: {
            src: stockholmMarchPoster,
            alt: 'Affisch för AFA Stockholm Entreprenörskapsdagen den 1 mars 2026',
          },
        },
        {
          id: 'event-stockholm-2026-02-08',
          title: 'Entreprenörskap & Karriär',
          date: '8 februari 2026',
          location: 'Norrtullsgatan 2, Stockholm',
          paragraphs: [
            'Fysisk träff i Stockholm för nätverkande, CV-pepp och entreprenörssamtal på djupet.',
            'Agenda: isbrytare, feedback på CV och LinkedIn samt erfarenhetsutbyte.',
            'Det bjöds på snacks och dryck, och senare på kvällen beställdes gemensam mat från en afghansk restaurang.',
            'Ta med laptop eller CV, leende och gott humör.',
            'Anmäl dig genom att reagera med ✅ så att gruppen kan planera rätt.',
          ],
        },
      ],
    },
  },
  en: {
    'chapter-west': {
      events: [
        {
          id: 'event-gothenburg-2026-05-02',
          title: 'AFA Event #4: Inspiration Day Gothenburg',
          date: 'May 2, 2026',
          location: 'Krokslätts Fabriker, Mölndal',
          paragraphs: [
            'A day filled with motivation, career development, CV tips, and entrepreneurship — welcome to Gothenburg!',
            'It is time for the fourth event of the year and this time we are returning to Gothenburg! The day will focus on inspiration and personal development — with talks on careers, CV building, and entrepreneurship across several exciting industries.',
            'Bring someone you want to inspire — you may bring up to three guests. Please arrive on time, as late arrivals are not guaranteed entry.',
            'We are truly looking forward to returning to Gothenburg and getting to know more of you! Start at 13:00.',
          ],
          bullets: [
            'Intro & mingling — welcome and get to know each other',
            'Career talks — construction, AI, project management and more',
            'Group matching & idea generation — collaboration and creative thinking',
            'Dinner & networking with a view — closing with food and connections',
          ],
          closing: 'Register via Discord. Include any guests — up to three people. Registration deadline: May 1, 2026.',
          image: {
            src: gothenburgPoster,
            alt: 'Poster for the AFA West Inspiration Day Gothenburg on May 2, 2026',
          },
        },
      ],
    },
    'chapter-stockholm': {
      events: [
        {
          id: 'event-stockholm-2026-04-19',
          title: 'AFA Event #3: Entrepreneurship Acceleration',
          date: 'April 19, 2026',
          location: 'Kistatornet',
          paragraphs: [
            'We are taking the next step and doing it from the top. Welcome to a full day of action on the top floor of Kistatornet.',
            'Bring someone who has not studied at university yet, or someone with at least five years of experience in fields such as healthcare, industry, defence, IT, or law.',
          ],
          bullets: [
            'Introduction and mingling',
            'Deep dive into AI applications and startups',
            'Group matching and idea generation',
            'Pitch competition',
            'Dinner and networking with a view over Stockholm',
          ],
          closing: 'Register via Discord.',
          image: {
            src: stockholmAprilPoster,
            alt: 'Poster for the AFA Stockholm Entrepreneurship Acceleration event on April 19, 2026',
          },
        },
        {
          id: 'event-stockholm-2026-03-01',
          title: 'Entrepreneurship Day',
          date: 'March 1, 2026',
          location: 'Luntmakargatan 22, Stockholm',
          paragraphs: [
            'Places were limited, so members received the information before the rest of the group so planning could be done correctly.',
            'The agenda was presented on site.',
            'Snacks and drinks were provided, and the group later continued to a restaurant around 17:00 to arrive in time for iftar.',
            'Bring a laptop.',
            'Register via Discord.',
          ],
          image: {
            src: stockholmMarchPoster,
            alt: 'Poster for the AFA Stockholm Entrepreneurship Day on March 1, 2026',
          },
        },
        {
          id: 'event-stockholm-2026-02-08',
          title: 'Entrepreneurship & Career',
          date: 'February 8, 2026',
          location: 'Norrtullsgatan 2, Stockholm',
          paragraphs: [
            'An in-person event in Stockholm focused on networking, CV support, and deeper entrepreneurship discussions.',
            'Agenda: icebreakers, feedback on CVs and LinkedIn, and shared experience exchange.',
            'Snacks and drinks were provided, and later in the evening the group ordered food together from an Afghan restaurant.',
            'Bring a laptop or CV, a smile, and a good mood.',
            'Register via Discord.',
          ],
        },
      ],
    },
  },
};
