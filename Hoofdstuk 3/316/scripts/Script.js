var leerlingen = ['Mohammed', 'Tolga', 'Adem','Thomas', 'Jean'];
document.write('<p>De eerste leerling is <strong>');
document.write(leerlingen[0] + '</strong></p>'); //eerste leerling

/* schrijf na deze regel je code van opdracht 1 */
document.write('<p>De laaste leerling in de lijst is <strong>');
document.write(leerlingen[leerlingen.length - 1] + '</strong></p>'); //laatste leerling

/* schrijf na deze regel je code van opdracht 2 */
document.write('<p>De tweede leerling in de lijst is <strong>');
document.write(leerlingen[1] + '</strong></p>'); //tweede leerling

/* schrijf na deze regel je code van opdracht 3 */
document.write('<p>De voorlaaste leerling in de lijst is <strong>');
document.write(leerlingen[leerlingen.length - 2] + '</strong></p>'); //voorlaatste leerling

/* schrijf na deze regel je code van opdracht 4 */
leerlingen.pop(); //Verwijderd de laatste
document.write('<p>De laaste leerling in de lijst is nu <strong>');
document.write(leerlingen[leerlingen.length - 1] + '</strong></p>'); //laatste leerling

/* schrijf na deze regel je code van opdracht 5 */
leerlingen.unshift('Nick', 'Mike'); //Voegt toe aan het begin
document.write('<p>De eerste leerling in de lijst is nu <strong>');
document.write(leerlingen[0] + '</strong></p>'); //eerste leerling
