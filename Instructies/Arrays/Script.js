//var autos = ['Saab', 'Volvo', 'BMW'];

//autos[0] = 'Opel';

////Element toevoegen aan een array
////EINDE
//autos.push('Suzuki', 'Skoda');

////BEGIN
//autos.unshift('Bugatti');

////Element verwijderen uit een array
////EINDE
//autos.pop();

////BEGIN
//autos.shift();

//console.log(autos);

//Globale variablen declaren en initialiseren
var autos = ['Saab', 'Volvo', 'BMW', 'Opel', 'Seat', 'Bugatti', 'Kia', 'Toyota', 'Tesla'];

//Declareren
var letter;


function checkAuto()
{
    letter = document.getElementById('letter').value;
    letter = letter.toUpperCase();

    document.getElementById('resultaat').innerHTML = '';
    //Loop gaat net zolang door tot dat index hoger of gelijk is aan de lengte van de auto array
    for(index = 0; index < autos.length - 1; index++)
    {
        //Ingevoerde letter is gelijk aan eerste letter van huidige index
        if(letter == autos[index].charAt(0))
        {
            document.getElementById('resultaat').innerHTML += '<br />' + autos[index];
        }
        else
        {
            document.getElementById('resultaat').innerHTML = '';
        }
    }    
}