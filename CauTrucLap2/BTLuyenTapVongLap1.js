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
        document.write(`${f0}   `);
        // document.getElementById("result2").innerHTML = `${f0}`;
        // hỏi vì sao không in ra màn hình được
        const tmp = f0;
        f0 = f1;
        f1 = tmp + f1;

    }

}
function check3() {

    let f0a = parseInt(prompt("Nhập f0a: "));
    let f1a = parseInt(prompt("Nhập f1a: "));
    let kq = "";
    for (let ia = 0; ia < 4; ia++) {
        // document.getElementById("result2").innerHTML = `${f0}`;
        // hỏi vì sao không in ra màn hình được
        const tmpa = f0a;
        f0a = f1a;
        f1a = tmpa + f1a;


    }
    document.getElementById("result3").innerHTML=f0a;
}

