$(document).ready(function()
{
    //Wanneer je op het element met het id open clickt
    $('#open').on('click', function()
    {
        //Vervaagt de content, toggle zorgt er voor dat fadeIn en fadeOut kan gebruiken.
        $('form').fadeToggle('slow', function()
        {
            //Verander de class naar close/verwijder de class
            $('#open').toggleClass('close');       
        });
    });
});