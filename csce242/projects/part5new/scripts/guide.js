class Restaurant {

    constructor(name, src) {
        this.name = name;
        this.src = src;
    }
}


const modal = document.querySelector("#modal");
const iframe = document.querySelector("iframe");
const options = document.querySelectorAll(".options button");
const title = document.querySelector("#modal .title")

const locations = document.querySelectorAll("#locations a");

const restaurants = {
    "Downtown" : [
        new Restaurant(),
        new Restaurant(),
        new Restaurant()
    ],
    "Cayce" : [
        new Restaurant(),
        new Restaurant(),
        new Restaurant()
    ],
    "Rosewood" : [
        new Restaurant(),
        new Restaurant(),
        new Restaurant()
    ],
    "On Campus" : [
        new Restaurant(),
        new Restaurant(),
        new Restaurant()
    ],
    "Densville" : [
        new Restaurant(),
        new Restaurant(),
        new Restaurant()
    ],
    "Irmo" : [
        new Restaurant(),
        new Restaurant(),
        new Restaurant()
    ],
}

// loops through all the locations
for (let i = 0; i < locations.length; i++) {

    // makes the onclick for each of the location divs
    locations[i].onclick = () => {

        // reveals the modal
        modal.classList.toggle('hidden');

        // gets the list for the restaurants for the modal to be used
        const list = restaurants[locations[i].querySelector(".location-name").innerHTML];

        // Adds the options new name and src based off the list
        for (let j = 0; j < 3; j++){

            options[j].innerHTML = list[j].name;

            options[j].onclick = () => {

                iframe.src = list[j].src;
            }
        }

        // default the iframe to the first src
        iframe.src = list[0].src;
    }
}
