function doc(){
    var nhapDocC = Number(document.getElementById("nhapdoc").value)
    var doF = nhapDocC*1.8 + 32;
    console.log(doF);
    document.getElementById("result").innerHTML= doF;
}


