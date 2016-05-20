$(document).ready(function()
{ 
    //Wanneer je met je muis over de div gaat
    $('#dashboard').on('mouseenter', function()
    {
        //Laat de hele div zien
        $(this).stop().animate(
        {
            left: 0, 
            speed: 1000
        });

        //Wanneer je met je muis uit de div gaat
    }).on('mouseleave', function()
    {
        //Zet de positie terug zoals op het begin
        $(this).stop().animate(
        {
            left: -92, 
            speed: 1000
        });
    });
});