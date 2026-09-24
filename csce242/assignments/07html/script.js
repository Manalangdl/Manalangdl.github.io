window.onload = () => {

    const road = document.getElementById("road");

    let car;
    let innerCar;
    let windshield;

    // loops for amount of cars wanted
    for(let i = 0; i < 8; i++) {

        // Make the car
        car = document.createElement("div");

        // Add the classes
        car.classList.add("car");
        car.classList.add("blue");

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
}