var aantal = 100;

aantal = aantal + 1;
console.log(aantal);

aantal += 1;
console.log(aantal);

aantal++;
console.log(aantal);

var invoer = prompt('Voer getal in');
aantal += parseInt(invoer);

console.log(aantal);

var invoer2 = prompt('Voer getal in');
aantal -= invoer2;
console.log(aantal);

//Deel 2
var a = 1;
var b = 5;
var c = 10;
var d = '1';
var e = true;

console.log(a = b); //A wordt geinitaliseerd (b dus 5)
console.log(a == b); //Gelijk aan (false)
console.log(a == d); //Zelfde waarde van string en int
console.log(a === d); //Gelijk aan en zelfde DataType
console.log(a < b); //Kleiner dan (true)
console.log(a > b); //Groter dan (false)
console.log(a <= a); //Kleiner dan of gelijk aan (true)
console.log(a >= a); //Groter dan of gelijk aan (true);
console.log(a != b); //Niet gelijk aan (true)
console.log(a !== d); //Niet gelijk aan datatype en content

//Deel 3
var a = 'Maandag';
var b = 'maandag';
var c = 10;
var d = 5;
var e = '10';

d > c && d < a;
(a * 10) != c;
(a* c) == c;