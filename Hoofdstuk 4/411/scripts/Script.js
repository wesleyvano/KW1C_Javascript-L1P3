var opleiding = 'MBO';

var ervaring = 1;

function bereken()
{
    //Lees de waardes uit het form
    this.opleiding = document.getElementById('opleiding').value;
    this.ervaring = parseFloat(document.getElementById('ervaring').value);

    //Bepaald Niveau
    if(opleiding == 'MBO')
    {
        if(ervaring < 1)
        {
            //Tot 1 jaar
            uitkomst('Junior');
        }
        else if(isBetween(ervaring, 1, 3))
        {
            //Tussen 1 en 3 jaar
            uitkomst('Medior');
        }
        else
        {
            //Meer dan 3 jaar
            uitkomst('Senior');
        }
    }
    else if(opleiding == 'HBO')
    {
        if(ervaring < 0.5)
        {
            //Tot 0.5 jaar
            uitkomst('Junior');
        }
        else if(isBetween(ervaring, 0.5, 2))
        {
            //Tussen 0.5 en 2 jaar
            uitkomst('Medior');
        }
        else
        {
            //Meer dan 2 jaar
            uitkomst('Senior');
        }
    }
}

//Of de value tussen het start en eind getal zit
function isBetween(value, start, end)
{
    //Gelijk of hoger aan start of lager dan eind
    return value >= start && value < end;
}

//Schrijft de uitkomst op het scherm
function uitkomst(niveau)
{
    document.getElementById('uitkomst').innerHTML = 'U heeft het programmeer niveau <b>' + niveau + '</b>!';
}