/*
//Functie zonder parameter
function begroeten()
{
    alert('Hallo!');
}

begroeten();

//Functie met parameter
function begroeten2(naam, achternaam)
{
    alert('Hallo ' + naam + ' ' + achternaam);
}

begroeten2('Wesley');

//Functie met return
function keer(getal1, getal2)
{
    return getal1 * getal2;
}
var uitkomst = keer(4, 5);

alert(uitkomst);
*/

/*
for(i = 0; i <= 100; i+=5)
{
    document.writeln(i + '<br />');
}
*/

for (i = 1; i <= 10; i++)
{
    var soort = i % 2;

    document.write('<span class="');
    if(soort == 1)
    {
        document.write('even">');
    }
    else
    {
        document.write('oneven">');
    }

    document.write(i + '</span> ');
}