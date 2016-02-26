var antwoord; //Het antwoord
var maxGetal; //Het maximale getal waar het antwoord
var pogingen = 0; //Het aantal pogingen gedaan
var score; //De score
var startTijd = 60; //De start tijd
var startPunten; //Het aantal punten waarmee de speler start

/*
    On Load Function 
*/
function onLoad()
{
    this.maxGetal = parseInt(window.prompt('Voer het maximale getal.')); //Het maximale getal dat geraden kan worden
    this.antwoord = Math.floor((Math.random() * (maxGetal + 1)) + 0); //Genereert het juiste antwoord
    this.startPunten = maxGetal * 10; //Voegt in met hoeveel punten je begint
}

/*
    Wanneer je klikt op de Controleer knop
*/
function onClick()
{
    
}

/*
    Wanneer het juiste getal is geraden
*/
function onCorrectAnswer()
{
    
}

/*
    Elke update
*/
function onUpdate()
{
    
}