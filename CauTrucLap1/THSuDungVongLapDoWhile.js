function check(){

    let value = "";
    do {
        value = prompt("Nhập 1 số từ 1 đến 10");
    } while (value < 1 || value > 10);

document.getElementById("result").innerHTML = "Số bạn vừa nhập là: " + value;


}
// hỏi xem số đầu tiên nhập là bằng 0



