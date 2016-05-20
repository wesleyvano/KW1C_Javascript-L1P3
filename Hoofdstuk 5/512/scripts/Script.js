//Start Event
$(document).ready(function () {
    //Veranderd de tekst van de eerste titel
    $('.main h2:first').text('Opleiding Applicatieontwikkelaar');

    //Veranderd de tekst van de tweede titel
    $('div h2:nth-child(4)').text('Waar kan ik werken?');

    //Voegt een extra paragraaf toe na de alinea met Als applicatieontwikkelaar.
    $('div p:nth-child(3)').after(' <p>Ook de overheid is vaak een goede werkgever. Secondaire arbeidsvoorwaaren zijn meestal dan erg goed. </p>');

    //Maakt van Praesent sed est een h3 element.
    $('#titel2').replaceWith('<h3 id="titel2">Hoe ziet de opleiding er uit</h3>');

    //Voegt nieuwe paragraaf toe
    $('#titel2+p').prepend('<p>De overstap die je maakt van vmbo-T of Havo is redelijk groot. Er wordt van je verwacht dat je zelfstandig te werk gaat en gaat het er minder schools aan toe dan wat je gewend was.</p>');

    //Verander van alle h2 elementen de tekst kleur naar rood
    $('h2').css('color', 'red');

    //Voeg styling toe
    $('#kerntaken').addClass('zwartopwit');

    //Verander de achtergrondskleur te passen omdat deze goed zichtbaar is.
    $('body').css('background', 'gray');
    $('*').css('color', 'blue');
});