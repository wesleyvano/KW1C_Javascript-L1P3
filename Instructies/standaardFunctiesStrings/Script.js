function naarHoofdNaarKlein()
{
    var radio = document.getElementsByName('upLow'); //De radio buttons
    var invoer = krijgInvoer(); //De waarde in de resultaat box

    if(isNullOrEmpty(document.getElementById('stringInvoer')))
    {
        veranderResultaat('U heeft velden leeg gelaten!');
        return;
    }

    //Gaat door alle radio buttons (als nummer)
    for (var i = 0; i < radio.length; i++)
    {
        if(radio[i].checked) //Kijkt of radio button i aan staat
        {
            var check = radio[i]; //De huidige radio button

            //Welke value de radio button heft
            if(check.value == 'upper')
            {
                veranderResultaat(invoer.toUpperCase()); //Maakt alle tekst volledig hoofdletters 
            }
            else if(check.value == 'lower')
            {
                veranderResultaat(invoer.toLowerCase()); //Maakt alle tekst volledig hoofdletters 
            }
        }
    }
}

function bepaalIndex()
{
    var i1 = document.getElementById('letterInvoer'); //De letter waar naar moet worden gezocht

    var invoer = krijgInvoer(); //Krijgt de invoer tekst

    if(isNullOrEmpty(i1) || isNullOrEmpty(document.getElementById('stringInvoer')))
    {
        veranderResultaat('U heeft velden leeg gelaten!');
        return;
    }

    var index = invoer.indexOf(i1.value) + 1; //Juiste positie

    //Als het karater niet is gevonden
    if(index <= 0)
    {
        veranderResultaat("Het karakter '" + i1.value + "' is niet gevonden in het woord '" + invoer + "'!");
        return;
    }

    veranderResultaat(index); //Veranderd resultaat
}

function vanTot()
{
    if(isNullOrEmpty(document.getElementById('stringInvoer')))
    {
        veranderResultaat('U heeft velden leeg gelaten!');
        return;
    }

    //De twee dropdown lists
    var van = parseInt(document.getElementById('substringVan').value);
    var tot = parseInt(document.getElementById('substringTot').value);

    var invoer = krijgInvoer(); //De ingevoerde tekst

    var sub = invoer.substr(van, tot); //Alle chars van van tm tot

    var res = document.getElementById('resultaat'); //Veranderd de tekst

    veranderResultaat(sub); //Veranderd het resultaat
}

function replace()
{
    //De twee opties lists
    var from = document.getElementById('from');
    var to = document.getElementById('to');

    var invoer = krijgInvoer(); //De ingevoerde tekst

    if(isNullOrEmpty(from) || isNullOrEmpty(to) || isNullOrEmpty(document.getElementById('stringInvoer')))
    {
        veranderResultaat('U heeft velden leeg gelaten!');
        return;
    }

    var reg = new RegExp(from.value, "g"); //Zorgt ervoor dat alle variables met dezelfde naam gevonden kunnen worden

    var ver = invoer.replace(reg, to.value); //Veranderd een character

    veranderResultaat(ver); //Veranderd het resultaat
}

function veranderResultaat(str)
{
    document.getElementById('resultaat').textContent = str; //Veranderd de tekst
}

function krijgInvoer()
{
    if(isNullOrEmpty(document.getElementById('stringInvoer')))
    {
        veranderResultaat('U heeft velden leeg gelaten!');
        return;
    }

    return document.getElementById('stringInvoer').value; //Returnt de tekst
}

function isNullOrEmpty(obj)
{
    return obj == null || obj.value == null || obj.value == '';
}

function changeColor(color)
{
    //Veranderd de kleuren
    document.body.style.backgroundColor = color;

    var dividers = document.getElementsByClassName('divider'); //Alle dividers

    //Gaat door alle items in de class
    for (var i = 0; i < dividers.length; i++)
    {
        dividers[i].style.backgroundColor = color; //Veranderd de kleur
    }
}

function randomOrder()
{
    var invoer = krijgInvoer(); //De ingevoerde tekst

    veranderResultaat(shuffle(invoer)); //Voerd de tekst toe in een andere volgorden
}

function shuffle(str)
{
    var charArray = str.split(''); //Maakt van de string een array met alle characters
    var charArrayLength = charArray.length; //De lengte van de string

    //Loopt door alle characters
    for(var i = charArrayLength - 1; i > 0; i--)
    {
        var nRand = Math.floor(Math.random() * (i + 1)); //Een willekeurig nummer
        var tmp = charArray[i]; //Tijdelijke character

        //Zorgt ervoor dat het character op een andere plaats kom
        charArray[i] = charArray[nRand];
        charArray[nRand] = tmp;
    }

    return charArray.join("");
}