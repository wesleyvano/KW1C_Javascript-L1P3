//Declareren en initialiseren van objecten
var wesley = 
{
    voornaam: 'Wesley',
    achternaam: 'van Osch',
    email: 'wesley.vanosch1@edu-kw1c.nl'
};

var henk =
{
    voornaam: 'Henk',
    achternaam: 'de Steen',
    email: 'henk.desteen@edu-kw1c.nl'
};

//document.write(henk.achternaam);
var contacten = [wesley, henk];
var contactenLengte = contacten.length;

function printPersoon(persoon)
{
    document.write(persoon.voornaam + ' ' + persoon.achternaam + '<br />');
}

function lijst()
{
    for (i = 0; i < contactenLengte; i++)
    {
        printPersoon(contacten[i]);
    }
}

function toevoegen(voornaam, achternaam, email)
{
    contacten[contacten.length] = 
    {
        voornaam: voornaam, 
        achternaam: achternaam, 
        email: email
    };    
}

function zoeken(achternaam)
{
    contactenLengte = contacten.length;
    for(i = 0; i < contactenLengte; i++)
    {
        if(contacten[i].achternaam == achternaam)
        {
            printPersoon(contacten[i]);            
        }
    }
}

//lijst();
//printPersoon(henk);
toevoegen('Piet', 'Man', 'piet.man@edu-kw1c.nl');
toevoegen('Klaas', 'Man', 'klaas.man@edu-kw1c.nl');
toevoegen('Kees', 'Man', 'klaas.man@edu-kw1c.nl');

zoeken('Man');