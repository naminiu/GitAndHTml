function submit6() {
    var so1 = Number(document.getElementById("songuyen1").value);
    var so2 = Number(document.getElementById("songuyen2").value);
    var so3 = Number(document.getElementById("songuyen3").value);
    
    if (so1 > so2 && so3) {
        resultd = "số "+ so1 + " lớn nhất";
    } else if (so2 > so3) {
        resultd = "số "+ so2 + " lớn nhất";
    } else {
        resultd = "số"+ so3 + " lớn nhất";
    }

    document.getElementById("result6").innerHTML = resultd;
}
function reset6() {
    document.getElementById("songuyen1").value = "";
    document.getElementById("songuyen2").value = "";
    document.getElementById("songuyen3").value = "";
    document.getElementById("result6").innerHTML = "";

}