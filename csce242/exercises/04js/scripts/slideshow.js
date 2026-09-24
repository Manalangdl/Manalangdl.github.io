

// when right arrow is clicked switch img is showing
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault(); //prevents going to link
    const currentSlide = document.querySelector("#slides :not(.hidden)");
    console.log(currentSlide);

}