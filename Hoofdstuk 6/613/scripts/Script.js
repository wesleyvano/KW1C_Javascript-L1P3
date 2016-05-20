//Start Event
$(document).ready(function () 
{
    //Gaat door alle span.pq's, en laat stukken als een gekleurde div blok zien
    $('span.pq').each(function (index) 
    {
        //Cloned het huidige document
        var quote = $(this).clone();

        //Verwijderd de pq class
        quote.removeClass('pq');

        //Als het oneven is
        if(index % 2 == 1)
        {
            //Voegt de pullquoteRight class toe
            quote.addClass('pullquoteRight');
        }
        else
        {
            //Voegt de pullquoteLeft class toe
            quote.addClass('pullquoteLeft');  
        }

        //Voegt de quote toe voor de huidige entry
        $(this).before(quote);
    }); // end each
}); //End ready