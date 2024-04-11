let button = document.querySelectorAll("button");
let input = document.querySelector("input");

let arr = Array.from(button);
let string = " ";

arr.forEach(function(btn){
    btn.addEventListener("click", function(e){
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == "AC"){
            string = " ";
            input.value = 0;
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})