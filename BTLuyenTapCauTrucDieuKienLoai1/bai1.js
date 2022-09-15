function submit(){
    var a = Number(document.getElementById("diema").value);
    var b = Number(document.getElementById("diemb").value);
    var kQ = a % b;

    if (kQ == 0 ) {
        result = ". chia hết!!  ";
    } else {
        result = ". không chia hết!!  ";
    }
    document.getElementById("result").innerHTML= a + "%" + b + "=" + kQ + result;
}
function reset(){
    document.getElementById("diema").value="";
    document.getElementById("diemb").value="";
    document.getElementById("result").innerHTML="";

}