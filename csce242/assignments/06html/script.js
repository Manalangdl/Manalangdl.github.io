// menu codde for mobile #menuArrow

// tab code #exercise1 & #exercise2
const div1 = document.getElementById("exercise1Div");
const div2 = document.getElementById("exercise2Div");

// 1st check if they have hidden class, then take away hidden class and add it to exerc 2
document.getElementById("exercise1").onclick = () => {
    if (div1.classList.contains("hidden")){
        div1.classList.remove("hidden");
        div2.classList.add("hidden");
    }
}

// does the opposite from above
document.getElementById("exercise2").onclick = () => {
    if (div2.classList.contains("hidden")){
        div2.classList.remove("hidden");
        div1.classList.add("hidden");
    }
}


// input for exercise 1 #numInput


// code for End of Sem Counter