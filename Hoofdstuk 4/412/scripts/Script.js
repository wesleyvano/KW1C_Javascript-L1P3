// initialiseren van variabelen
var snelheid = 0, 
vervoer = '', 
weg = '',
totaleAfstand = 0;

var overtreding = 'U bent in overtreding!';
var geenOvertreding = 'U bent niet in overtreding!';

//functie waarmee de waardes van de radio-buttons en de snelheid wordt opgehaald
function getWaardes() {
    this.snelheid = $('#snelheid').val();
    this.weg = $('input[name=weg]:checked').val();
    this.vervoer = $('input[name=vervoer]:checked').val();
}

//Dit is de functie die wordt aangeroepen als je op wijzig klikt
function wijzigSnelheid() {
    /* 
    De eerste stap is dat de waardes van de globale variabelen
    snelheid, vervoer en weg worden gevuld met de ingevulde/gekozen waardes in het formulier
    */
    getWaardes();
    /*alert('plek: ' + weg);
    alert('vervoer: ' + vervoer);
    alert('snelheid: ' + snelheid);*/

    /* Schrijf hieronder je code */
    var speed = parseFloat(snelheid);

    //Juiste voorwaarden als het niet klopt dan geeft hij de reden
    if(vervoer == 'voet')
    {
        if(weg != 'stoep')
        {
            meldStatus(overtreding + ' U loopt niet op de stoep')
            return; // Eindigt de functie
        }

        if(speed > 6)
        {
            meldStatus(overtreding + ' U loopt te snel');
            return; // Eindigt de functie
        }
    }
    else if(vervoer == 'fiets')
    {
        if(weg != 'straat')
        {
            meldStatus(overtreding + ' U fietst niet in de straat')
            return; // Eindigt de functie        
        }

        if(speed > 25)
        {
            meldStatus(overtreding + ' U fietst te snel');            
            return; // Eindigt de functie
        }
    }
    else if(vervoer == 'auto')
    {
        if(weg == 'stoep')
        {
            meldStatus(overtreding + ' U rijdt op de stoep');
            return; // Eindigt de functie
        }

        if(weg == 'straat' && speed > 50)
        {
            meldStatus(overtreding + ' U rijdt te snel');
            return; // Eindigt de functie
        }

        if(weg == 'autoweg' && speed > 100)
        {
            meldStatus(overtreding + ' U rijdt te snel');
            return; // Eindigt de functie 
        }

        if(weg == 'snelweg' && speed > 120)
        {
            meldStatus(overtreding + ' U rijdt te snel');
            return; //Eindigt de functie   
        }
    }

    //Totale afstand voegt de snelheid toe (wat in km per uur is)
    this.totaleAfstand += speed;

    //Als de code hier nog komt zijn er geen overtredingen
    meldStatus(
    'Vervoer: ' + vervoer + '<br />' +
    ' Plek: ' + weg + '<br />' +
    ' Snelheid: ' + snelheid + ' km/u' + '<br />' +
    ' Totale Afstand: ' + totaleAfstand + ' km'
    );
}

//Met deze functie kun je een melding in de pagina schrijven.( in de div met id=’status’ )
function meldStatus(tekst) {
    $('#status').html(tekst);
}