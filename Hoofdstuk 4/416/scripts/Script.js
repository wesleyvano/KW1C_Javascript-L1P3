var zin;
function getZin() {
	zin = $('#langezin').html();
}

function setZin(anderezin) {
	$('#langezin').html(anderezin);
}

function keerZinOm() {
	var omgekeerdezin = '';
	for (var x=0; x<zin.length; x++) {
		omgekeerdezin =  zin.substr(x,1) + omgekeerdezin;
	}
	setZin(omgekeerdezin);
	getZin();
}

function zoekLetter() {
    //De ingevoerde letter
    var letter = document.getElementById('letter').value;

    //Teller
    var count = 0;

    //Alle posities
    var posities = '';

    //Loop door alle characters en checkt voor overeenkomst
    for (i = 0; i < zin.length; i++)
    {
        var curr = zin[i];

        if (curr == letter) 
        {
            count++;
            posities += i + ',';
        }
    }
    //Print uit
    alert('Aantal: ' + count);
    alert('Posities: ' + posities);
}

$(document).ready(function() {
	getZin();
});
