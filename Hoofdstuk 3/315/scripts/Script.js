var tekst = 'De Bossche burgemeester Ton Rombouts geneert zich voor de wijze waarop toeschouwers Jozy Altidore hebben bejegend tijdens de wedstrijd van FC Den Bosch. Dat laat hij weten in een persoonlijk brief aan de AZ-speler.';

/*
Schrijf hier je code van de onderstaande opdrachten. Je moet de standaard functies gebruiken
uit de reader van hoofdstuk 3.
*/
var pos1 = tekst.indexOf('.'); //Eerste punt
var pos2 = tekst.indexOf('.', pos1 + 1); //Tweede punt

var zin1 = tekst.substr(0, pos1 + 1); //Eerste zin
var zin2 = tekst.substr(pos1 + 1, pos2); //Tweede zin

//Veranderd dingen in zin 1
zin1 = zin1.replace('Ton Rombouts', '');
zin1 = zin1.replace('Bossche', 'Bossche'.toUpperCase());
zin1 = zin1.replace('Jozy Altidore', 'de AZ-speler');
zin1 = zin1.replace('de AZ-speler', 'de voetballer');

//Veranderd dingen in zin 2
zin2 = zin2.replace('Dat', 'Het volgende');
zin2 = zin2.replace('de AZ-speler', 'de voetballer');

//Schrijft de zinnen op het scherm
document.write(zin2 + '<br />');
document.write(zin1);