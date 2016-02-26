//Alle variables
var Teller1 = 0; //GOED, je begint gewoon met een letter
var Lengte = 10; //GOED, je mag het nederlands woordt lengte gewoon gebruiken
var race = "Assen"; //GOED, gewoon een woord
var lengte_race = 15; //GOED, gewoon goede combinatie
var $$naam = "Hallo"; //GOED, je mag gewoon beginnen met ene _
var _vereniging = "Ver"; //GOED, je mag gewoon beginnen met een _
var Length = 1; //GOED, deze is niet direct in gebruik
var $ = "$1.10"; //Goed, je mag een $ gebruiken
var Break = 0; //GOED, het begint met een hoofdletter
var For = 0; //GOED, het begint met een hoofdletter
var While = 0; //GOED, het begint met een hoofdletter

//Alle Fouten variable
/*var 10Start = 0;*/ //FOUT, je mag niet met een nummer beginnen
/*var Start&finish = 0;*/ //FOUT, je mag geen & gebruiken
/*var - = 0;*/ //FOUT, je mag geen - gebruiken
/*var 123456789 = 0;*/ //FOUT, je mag niet met een nummer beginnen
/*var Pietje() = 0;*/ //FOUT Er mag geen () wordne gebruikt
/*var Abraham Janssen = 0;*/ //FOUT Er mag geen spatie tussen
/*var ++++++++ = 0;*/ //FOUT je mag geen + gebruiken
/*var {} = 0;*/ //FOUT Je mag geen {} gebruiken

log(Teller1);
log(race);
log($$naam);
log(_vereniging);
log(Length);
log($);

//Log functie, makkelijker om te gebruiken
function log(v)
{
    console.log(v);
}