function checka2(){

    let num = prompt("enter number: ");
    let total = 0;

    for (let i = 1; i <= num; i++) {
        total = total + i ;     
    }
    document.getElementById("test1").innerHTML =  " Tổng từ 1 đến "+ num + " là: "  +  total;

}
// hỏi xem hiển thị thêm như là: 1+2+3+4+5=



