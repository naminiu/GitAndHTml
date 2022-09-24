        function starcons(input) {
            let namestar = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
            let constellate = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
            let result = "";
            let count = 0;
            for (let i = 0; i < namestar.length; i++) {
                if (input == namestar[i]) {
                    result = constellate[i];
                    count++;
                }
                if (count == 0) {
                    result = "không tìm thấy ngôi sao.";
                }
            }
            return result;
        }
        function check() {
            let inputstar = prompt("Nhập sao:");
            document.getElementById("result3").innerHTML = starcons(inputstar);
        }   
