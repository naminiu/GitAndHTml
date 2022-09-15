function ptbac1() {
    let a = Number(document.getElementById("nhapa6").value);
    let b = Number(document.getElementById("nhapb6").value);
    let kq = "";
    if (a == 0 && b == 0) {
        kq = "phương trình có vô số nghiệm";
    } else if ((a == 0 && b < 0) || (a == 0 && b > 0)) {
        kq = "phương trình  vô nghiệm";
    } else if ((a < 0 || a > 0)) {
        kq = "Phương trình có nghiệm duy nhất x = " + (-b) / a;
    } else {
    }

    document.getElementById("result6").innerHTML = kq;
}



