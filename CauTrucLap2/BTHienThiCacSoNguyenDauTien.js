let number = 10
let countOfDivisor = 0;
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            console.log(number + " khong phai la so ngto");
            countOfDivisor++;
            break;
        }
    }
    if (countOfDivisor == 0) {
    //    document.getElementById("result1").innerHTML = number;
    // document.write(number + " ");
   console.log(number + " la so ngto");
    }
