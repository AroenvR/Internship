// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Disclaimer: This is my first SmartContract ever.
// I do not yet know how the Solidity syntax works!
// Apologies for the dirty code.

// As far as I can tell you cannot re-use a variable in Solidity.
// UTF-8 encoder used: https://mothereff.in/utf-8
contract ReportData {

    struct Report {
        string dateString;
        string[] summary;
        string[] finished;
        string[] started;
        string[] good;
        string[] learned;
        string[] targets;
        string[] goals;
        string[] problems;
        string[] lookingForward;
        string[] extra;
    }
    Report[] public reports;

    string private _dateString = "21e maart";
    string[] private _summary = [
        "Gewerkt in de front-end van de Mercator Web Crawler. <br/>Begonnen met een full code overhaul van de website's frontend.", 
        "NavBar toegevoegd en begonnen aan alle bestaande JS / HTML / CSS te herschrijven. <br/>Het doel hiervan is om het leesbaarder te maken, zodat ik en de volgende developer gemakkelijker bugs kan opsporen en fixen.", 
        "Al mijn code is gedocumenteerd waar nuttig."
    ];
    string[] private _finished = [
        "PA-14139 (fix back button)", "PA-14600 (visual indication of being busy)"
    ];
    string[] private _started = [
        "PA-14848 (error / warning cleanup)"
    ];
    string[] private _good = [
        "Veel errors / warnings & bugs opgelost.", 
        "Code leesbaarder gemaakt door bestaande HTML te herschrijven naar JSX function / component based.", 
        "Naar het kantoor gaan en sterke developers leren kennen."
    ];
    string[] private _learned = [
        "Deconstructie van bestaande code. <br/>Regelmatig zeer ingewikkelde ternaire functies moeten deconstrueren om zelf opnieuw te kunnen schrijven in een veel efficientere en leesbare manier."
    ];
    string[] private _targets = [
        "PA-14848 (error / warning cleanup) afwerken."
    ];
    string[] private _goals = [
        "Op tijd zijn voor meetings. <br/>Ik verlies ze gemakkelijk uit het oog omdat er zo veel zijn"
    ];
    string[] private _problems = [
        "Ingewikkelde code dat relatief onleesbaar was."
    ];
    string[] private _lookingForward = [
        "Ik kijk ernaar uit om in de backend te kunnen helpen."
    ];
    string[] private _extra = [
        "Een zeer interessante eerste week, waar ik direct lessen kreeg over hoe een DNS werkt.", 
        "Om de ternaire functies en mijn oplossingen te zien: <br/>https://github.com/AroenvR/Internship-Code/tree/master/difficult_ternaries"
    ];
    Report public twentyFirstOfMarch = Report({
        dateString: _dateString,
        summary: _summary,
        finished: _finished,
        started: _started,
        good: _good,
        learned: _learned,
        targets: _targets,
        goals: _goals,
        problems: _problems,
        lookingForward: _lookingForward,
        extra: _extra
    });

    string private _dateString1 = "28e maart";
    string[] private _summary1 = [
        "Ik heb deze week merendeels zelfstandig gewerkt.", 
        "Actief gezocht naar bugs en warnings/errors, om PA-14848 (warning / error cleanup story) af te werken. <br/>Zo veel mogelijk onnodige en outdated libraries verwijderd en zelf CSS toegepast voor pagina stabiliteit.", 
        "Vroeger klaar met mijn gegeven stories dan geschat, dus heb ik (na goedkeuring) zelf 2 nieuwe stories aangemaakt om de werking van het systeem te verbeteren en versnellen, waarvan ik \xC3\xA9\xC3\xA9n al af heb kunnen werken (PA-14911 speed up search results).",
        "PA-14911 moet nog reviewed worden voordat het op productie getest kan worden, maar in theorie zou het de search resultaten moeten versnellen van ~30 seconden naar een paar seconden of minder.",
        "Eerste keer een standup meeting geleid.",
        "Al mijn code is gedocumenteerd waar nuttig."
    ];
    string[] private _finished1 = [
        "PA-14848 (warning / error cleanup)",
        "PA-14869 (verkeerde data in tabel), moet nog reviewed worden.",
        "PA-14911 (speed up search results), moet nog reviewed worden."
    ];
    string[] private _started1 = [
        ""
    ];
    string[] private _good1 = [
        "Ik had nog 1 dag over van de week waar ik vrijheid kreeg, dus ben ik naar de backend gekeerd om het systeem te versnellen (PA-14911, nog niet reviewed). <br/>Dit heeft ook wat aanpassingen in de front-end gevraagd, waardoor er een vermindering (verbeterde effici\xC3\xABntie) in code is.",
        "De snelheid van programmeren. <br/>Ik heb meer verwerkt dan ik persoonlijk had verwacht. Zeer bevredigend.",
        "Deze week heb ik maar 1 van de vele meetings gemist. <br/>Een begin, maar nog niet goed genoeg. Bij meetings die ik niet heb gemist, was ik altijd op tijd."
    ];
    string[] private _learned1 = [
        "Veel meer geavanceerde Java-code gezien dan in de lessen van UCLL."
    ];
    string[] private _targets1 = [
        "Volgende week (paasvakantie) zal ik 3 dagen niet werken, daarna hoop ik aan PA-14912 (add paging to search results, zelfgemaakte en goedgekeurde story) te beginnen of aan een nieuw onderdeel van de Web Crawler te werken."
    ];
    string[] private _goals1 = [
        "De Web Crawler beter leren kennen zodat ik aanpassingen gemakkelijker kan maken.",
        "Meer geavanceerde Java-code leren zodat ik sneller en effici\xC3\xABnter kan werken."
    ];
    string[] private _problems1 = [
        "Veel geavanceerde code dat ik nog niet kende, waar ik zeker een tijdje op vast zat. <br/>Google en Johan Heylen hebben mij hierbij geholpen."
    ];
    string[] private _lookingForward1 = [
        "PA-14911 op productie testen om te zien hoeveel sneller de resultaten nu binnenkomen.",
        "Te beginnen aan een nieuw onderdeel van de Web Crawler en PA-14912 (add paging, zelfgemaakte en goedgekeurde story) te maken. <br/>Voor PA-14912 moet ik in beide de backend en front-end code leren dat ik nog niet ken."
    ];
    string[] private _extra1 = [
        "Hoe ik PA-14911 (speed up search results) heb aangepakt: <br/><br/>De vorige front-end developer deed 2 verschillende API-calls voor data in een HTML-table te tonen. <br/><br/>De tabel moet de volgende elementen bevatten: VisitId, TimeStamp, FinalUrl, 4 booleans. <br/><br/>Er werd 1 call gedaan om een lijst van VisitId\x27s, TimeStamps en FinalUrls te verkrijgen. <br/>De FinalUrl was foutieve data. <br/><br/>Daarna werd een reeks API calls gedaan naar de backend met een foreach VisitId get 4 booleans, 1 at a time. <br/><br/>Ik heb het aangepast zodat de front-end maar 1 call doet en dan een lijst van DTO\x27s ontvangt. <br/><br/>Iedere DTO bevat: VisitId, TimeStamp, (juiste) FinalUrl en alle 4 booleans. <br/><br/>Dit veroorzaakt een drastische vermindering in internet traffic, wat hopelijk zorgt voor versnelling. <br/>(Review and deploy pending).", 
        "Ik kijk uit naar de resultaten van mijn aanpassingen. <br/>Toekomstige uitbreiding voor nog meer versnelling is een paginering system (PA-14912) via gebruik van Spring Paging."
    ];
    Report public twentyEightOfMarch = Report({
        dateString: _dateString1,
        summary: _summary1,
        finished: _finished1,
        started: _started1,
        good: _good1,
        learned: _learned1,
        targets: _targets1,
        goals: _goals1,
        problems: _problems1,
        lookingForward: _lookingForward1,
        extra: _extra1
    });  

    string private _dateString2 = "4e april";
    string[] private _summary2 = [
        "3 dagen in Parijs voor een korte paasvakantie.",
        "Ik heb deze week \xC3\xA9\xC3\xA9n Story afgewerkt, een Story dat ik dacht mij langer zou duren. <br/>Op half mijn geschatte tijd had ik de Story PA-14912 (add paging) af.",
        "Vrijdag begonnen aan een nieuwe Story PA-13877 (Add hosting data to Mercator WebCrawler). <br/>Challenge! Looking forward to it.",
        "Al mijn code is gedocumenteerd waar nuttig."
    ];
    string[] private _finished2 = [
        "PA-14912 (paging backend, paging frontend, back to same page on back button)"
    ];
    string[] private _started2 = [
        "PA-13877 (Add hosting data to Mercator WebCrawler)"
    ];
    string[] private _good2 = [
        "PA-14912 sneller opgelost dan verwacht."
    ];
    string[] private _learned2 = [
        "Spring Data\xE2\x80\x99s Paging API."
    ];
    string[] private _targets2 = [
        "Zo veel mogelijk van PA-13877 afwerken."
    ];
    string[] private _goals2 = [
        "Beter worden in Database designing."
    ];
    string[] private _problems2 = [
        ""
    ];
    string[] private _lookingForward2 = [
        "Ik kijk uit naar de vele uitdagingen die mij volgende week staan te wachten."
    ];
    string[] private _extra2 = [
        "PA-14911 (speed up search results) is inmiddels deployed op production en de results zijn nu binnen \xC3\xA9\xC3\xA9n seconde geladen.",
        "If you don\xE2\x80\x99t know Hans Zimmer, check out his music. <br/>You\xE2\x80\x99ve probably already heard a lot of his music without realizing. <br/>You won\xE2\x80\x99t regret it."
    ];
    Report public fourthOfApril = Report({
        dateString: _dateString2,
        summary: _summary2,
        finished: _finished2,
        started: _started2,
        good: _good2,
        learned: _learned2,
        targets: _targets2,
        goals: _goals2,
        problems: _problems2,
        lookingForward: _lookingForward2,
        extra: _extra2
    });

    string private _dateString3 = "11e april";
    string[] private _summary3 = [
        "Nog steeds bezig aan het database onderdeel van PA-13877 (Add hosting data to Mercator WebCrawler).",
        "Het eerste prototype van database re-engineering is echter wel gemaakt, maar ik zal de komende week nog meerdere prototypes maken. <br/>Prototype-script is onderaan deze pagina ge-pinnend.",
        "Voor Pasen een zeer lekkere lunch gehad met DNS Belgium alsook een chocolade verassingsjacht doorheen het kantoor.",
        "Al mijn code is gedocumenteerd waar nuttig."
    ];
    string[] private _finished3 = [
        ""
    ];
    string[] private _started3 = [
        "PA-14955 (de database sub-task van PA-13877)"
    ];
    string[] private _good3 = [
        ""
    ];
    string[] private _learned3 = [
        "Veel nieuwe PostgreSQL syntax en functies."
    ];
    string[] private _targets3 = [
        "Een goed design maken voor het database onderdeel."
    ];
    string[] private _goals3 = [
        "Database design en logica bijleren.",
        "Een van mijn grootste struikelpunten als full stack developer is dat ik niet goed ben in het ontwerpen van een database."
    ];
    string[] private _problems3 = [
        "Database designing.",
        "Ik verlies soms het oog op relaties en cardinaliteit. <br/>Hierdoor wil ik snel grijpen naar meer tabellen wat ineffici\xC3\xABnt is."
    ];
    string[] private _lookingForward3 = [
        "Een van mijn slechtere punten te kunnen beoefenen."
    ];
    string[] private _extra3 = [
        "SQL Scripts: https://github.com/AroenvR/Internship-Code/tree/master/sql_scripts"
    ];
    Report public eleventhOfApril = Report({
        dateString: _dateString3,
        summary: _summary3,
        finished: _finished3,
        started: _started3,
        good: _good3,
        learned: _learned3,
        targets: _targets3,
        goals: _goals3,
        problems: _problems3,
        lookingForward: _lookingForward3,
        extra: _extra3
    });

    string private _dateString4 = "18e april";
    string[] private _summary4 = [
        "Deze week begonnen met een nieuw database model te maken (2nd prototype SQL-script). <br/>Tot nu toe is het tweede script goedgekeurd en hebben we nog geen problemen gevonden.",
        "Al mijn code is gedocumenteerd waar nuttig."
    ];
    string[] private _finished4 = [
        "PA-15000 (UI improvements)",
        "PA-15047 (Clean CSS file), Sass toegevoegd.",
        "PA-14955 (Database onderdeel van PA-13877), onder voorbehoud."
    ];
    string[] private _started4 = [
        ""
    ];
    string[] private _good4 = [
        "Geen echte problemen gehad deze week, dus de week in z\xE2\x80\x99n geheel is goed gegaan."
    ];
    string[] private _learned4 = [
        "Ik heb ondervonden dat ik toch meer plezier vind in frontend dan backend. <br/>Dit vond ik interessant want ik dacht altijd dat frontend niets voor mij zou zijn."
    ];
    string[] private _targets4 = [
        "Volgende week begin ik aan de backend van PA-13877 dus wil ik het zo ver mogelijk afkrijgen.",
        "Op de 28e is er een deadline gesteld voor een full .be crawl. <br/>Hopelijk zullen mijn aanpassingen af zijn tegen deze deadline maar ik twijfel hier persoonlijk aan."
    ];
    string[] private _goals4 = [
        "PA-13877 afwerken."
    ];
    string[] private _problems4 = [
        ""
    ];
    string[] private _lookingForward4 = [
        "Nog eens te kunnen lunchen met mijn collega student Dulce. <br/>Zij is al eventjes niet meer naar het kantoor kunnen komen, maar volgende week zou ze er terug moeten zijn."
    ];
    string[] private _extra4 = [
        "SQL Scripts: https://github.com/AroenvR/Internship-Code/tree/master/sql_scripts"
    ];
    Report public eighteenthOfApril = Report({
        dateString: _dateString4,
        summary: _summary4,
        finished: _finished4,
        started: _started4,
        good: _good4,
        learned: _learned4,
        targets: _targets4,
        goals: _goals4,
        problems: _problems4,
        lookingForward: _lookingForward4,
        extra: _extra4
    });

    string private _dateString5 = "25e april";
    string[] private _summary5 = [
        "Zeer interessante week. <br/>Veel bijgeleerd over Docker containers en aan compleet andere code gewerkt dan ik gewend ben voor WebApps.",
        "Nadat het database model goed gekeurd was en geen problemen meer had, heb ik een paar dagen gewerkt aan de crawl service (van crawl naar nieuw database model).",
        "Voor zeker te zijn dat ik geen grote bugs heb gecre\xC3\xABrd, heb ik een paar dagen ge\xC3\xAFnvesteerd in het maken van Unit en Integration tests voor de nieuwe repositories en aangepaste crawl service.",
        "Zodra de crawl service en zijn tests af waren, was de rest vrijwel meteen opgelost aangezien ik dan nog enkel van repo to frontend moest maken. <br/>Dit is iets dat zeer comfortabel is voor mij om te maken.",
        "Voor de nieuwe crawl data naar de frontend te sturen, heb ik een interessante DTO constructie gemaakt met meerdere nested maps, zodat er weinig aanpassing nodig was in de frontend code. <br/>Ik had het bekeken als een 'coding challenge', dus daar heb ik wel van genoten.",
        "Al mijn code is gedocumenteerd waar nuttig."
    ];
    string[] private _finished5 = [
        "PA-14955 (Create better datamodel)"
    ];
    string[] private _started5 = [
        ""
    ];
    string[] private _good5 = [
        "Veel te doen gehad deze week, dus ze is vrij snel voorbij gegaan. <br/>'Time flies when you're having fun.'"
    ];
    string[] private _learned5 = [
        "De werking van Flyway leren kennen, een gemakkelijk te gebruiken migrations library."
    ];
    string[] private _targets5 = [
        "Volgende week zo veel mogelijk bugs opsporen & opkuisen.",
        "Daarna beginnen aan hosting data toe te voegen (de originele story)"
    ];
    string[] private _goals5 = [
        ""
    ];
    string[] private _problems5 = [
        "Docker. <br/>Vrij lang zitten sukkelen aan Docker containers, de juiste online te zetten en de juiste te rebuilden."
    ];
    string[] private _lookingForward5 = [
        "Verder werken aan de hosting data story."
    ];
    string[] private _extra5 = [
        "DnsCrawlDTO constructie: <br/>https://github.com/AroenvR/Internship-Code/tree/master/crawlDto_construction"
    ];
    Report public twentyFifthOfApril = Report({
        dateString: _dateString5,
        summary: _summary5,
        finished: _finished5,
        started: _started5,
        good: _good5,
        learned: _learned5,
        targets: _targets5,
        goals: _goals5,
        problems: _problems5,
        lookingForward: _lookingForward5,
        extra: _extra5
    });

    function updateReports() public {
        reports.push(twentyFirstOfMarch);
        reports.push(twentyEightOfMarch);
        reports.push(fourthOfApril);
        reports.push(eleventhOfApril);
        reports.push(eighteenthOfApril);
        reports.push(twentyFifthOfApril);
    }

    function viewReports() public view returns(Report[] memory) {
        return reports;
    }
    
}

/*

string private _dateString = "1e januari";
string[] private _summary = [
    "lorem",
    "Al mijn code is gedocumenteerd waar nuttig."
];
string[] private _finished = [
    "lorem"
];
string[] private _started = [
    "lorem"
];
string[] private _good = [
    "lorem"
];
string[] private _learned = [
    "lorem"
];
string[] private _targets = [
    "lorem"
];
string[] private _goals = [
    "lorem"
];
string[] private _problems = [
    "lorem"
];
string[] private _lookingForward = [
    "lorem"
];
string[] private _extra = [
    "lorem"
];
Report public report = Report({
    dateString: _dateString,
    summary: _summary,
    finished: _finished,
    started: _started,
    good: _good,
    learned: _learned,
    targets: _targets,
    goals: _goals,
    problems: _problems,
    lookingForward: _lookingForward,
    extra: _extra
});

*/