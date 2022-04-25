// Line breaks are tagged as HTML <br/> elements since \n gets ignored.
export const reports =
[
    {
        dateString: "21e maart",
        summary: [
            "Gewerkt in de front-end van de Mercator Web Crawler. <br/>Begonnen met een full code overhaul van de website's frontend.",
            "NavBar toegevoegd en begonnen aan alle bestaande JS / HTML / CSS te herschrijven. <br/>Het doel hiervan is om het leesbaarder te maken, zodat ik en de volgende developer gemakkelijker bugs kan opsporen en fixen.",
            "Al mijn code is gedocumenteerd waar nuttig."         
        ],
        jiraStories: {
            finished: [
                "PA-14139 (fix back button)",
                "PA-14600 (visual indication of being busy)"
            ],
            started: [
                "PA-14848 (error / warning cleanup)"
            ]
        },
        tableContent: {
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
                "Een zeer interessante eerste week, waar ik direct lessen kreeg over hoe een DNS werkt."
            ]
        }
    },

    {
        dateString: "28e maart",
        summary: [
            "Ik heb deze week merendeels week zelfstandig gewerkt.",
            "Actief gezocht naar bugs en warnings/errors, om PA-14848 (warning / error cleanup story) af te werken. Zo veel mogelijk onnodige en outdated libraries verwijderd en zelf CSS toegepast voor pagina stabiliteit.",
            "Vroeger klaar met mijn gegeven stories dan geschat, dus heb ik (na goedkeuring) zelf 2 nieuwe stories aangemaakt om de werking van het systeem te verbeteren en versnellen, waarvan ik één al af heb kunnen werken (PA-14911, speed up search results).",
            "PA-14911 moet nog reviewed worden voordat het op productie getest kan worden, maar in theorie zou het de search resultaten moeten versnellen van ~30 seconden naar een paar seconden.",
            "Eerste keer een standup meeting geleid.",
            "Al mijn code is gedocumenteerd waar nuttig."
        ],
        jiraStories: {
            finished: [
                "PA-14848 (warning / error cleanup)",
                "PA-14869 (verkeerde data in tabel), moet nog reviewed worden.",
                "PA-14911 (speed up search results), moet nog reviewed worden."
            ]
        },
        tableContent: {
            good: [
                "Ik had nog 1 dag over van de week waar ik vrijheid kreeg, dus ben ik naar de backend gekeerd om het systeem te versnellen (PA-14911, nog niet reviewed). Dit heeft ook wat aanpassingen in de front-end gevraagd, waardoor er een vermindering (verbeterde efficiëntie) in code is.",
                "De snelheid van programmeren. Ik heb meer verwerkt dan ik persoonlijk had verwacht. Zeer bevredigend.",
                "Deze week heb ik maar 1 van de vele meetings gemist. Een begin, maar nog niet goed genoeg. Bij meetings die ik niet heb gemist, was ik altijd op tijd."
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
                "Veel geavanceerde code dat ik nog niet kende, waar ik zeker een tijdje op vast zat. Google en Johan Heylen hebben mij hierbij geholpen."
            ],
            lookingForward: [
                "PA-14911 op productie testen om te zien hoeveel sneller de resultaten nu binnenkomen.",
                "Te beginnen aan een nieuw onderdeel van de Web Crawler en PA-14912 (add paging, zelfgemaakte en goedgekeurde story) te maken. Voor PA-14912 moet ik in beide de backend en front-end code leren dat ik nog niet ken."
            ],
            extra: [
                "Hoe ik PA-14911 (speed up search results) heb aangepakt: De vorige front-end developer deed 2 verschillende API-calls voor data in een HTML-table te tonen. De tabel moet de volgende elementen bevatten: VisitId, TimeStamp, FinalUrl, 4 booleans. Er werd 1 call gedaan om een lijst van VisitId’s, TimeStamps en FinalUrls te verkrijgen. De FinalUrl was foutieve data. Daarna werd een reeks API calls gedaan naar de backend met een foreach VisitId -> get booleans. Ik heb het aangepast zodat de front-end maar 1 call doet en een list van DTO’s ontvangt. Iedere DTO bevat: VisitId, TimeStamp, (juiste) FinalUrl en alle 4 booleans. Dit veroorzaakt een drastische vermindering in internet traffic, wat hopelijk zorgt voor versnelling. (Review and deploy pending). Ik kijk uit naar de resultaten van mijn aanpassingen. Toekomstige uitbreiding voor nog meer versnelling is een paginering system (PA-14912) via gebruik van batches."
            ]
        }
    },

    {
        dateString: "4e april",
        summary: [
            "3 dagen in Parijs voor een korte paasvakantie.",
            "Ik heb deze week één Story afgewerkt, een Story dat ik dacht mij langer zou duren. <br/>Op half mijn geschatte tijd had ik de Story PA-14912 (add paging) af.",
            "Vrijdag begonnen aan een nieuwe Story PA-13877 (Add hosting data to Mercator WebCrawler). <br/>Challenge! Looking forward to it.",
            "Al mijn code is gedocumenteerd waar nuttig."
        ],
        jiraStories: {
            finished: [
                "PA-14912 (paging backend, paging frontend, back to same page on back button)"
            ],
            started: [
                "PA-13877 (Add hosting data to Mercator WebCrawler)"
            ]
        },
        tableContent: {
            good: [
                "PA-14912 sneller opgelost dan verwacht."
            ],
            learned: [
                "Spring Data’s Paging API."
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
                "If you don’t know Hans Zimmer, check out his music. <br/>You’ve probably already heard a lot of his music without realizing. <br/>You won’t regret it."
            ]
        }
    },

    {
        dateString: "11e april",
        summary: [
            "Nog steeds bezig aan het database onderdeel van PA-13877 (Add hosting data to Mercator WebCrawler).",
            "Het eerste prototype van database re-engineering is echter wel gemaakt, maar ik zal de komende week nog meerdere prototypes maken. <br/>Prototype-script is onderaan deze pagina ge-pinnend.",
            "Voor Pasen een zeer lekkere lunch gehad met DNS Belgium alsook een chocolade verassingsjacht doorheen het kantoor.",
            "Al mijn code is gedocumenteerd waar nuttig."        
        ],
        jiraStories: {
            started: [
                "PA-14955 (sub-task van PA-13877, database onderdeel)"
            ]
        },
        tableContent: {
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
                "Ik verlies snel het oog op relaties en cardinaliteit. <br/>Hierdoor wil ik snel grijpen naar meer tabellen wat inefficiënt is."
            ],
            lookingForward: [
                "Een van mijn slechtere punten te kunnen beoefenen."
            ],
            extra: [
                "Scripts can be found at: github.com/AroenvR/Internship-Code"
            ]
        }
    },

    {
        dateString: "18e april",
        summary: [
            "Deze week begonnen met een nieuw database model te maken (2nd prototype SQL-script). <br/>Tot nu toe is het tweede script goedgekeurd en hebben we nog geen problemen gevonden.",
            "Al mijn code is gedocumenteerd waar nuttig."     
        ],
        jiraStories: {
            finished: [
                "PA-15000 (UI improvements)",
                "PA-15047 (Clean CSS file), Sass toegevoegd.",
                "PA-14955 (Database onderdeel van PA-13877), onder voorbehoud.",
            ],
        },
        tableContent: {
            good: [
                "Geen echte problemen gehad deze week, dus de week in z’n geheel is goed gegaan."
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
            ]
        }
    }
]

export const amtOfReports = reports.length;