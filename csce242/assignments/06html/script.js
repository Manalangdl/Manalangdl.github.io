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
const today = new Date();
const endOfSemester = new Date(2026, 11, 4, 3, 35);
const timeDelta = Math.floor(((endOfSemester - today) / (1000 * 60 * 60 * 24)) + 1);

document.getElementById("days-left").innerHTML = timeDelta;

// message for the end of semester counter
const message = document.querySelector("#message");

if (timeDelta > 60) {
    message.innerHTML = "You have more than 2 months left, keep learning and work hard."
} 
else if (timeDelta > 30){
    message.innerHTML = "You have over a month left, getting closer to the finish line."
}
else if (timeDelta > 14){
    message.innerHTML = "You have over 2 weeks left, keep up the hard work!"
}
else if (timeDelta > 7){
    message.innerHTML = "You have over a week left, you've made it so far along."
}
else if (timeDelta > 1){ 
    message.innerHTML = "You have less than a week left, wow you are practically done!"
}
else {
    message.innerHTML = "Congratulations on making it through the semester!"
}