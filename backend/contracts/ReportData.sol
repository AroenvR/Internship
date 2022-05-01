// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Report.sol";

contract ReportData {

    Report[] private reports;

    string private dateString = "21e maart";
    string[] private summary = [
        "Gewerkt in de front-end van de Mercator Web Crawler. <br/>Begonnen met een full code overhaul van de website's frontend.", 
        "NavBar toegevoegd en begonnen aan alle bestaande JS / HTML / CSS te herschrijven. <br/>Het doel hiervan is om het leesbaarder te maken, zodat ik en de volgende developer gemakkelijker bugs kan opsporen en fixen.", 
        "Al mijn code is gedocumenteerd waar nuttig."
    ];
    string[] private finished = [
        "PA-14139 (fix back button)", "PA-14600 (visual indication of being busy)"
    ];
    string[] private started = [
        "PA-14848 (error / warning cleanup)"
    ];
    string[] private good = [
        "Veel errors / warnings & bugs opgelost.", 
        "Code leesbaarder gemaakt door bestaande HTML te herschrijven naar JSX function / component based.", 
        "Naar het kantoor gaan en sterke developers leren kennen."
    ];
    string[] private learned = [
        "Deconstructie van bestaande code. <br/>Regelmatig zeer ingewikkelde ternaire functies moeten deconstrueren om zelf opnieuw te kunnen schrijven in een veel efficientere en leesbare manier."
    ];
    string[] private targets = [
        "PA-14848 (error / warning cleanup) afwerken."
    ];
    string[] private goals = [
        "Op tijd zijn voor meetings. <br/>Ik verlies ze gemakkelijk uit het oog omdat er zo veel zijn"
        ];
    string[] private problems = [
        "Ingewikkelde code dat relatief onleesbaar was."
        ];
    string[] private lookingForward = [
        "Ik kijk ernaar uit om in de backend te kunnen helpen."
        ];
    string[] private extra = [
        "Een zeer interessante eerste week, waar ik direct lessen kreeg over hoe een DNS werkt.", 
        "Om de ternaire functies en mijn oplossingen te zien: <br/>https://github.com/AroenvR/Internship-Code/tree/master/difficult_ternaries"
    ];

    Report private twentyFirstOfMarch = new Report(
        dateString,
        summary,
        finished,
        started,
        good,
        learned,
        targets,
        goals,
        problems,
        lookingForward,
        extra
    );

    function updateReports() public {
        reports.push(twentyFirstOfMarch);
    }

    function viewReports() public view returns(Report[] memory) {
        return reports;
    }
    
}