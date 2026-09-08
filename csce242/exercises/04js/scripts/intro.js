// function showMessage(){
// const showMessage = () =>{
//     console.log("I did it! The button was clicked!");
// }

const btnClick = document.getElementById("btn-show-message").onclick = (e) =>{
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
}