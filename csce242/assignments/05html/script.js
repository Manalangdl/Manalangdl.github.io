// first column
document.getElementById("box1").onclick = (e) => {

    document.getElementById("bubble").classList.add("active");
}

// second column
document.getElementById("select").onclick = (e) => {

    if (e.target.value != "") {
        document.getElementById("select-text").classList.remove("hidden");
        document.getElementById("select-text").innerHTML = e.target.value + ": Nice Choice!";
    }
}

// third column
document.getElementById("img-btn").onclick = (e) => {

    document.getElementById("heart").classList.remove("hidden")
}