let f05 = parseInt(prompt("Nhập f05: "));
let f15 = parseInt(prompt("Nhập f15: "));
let i5 = 0;
for (; i5 < 20; i5++) {
    console.log(`${f05}  `);

    // document.getElementById("result2").innerHTML = `${f0}`;
    // hỏi vì sao không in ra màn hình được
    const tmp5 = f05;
    f05 = f15;
    f15 = tmp5 + f15;
}