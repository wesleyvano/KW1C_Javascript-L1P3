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