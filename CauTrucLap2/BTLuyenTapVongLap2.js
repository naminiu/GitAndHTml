function check1() {

    let f0 = parseInt(prompt("Nhập f0: "));
    let f1 = parseInt(prompt("Nhập f1: "));
    let kq = "";
    for (let i = 0; i < 20; i++) {
        document.write(`${f0} <br>  `);

        const tmp = f0;
        f0 = f1;
        f1 = tmp + f1;
    }
}

function check2(){

    let number1 = prompt("Nhập 1 số:");
    let number2 = 1;
    for (let i = 1; i <= number1; i++) {
             number2 *= i;
    }
document.getElementById("result2").innerHTML =`Giai thừa của ${number1} là ${number2}`;
}
    // let number1 = prompt("Nhập 1 số:");
    // let number2 = 1;
    // let i = 1;
    // while (i <= number1) {
    //     number2 *= i;
    //     i++;
    // }
    // console.log(number2);

    function check3(){

        let a = "*";
        let a1 = "";
        for (let i = 0; i < 5; i++) {
            a1 += a;
            document.writeln(a1 + "<br>");
        }
// chỉ làm được hình đầu tiên
    }

