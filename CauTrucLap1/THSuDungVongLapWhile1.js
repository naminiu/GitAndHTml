function check(){

    let num = parseInt(prompt("enter number: "));
    let total = 0;
   while (num != -1) {
    num = parseInt(prompt("enter number: "))
    total += num ;
   }
   document.getElementById("result").innerHTML ="tổng các số đã nhập là: " + total;

}
// hỏi xem số đầu tiên nhập là bằng 0



