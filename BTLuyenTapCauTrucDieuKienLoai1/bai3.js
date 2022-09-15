function submit3() {
    var soNguyen = Number(document.getElementById("songuyen").value);
    if (soNguyen > 0) {
        resultc = "số " + soNguyen + " lớn hơn 0";
    } else if (soNguyen == 0) {
        resultc = "số " + soNguyen + " bằng 0";
    } else  {
        resultc = "số " + soNguyen + " nhỏ hơn 0";
    }
    document.getElementById("result4").innerHTML = resultc;
}
function reset3() {
    document.getElementById("songuyen").value = "";
    document.getElementById("result4").innerHTML = "";

}