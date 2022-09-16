
// b1: nhập số tiền thu nhập/tháng - lương đóng bảo hiểm - số người phụ thuộc
// b2: tính  % mức đóng bảo hiểm
// b3: giảm trừ bản thân 11.000.000
// b4: giảm trừ người phụ thuộc. trừ mỗi người 4.400.000
// b5:  thu nhập tính thuế = lương - % bảo hiểm - 11.000.000 - số người phụ thuộc
// b3: % thuế dựa vào bảng bên dưới 

function submit(){

let luong = document.getElementById("luongthang").value;
let baohiem = document.getElementById("baohiem").value;
let phuthuoc = document.getElementById("phuthuoc").value;

let dongbaohiem = `${baohiem*0.105}`;
let truphuthuoc = `${phuthuoc*4400000}`;
let tntinhthue = `${luong-dongbaohiem-truphuthuoc-11000000}`;
let hienthi = "";
let hienthi1 = "";
let hienthi2 = "";
let hienthi3 = "";
let hienthi4 = "";

hienthi1 = ("Bảo hiểm bắt buộc = " + dongbaohiem +" VNĐ");
hienthi2 = ("giảm trừ bản thân = 11.000.000 VNĐ");
hienthi3 = ("giảm trừ người phụ thuộc = "+ truphuthuoc + " VNĐ");
hienthi4 = ("Thu nhập tính thuế  = "+ tntinhthue + " VNĐ");

hienthi = (`thuế cá nhân thu nhập phải đóng là = ${
                tntinhthue <= 5000000 ? (tntinhthue*0.05) :
                   5000000 < tntinhthue && tntinhthue  <= 10000000 ?  (tntinhthue*0.1 - 250000) :
                   10000000 < tntinhthue && tntinhthue  <= 18000000 ? (tntinhthue*0.15 - 750000) :
                   18000000 < tntinhthue && tntinhthue  <= 32000000 ? (tntinhthue*0.2 - 1650000) :
                   32000000 < tntinhthue && tntinhthue  <= 52000000 ? (tntinhthue*0.25 - 3250000) :
                   52000000 < tntinhthue && tntinhthue  <= 80000000 ? (tntinhthue*0.3 - 5850000) :
                   (tntinhthue*0.35 - 9850000)} VNĐ`);

     document.getElementById("result1").innerHTML = hienthi1;
     document.getElementById("result2").innerHTML = hienthi2;
     document.getElementById("result3").innerHTML = hienthi3;
     document.getElementById("result4").innerHTML = hienthi4;
     document.getElementById("result").innerHTML = hienthi;

}              
                
