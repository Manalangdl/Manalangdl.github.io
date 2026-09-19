// menu code for mobile #menuArrow

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

const CLASSES = 25;
const PERCENTAGE = 0.07;
const PERCENTAGE_CONVERSION = 100;
let percent;
// input for exercise 1 #numInput
document.getElementById("numInput").oninput = (e) => {
    percent = (e.target.value / CLASSES * PERCENTAGE * PERCENTAGE_CONVERSION).toFixed(1);
    document.getElementById("e1Response").innerHTML = "You will lose " + percent + "% for skipping " + e.target.value + " days.";
}

// code for End of Sem Counter