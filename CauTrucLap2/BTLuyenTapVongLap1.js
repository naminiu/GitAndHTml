function check() {
    let text = "";
    for (let i = 1; i < 10; i++) {
        text = alert(i);
        if (i === 9) {
            text = alert("Hoàn thành");
            break;
        }
    }
    document.getElementById("result").innerHTML = "Hoàn thành ";
}



function check1() {


    let value = "";
    do {
        value = prompt("Nhập nhiệt độ:");
        if (value < 20) {
            alert("tăng nhiệt độ");
        } else if (value > 100) {
            alert("giảm nhiệt độ");
        }
    }
    while (value < 20 || value > 100);


    document.getElementById("result1").innerHTML = "Nhiệt độ là: " + value;
}

function check2() {

    let f0 = parseInt(prompt("Nhập f0: "));
    let f1 = parseInt(prompt("Nhập f1: "));
    let kq = "";
    for (let i = 0; i < 20; i++) {
        document.write(`${f0} <br>  `);

        // document.getElementById("result2").innerHTML = `${f0}`;
        // hỏi vì sao không in ra màn hình được
        const tmp = f0;
        f0 = f1;
        f1 = tmp + f1;
    }
    // document.getElementById("result2").innerHTML = kq;
}


function check3() {

    let f04 = parseInt(prompt("Nhập f04: "));
    let f14 = parseInt(prompt("Nhập f14: "));
    let kq = "";
    for (let i4 = 0; i4 < 5000000000000000000000000000000; i4++) {

        // document.getElementById("result2").innerHTML = `${f0}`;
        // hỏi vì sao không in ra màn hình được
        const tmp4 = f04;
        f04 = f14;
        f14 = tmp4 + f14;
        document.write(`${f04} <br>  `);

        if (f04 % 5 == 0) {
            document.write(`số đầu tiên chia hết cho 5 là ${f04} <br>  `);
            break;
        }
    }
    // document.getElementById("result2").innerHTML = kq;

}
function check7() {


    let i7 = 0;
    for (; i7 < 101; i7++) {
        if (i7 % 3 == 0) {
            document.write("Fizz" + "<br>");
            continue;
        }
        if (i7 % 5 == 0) {
            document.write("Buzz" + "<br>");
            continue;
        }
        if (i7 % 5 == 0 && i7 % 3 == 0) {
            document.write("FizzBuzz" + "<br>");
            continue;
        }

        document.write(i7 + "<br>");
    }
}
function check8() {

    /* nhập số mà bạn muốn đoán trong khoản nào
  cho random 1 số trong khoảng từ 0 đến số người dùng nhập
  cho người dùng 3 lần nhập: 
  nếu nhập cao hơn số random thì báo cần giảm xuống
  nếu nhập thấp hơn số random thì báo cần tăng lên
  nếu nhập đúng thì thông báo đúng
  nếu nhập 3 lần không đúng thì kết thúc*/

    let number = prompt("Số bạn muốn đoán trong khoảng nào? (bắt đầu từ 0 đến số bạn nhập)");
    let numberran = Math.floor(Math.random() * number);
    console.log(numberran);
    // alert("Số ngẫu nhiên là: " + numberran);
    let i = 1;

    while (i <= 3) {
     
        let numbercheck = prompt("bạn chỉ có 3 lần đoán, đây là lần " + i);
        i++;
        if (numbercheck < numberran) {
            alert("bạn đã đoán thấp, cần tăng lên");
            continue;   
        } else if (numbercheck > numberran) {
            alert("bạn đã đoán cao, cần giảm xuống");
            continue;
        } else {
            alert("bạn đã đoán đúng");
            break;
        }
        // chưa hiện được bảng kết thúc khi đoán sai 3 lần
    }
    document.getElementById("result8").innerHTML ="số ngẫu nhiên là: "+  numberran;
}










