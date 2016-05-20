$('document').ready(function ()
{

    var selectorOptie = ['p', 'h1'];

    for (i = 0; i < selectorOptie.length; i++)
    {
        $('select').append('<option value="' + selectorOptie[i] + '">' + selectorOptie[i] + "</option>");
    }

    $('select').change(function()
    {
        var selecteren = $('select').val();
        $('*').removeClass();
        $(selecteren).addClass('red');
    });
});