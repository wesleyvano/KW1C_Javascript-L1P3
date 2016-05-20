var opleiding = 'MBO';
var ervaring = 1;

/* Berekent het salaris
* Geen parameters
* Geen return
*/
function bereken()
{
    //Lees de waardes uit het form
    this.opleiding = document.getElementById('opleiding').value;
    this.ervaring = parseFloat(document.getElementById('ervaring').value);

    var salaris = 0;

    //Bepaald Niveau
    if(ervaring < 1)
    {
        //Tot 1 jaar
        salaris = getSalaris(opleiding, 0);
    }
    else if(isBetween(ervaring, 1, 3))
    {
        //Tussen 1 en 3 jaar
        salaris = getSalaris(opleiding, 1);
    }
    else
    {
        //Meer dan 3 jaar
        salaris = getSalaris(opleiding, 2);
    }

    uitkomst(salaris);
}

/* Is tussen twee getallen
* @param1 Het getal waar naar moet worden gekeken
* @param2 Begin getal (wordt meegeteld)
* @param3 Eind getal
* @return Boolean true/false
*/

function isBetween(value, start, end)
{
    //Gelijk of hoger aan start of lager (of gelijk aan) dan eind
    return value > start && value <= end;
}

/* Voert het salaris in
* @param1 Het salaris dat moet worden ingevoerd
* geen return
*/
function uitkomst(salaris)
{
    document.getElementById('uitkomst').innerHTML = 'U kan <b>' + salaris + '</b> euro aan salaris verdienen!';
}

/* Berekent het salaris
* @param1 De opleiding die wordt gevolgt
* @param2 De ervaring die wordt aangegeven
* @return Berekent het salaris
*/
function getSalaris(opleiding, ervaring)
{
    //Double array eerste gedeelte zijn de salarissen van MBO en de tweede die van HBO
    var salarissen = [[1800, 2000, 2200], [2000, 2250, 2400]];

    //De opleiding nummer if else statement om te bepalen welke van de twee het moet zijn
    var opleidingNummer = opleiding  == 'MBO' ? 0 : 1;

    return salarissen[opleidingNummer][ervaring];
}
