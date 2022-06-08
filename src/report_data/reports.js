// TODO: Update this to an actual file / backend.
// TODO: Update links to be links.

// Starting on 'secret backend'.

// Line breaks are tagged as HTML <br/> elements since \n gets ignored.
export const reports =
[
    {
        id: 0,
        dateString: "21e maart",
        summary: [
            "Gewerkt in de front-end van de Mercator Web Crawler. <br/>Begonnen met een full code overhaul van de website's frontend.",
            "NavBar toegevoegd en begonnen aan alle bestaande JS / HTML / CSS te herschrijven. <br/>Het doel hiervan is om het leesbaarder te maken, zodat ik en de volgende developer gemakkelijker bugs kan opsporen en fixen.",
            "Al mijn code is gedocumenteerd waar nuttig."         
        ],
        finished: [
            "PA-14139 (fix back button)",
            "PA-14600 (visual indication of being busy)"
        ],
        started: [
            "PA-14848 (error / warning cleanup)"
        ],
        good: [
            "Veel errors / warnings & bugs opgelost.",
            "Code leesbaarder gemaakt door bestaande HTML te herschrijven naar JSX function / component based.",
            "Naar het kantoor gaan en sterke developers leren kennen."
        ],
        learned: [
            "Deconstructie van bestaande code. <br/>Regelmatig zeer ingewikkelde ternaire functies moeten deconstrueren om zelf opnieuw te kunnen schrijven in een veel efficiëntere en leesbare manier."
        ],
        targets: [
            "PA-14848 (error / warning cleanup) afwerken."
        ],
        goals: [
            "Op tijd zijn voor meetings. <br/>Ik verlies ze gemakkelijk uit het oog omdat er zo veel zijn"
        ],
        problems: [
            "Ingewikkelde code dat relatief onleesbaar was."
        ],
        lookingForward: [
            "Ik kijk ernaar uit om in de backend te kunnen helpen."
        ],
        extra: [
            "Een zeer interessante eerste week, waar ik direct lessen kreeg over hoe een DNS werkt.",
            "Om de ternaire functies en mijn oplossingen te zien: <br/>https://github.com/AroenvR/Internship-Code/tree/master/difficult_ternaries"
        ]
    },

    {
        id: 1,
        dateString: "28e maart",
        summary: [
            "Ik heb deze week merendeels zelfstandig gewerkt.",
            "Actief gezocht naar bugs en warnings/errors, om PA-14848 (warning / error cleanup story) af te werken. <br/>Zo veel mogelijk onnodige en outdated libraries verwijderd en zelf CSS toegepast voor pagina stabiliteit.",
            "Vroeger klaar met mijn gegeven stories dan geschat, dus heb ik (na goedkeuring) zelf 2 nieuwe stories aangemaakt om de werking van het systeem te verbeteren en versnellen, waarvan ik één al af heb kunnen werken (PA-14911 speed up search results).",
            "PA-14911 moet nog reviewed worden voordat het op productie getest kan worden, maar in theorie zou het de search resultaten moeten versnellen van ~30 seconden naar een paar seconden of minder.",
            "Eerste keer een standup meeting geleid.",
            "Al mijn code is gedocumenteerd waar nuttig."
        ],
        finished: [
            "PA-14848 (warning / error cleanup)",
            "PA-14869 (verkeerde data in tabel), moet nog reviewed worden.",
            "PA-14911 (speed up search results), moet nog reviewed worden."
        ],
        good: [
            "Ik had nog 1 dag over van de week waar ik vrijheid kreeg, dus ben ik naar de backend gekeerd om het systeem te versnellen (PA-14911, nog niet reviewed). <br/>Dit heeft ook wat aanpassingen in de front-end gevraagd, waardoor er een vermindering (verbeterde efficiëntie) in code is.",
            "De snelheid van programmeren. <br/>Ik heb meer verwerkt dan ik persoonlijk had verwacht. Zeer bevredigend.",
            "Deze week heb ik maar 1 van de vele meetings gemist. <br/>Een begin, maar nog niet goed genoeg. Bij meetings die ik niet heb gemist, was ik altijd op tijd."
        ],
        learned: [
            "Veel meer geavanceerde Java-code gezien dan in de lessen van UCLL. "
        ],
        targets: [
            "Volgende week (paasvakantie) zal ik 3 dagen niet werken, daarna hoop ik aan PA-14912 (add paging to search results, zelfgemaakte en goedgekeurde story) te beginnen of aan een nieuw onderdeel van de Web Crawler te werken."
        ],
        goals: [
            "De Web Crawler beter leren kennen zodat ik aanpassingen gemakkelijker kan maken.",
            "Meer geavanceerde Java-code leren zodat ik sneller en efficiënter kan werken."
        ],
        problems: [
            "Veel geavanceerde code dat ik nog niet kende, waar ik zeker een tijdje op vast zat. <br/>Google en Johan Heylen hebben mij hierbij geholpen."
        ],
        lookingForward: [
            "PA-14911 op productie testen om te zien hoeveel sneller de resultaten nu binnenkomen.",
            "Te beginnen aan een nieuw onderdeel van de Web Crawler en PA-14912 (add paging, zelfgemaakte en goedgekeurde story) te maken. <br/>Voor PA-14912 moet ik in beide de backend en front-end code leren dat ik nog niet ken."
        ],
        extra: [
            "Hoe ik PA-14911 (speed up search results) heb aangepakt: <br/><br/>De vorige front-end developer deed 2 verschillende API-calls voor data in een HTML-table te tonen. <br/><br/>De tabel moet de volgende elementen bevatten: VisitId, TimeStamp, FinalUrl, 4 booleans. <br/><br/>Er werd 1 call gedaan om een lijst van VisitId’s, TimeStamps en FinalUrls te verkrijgen. <br/>De FinalUrl was foutieve data. <br/><br/>Daarna werd een reeks API calls gedaan naar de backend met een foreach VisitId get 4 booleans, 1 at a time. <br/><br/>Ik heb het aangepast zodat de front-end maar 1 call doet en dan een lijst van DTO's ontvangt. <br/><br/>Iedere DTO bevat: VisitId, TimeStamp, (juiste) FinalUrl en alle 4 booleans. <br/><br/>Dit veroorzaakt een drastische vermindering in internet traffic, wat hopelijk zorgt voor versnelling. <br/>(Review and deploy pending).", 
            "Ik kijk uit naar de resultaten van mijn aanpassingen. <br/>Toekomstige uitbreiding voor nog meer versnelling is een paginering system (PA-14912) via gebruik van Spring Paging."
        ]
    },

    {
        id: 2,
        dateString: "4e april",
        summary: [
            "3 dagen in Parijs voor een korte paasvakantie.",
            "Ik heb deze week één Story afgewerkt, een Story dat ik dacht mij langer zou duren. <br/>Op half mijn geschatte tijd had ik de Story PA-14912 (add paging) af.",
            "Vrijdag begonnen aan een nieuwe Story PA-13877 (Add hosting data to Mercator WebCrawler). <br/>Challenge! Looking forward to it.",
            "Al mijn code is gedocumenteerd waar nuttig."
        ],
        finished: [
            "PA-14912 (paging backend, paging frontend, back to same page on back button)"
        ],
        started: [
            "PA-13877 (Add hosting data to Mercator WebCrawler)"
        ],
        good: [
            "PA-14912 sneller opgelost dan verwacht."
        ],
        learned: [
            "Spring Data's Paging API."
        ],
        targets: [
            "Zo veel mogelijk van PA-13877 afwerken."
        ],
        goals: [
            "Beter worden in Database designing."
        ],
        lookingForward: [
            "Ik kijk uit naar de vele uitdagingen die mij volgende week staan te wachten."
        ],
        extra: [
            "PA-14911 (speed up search results) is inmiddels deployed op production en de results zijn nu binnen één seconde geladen.",
            "If you don't know Hans Zimmer, check out his music. <br/>You've probably already heard a lot of his music without realizing. <br/>You won't regret it."
        ]
    },

    {
        id: 3,
        dateString: "11e april",
        summary: [
            "Nog steeds bezig aan het database onderdeel van PA-13877 (Add hosting data to Mercator WebCrawler).",
            "Het eerste prototype van database re-engineering is echter wel gemaakt, maar ik zal de komende week nog meerdere prototypes maken. <br/>Prototype-script is onderaan deze pagina ge-pinnend.",
            "Voor Pasen een zeer lekkere lunch gehad met DNS Belgium alsook een chocolade verassingsjacht doorheen het kantoor.",
            "Al mijn code is gedocumenteerd waar nuttig."        
        ],
        started: [
            "PA-14955 (de database sub-task van PA-13877)"
        ],
        learned: [
            "Veel nieuwe PostgreSQL syntax en functies."
        ],
        targets: [
            "Een goed design maken voor het database onderdeel."
        ],
        goals: [
            "Database design en logica bijleren.",
            "Een van mijn grootste struikelpunten als full stack developer is dat ik niet goed ben in het ontwerpen van een database."
        ],
        problems: [
            "Database designing.",
            "Ik verlies soms het oog op relaties en cardinaliteit. <br/>Hierdoor wil ik snel grijpen naar meer tabellen wat inefficiënt is."
        ],
        lookingForward: [
            "Een van mijn slechtere punten te kunnen beoefenen."
        ],
        extra: [
            "SQL Scripts: https://github.com/AroenvR/Internship-Code/tree/master/sql_scripts"
        ],
    },

    {
        id: 4,
        dateString: "18e april",
        summary: [
            "Deze week begonnen met een nieuw database model te maken (2nd prototype SQL-script). <br/>Tot nu toe is het tweede script goedgekeurd en hebben we nog geen problemen gevonden.",
            "Al mijn code is gedocumenteerd waar nuttig."     
        ],
        finished: [
            "PA-15000 (UI improvements)",
            "PA-15047 (Clean CSS file), Sass toegevoegd.",
            "PA-14955 (Database onderdeel van PA-13877), onder voorbehoud.",
        ],
        good: [
            "Geen echte problemen gehad deze week, dus de week in z'n geheel is goed gegaan."
        ],
        learned: [
            "Ik heb ondervonden dat ik toch meer plezier vind in frontend dan backend. <br/>Dit vond ik interessant want ik dacht altijd dat frontend niets voor mij zou zijn."
        ],
        targets: [
            "Volgende week begin ik aan de backend van PA-13877 dus wil ik het zo ver mogelijk afkrijgen.",
            "Op de 28e is er een deadline gesteld voor een full .be crawl. <br/>Hopelijk zullen mijn aanpassingen af zijn tegen deze deadline maar ik twijfel hier persoonlijk aan."
        ],
        goals: [
            "PA-13877 afwerken."
        ],
        lookingForward: [
            "Nog eens te kunnen lunchen met mijn collega student Dulce. <br/>Zij is al eventjes niet meer naar het kantoor kunnen komen, maar volgende week zou ze er terug moeten zijn."
        ],
        extra: [
            "SQL Scripts: https://github.com/AroenvR/Internship-Code/tree/master/sql_scripts"
        ],
    },

    {
        id: 5,
        dateString: "25e april",
        summary: [
            "Zeer interessante week. <br/>Veel bijgeleerd over Docker containers en aan compleet andere code gewerkt dan ik gewend ben voor WebApps.",
            "Nadat het database model goed gekeurd was en geen problemen meer had, heb ik een paar dagen gewerkt aan de crawl service (van crawl naar nieuw database model).",
            "Voor zeker te zijn dat ik geen grote bugs heb gecreërd, heb ik een paar dagen geïnvesteerd in het maken van Unit en Integration tests voor de nieuwe repositories en aangepaste crawl service.",
            "Zodra de crawl service en zijn tests af waren, was de rest vrijwel meteen opgelost aangezien ik dan nog enkel van repo to frontend moest maken. <br/>Dit is iets dat zeer comfortabel is voor mij om te maken.",
            "Voor de nieuwe crawl data naar de frontend te sturen, heb ik een interessante DTO constructie gemaakt met meerdere nested maps, zodat er weinig aanpassing nodig was in de frontend code. <br/>Ik had het bekeken als een 'coding challenge', dus daar heb ik wel van genoten."
        ],
        finished: [
            "PA-14955 (Create better datamodel)"
        ],
        good: [
            "Veel te doen gehad deze week, dus ze is vrij snel voorbij gegaan. <br/>'Time flies when you're having fun.'"
        ],
        learned: [
            "De werking van Flyway leren kennen, een gemakkelijk te gebruiken migrations library."
        ],
        targets: [
            "Volgende week zo veel mogelijk bugs opsporen & opkuisen.",
            "Daarna beginnen aan hosting data toe te voegen (de originele story)"
        ],
        problems: [
            "Docker. <br/>Vrij lang zitten sukkelen aan Docker containers, de juiste online te zetten en de juiste te rebuilden."
        ],
        lookingForward: [
            "Verder werken aan de hosting data story."
        ],
        extra: [
            "DnsCrawlDTO constructie: <br/>https://github.com/AroenvR/Internship-Code/tree/master/crawlDto_construction"
        ],
    },

    {
        id: 6,
        dateString: "2e mei",
        summary: [
            "Mijn aanpassingen van vorige week hadden één kleine, maar impactvolle, fout wat ervoor gezorgd heeft dat de meerderheid van mijn geleverd werk onbruikbaar werd.",
            "Dit was wel vrij zwaar voor mij om te horen en te zien, maar ik heb het als een leerproces gezien.",
            "Wat ik verkeerd had gedaan was het feit dat ik de aanpassingen aan de backend voor het nieuwe database model heb aangepakt met een ManyToOne JPA verwerking, wat ervoor zorgde dat ik 3 repository interfaces had gemaakt.",
            "Als ik met een OneToMany had gewerkt, dan is er maar 1 repository interface nodig dat aan alle 3 objecten kan via hun foreign key relaties.<br/>Een kleine, maar impactvolle fout.",
            "Zo heb ik echter wel geleerd hoe een kleine efficiëntie-aanpassing een zeer grote impact kan hebben op een eindresultaat.",
            "Nadat die aanpassing doorgevoerd was door Quentin, heb ik de frontend aangepast.<br/>Terwijl ik in de frontend bezig was, heb ik nog een quality of life aanpassing toegevoegd die routing tussen de onderdelen van de frontend heeft verbeterd.",
            "Volgende week begin ik aan resterende onderdeeltjes up-to-date te brengen, en mogelijks aan een nieuwe feature voor Mercator.",
            "Ik heb deze week ook een sollicitatiegesprek gehad, waarop ik zeer slecht heb gepresteerd."
        ],
        finished: [
            "PA-13877 (Store hosting data)",
            "PA-15153 (Improve UI routing)"
        ],
        learned: [
            "Hoe impactvol kleine aanpassingen kunnen zijn.",
            "Meer geleerd over de JPA en Lombok libraries van Spring."
        ],
        targets: [
            "Bruikbare code schrijven."
        ],
        goals: [
            "PA-13877 afwerken."
        ],
        problems: [
            "Zware, maar leerzame week.",
            "Slecht gepresteerd op beide mijn stage en sollicitatiegesprek.",
            "Mentaal een onbevredigende week maar ik ben wel dankbaar voor de belangrijke lessen die ik heb gehad."
        ]
    },

    {
        id: 7,
        dateString: "9e mei",
        summary: [
            "Deze week heb ik mij terug herpakt door mijn falen van de vorige week optimistisch te bekijken.<br/>Quentin Loos had de tijd genomen om een leerzaam gesprek met mij te hebben, waar hij mij liet weten dat ik ook naar mijn overwinningen moet kijken.",
            "Vorige week was er een retro-meeting met het engineering team, waar ik heb beseft dat ik te veel aan het focussen ben op quantity in plaats van quality.<br/>Dit voelt verkeerd, aangezien ik normaal gezien iemand ben die liever quality over quantity oplevert.<br/>Na het overleg met Quentin Loos ben ik gaan inzien dat het zeker geen probleem is dat ik wat trager werk, zodat ik meer kwaliteit kan leveren. Het kan mij tenslotte meer tijd besparen op de lange termijn.",
            "Evaluatiegesprek met Quentin Loos, key points:",
            "Goede soft skill kwaliteiten:<br/>-   Good integration with the team.<br/>-   Good participation in team events.<br/>-   Overall good communication (improvable).<br/>-   Good attitude / work ethic.<br/>-   Likes to take on challenges.",
            "Goede hard skill kwaliteiten:<br/>-   No security risks.<br/>-   Overall good code documentation (improvable).<br/>-   Overall good speed and quality of code (improvable).",
            "Skills I personally think I can improve on, based on Quentin's feedback:<br/>-   Less redundant code documentation -> sometimes I write too much documentation.<br/>-   Reduce speed of code, increase quality of code -> think of more 'edge cases' before I deploy.<br/>-   Be more assertive -> have more confidence in giving proposals.<br/>-   Focus less on my failures -> realize them, learn from them, appreciate them. Dont let it get me down.<br/>-   Appreciate my successes more -> I tend to forget them.<br/>-   Organize priorities -> I tend to want to fix mentioned problems asap.<br/>-   Less redundant communication -> research more before asking questions.<br/>                                                              -> when asked a question, be certain of an answer before I give it."
        ],
        finished: [
            "PA-14665 (Add thumbnail images to Timeline search table)"
        ],
        started: [
            "PA-15201 (Create Cluster Validation page, back & frontend)"
        ],
        good: [
            "Over het algemeen een goede week gehad.",
            "Gesprek met Quentin Loos was bevredigend en mijn nieuwe stories voor Mercator zijn goed op weg."
        ],
        learned: [
            "Alhoewel het gezond is om mijn falen goed te beseffen, mag ik mijn overwinningen niet vergeten."
        ],
        targets: [
            "Nieuwe story afmaken met zo min mogelijk bugs.<br/>Ik ga extra tijd investeren in bugs opsporen vooraleer ik het deploy."
        ],
        goals: [
            "Quentin's feedback zal mij bijblijven.",
            "•	Werken aan het verbeteren van mijn vaardigheden (zie het lijstje hierboven)."
        ]
    },

    {
        id: 8,
        dateString: "16e mei",
        summary: [
            "PA-15201 (Cluster page) afgewerkt, dit is een feature aangevraagd door Maarten die ik op mijn eentje heb mogen implementeren.",
            "Meerdere aanpassingen in het DNS Crawler component van Mercator mogen uitvoeren, waaronder support voor meer DNS Records, alsook wat andere database en backend aanpassingen.",
            "Ik heb ook nog een eigen proposal mogen uitvoeren op de frontend, PA-15220 (Make NavBar scalable).",
            "Ik was aangenaam verast dat mijn stagementors mij een relatieve hoeveelheid verantwoordelijkheid hebben gegeven, aangezien ik op mijn vorige challenge niet zo goed had gepresteerd.",
            "Op vrijdag was ik uitgenodigd, samen met mijn vriendin, om bij Restaurant Arenberg te dineren met de collega's van DNS Belgium."
        ],
        finished: [
            "PA-15200 (Add new data to Request)",
            "PA-15201 (Cluster page)",
            "PA-15220 (Make NavBar scalable)"
        ],
        started: [
            "PA-15204 (Add DNSSEC to DNS Crawler)"
        ],
        good: [
            "Ik heb ervan genoten om PA-15201 toe te voegen aan de Crawler."
        ],
        learned: [
            "Voor PA-15204 heb ik vrij veel research moeten doen op DNS Records, om zeker te zijn dat mijn implementaties correct waren."
        ],
        lookingForward: [
            "PA-15204 verder uit te werken."
        ]
    },

    {
        id: 9,
        dateString: "23e mei",
        summary: [
            "Er werdt gevraagd aan mij om DNSSEC-support toe te voegen in de backend van de DNS Crawler.",
            "Aangezien de DNS Crawler zo efficiënt gemaakt is en ik de frontend zo schaalbaar mogelijk heb geprobeerd te maken was het vrijwel enkel één nieuwe variabele aanmaken per nieuw record type en de nieuwe data werkten meteen in de bestaande infrastructuur.",
            "Op het RRSIG-record na, deze heeft veel langer geduurd dan we hadden verwacht.<br/>Het RRSIG record type is een digital signature voor andere record types.",
            "Na twee dagen te zoeken achter waarom ik geen record data ontvangen kreeg vond Quentin dat het met de Docker containers te maken had.",
            "Daarna heb ik de bestaande code moeten aanpassen om RRSIG data mogelijk te maken voor de DNS Crawler en heb ik er extra unit testen voor geschreven.",
            "Officieel was dit mijn laatste week bij DNS Belgium maar ik wou graag een extra week presteren."
        ],
        finished: [
            "PA-15024 (Add DNSSEC to DNS Crawler)"
        ],
        good: [
            ""
        ],
        learned: [
            "Ik heb veel bijgeleerd van hoe de security van een Domain Name System ik elkaar zit.<br/>CyberSec vind ik een zeer interessant onderwerp."
        ],
    },

    {
        id: 10,
        dateString: "30e mei",
        summary: [
            "Quentin en Maarten zouden nogmaals in het buitenland zijn voor de meerderheid van mijn laatste week bij DNS Belgium.",
            "Quentin en ik hebben een kort gesprekje gehad in de avond van vrijdag 27/05 op Slack.<br/>Na wat overleg voor waar ik het beste aan zou kunnen werken voor de volgende week vroeg hij of ik geïnteresseerd was om testen te schrijven voor de frontend.",
            "Ik was zeer blij dat hij mij dit had gevraagd aangezien ik het in de zomervakantie in mijn vrije tijd wou onderzoeken.<br/>Nadat hij akkoord was dat het mogelijks een fruit loos project zou kunnen zijn voor mijn laatste week ben ik op YouTube gaan zoeken voor wat React Testing Tutorials.",
            "Mijn laatste week bij DNS was oprecht de week waar ik het meeste heb geleerd.<br/>Ik heb een helemaal nieuwe hard skill kunnen ontwikkelen: unit, integration en end-to-end tests maken voor frontend.",
            "Ik heb mijn best gedaan om de testen zo duidelijk mogelijk te maken zodat de volgende persoon dat ze overneemt het gemakkelijker zal hebben om eraan te kunnen beginnen en ze uit te breiden.",
            "In de spirit van testen schrijven heb ik op mijn laatste dag van mijn stage nog wat testen geschreven voor backend functionaliteiten dat ik doorheen mijn stage heb aan gewerkt.",
            "Quentin was zeer tevreden met mijn opgeleverd werk, alhoewel hij meteen de feedback gaf dat ik met minder had kunnen hardcoden.",
            "Daarnaast heb ik interviews gehad met het personeel van DNS om meer gepersonaliseerde informatie te kunnen verzamelen voor mijn eindverslag maar ik heb veel meer ontvangen van de werknemers dan ik had verwacht.",
            "Dankzij hun interviews heb ik de werking van DNS kunnen verstaan. Als iemand komend van de horeca heb ik nooit gekeken naar de visie van een bedrijf. Dat was nooit belangrijk.<br/>De interviews hebben mij geleerd dat dit iets zeer belangrijk is.",
            "Tijdens mijn laatste gesprek met Quentin heeft hij mij met eerlijkheid laten weten dat DNS Belgium geen goede werklplaats is voor een Junior maar dat hij gelooft dat ik wel een plaats in het team zou kunnen hebben als ik een betere programmeur ben.",
            "Ik hoop oprecht dat als ik mijn plaatsje nog niet heb gevonden dat DNS Belgium mij binnen 3 jaren zal verwelkomen met open armen."
        ],
        finished: [
            "PA-15280 (Frontend tests)"
        ],
        started: [
            "Geen. Einde stage."
        ],
        good: [
            "Een leerzame laatste week, ik ben enorm dankbaar dat DNS Belgium mij al deze kansen heeft gegeven om te kunnen groeien.",
            "Het uitzoeken van hoe een nieuwe library of framework werkt."
        ],
        learned: [
            "Hoe ik unit, integration en end to end tests kan maken voor de frontend.",
            "Soft skill stuf?"
        ],
        extra: [
            "Libraries / Frameworks used for creating frontend tests:",
            "Cypress (https://docs.cypress.io/) <br/>Open source For setting up, writing, executing and debugging e2e tests. <br/>Operates with a Node server for realistic application events. <br/>Native access to window, document & DOM. <br/>Ability to execute Terminal commands. Easily mock user input. <br/>One of the most popular automated testing tools for frontend.",
            "Jest (https://jestjs.io/) <br/>Maintained by Facebook. <br/>Widely adopted for unit tests. <br/>Comes pre-installed with new React Apps.",
            "React Testing Library (https://testing-library.com/docs/react-testing-library/intro/) <br/>Open source. <br/>Widely adopted with over 6m weekly downloads. <br/>For simulating user behaviour. <br/>Comes with the installation of react-dom."
        ]
    },
]

export const amtOfReports = reports.length;

/*

{
        dateString: "",
        summary: [
        ],
        finished: [
        ],
        started: [
        ],
        good: [
        ],
        learned: [
        ],
        targets: [
        ],
        goals: [
        ],
        problems: [
        ],
        lookingForward: [
        ],
        extra: [
        ]
    },

*/