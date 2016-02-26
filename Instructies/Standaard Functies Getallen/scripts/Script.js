//Declareren en initialiseren variablen
var getal1;
getal1 = 1;

//Int parse
var getal2 = '2';
var getal3 = getal1 + getal2;
var getal4 = parseInt(getal1 + getal2);
var getal5 = getal1 + parseInt(getal2);

log(getal3);
log(getal4);
log(getal5);

//Float/Int parse
var getal6 = '3.4';
var getal7 = parseInt(getal6);
var getal8 = parseFloat(getal6);

log(getal7);
log(getal8);

var check = isNaN(2);
var check2 = isNaN(2.2);
var check3 = isNaN('a');

log(check);
log(check2);
log(check3);

var g1 = parseInt('18 jaren oud');
var g2 = parseInt('Ik ben 18 jaar oud');

log(g1); //18:nummer
log(g2); //NaN:nummer

function log(v)
{
    console.log(v + ':' + typeof v);
}