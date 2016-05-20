function telOp() {
    reset();

    //Tot t 9 is
	var t = 0;
    while(t < 10)
    {
		document.getElementById('stopwatch').innerHTML += t + ' ';
        t++;
    }
}

function telAf() {
    reset();

    //Tot t 0 is
    var t = 10;
    while(t > 0)
    {
        document.getElementById('stopwatch').innerHTML += t + ' ';
        t--;    
    }
}

function telOp2()
{
    reset();

    //Tot t 60 is
    var t = 0;
    while(t < 60)
    {
        document.getElementById('stopwatch').innerHTML += t + ' ';
        t++;
    }
}

function telAf2()
{
    reset();

    //Tot t 0 is
    var t = 60;
    while(t > 0)
    {
        //Deel van 3
        var deel = t % 3;

        //Als deelbaar door 3 is dan schrijft hij het nummer op het scherm
        if(deel == 0)
            document.getElementById('stopwatch').innerHTML += t + ' ';

        t--;
    }  
}

var klas = ['Nick Arts','Thijs Assmann','Rick Bats','Kim Cobben','Richard van Dartel','Dennis van Empel','Luuk van Gennip','Florent Guichard','Mahamed Hassan','Stijn Hendriks','Dirk van Herpen','Daniël Kartotaroeno','Tony van Klink','Stephan Klomp','Twan Korthout','Max Lenssen','Aron van der Linden','Aron de Looijer','Anil Manbodh','Sietse Manders','Ben Moerkens','Sven van Mourik','Teun Salters','Sven Slijkoord','Daan Soeten','Joey van Straalen','Koen van Veen','Maxim Westbroek']; 
function leerlingen()
{
    reset();

    //Schrijft alle namen op het scherm
    var t = 0;
    while(t < klas.length)
    {
        document.getElementById('stopwatch').innerHTML += klas[t] + '<br />';
        t++;
    }

    //Schrijft de langste en kortste naam op het scherm
    var klasSorteer = klas.sort(function (a, b) {
        return b.length - a.length;
    });
    
    //Langste
    document.getElementById('stopwatch').innerHTML += '<br />' + klas[0] + '<br />';  
    
    //Kortste
    document.getElementById('stopwatch').innerHTML += klas[klas.length - 1] + '<br />';  
}

function search()
{
    reset();

    var waarde = document.getElementById('zoek').value;

    //Zoeken while loop
    var i = 0;
    while(i < klas.length)
    {
        var naam = klas[i];

        //Check of het erin staat
        var contains = naam.indexOf(waarde) != -1 ? true : false;

        if(contains)
            document.getElementById('stopwatch').innerHTML += naam + '<br />';    
        //REGEX Check string of het matched
        /*
        var reg = new RegExp(waarde, 'g');
        var match = naam.match(reg);

        if (match != null)
            document.getElementById('stopwatch').innerHTML += naam + '<br />';
            */

        i++;
    }
}

function reset() {
    document.getElementById('stopwatch').innerHTML = ' ';            
}