$(document).ready(function () {
    //Wanneer je op een td klikt
    $('td').on('click', function () {
        //Als er een class die used heet is gekoppeld
        if ($(this).attr('class') != 'used') {
            //Maakt het vakje naar rechts grijs
            setColor($(this).next(), 'gray');

            //Maakt het vakje naar links grijs
            setColor($(this).prev(), 'gray');

            //Maakt het vakje rood
            setColor($(this), 'red');

            //Maakt het vakje onder rood
            setColor($(this).parent().next().children().eq($(this).index()), 'gray');

            //Maakt het vakje boven rood
            setColor($(this).parent().prev().children().eq($(this).index()), 'gray');

            //Schrijft de tekst
            $('#output').text('Je hebt geklikt op rij ' + ($(this).parent().index() + 1) + ' kolom ' + ($(this).index() + 1));
        }
    });
});

/*
* @param1: De object (this)
* @param2: De kleur om in te verandern
* geen return waarde
*/
function setColor(obj, color)
{
    //Voegt een background color toe
    obj.css('background-color', color);

    //Voegt de class used toe
    obj.addClass('used');
}