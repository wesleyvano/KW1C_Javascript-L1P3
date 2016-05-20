var a=20, b= 9, c=1, d=null; 
var dag1 = 'maandag'; 
var dag2 = 'dinsdag'; 
var dag3 = 'Dinsdag'; 
var score = 100;

console.log(score === 100); //true
console.log(score !==100); //false
console.log(score < 20 || score >50); //true
console.log(score > 0 && score > 99); //true
console.log(score < 30 || score > 100 || 1==1); //true 
console.log(a === 20 && b<8 && c<3); //false
console.log(a === 20 && b>8 || c<3); //true
console.log(a == d);//false
console.log(dag1 != dag2); //true
console.log(dag3 == dag2); //false