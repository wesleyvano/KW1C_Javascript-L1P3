//Start Event
$(document).ready(function () {
    //Double klik
    $('body').on('dblclick', function (e) {
        alert('Element Type: ' + e.target.localName + '\n' + 'Page X: ' + e.screenX + '\n' + 'Page Y: ' + e.screenY);
    });

    //Wanneer de muis binnen een a element komt
    $('body').on('mouseenter', 'a', function () {
        $('.main').append('<p>Je gaat nu met de muis over een link!</p>');
    });

    //Wanneer de muis een a element verlaat
    $('body').on('mouseleave', 'a', function () {
        $('.main').find('p:last').remove();
    });

    //Wanneer de textbox gefocused is
    $('body').on('focus', 'input[type="text"]', function () {
        $('input[type="text"]').css('color', 'white').css('background-color', 'red');
    });

    //Wanneer de textbox niet gefocused is
    $('body').on('focusout', 'input[type="text"]', function () {
        $('input[type="text"]').css('color', 'black').css('background-color', 'white');
        $('#naamlijstje').append('<li>' + $('input[type="text"]').val() + '</li>');
        $('input[type="text"]').val('');
    });

    //MouseEvent
    $('.wrapper').on('contextmenu', function()
    {
        $('.mm').css('color', 'green');
    });
    
    //DocumentEvent, veranderd de achtergrond van het logo naar een grijze achtergrondskleur
    $('.mm').css('background-color', 'gray');

    //FormEvent
    $('input[type="text"]').select(function(){
        $('.mm').css('background-color', 'orange');
    });

    //KeyboardEvent
    $('body').on('keypress', function (e) {
        var keyCode = e.key;

        if(keyCode == '+')
        {
            $('.mm').css('background-color', 'red');
        }
    });
});