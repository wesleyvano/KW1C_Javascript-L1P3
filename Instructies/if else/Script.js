//Declareren van variablen
//var dagdeel;

//Declareren van initaliseren van variabelen
/*
var uur = new Date().getHours();

if(uur < 12)
{
    dagdeel = 'Ochtend';    
}
else if(uur < 18)
{
    dagdeel = 'Middag';
}
else if(uur <= 24)
{
    dagdeel = 'Avond';
}
*/

/*
var dag = new Date().getDay();

var week = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
var huidigeDag = week[dag];

if(dag == 0 || dag == 6)
{
    document.writeln('Het is weekend! Het is vandaag: ' + huidigeDag);    
}
else
{
    document.writeln('We moeten naar school! Het is vandaag: ' + huidigeDag);
}
*/

//Nederlandse Tijd
var nlTijd = new Date().getTime();

//Engelse tijd
var enTijd = new Date().getTime() - '01:00';
var enType;

if(enTijd == 0)
{
    enTijd = '';    
}

if(enTijd >= 12)
{
    enType = 'AM';
}
else if(enTijd >= 0 && enTijd < 12)
{
    enType = 'PM';    
}

document.writeln('De Nederlandse tijd is: ' + nlTijd);
document.writeln('De Engelse tijd is: ' + enTijd + ' ' + enType);