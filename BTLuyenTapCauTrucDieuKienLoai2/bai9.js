function tamgiac() {
    var a = Number(document.getElementById("nhapa9").value);
    var b = Number(document.getElementById("nhapb9").value);
    var c = Number(document.getElementById("nhapc9").value);
    var kq = "";
    if (a > 0 && b > 0 && c > 0) {
        if ((a + b) > c) {
            if ((b + c) > a) {
                if ((a + c) > b) {
                    kq = "True";
                } else {
                    kq = "False";
                }
            } else {
                kq = "False";
            }
        } else {
            kq = "False";
        }
    } else {
        kq = "False";
    }
    document.getElementById("result9").innerHTML = kq;

}

