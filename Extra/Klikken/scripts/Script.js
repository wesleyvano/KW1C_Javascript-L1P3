var clicked = 0; //Hoevaak is er op de knop geklikt - int
var leaderboard = []; //De scores - string array
var canBeStarted = true; //Kan worden gestart - boolean

function startGame()
{
    //Als de functie niet mag worden gestart eindigt de functie hier
    if(!canBeStarted)
        return;

    createButton();
    canBeStarted = false;
    this.setTimeout(endGame, 5000); //Een timer die elke 1 seconde een functie aanroept  
}

function createButton() 
{
    //Knop
    var button = document.createElement('button'); //Maakt button aan
    button.setAttribute('id', 'buttonClick'); //Voegt ID toe
    button.setAttribute('onclick', 'onGameButtonClicked();'); //Voegt on click functie toe

    //Text Node
    var text = document.createTextNode('Klik hier'); //Maakt text node aan
    button.appendChild(text); //Voegt text toe aan de button

    //Naar element
    document.getElementById('knopArea').appendChild(button); //Voegt de knop toe aan het bestand
}

function endGame()
{
    this.clearInterval(endGame);

    //Verwijderd de knop
    var child = document.getElementById('buttonClick');
    document.getElementById('knopArea').removeChild(child);

    //Scoreboard bijwerken
    populateScoreboard();

    //Reset het spel
    this.canBeStarted = true;
    this.clicked = 0;
}

function populateScoreboard()
{
    //Voegt nieuwe entry toe aan de array
    leaderboard.push(clicked);

    //Sorteerd de scoreboard array waarin alleen de 3 beste resultaten staan
    var sortedScoreboard = leaderboard.sort(function (a, b) 
    {
        return b - a;
    }).slice(0, 3);

    //De plaats standaard -1 (wat betekent dat je geen highscore hebt)
    var plaats = -1;

    //Voegt toe aan de scoreboard
    for (i = 0; i < sortedScoreboard.length; i++) 
    {
        var amountClicked = sortedScoreboard[i];

        document.getElementById('score' + i).textContent = amountClicked;

        //Zorgt ervoor dat je de juiste plaats krijgt
        if(amountClicked == clicked)
        {
            plaats = i + 1;
        }
    }

    //Voegt feedback toe, dit is een korte notatie van een if (?) else (:) statement
    document.getElementById('plaats').textContent = (plaats != -1 ? 'U bent geeindigd op plaats ' + plaats : 'U staat niet in de top 3');

    /*
        Berekent de start positie
        IF / Als de lengte van de array (leaderboard.length) 1 of 2 is dan is de beginwaarde de lengte van de array - 2 (leaderboard.length - 2)
        ELSE / Anders is de start positie de lengte van de array - 3 (leaderboard.length - 3)
    */
    //var startPos = (leaderboard.length == 1 || leaderboard.length == 2) ? leaderboard.length - 2 : leaderboard.length - 3;
    
    //Zorgt ervoor dat alleen de 3 beste scores in een array komen
    //var sortedScoreboard = leaderboard.sort().slice(startPos, leaderboard.length);

    //Een loop die het scoreboard invult
    /*
    var j = 0;
    for (i = sortedScoreboard.length; i > 0; i--) {
        document.getElementById('score' + j).textContent = sortedScoreboard[i - 1];
        j++;
    }
    */
}

function onGameButtonClicked()
{
    this.clicked++; //Voegt click toe
    document.getElementById('keer').textContent = clicked + ' keer geklikt'; //Veranderd de aantal keer geklikt tekst

    changeButtonPosition();
}

function changeButtonPosition()
{
    //Nieuwe knop
    var button = document.getElementById('buttonClick');

    //Willekeurige x en y positie voor de knop
    var randX = Math.floor((Math.random() * 600) + 60);
    var randY = Math.floor((Math.random() * 200) + 20);

    //Veranderd de positie van de knop
    button.style.transform = 'translate(' + randX + 'px' + ',' + randY + 'px' + ')';
}