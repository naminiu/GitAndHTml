function ptbac2() {
    var nhapa = Number(document.getElementById("nhapa7").value);
    var nhapb = Number(document.getElementById("nhapb7").value);
    var nhapc = Number(document.getElementById("nhapc7").value);
    var delta = (nhapb * nhapb) - (4 * nhapa * nhapc);
    document.getElementById("delta1").innerHTML = delta;
    var kq = "";

    if (delta < 0) {
        kq = "Phương trình vô nghiệm";
    } else if (delta > 0) {
        kq = "phương trình có 2 nghiệm phân biệt. x1 = "+ ((-nhapb)+Math.sqrt(delta))/(2*nhapa) + "; x2 = " + ((-nhapb)-Math.sqrt(delta))/(2*nhapa);
    } else {
        kq = "phương trình có nghiệm kép. x1 = x2 = " + ((-nhapb)/(2*nhapa)) ;
    }

    document.getElementById("result7").innerHTML = kq;

}

