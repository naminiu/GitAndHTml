function check(){

 let dong = "";
    dong = "<table border='1' cellspacing='0'>";

for (let i = 2; i <= 10; i++) {
    dong = dong  + "<tr>"; 
     for (let j = 1; j <= 9; j++) {
        dong = dong + "<td>" + i + " x " + j + " = " + i*j +  "</td>";
     }
}
    document.getElementById("result").innerHTML = dong;
}