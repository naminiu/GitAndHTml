function check33()
{

// b1: kẻ 10 dòng
// b2: in ra giá trị 10 cột trên mỗi dòng. tr
// b3: lặp dòng 1 với 10 cột, dòng 2 với 10 cột,... td
// b4: xem kết quả.

   let sout ="";
    sout = "<table border='1'' >  ";
   for (i = 1; i <= 10; i++) {
                sout = sout + "<tr>";
        for (j = 1; j <= 10; j++) {
            sout += "<td>" + i * j + "</td>" ;
        }
    }
    document.getElementById("result33").innerHTML = sout;



    // let dong = "";

    // for (let i = 1; i <= 10; i++) {
    //     dong += i + "<br>";
    //     for (let j = 1; j <= 10; j++) {
    //         dong1 = i*j ;
    //     }
  
    // }
    // document.getElementById("result33").innerHTML = dong*dong1;
}



