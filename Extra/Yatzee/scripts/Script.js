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
    ['Enen', 0],
    ['Tweeën', 0],
    ['Drieën', 0],
    ['Vieren', 0],
    ['Vijven', 0],
    ['Zessen', 0],
];

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
    //console.log(steen);
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
    //Alle benodige informatie om opties te generen
    var gegooid = getGegooid();
    var combinaties = getCombinaties(gegooid);
    addOptions(combinaties, gegooid);

    //Laat een dialog zien
    var dialog = $('#scoreboard').dialog({
        width: "75%"
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
    console.log(aantal);
    for(var i = 0; i < combinaties.length; i++)
    {
        var naam = combinaties[i];

        //Nieuwe rij
        var row = document.createElement('tr');

        //Optie Naam
        var optieData = document.createElement('td');
        var optieNaam = document.createTextNode(naam);
        optieData.appendChild(optieNaam);

        //Optie Radiobox

        //Optie Score


        //Voeg alle data toe aan de rij
        row.appendChild(optieData);

        //Voegt de rij toe aan de tabel
        document.getElementById('score').appendChild(row);
        console.log(naam);
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