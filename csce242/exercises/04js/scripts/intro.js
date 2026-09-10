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