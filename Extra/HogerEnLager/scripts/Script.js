var antwoord; //Het antwoord, Type: int
var maxGetal; //Het maximale getal waar het antwoord, Type: int
var pogingen = 0; //Het aantal pogingen gedaan, Type: int
var score; //De score, Type: int
var startTijd = 60; //De start tijd, Type: int
var gevaarTijd = 10; //De gevaar tijd, Type: int
var startPunten; //Het aantal punten waarmee de speler start, Type: int

var isGameRunning; //Of het spel aan staat, Type: Boolean

var scoreboard = []; //Scorebord, type: Array, dataType: int

/* On Load Function 
* Geen parameters
* Geen return
*/
function onLoad()
{
    this.maxGetal = parseInt(window.prompt('Voer het maximale getal in.')); //Het maximale getal dat geraden kan worden
    this.antwoord = Math.floor((Math.random() * (maxGetal + 1)) + 0); //Genereert het juiste antwoord
    this.startPunten = maxGetal * 10; //Voegt in met hoeveel punten je begint
    this.score = startPunten; //Veranderd de score in het aantal punten waarmee er wordt gestart
    setScore(); //Zet start score op het scherm
    this.isGameRunning = true; //Het spel staat aan
    
    document.getElementById('timer').textContent = startTijd; //Past de tijd op het scherm aan
    document.getElementById('cntrl')
    this.setInterval(onUpdate, 1000); //Een timer die elke 1 seconde een functie aanroept
}

/* Update de score op het scherm
* Geen parameters
* Geen return
*/
function setScore()
{
    document.getElementById('numb').textContent = Math.round(score);
}

/* Wanneer je klikt op de Controleer knop
* Geen parameters
* Geen return (met waarde)
*/
function onClick()
{
    var inputGetal = parseInt(document.getElementById('getal').value); //Het ingevoerde getal
    var uitkomstTekst = document.getElementById('uitkomst'); //Resultaat tekst

    //Als het spel klaar is
    if(!isGameRunning)
    {
        onLoad();
        return;
    }

    if(antwoord < inputGetal)
    {
        uitkomstTekst.textContent = 'Het getal is lager dan ' + inputGetal + '.';
    }
    else if(antwoord > inputGetal)
    {
        uitkomstTekst.textContent = 'Het getal is hoger dan ' + inputGetal + '.';
    }
    else if(inputGetal == antwoord)
    {
        onCorrectAnswer();
    }
    else
    {
        uitkomstTekst = 'ERROR er is iets heel erg fout gegaan!';
    }
}

/* Wanneer het juiste getal is geraden
* Geen parameters
* Geen return
*/
function onCorrectAnswer()
{
    this.isGameRunning = false;
    onGameEnd();
}

/* Elke update
* Geen parameters
* Geen return (met waarde)
*/
function onUpdate()
{
    //Staat het spel aan
    if(isGameRunning)
    {
        var timeInput = document.getElementById('timer');

        //Als de score gelijk of lager is als 0
        if(score <= 0 || parseInt(timeInput.textContent) <= 0)
        {
            this.isGameRunning = false; //Het spel staat uit
            timeInput.textContent = 0;
            document.getElementById('numb').textContent = 0;

            onGameEnd();
            return;
        }

        //Verlaagt de score
        this.score -= (this.startPunten / this.startTijd);
        setScore();

        var timeInput = document.getElementById('timer');
        var nTime = parseInt(timeInput.textContent) - 1;
        timeInput.textContent = nTime; //Past de tijd op het scherm aan

        timeInput.style.color = nTime <= gevaarTijd ? 'red' : 'white';
    }
}

/* Wanneer je score op 0 staat
* Geen parameters
* Geen return
*/
function onGameEnd()
{
    //Als het spel niet aan staat
    if(!isGameRunning)
    {
        document.getElementById('cntrl').textContent = 'Nieuw Spel';

        showScoreboard();
    }
}

/* Laat het scorebord zien
* Geen parameters
* Geen return
*/
function showScoreboard()
{
    //Voegt score toe
    scoreboard.push(score >= 0 ? score : 0);

    //Gesorteerde versie
    var sbSorteer = scoreboard.sort(function (a, b) {
        return b - a;
    });

    var totaal = 0;

    //Gaat door alle objecten in de scoreboard array
    for (i = 0; i < sbSorteer.length; i++)
    {
        //Huidige Item
        var item = sbSorteer[i];

        //Voegt graphische score toe
        if (i < 5)
            document.getElementById('plaats' + i).textContent = item;

        totaal += item;
    }

    document.getElementById('gemiddelde').textContent = totaal / sbSorteer.length;

    //Laat het Scoreboard zien
    $('#scoreboard').dialog();
}