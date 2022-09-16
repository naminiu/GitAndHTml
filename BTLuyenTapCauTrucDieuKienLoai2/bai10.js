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

//  / let a = Number;
// switch (true) {
//     case (a > 0 && a <= 50):
//         console.log(a * 1678);
//         break;
//     case (a >= 51 && a < 100):
//         console.log(50 * 1678 + (a-50)*1734);
//         break;
//     case (a >= 101 && a < 200):
//         console.log(50 * 1678 + (50)*1734 + (a-100)*2014);
//         break;
//     case (a >= 200 && a < 300):
//         console.log(50 * 1678 + 50*1734 + 100*2014 + (a-200)*2536);
//         break;
//     case (a >= 300 && a < 400):
//         console.log(50 * 1678 + 50*1734 + 100*2014 + 100*2536 + (a-300)*2834);
//         break;
//     default:
//         console.log(50 * 1678 + 50*1734 + 100*2014 + 100*2536 + 100*2834 + (a-400)*2927);
//         break;
// }





// let a = Number;
// let result = "";
// result = (a >=0 && a <= 50)  ? console.log(a*1678) : 
//          (a >=51 && a < 100) ? console.log((50*1678)+(a-50)*1734):
//          (a >=101 && a < 200) ? console.log(50 * 1678 + (50)*1734 + (a-100)*2014):
//          (a >= 200 && a < 300) ? console.log(50 * 1678 + 50*1734 + 100*2014 + (a-200)*2536):
//          (a >= 300 && a < 400)? console.log(50 * 1678 + 50*1734 + 100*2014 + 100*2536 + (a-300)*2834):
//          console.log(50 * 1678 + 50*1734 + 100*2014 + 100*2536 + 100*2834 + (a-400)*2927);





// function tiendien(){
//     let NumBer = document.getElementById("input").value;
//     let result1 = "";
//     result1 = `${NumBer > 0 && NumBer <= 50 ? NumBer*1678 :
//         NumBer >= 51 && NumBer < 100 ? 50*1678 + (NumBer-50)*1734 :
//         NumBer >= 101 && NumBer < 200 ? 50*1678 + 50*1734 + (NumBer-100)*2014 :
//         NumBer >= 200 && NumBer < 300 ? 50*1678 + 50*1734 + 100*2014 + (NumBer-200)*2536 :
//         NumBer >= 300 && NumBer < 400 ? 50*1678 + 50*1734 + 100*2014 + 100*2536 + (NumBer-300)*2834 :
//                               50*1678 + 50*1734 + 100*2014 + 100*2536 + 100*2834 + (NumBer-400)*2927}`
//         document.getElementById("result").innerHTML=result1;