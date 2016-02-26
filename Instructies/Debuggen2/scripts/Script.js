var v1 = true + false;
var v2 = 2 + 4 * 2 - 1;
var v3 = '2' + 2 * 3;
var v4 = true + 2;
var v5 = '2' - 1;
var v6 = 2 * ((2 + 2 * 2) - 2);
var v7 = 2 == 2;
var v8 = Math.round(Math.tan(45) % 2);
var v9 = 'String'.indexOf('s');
var v10 = null;

load();

function load()
{
    log(v1);
    log(v2);
    log(v3);
    log(v4);
    log(v5);
    log(v6);
    log(v7);
    log(v8);
    log(v9);
    log(v10);

    console.log('----------------------')
    part2(); 
}

function log(v)
{
    console.log(v + ':' + typeof(v));
}

function part2() 
{
    var i = 0; //Counter

    var aantal = 1;
    var prijs = 32;
    var totPrijs = aantal * prijs;

    while (aantal < 10) 
    {
        aantal--;
        totPrijs += (prijs * aantal) + aantal;
        aantal += 2;

        console.log(aantal + ':' + prijs + ':' + totPrijs);
        i++;
    }
    console.log(i);
}