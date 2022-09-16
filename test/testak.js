function submit() {
    var so = Number(document.getElementById("number").value);
    var result1 = "";
    if (so > 10 || so < 0) {
        result1 = "Không hợp lệ";
    } else
        if (so >= 9) {
            result1 = "Xuất sắc";
        } else if (so >= 8) {
            result1 = "Giỏi";
        } else if (so >= 7) {
            result1 = "Khá";
        } else if (so >= 5) {
            result1 = "Trung bình";
        } else {
            result1 = "yếu";
        }
    document.getElementById("result").innerHTML = result1;
}