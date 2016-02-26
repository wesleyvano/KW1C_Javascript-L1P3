//Function stond tegen de naam
function formulierValideren(form)
{
    // Gebruikersnaam controleren
    with (form.gebruikersnaam)
    {
	    if (value=='' || value==null)
	    {
		    alert ('Een gebruikersnaam invullen is verplicht');
		    return false;
	    }
    }

    // wachtwoord controleren
    with(form.wachtwoord)
    {
	    if(value=='' || value==null)
	    {
		    alert('Een wachtwoord opgeven is verplicht');
		    return false;
	    }
    }

    // e-mailadres controleren
    with(form.email)
    {
	    // eerst controleren of het veld is ingevuld
        //Er stond = (definatie) inplaats van == (is gelijk aan)
	    if(value == '' || value == null)
	    {
            //Er was vergeten om een ) toe te voegen
		    alert('Een e-mailadres opgeven is verplicht');
		    return false;
	    }
	
	    // het format van het e-mailadres (eenvoudig) controleren
	    var positieAt = value.indexOf('@');
	    var positiePunt = value.indexOf('.');
        //Er was vergeten om een - tussen positiePunt en positieAt toe te voegen
	    if(positieAt < 1 || positiePunt - positieAt < 2)
	    {
		    alert('Dit is geen geldig e-mailadres');
		    return false;
	    }
    }
    // indien hier aangekomen: alle controles OK
    return true;

    // einde function formulierValideren()
    //Vergeten om '}' toe te voegen
}