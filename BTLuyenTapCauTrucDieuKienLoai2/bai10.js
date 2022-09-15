function submit10() {
    let nhapso = Number(document.getElementById("number10").value);
    let kQ = "";
    if (nhapso < 0) {
        kQ = "không hợp lệ";
    } else if (nhapso <= 50) {
        kQ = nhapso * 1678;
    } else if (nhapso <= 100) {
        kQ = (50 * 1678) + (nhapso - 50) * 1734;
    } else if (nhapso <= 200) {
        kQ = (50 * 1678) + (50*1734)+ (nhapso - 100) * 2014;
    } else if (nhapso <= 300) {
        kQ = (50 * 1678) + (50*1734)+ (100*2014) + (nhapso - 200) * 2536;
    } else if (nhapso <= 400) {
        kQ = (50 * 1678) + (50*1734)+ (100*2014) + (100*2536) + (nhapso - 300) * 2834;
    } else {
        kQ = (50 * 1678) + (50*1734)+ (100*2014) + (100*2536) + (100*2834) + (nhapso - 400) * 2927;
    }
    document.getElementById("result10").innerHTML = kQ + " VNĐ";
}
 function reset10(){
    document.getElementById("number10").value="";
    document.getElementById("result10").innerHTML="";
 }