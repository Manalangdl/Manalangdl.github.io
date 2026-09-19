// function showMessage(){
// const showMessage = () =>{
//     console.log("I did it! The button was clicked!");
// }


// shows a message when the buttons ic clicked
const btnClick = document.getElementById("btn-show-message").onclick = (e) =>{
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
};

// styles the link when it's clicked
document.getElementById("link").onclick = (e) =>{
    e.preventDefault(); //don't go to link's destination
    e.target.classList.add("cool-link");
    // console.log("you clicked");
};


// when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) =>{
    document.getElementById("ball").classList.toggle("bouncing-ball");
    // console.log("hi"); //checks for err
}

// when you change the num of days sine you watered your plant
// show a message and change the img
// or .onkeyup
document.getElementById("txt-num-days").onchange = (e) =>{ 
    // parseInt makes the text to int
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");

    if(numDays <= 2){
        // pMessage.innerHTML = "Let your plant rest it's only been " + numDays + " days";
        pMessage.innerHTML =  `Let your plant rest it's only been ${numDays} day(s).`;
        plantImage.src="https://dummyimage.com/150x150/556b2f/000000&text=Happy+Plant"
    }
    else if(numDays <= 5){
        pMessage.innerHTML = `Time to water it's been ${numDays} days.`;
        plantImage.src="https://dummyimage.com/150x150/bdb76b/000000&text=Happy+Plant"
    }
    else if(numDays <= 7){
        pMessage.innerHTML = `Oh no your plant is wilting it's been ${numDays} days.`;
    }
    else{
        pMessage.innerHTML = "Your plant is a goner";
    }

}

// counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;


btnStart.onclick = () =>
{
    // every .500 sec, funct gets called
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
    },500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
};
btnPause.onclick = () =>
{
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};

btnStop.onclick = () =>
{
    count=0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};


// DATE DISPLAY 
setInterval(()=>{
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();
    pDisplay.innerHTML = `${hours}:${minutes}:${seconds} ${month}/${day}/${year}`;
},1000)

// TOGGLE NAVIGATION
//use # inside "" when using query selector()
document.querySelector("#toggle-nav").onclick = () =>{
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
}

// THERMOMETER

// record the users donation and fill up the thermometer appropriately
const GOAL = 10000;
document.getElementById("goal").innerHTML = GOAL;

document.getElementById("btn-donation").onclick = () =>{
    const userDonation = parseInt(document.getElementById("txt-donation").value);
    const donationP = document.getElementById("donation-message");
    percent = userDonation / GOAL * 100;

    donationP.innerHTML = `You are ${percent.toFixed(1)}% to your goal`;
    document.querySelector(":root").style.setProperty("--donation",percent + "%");

}

// document.getElementById("txt-donation").onchange = (e) =>{
//     const userDonation = parseInt(e.target.value);
//     console.log(userDonation);
// }