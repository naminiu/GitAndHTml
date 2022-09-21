let number = 20;
let countOfDivisor = 0;
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            console.log(number + " k phai la so ngto");
            break;
        }
    }
    if (countOfDivisor == 0) {
        console.log(number + " la so ngto");
    }