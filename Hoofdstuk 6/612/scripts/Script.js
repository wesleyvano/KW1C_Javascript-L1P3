//Start Event
$(document).ready(function () 
{
    //Maakt alle tabs dicht
    $('.answer').hide();  

    //Wanneer je klikt op de h2 gebeurd er iets
    $('h2').on('click', function()
    {
        //Sluit alle tabs behalven de huidige
        $('.answer').not($(this).next()).hide();

        //Laat de juiste tekst zien
        $(this).next().toggle();
    });
});