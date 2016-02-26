var score = 0;
console.log(score); //0

score = 100;
console.log(score); //100

score = score - 10;
console.log(score); //90

score = score * 10;
console.log(score); //900

score++;
console.log(score); //901

score++;
console.log(score); //902

score += 5;
console.log(score); //907

score -=10;
console.log(score); //897

score--;
console.log(score); //896

score = score + ' sok';
console.log(score); //896 sok

score = (parseInt(score) + 30) / 10; 
console.log(score); //92.6

score /= 2;
console.log(score); //46.3

var score;
console.log(score); //46.3

score += 1;
console.log(score); //47.3

score = score + y;
console.log(score); //NaN

var y = score + 100;
console.log(score); //NaN

score = (y > score);
console.log(score); //false

score = !score;
console.log(score); //true