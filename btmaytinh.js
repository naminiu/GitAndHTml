function add(){
var mot = document.getElementById("num1").value;
var hai = document.getElementById("num2").value;
var result = Number(mot) + Number(hai);
document.getElementById("result").innerHTML = result;
}
function Sub(){
var mot = document.getElementById("num1").value;
var hai = document.getElementById("num2").value;
var result = Number(mot) - Number(hai);
document.getElementById("result").innerHTML = result;
}
function Mul(){
var mot = document.getElementById("num1").value;
var hai = document.getElementById("num2").value;
var result = Number(mot) * Number(hai);
document.getElementById("result").innerHTML = result;
}
function Div(){
var mot = document.getElementById("num1").value;
var hai = document.getElementById("num2").value;
var result = Number(mot) / Number(hai);
document.getElementById("result").innerHTML = result;
}
