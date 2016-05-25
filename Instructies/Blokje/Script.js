$(document).ready(function () {
    $(this).on('keydown', function (obj) {
        var key = obj.key;

        var height = parseInt($('#container').css('height'));
        var width = parseInt($('#container').css('width'));
        
        var top = parseInt($('#blokje').css('top'));
        var left = parseInt($('#blokje').css('left'));

        switch (key) {
            case 'w':
            if(top - 50 > 50)
            {
                $('#blokje').animate(
                {
                    top: '-=50'
                }, 500);
            }
            break;
            case 's':
            if(top + 50 < 450)
            {
                $('#blokje').animate(
                {
                    top: '+=50'
                }, 500);
            }
            break;
            case 'a': 
            $('#blokje').animate(
            {
                left: '-=50'
            }, 500);
            break;
            case 'd': 
            $('#blokje').animate(
            {
                left: '+=50'
            }, 500);
            break;
        }
    });

    $(this).on('keyup', function()
    {
        $('#blokje').clearQueue();
    });
});