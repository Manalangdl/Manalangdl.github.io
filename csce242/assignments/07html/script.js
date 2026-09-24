const random = (start, end) => {

    return Math.floor(Math.random() * (end - start + 1)) + start;
}
// color of car, top/bottom, how far left
const generateCar = (color, top, left) => {

    // Vars for generating
    let car;
    let innerCar;
    let windshield;

    // Make the car
    car = document.createElement("div");

    // Add the classes
    car.classList.add("car");
    car.style.top = top;
    car.style.left = left;
    car.style.backgroundColor = color;

    // Make the inner-car
    innerCar = document.createElement("div");

    // Add the classes
    innerCar.classList.add("inner-car");

    // Make the windshield
    windshield = document.createElement("div");
    // Add the classes
    windshield.classList.add("windshield")

    // Add windshield -> inner-car
    innerCar.appendChild(windshield);

    // Append inner-car -> car
    car.appendChild(innerCar);

    // Append car -> Road
    road.appendChild(car);
}

window.onload = () => {

    const road = document.getElementById("road");

    let colors = ["maroon","aqua","lightgreen","orchid","silver","white","khaki","pink"];

    // loops for amount of cars wanted
    for(let i = 0; i < 8; i++) {

        generateCar(colors[i], ( random(0,1) == 0 ) ? "5%" : "55%", `${random(0,98)}%`)
    }
}