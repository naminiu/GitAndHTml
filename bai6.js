function submit8() {
    var phanTramHoaHong = Number(document.getElementById("phantramhoahong").value);
    var doanhSo = Number(document.getElementById("doanhso").value);
    var tienHoaHong = (phanTramHoaHong/100)*doanhSo ;

    document.getElementById("result8").innerHTML ="Tiền hoa hồng của bạn là: " + tienHoaHong + " VNĐ";
}
function reset8() {
    document.getElementById("phantramhoahong").value = "";
    document.getElementById("doanhso").value = "";
    document.getElementById("result8").innerHTML = "";

}