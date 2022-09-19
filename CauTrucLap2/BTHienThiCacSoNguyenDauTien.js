
function check1(){
    // b1: khai báo biến để nhập
    // b2: khai báo biến để kiểm tra số lượng nguyên 
    //     tố bằng số đã nhập ở b1 hay chưa
    // b3: khai báo biến gán giá trị = 2 để kiểm tra chia lấy dư
    //     mỗi lần lặp giá trị tăng lên 1
    // b4: kiểm tra count < number:
    //     + kiểm tra number có phải số ng tố không. 
    //       nếu N là số ng tố in ra giá trị và tăng count lên 1
    //     + giá trị của N tăng lên 1 để kiểm tra số tiếp theo.

    /* nhập số 5: = input
        cho ra 5 số = numbersosanh
        lấy number (number sẽ chạy từ 0 đến number-1) chia cho 2
        nếu number chia cho 2 mà != 0 thì in ra 1 số: = number
        lặp lại cho đến khi in ra được 5 số: kq = numbersosanh
    */

    let number = prompt("Nhập 1 số để kiểm tra: ");
    let count = 0; // dùng để chia kiểm tra ước. ví dụ 5/0 5/1 5/2...
    let countss = 0; // để kiểm tra số lượng ng tố cần in ra hay chưa, bằng với number

        


    document.getElementById("result1").innerHTML = number;
}
