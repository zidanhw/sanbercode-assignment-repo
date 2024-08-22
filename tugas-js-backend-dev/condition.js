const argInput = process.argv.slice(2);

const number = parseInt(argInput, 10);

if (!number) {
    console.log('Input tidak valid.');
} else {
    if (number % 2 === 0) {
        console.log('Angka tersebut merupakan angka genap.');
    } else {
        console.log('Angka tersebut merupakan angka ganjil.');
    }
}
let number2 = Math.floor(Math.random()*7) + 1;
let dayName;
switch(number2) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3: 
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Minggu';
        break
    default:
        console.log("Input tidak valid");
        break;
}
console.log(number2);
console.log(dayName);