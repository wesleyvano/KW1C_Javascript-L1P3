//globale variable lijst voor een array met getallen
var lijst = [22, 33, 9];

/*
*  functie getGetal haalt het getal op in de div met id getal
*  Deze functie heeft geen parameters
*  @return een geheel getal 
*/
function getGetal()
{
    return parseInt($('#getal').val());
}

/*
*  De functie add() voegt het ingevulde getal in de de div met id= 'getal' toe aan de globale variabele lijst
*  Als de ingevulde wwaarde geen getal is dan gebeurt er niets.
*  Als het wel een getal is dan wordt het getal toegevoegd aan de variabele lijst en wordt de lijst geprint
*  in de span met id='lijst' 
*  geen parameters
*  geen return waardes
*/
function add() 
{
    getal = getGetal();

    //Checkt of de ingevoerde waarde uniek is of niet zo niet dan eindigt de functie
    if(!checkUnique(getal))
    {
        //Melding dat het getal al bestaat
        alert('Getal bestaat al');

        //Eindigt de functie hier
        return;
    }

    if (isNaN(getal)) 
    {
        return;
	}
	else 
    {			
        lijst.push(getal);
		printLijst();
	}
}

/* de functie printLijst() print alle getallen uit de variabele lijst in de div met id=lijst
*  geen parameters
*  geen return waardes
*/
function printLijst() 
{
    var strLijst = '', del='';
	
    for (var i= 0; i < lijst.length; i++) 
    {
        strLijst =  strLijst + del + lijst[i];
        del = ',';		
	}
	
    printInHtml( 'lijst', strLijst );
}

/* Schrijft de lijst naar resultaat
* Geen parameters
* Geen return waarde
*/
function printLijstInResultaat()
{
    var strLijst = '', del = '';
    
    for(i = 0; i < lijst.length; i++)
    {
        strLijst = strLijst + del + lijst[i];
        del = ',';
    }
    printInHtml('resultaat', strLijst);
}

/* De functie printInHtml print een tekst in de html tag met id=plek
*  @param1 plek is een string met de id van de html waar de tekst moet worden toegevoegd
*  @param2 tekst is een string die wordt gezet in de html tag met id=tekst
*/ 
function printInHtml(plek, tekst) 
{
    $('#'+plek).html(tekst);
}

/* Schrijft het aantal elementen in de lijst (array) op het scherm uit
* Geen parameters
* Geen return waardes
*/
function countLijst() 
{
    //Het aantal elementen in de lijst
    var aantal = lijst.length;

    //Schrijft naar de pagina
    printInHtml('resultaat', aantal);
}

/* Berekent alle unieke elementen in de lijst
* Geen parameters
* Geen return waardes
*/
function countDistinct() 
{
    //Alle waardes die in de lijst kunnen komen zijn automatisch uniek dus de countLijst functie wordt geroepen
    countLijst();
}

/* Verwijderd de eerste waarde in de lijst (array)
* Geen parameters
* Geen return waardes
*/
function deleteFirst() 
{
    //Verwijderd de eerste waarde in de lijst
    lijst.shift();

    //Print de lijst naar het scherm (resultaat vak)
    printLijstInResultaat();
}

/* Verwijderd de laatste waarde in de lijst (array)
* Geen parameters
* Geen return waardes
*/
function deleteLast() 
{
    //Verwijderd de laatste waarde in de lijst
    lijst.pop();

    //Print de lijst naar het scherm (resultaat vak)
    printLijstInResultaat();
}

/* Telt alle waardes op in de lijst (array) en schrijft het naar de resultaat
* Geen parameters
* Geen return waarde
*/
function sum() 
{
    //Initaliseerd en declareerd de som variable
    var som = 0;

    //Gaat door alle waardes in de lijst
    for (i = 0; i < lijst.length; i++)
    {
        //Het huidige element
        var entry = lijst[i];

        //Voegt huidige element toe aan de som
        som += entry;
    }

    //Schrijft naar scherm (resultaat)
    printInHtml('resultaat', som);
}

/* Berekent het gemiddelde en schrijft het op het scherm
* Geen paramenter
* Geen return waarde
*/
function average() 
{
    //Initaliseerd en declareerd de totaal variable
    var totaal = 0;

    //Initaliseerd de gemiddelde variable
    var gemiddelde;

    //Gaat door alle waardes in de lijst
    for (i = 0; i < lijst.length; i++)
    {
        //Het huidige element
        var entry = lijst[i];

        //Voegt huidige element toe aan de som
        totaal += entry;
    }

    //Declareerd de gemiddelde variable
    gemiddelde = totaal / lijst.length;

    //Schrijft naar scherm (resultaat)
    printInHtml('resultaat', gemiddelde);
}

/* Kijkt of het ingevoerd getal al bestaat (uniek is)
* @param1 het ingevoerde woord
* Returnt een boolean (true = uniek, false = niet uniek)
*/
function checkUnique(getal)
{
    //Of getal nog niet bestaat (-1 is gelijk aan niet bestaand)
    return lijst.indexOf(getal)  == -1;
}

$(document).ready(function() 
{
    printLijst();
});