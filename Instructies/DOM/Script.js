// TIJDENS DE INSTRUCTIE EN DE OPDRACHTEN MAG JE DE HTML-PAGINA NIET WIJZIGEN!

// Uitvoeren nadat de gehele pagina geladen is
$('document').ready(function () {
    //1
    $('h1').css('color', 'red');

    //2
    $('h1+h2').text('Selectoren & DOM-aanpassingen');

    //3
    $('tr:even').css('background-color', 'red');

    //4
    $('#rij4 td:first').replaceWith('4');

    //5
    $('table').before('<img src="pencils.jpg" alt="Hallo">');

    //6
    $('img').css('width', '200px').css('height', '200px');

    //6b
    $('tr:nth-child(8)').remove();
    $('tr').css('background-color', 'white');
    $('tr:even').css('background-color', 'red');

    //7
    $('tr:nth-child(8)').addClass('test').css('font-weight', 'bold');

    //8
    $('body').css('background-color', 'orange');

    //9
    $('tr:nth-child(10) a').attr('href', 'http://www.google.nl');

    //10
    $('tr:last').click(function()
    {
       $('tr:last').toggleClass("blue");
    });
});