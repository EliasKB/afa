# AFA - Hemsida Prompt

Bygg en komplett, professionell och modern hemsida för organisationen **AFA (Akademiker från Afghanistan / Academics for Afghanistan)** med tagline:

**"Connecting Minds, Empowering Futures."**

Den här prompten ska följas exakt. Målet är inte en studentportfolio eller en generisk landningssida, utan en seriös organisationssajt för AFA.

## Viktigt
- Använd **React**.
- Bygg sidan som en **single-page website** med smooth scroll mellan sektioner.
- Sidan ska vara **responsiv** för desktop och mobil.
- Sidan ska stödja **svenska och engelska**.
- Sidan ska stödja **light mode och dark mode**.
- Den färgglada vågbilden `afa_bakgrund.png` ska vara **global bakgrundsbild för hela sidan**, oavsett light/dark mode.
- Texttunga sektioner ska **inte presenteras som tydliga card-boxar överallt**. Innehållet ska kännas friare, mer redaktionellt och mer som en riktig organisationssida.

---

## Övergripande design

Designen ska kännas:
- professionell
- modern
- trovärdig
- tydlig
- seriös men inte stel

Undvik:
- studentportfolio-känsla
- generiska feature cards över hela sidan
- överdriven startup-estetik
- känslan av skoluppgift eller template-demo

Färgpaletten ska utgå från AFA:s visuella uttryck:
- turkos
- grönt
- gult
- orange
- rött
- mörk marinblå känsla i paneler och overlay

Typografi:
- elegant och tydlig
- rubriker får ha pondus
- brödtext ska vara lättläst

Bakgrund:
- använd `afa_bakgrund.png` som **bakgrund över hela sidan**
- bakgrunden ska ligga kvar i både light och dark mode
- light/dark mode får påverka paneler, text, borders och overlay, men **inte** byta ut bakgrunden

---

## Header / toppnavigering

Headern ska vara **sticky**.

Allt i headern ska ligga på **samma rad på desktop**.
Det får alltså **inte** vara två separata rader med topbar över navbar.

Headern ska innehålla:
- AFA-logga till vänster (`logo_light.png`) + texten `AFA`
- ett mindre länkblock i headern, till exempel:
  - `Stöd oss`
  - `Engagera dig`
  - `Nyheter`
- språkknapp `SV / EN`
- dark mode / light mode toggle
- en menyknapp

Viktigt:
- Menyknappen ska användas för att visa sektionerna som en **vertikal lista**
- Sektionerna ska **inte** ligga öppna direkt i headern som standard
- När man klickar på menyknappen ska en lista med sektionslänkar visas
- Detta menybeteende ska gälla **även på desktop**, inte bara på mobil

Sektionerna i menyn ska vara:
- Om oss
- Lokalavdelningar
- Syfte & mål
- Regler & policy
- Nyheter
- Kontakta oss
- Stöd oss
- Engagera dig

Klick på en menylänk ska:
1. visa sektionen i body om den är dold
2. scrolla smidigt till rätt sektion

---

## Hero-sektion

Hero-sektionen ska kännas stark, ren och organisationsmässig.

Den ska innehålla:
- AFA-emblemet `svart_logo_stor.png`
- stor rubrik: `AFA`
- underrubrik:
  - svenska: `Akademiker från Afghanistan`
  - engelska: `Academics for Afghanistan`
- tagline:
  - `Connecting Minds, Empowering Futures.`
- en kort professionell introduktionstext om AFA
- två CTA-knappar:
  - svenska: `Läs mer` och `Engagera dig`
  - engelska: `Read More` och `Get Involved`

Hero ska ha god kontrast mot bakgrunden och kännas premium, inte plottrig.

---

## Body-struktur

Sidan ska ha inspiration från:
https://sak.se/lokalforeningar/saks-lokalforening-i-goteborg/

Det gäller främst:
- föreningskänsla
- tydlig struktur
- vänsterspalt / lokalavdelningsnavigering
- footerstruktur

Kopiera inte text rakt av, men inspireras av strukturen.

---

## Vänsterspalt

I body ska det finnas en **vänsterpanel / sidebar** med lokalavdelningarna.

Den ska innehålla:
- rubrik för AFA:s lokalavdelningar
- kort beskrivning
- klickbara länkar till:
  - `AFA Stockholm`
  - `AFA Väst`
  - `AFA Söder`
  - `AFA Norrland`

Vänsterspalten får gärna vara sticky på desktop.

Viktigt:
- vänsterspalten ska **synas som standard** på startsidan
- `Lokalavdelningar` ska **inte synas som sektion i body som default**
- när användaren klickar på `Lokalavdelningar` i menyn eller klickar på en specifik lokalavdelning i vänsterspalten ska sektionen visas i body
- klick på exempelvis `AFA Stockholm` ska:
  1. först visa sektionen `Lokalavdelningar` om den är dold
  2. sedan scrolla till rätt lokalavdelning i sektionen

---

## Vad som ska synas som default på startsidan

På main body ska **inte alla sektioner vara synliga direkt**.

Som standard ska endast följande synas i body:
- Hero
- Nyheter

Dessutom ska vänsterspalten med lokalavdelningarna vara synlig.

Följande ska **inte** synas som default i body:
- Om oss
- Lokalavdelningar
- Syfte & mål
- Regler & policy
- Kontakta oss
- Stöd oss
- Engagera dig

Viktigt:
- inte bara innehållet ska döljas
- även **rubrikerna** för dessa sektioner ska vara osynliga tills man navigerar till dem
- när man klickar i menyn ska sektionen renderas fram och scrollas till

---

## Sektion: Lokalavdelningar

När sektionen visas ska den innehålla fyra delar:
- `AFA Stockholm`
- `AFA Väst`
- `AFA Söder`
- `AFA Norrland`

Varje del ska ha:
- en liten etikett, till exempel `Lokalavdelning`
- namn på avdelningen
- en kort professionell beskrivning

Exempel på ton:
- nätverk
- seminarier
- medlemsaktiviteter
- regional samverkan
- kunskapsutbyte

Undvik generisk box-design. Det får gärna kännas mer som innehållssektioner med tydliga avdelare än som stora cards.

---

## Sektion: Om oss

Sektionen ska vara dold som standard och visas först via navigering.

Den ska innehålla:
- rubrik `Om oss`
- en professionell beskrivning av AFA som nätverk för afghanska akademiker i Sverige
- fokus på:
  - erfarenhetsutbyte
  - professionella möjligheter
  - seriös mötesplats
  - gemensam utveckling

Den får även innehålla några korta punktlika markeringar, till exempel:
- Professionell identitet
- Nationellt nätverk
- Lokalt engagemang

Men undvik att göra hela sektionen till stora cards.

---

## Sektion: Syfte och mål

Sektionen ska vara dold som standard och visas först via navigering.

Den ska innehålla följande 10 mål:

1. Hjälpa akademiker i Sverige att hitta eller byta jobb
2. Stötta varandra med CV och jobbsökning
3. Bygga kompetens inom gruppen
4. Marknadsföra gruppen till andra typer av akademiker
5. Stötta småföretagare och startups
6. Hjälpa unga med utbildningsval
7. Stöd till hemlandet genom utbildningsinsatser
8. Erbjuda kurser där medlemmar lär av varandra
9. Skapa nätverk med andra akademiker och företag
10. Starta YouTube-kanal och Startup Hackathon

Målen får numreras `01-10`, men de ska inte presenteras som tunga standard-cards. Gör det hellre som en luftig lista eller tydligt uppdelat innehåll.

---

## Sektion: Regler och policy

Sektionen ska vara dold som standard och visas först via navigering.

Den ska innehålla tydliga policyblock eller listor för:
- Respekt och hövlighet
- Relevanta inlägg
- Ingen spam eller reklam
- Sekretess och trygghet

Följande innehåll ska finnas med i sak:
- vänlighet och respekt
- ingen diskriminering, hat eller trakasserier
- vårdat språk
- akademiska, professionella och konstruktiva diskussioner
- undvik politik och kontroversiella ämnen
- inga irrelevanta länkar eller reklam
- dela inte känsliga personuppgifter
- respektera anonymitet

Även här: undvik default-card-känsla.

---

## Sektion: Nyheter

`Nyheter` ska vara den **första sektionen i body under hero**.

Den ska alltså ligga:
1. hero
2. nyheter
3. övrigt innehåll när det öppnas via navigering

Nyheter ska vara synlig som default.

Den ska innehålla 3 nyhetsblock med datum och platshållartext, till exempel:
- lansering pågår
- regional organisering
- fler initiativ kommer

---

## Sektion: Kontakta oss

Sektionen ska vara dold som standard och visas först via navigering.

Den ska innehålla:
- E-post
- Sociala medier
- Community

E-post ska vara:

`Academicsfromafghanistan@gmail.com`

Sociala medier och Community kan ha `kommer snart` / `coming soon`.

---

## Sektion: Stöd oss

Sektionen ska vara dold som standard och visas först via navigering.

Den ska innehålla:
- Ekonomiskt stöd
- Dela kompetens
- Samarbeta

Allt kan ha `kommer snart` / `coming soon`.

---

## Sektion: Engagera dig

Sektionen ska vara dold som standard och visas först via navigering.

Den ska innehålla:
- Bli medlem
- Volontär
- Mentorskap

Allt kan ha `kommer snart` / `coming soon`.

---

## Footer

Footern ska ha tydlig inspiration från SAK-sidan vad gäller struktur.

Den ska innehålla:
- AFA-logotyp
- tagline
- en kort beskrivning av AFA
- kolumnstruktur i footer, inte bara en enkel rad

Exempel på kolumner:
- Om AFA
- Delta
- Kontakt

Dessutom ska footern innehålla:
- en lista över alla sektioner
- kontaktinformation där mejladressen `Academicsfromafghanistan@gmail.com` finns med
- copyright-text

Footern ska vara professionell och tydlig, inte minimalistiskt tom.

---

## Interaktion och beteende

- smooth scroll mellan sektioner
- menyknapp öppnar/stänger sektionslista
- klick på dold sektion ska först rendera sektionen och därefter scrolla till den
- klick på lokalavdelning i vänsterspalten ska först rendera `Lokalavdelningar` och sedan scrolla till rätt avdelning
- språkväxling ska byta allt innehåll mellan svenska och engelska
- dark/light mode ska fungera utan att ändra den globala bakgrundsbilden

---

## Tekniska krav

- bygg i **React**
- ingen enkel statisk HTML-lösning
- ha tydlig komponentstruktur om det behövs, men slutresultatet får inte kännas komponentigt i UI
- responsiv layout
- tillgångarna som ska användas:
  - `afa_bakgrund.png`
  - `logo_light.png`
  - `svart_logo_stor.png`

---

## Sammanfattning av viktigaste krav

Det här måste vara sant i slutresultatet:

- React används
- headern ligger på **en enda rad på desktop**
- sektionerna visas som **lista när man klickar på meny**
- detta menybeteende gäller även på desktop
- global bakgrund = `afa_bakgrund.png`
- endast `Nyheter` visas som standard i body
- vänsterspalten med lokalavdelningar syns som standard
- `Lokalavdelningar` är dold som standard i body
- `Om oss`, `Syfte & mål`, `Regler & policy`, `Kontakt`, `Stöd oss`, `Engagera dig` är dolda som standard i body
- dolda sektioner visar **inte ens rubriker** förrän de öppnas
- vänsterspalt finns med:
  - AFA Stockholm
  - AFA Väst
  - AFA Söder
  - AFA Norrland
- footer ska vara flerkolumnig och föreningslik
- designen ska kännas som en riktig organisation, inte en studentuppgift
