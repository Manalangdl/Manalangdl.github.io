document.getElementById("box1").onclick = (e) => {


    document.getElementById("bubble").classList.add("active");
}

document.getElementById("select").onclick = (e) => {

    if (e.target.value != "") {
        document.getElementById("select-text").classList.remove("hidden");
        document.getElementById("select-text").innerHTML = e.target.value + ": Nice Choice!";
    }
}