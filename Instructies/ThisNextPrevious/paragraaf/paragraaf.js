$(document).ready(function () {
    $('p').on('click', function () {
        //Tekst waar ik op click
        var klik = $(this).text();

        //Tekst van de vorige paragraaf
        var vorige = $(this).prev().text();

        //Tekst van de volgende paragraaf
        var volgende = $(this).next().text();

        alert('Klik: ' + klik);
        alert('Klik Previous: ' + vorige);
        alert('Klik Next: ' + volgende);
    });
});