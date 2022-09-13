function Convert(){
    var Amount1 = document.getElementById("Amount").value;
    var from1 = document.getElementById("from").value;
    var to1 = document.getElementById("to").value;
    var result = document.getElementById(result);

    if (from1 == "VND" && to1 == "VND") {
        result = "result: " + Amount1 + " Đ";
    } else
        if ( from1 == "VND" && to1 == "USD") {
            result = "result: " + Amount1 / 23000 + " $";
        } else if ( from1 == "USD" && to1 == "VND") {
            result = "result: " + Amount1 * 23000 + " Đ";
        } else {
            result = "result: " + Amount1 + " $";
        }
document.getElementById("result").innerHTML = result;
    }

