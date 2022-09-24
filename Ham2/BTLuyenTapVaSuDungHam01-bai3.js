function thamso(a, b){
    let result = "";
        if (a > b) {
            kq = alert(`${a} lớn hơn ${b}`);
        }
        if (a < b) {
            kq = `tổng của a và b là: ${a+b}`;
        }
        return kq;
}
function check(){
let input1 = Number(document.getElementById("input1").value);
let input2 = Number(document.getElementById("input2").value);
document.getElementById("result2").innerHTML = thamso(input1, input2);
}

