/*              Het mechanisme van het spel         */
/*
*   Deze code gebruikt stukken van de template voor deze opdracht
*   Auteur: Wesley van Osch
*   Template Auteur: ICT-Academie
*/
var totaal = 0;
var score  = 0;

var stenen = [1, 2, 3, 4, 5];
var locked = [false, false, false, false, false];

var rolls = 3;
var beurt = 1;

var enabled = false;

//Het scoreboard
var scoreboard =
[
    //Normale Opties
    ['Enen', 0],
    ['Tweeën', 0],
    ['Drieën', 0],
    ['Vieren', 0],
    ['Vijven', 0],
    ['Zessen', 0],
    //Poker Opties
    ['Drie Gelijk', 0],
    ['Vier Gelijk', 0],
    ['Kleine Straat', 0],
    ['Grote Straat', 0],
    ['Full House', 0],
    ['Kans', 0],
    ['Yahtzee', 0]
];

//Aantal gebruikte opties
var used = 0;

function randomGetal() 
{
    var getal = Math.floor((Math.random()*6)+1);
    
    return getal;
}

/*  Zorgt ervoor dat een dobbelsteen wordt gelocked
*   @param1: De dobbelsteen die moet worden gelocked
*   geen return
*/
function lockSteen(steen)
{
    var isLocked = locked[steen - 1];

    //Als de entry bestaat wordt deze verwijderd
    if(!isLocked)
    {
        locked[steen - 1] = true;
        $('#d' + steen).css('border', '5px solid red');
    }
    else
    {
        locked[steen - 1] = false;
        $('#d' + steen).css('border', '1px solid black');
    }
}

/*  Reset het aantal rolls
*   geen params
*   geen return
*/
function reset()
{
    this.rolls = 3;
    this.stenen = [1, 2, 3, 4, 5];
    this.locked = [false, false, false, false, false];
    enabled = false;

    this.beurt++;

    $('#werp1').text('Gooi');

    $('.dobbelsteen').css('border', '1px solid black');
    updateInfo();
}

/*  Update info
*   geen params
*   geen return
*/
function updateInfo()
{
    $('#rolls').text('Rolls Over: ' + rolls);
    $('#beurt').text('Beurt: ' + beurt);
}

$(document).ready(function () 
{
    //Wanneer je op de werp knop klikt
    $('#werp1').click(function () 
    {
        if (rolls > 0) 
        {
            resetRender();
            
            var ogen = [];

            //Zorgt ervoor dat alle niet gelockte dobbelstenen worden gerolt
            for (var i = 0; i < stenen.length; i++) 
            {
                var isLocked = locked[stenen[i] - 1];

                if(!isLocked)
                {
                    var oog = randomGetal();
                    $('#d' + stenen[i]).html(oog);
                    ogen.push(oog);
                }
                else
                {
                    ogen.push(parseInt($('#d' + stenen[i]).text()));
                }
            }
            setOgen(ogen);

            animate();

            //De html inhoud van alle dobbelsten
            var d1 = $('#d1').html();
            var d2 = $('#d2').html();
            var d3 = $('#d3').html();
            var d4 = $('#d4').html();
            var d5 = $('#d5').html();

            //Het totaal van alle dobbelstenen
            totaal = parseInt(d1) + parseInt(d2) + parseInt(d3) + parseInt(d4) + parseInt(d5);

            //Veranderd het totaal van het aantal dobbelstenen
            $('#totaal').html('Totaal: ' + totaal);

            rolls--;
            updateInfo();

            if (rolls == 0) 
            {
                showScoreboard();

                $('#werp1').text('Volgende Beurt');
            }

            enabled = true;
        }
        else
        {
            updateInfo();
            reset();
        }
    });

    //Waneer je op een dobbelsteen klikt wordt deze gelocked of geunlocked
    $('.dobbelsteen').on('click', function () 
    {
        if(enabled == true)
        {
            lockSteen($(this).attr('id').split('d')[1]);
        }
        else
        {
            alert('Je moet eerst gooien voordat je een dobbelsteen kan vergrendelen');
        }
    });
});

/*  Laat de scoreboard zien
*   geen parameters
*   geen return
*/
function showScoreboard()
{
    //Reset de opties van ten voren
    $('#score').empty();

    //Alle benodige informatie om opties te generen
    var gegooid = getGegooid();
    var combinaties = getCombinaties(gegooid);
    addOptions(combinaties, gegooid);

    //Laat een dialog zien
    var dialog = $('#scoreboard').dialog({
        width: '75%',
        closeOnEscape: false,
        open: function(event, ui) {
            $('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
        }
    });
}

/*  Deze berekent alle gegooide ogen met hoeveelheid
*   geen parameters
*   @return: alle gegooide ogen met aantal
*/
function getGegooid()
{
    var gegooid =
    [
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0]
    ];

    //Vult de array met alles wat gegooid is
    for (var i = 0; i < stenen.length; i++)
    {
        var punt = parseInt($('#d' + (i + 1)).html());
        var waarde = gegooid[punt - 1][1];

        gegooid[punt - 1][1] = waarde + 1;
    }

    return gegooid;
}

/*  Zorgt ervoor dat alle mogelijke combinaties worden berekent
*   @param1: Multi-Dimensional array met alle ogen en aantal keer gegooid
*   @return: Alle mogelijke combinaties
*/
function getCombinaties(gegooid)
{
    var combinaties = [];
    for (var i = 0; i < gegooid.length; i++)
    {
        var item = gegooid[i];
        var key = item[0];
        var value = item[1];

        if(value > 0)
        {
            //Toevoegen van alle combinaties
            if(key == 1 && scoreboard[0][1] == 0)
            {
                combinaties.push('Enen');
            }

            if(key == 2 && scoreboard[1][1] == 0)
            {
                combinaties.push('Tweeën');
            }

            if(key == 3 && scoreboard[2][1] == 0)
            {
                combinaties.push('Drieën');
            }

            if(key == 4 && scoreboard[3][1] == 0)
            {
                combinaties.push('Vieren');
            }

            if(key == 5 && scoreboard[4][1] == 0)
            {
                combinaties.push('Vijven');
            }

            if(key == 6 && scoreboard[5][1] == 0)
            {
                combinaties.push('Zessen');
            }

            if(getDezelfde(gegooid, 3) > 0 && scoreboard[6][1] == 0 && combinaties.indexOf('Drie Gelijk') == -1)
            {
                combinaties.push('Drie Gelijk');
            }

            if(getDezelfde(gegooid, 4) > 0 && scoreboard[7][1] == 0 && combinaties.indexOf('Vier Gelijk') == -1)
            {
                combinaties.push('Vier Gelijk');
            }

            if(getStraat(gegooid, 4) > 0 && scoreboard[8][1] == 0 && combinaties.indexOf('Kleine Straat') == -1)
            {
                combinaties.push('Kleine Straat');
            }

            if(getStraat(gegooid, 5) > 0 && scoreboard[9][1] == 0 && combinaties.indexOf('Grote Straat') == -1)
            {
                combinaties.push('Grote Straat');
            }

            if(getFullHouse(gegooid) > 0 && scoreboard[10][1] == 0 && combinaties.indexOf('Full House') == -1)
            {
                combinaties.push('Full House');
            }

            if(scoreboard[11][1] == 0 && combinaties.indexOf('Kans') == -1)
            {
                combinaties.push('Kans');
            }

            if(getDezelfde(gegooid, 5) > 0 && scoreboard[12][1] == 0 && combinaties.indexOf('Yahtzee') == -1)
            {
                combinaties.push('Yahtzee');
            }
        }
    }

    return combinaties; 
}

/*  Voegt alle valid opties toe
*   @param1: De combinaties die moeten worden toegevoegd
*   @param2: Het aantal keer dat een aantal ogen voor komt
*   Geen return
*/
function addOptions(combinaties, aantal)
{
    //Optie Namen
    var row = document.createElement('tr');

    var d1 = document.createElement('td');
    d1.appendChild(document.createTextNode('Opties'));
    row.appendChild(d1);

    var d2 = document.createElement('td');
    d2.appendChild(document.createTextNode('Selecteer'));
    row.appendChild(d2);

    var d3 = document.createElement('td');
    d3.appendChild(document.createTextNode('Score'));
    row.appendChild(d3);

    document.getElementById('score').appendChild(row);


    for(var i = 0; i < combinaties.length; i++)
    {
        var naam = combinaties[i];
        var score = 0;

        //Score bepaling
        switch(naam)
        {
            case 'Enen': 
            score = (aantal[0][1] * 1);
            break;
            case 'Tweeën':
            score = (aantal[1][1] * 2);
            break;
            case 'Drieën':
            score = (aantal[2][1] * 3);
            break;
            case 'Vieren':
            score = (aantal[3][1] * 4);
            break;
            case 'Vijven':
            score = (aantal[4][1] * 5);
            break;
            case 'Zessen':
            score = (aantal[5][1] * 6);
            break;
            case 'Drie Gelijk':
            score = getDezelfde(aantal, 3);
            break;
            case 'Vier Gelijk':
            score = getDezelfde(aantal, 4);
            break;
            case 'Kleine Straat':
            score = 30;
            break;
            case 'Grote Straat':
            score = 40;
            break;
            case 'Full House':
            score = 25;
            break;
            case 'Kans':
            score = totaal;
            break;
            case 'Yahtzee':
            score = 50;
            break;
            default:
            score = 0;
            break;
        }

        //Nieuwe rij
        var row = document.createElement('tr');

        //Optie Naam
        var optieData = document.createElement('td');
        var optieNaam = document.createTextNode(naam);
        optieData.appendChild(optieNaam);

        //Optie Radiobox
        var radioData = document.createElement('td');
        var radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.setAttribute('name', 'optieRadio');
        radioButton.setAttribute('id', 'optieRadio');
        radioButton.setAttribute('value', naam);

        radioData.appendChild(radioButton);

        //Optie Score
        var scoreData = document.createElement('td');
        var scoreNaam = document.createTextNode(score);
        scoreData.appendChild(scoreNaam);

        //Voeg alle data toe aan de rij
        row.appendChild(optieData);
        row.appendChild(radioData);
        row.appendChild(scoreData);

        //Voegt de rij toe aan de tabel
        document.getElementById('score').appendChild(row);
    }
}

/*  Kijkt of er iets @param2 keer voorkomt
*   @param1: Alle gegooide dobbelstenen
*   @param2: Het aantal keer dat hetzelfde getal voor moet komen
*   @return: De score van het getal dat @param2 keer voor komt 
*/
function getDezelfde(arr, keer)
{
    var localScore = 0;

    for (var i = 0; i < arr.length; i++)
    {
        var getal = arr[i][0];
        var aantal = arr[i][1];

        if(aantal >= keer)
        {
            localScore = keer == 5 ? 50 : getal * keer;
        }
    }

    return localScore;
}


/*  Kijkt of er een straat is met @param2 getallen.
*   @param1: Alle gegooide dobbelstenen
*   @param2: De lengte van de straat.
*   @return: De score de straat (25 - 50)
*/
function getStraat(arr, groot)
{
    var localScore = 0;
    var beginGetal = 0;
    var currGetal = 0;


    for(var i = 0; i < arr.length; i++)
    {
        var getal = arr[i][0];
        var aantal = arr[i][1];

        if((aantal > 0 && getal == currGetal + 1) || (aantal > 0 && beginGetal == 0))
        {
            if(beginGetal == 0)
            {
                beginGetal = getal;
                currGetal = getal;
            }
            else
            {
                currGetal++;
            }
        }
        else if(groot == 4 && aantal > 0 && (getal == 2 || 3))
        {
            beginGetal = getal;
            currGetal = getal;
        }
    }

    if(currGetal >= beginGetal + groot - 1)
    {
        localScore = groot == 4 ? 30 : 40;
    }

    return localScore;
}

/*  Kijkt of er full house is gegooid
*   @param1: Een array met alle gegooide getallen
*   @return: De score
*/
function getFullHouse(arr)
{
    var twee = false;
    var drie = false;

    for(var i = 0; i < arr.length; i++)
    {
        var getal = arr[i][0];
        var aantal = arr[i][1];

        if(aantal == 2)
        {
            twee = true;
        }

        if(aantal == 3)
        {
            drie = true;
        }
    }

    return twee && drie ? 25 : 0;
}


/*  Verzend de ingevulde data en verwerkt het
*   geen parameters
*   geen return
*/
function confirmOption()
{
    var choice = $('input[name="optieRadio"]:checked');
    var singleScore = parseInt($(choice).parent().next().text());

    //Voegt toe aan het scoreboard
    for (var i = 0; i < scoreboard.length; i++) 
    {
        var key = scoreboard[i][0];
        var value = scoreboard[i][1];

        if((key == choice.val() && value == 0) || choice.parent().length == 0)
        {
            if(key == choice.val() && value == 0)
            {
                scoreboard[i][1] = singleScore;

                this.score += singleScore;
                used++;
            }

            $('#scoreboard').dialog('close');
        }
    }

    //Checkt of het spel klaar is (alle opties zijn gebruikt)
    if(used == scoreboard.length)
    {
        alert('Het spel is afgelopen uw score was ' + score + ' over ' + beurt + ' beurten met een gemiddelde van ' + (score / beurt));
        //Reset Het scoreboard
        this.scoreboard =
        [
            //Normale Opties
            ['Enen', 0],
            ['Tweeën', 0],
            ['Drieën', 0],
            ['Vieren', 0],
            ['Vijven', 0],
            ['Zessen', 0],
            //Poker Opties
            ['Drie Gelijk', 0],
            ['Vier Gelijk', 0],
            ['Kleine Straat', 0],
            ['Grote Straat', 0],
            ['Full House', 0],
            ['Kans', 0],
            ['Yahtzee', 0]
        ];
        this.rolls = 3;
        this.score = 0;
        this.beurt = 0;
        reset();
    }
}

/*  Of de score optie al eens is gebruikt
*   @param1: De score optie als iteratie in de array
*   @return: Of de score gebruikt is
*/
function isScoreUsed(optie)
{
    var score = scoreboard[optie];

    return score[1] > 0;
}