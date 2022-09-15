
function submit7() {
    var diem1 = Number(document.getElementById("kiemtra").value);
    var diem2 = Number(document.getElementById("giuaki").value);
    var diem3 = Number(document.getElementById("cuoiki").value);
    var dTB = (diem1 + diem2 + diem3)/3;

    if (dTB <4) {
        resultf = " học lực yếu";
    } else if (dTB <6.4) {
        resultf = " học lực trung bình";

    } else if (dTB <8.4) {
        resultf = " học lực khá";
    } else if (dTB <= 10) {
        resultf = " học lực giỏi";
    } else {
        resultf = "Nhập sai";

    }
    document.getElementById("result7").innerHTML = resultf;
}
function reset7() {
    document.getElementById("kiemtra").value = "";
    document.getElementById("giuaki").value = "";
    document.getElementById("cuoiki").value = "";
    document.getElementById("result7").innerHTML = "";

}