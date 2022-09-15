function submit1() {
    var tuoi1 = Number(document.getElementById("tuoi").value);
    if (tuoi1 < 15) {
        result2 = "Bạn không đủ đk vào học lớp 10.";
    } else {
        result2 = "Bạn  đủ đk vào học lớp 10.";
    }
    document.getElementById("result1").innerHTML=  result2;
}
function reset1(){
    document.getElementById("tuoi").value = "";
    document.getElementById("result1").innerHTML = "";
}