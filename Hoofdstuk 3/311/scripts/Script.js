//Alle variables
var variable001 = 'javascript';
var variable002 = 1 + 4;
var variable003 = 20.3;
var variable004 = 2 * 3;
var variable005 = 4 + '8';
var variable006 = 2 * (4 + '8');
var variable007 = 'jos' + ' ' + 'Verbeek';
var variable008 = false;
var variable009 = true;
var variable010 = undefined;
//"abu' Is niet geldig
var variable011 = 89 * 'Nederlands';
var variable012 = '20' * 1;
//20,5 is niet geldig
var variable013 = 9999.22;

//Loopt door alle variables
for(var i = 1; i < 14; i++)
{
    //Zorgt ervoor dat er de juiste nummering komt
    var j = '0' + i;
    if(i < 10)
    {
        j = '00' + i;
    }
    else
    {
        j = '0' + i;
    }

    var ob = eval('variable' + j); //Een variable (als object)

    console.log(ob + ':' + typeof ob); //Schrijft naar console
}