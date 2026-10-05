class Restaurant {

    constructor(name, type, src) {
        this.name = name + " | " + type;
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
        new Restaurant("929 Kitchen & Bar", "Korean", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.699806652711!2d-81.04001372486407!3d34.00024367317655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb2c704eaaab%3A0xa546748c3a751aee!2s929%20Kitchen%20%26%20Bar!5e0!3m2!1sen!2sus!4v1791167215594!5m2!1sen!2sus"),
        new Restaurant("The Hollow", "American", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.699806652711!2d-81.04001372486407!3d34.00024367317655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bbee5c53fe05%3A0x9748f57d28c4c1fc!2sThe%20Hollow!5e0!3m2!1sen!2sus!4v1791167272490!5m2!1sen!2sus"),
        new Restaurant("Blue Marlin", "Seafood", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.691952453564!2d-81.041159324864!3d34.00044537317652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb2c4095d50b%3A0x500e97dd16fc9aa3!2sBlue%20Marlin!5e0!3m2!1sen!2sus!4v1791167289037!5m2!1sen!2sus")
    ],
    "Cayce" : [
        new Restaurant("D's Wings", "American", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9570956464627!2d-81.05913012486434!3d33.99363577317907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb3f709fd85d%3A0x46677b001254c2af!2sD's%20Wings!5e0!3m2!1sen!2sus!4v1791167469674!5m2!1sen!2sus"),
        new Restaurant("Duke's Pad Thai", "Thai", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1468.0777595538239!2d-81.06589312742865!3d33.98200283285567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb687992f447%3A0x6ca9198c93dda119!2sDuke's%20Pad%20Thai!5e0!3m2!1sen!2sus!4v1791167635232!5m2!1sen!2sus"),
        new Restaurant("East Bay Deli", "Deli", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1447.2128223443126!2d-81.05541023609197!3d33.98642089309122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bbfbcd679599%3A0x180a9c7649c55b5!2sEast%20Bay%20Deli%20-%20Parkland!5e0!3m2!1sen!2sus!4v1791168020245!5m2!1sen!2sus")
    ],
    "Rosewood" : [
        new Restaurant("Dano's Pizza", "Pizza", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.1828409172026!2d-81.00274582486465!3d33.98783707318123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bab97a465fcb%3A0xd0e7fd59bd4319bb!2sDano's%20Pizza!5e0!3m2!1sen!2sus!4v1791168147148!5m2!1sen!2sus"),
        new Restaurant("Q's Corner Cafe", "Breakfast", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8350.60899031268!2d-81.01212533321565!3d33.98358776260501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb577f4413c3%3A0xac8c40d7850b3595!2zUeKAmXMgQ29ybmVyIENhZsOp!5e0!3m2!1sen!2sus!4v1791168354775!5m2!1sen!2sus"),
        new Restaurant("Main Moon", "Chinese", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.1905500266935!2d-81.00655996773683!3d33.987639034556494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bab97a465fcb%3A0x1611117fe953a0c6!2sMain%20Moon!5e0!3m2!1sen!2sus!4v1791168591814!5m2!1sen!2sus")
    ],
    "On Campus" : [
        new Restaurant("California Dreaming", "American", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5439.450643513102!2d-81.03649300970417!3d33.9922780943699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad8419c12fd%3A0xf3c1ffd78f845b75!2sCalifornia%20Dreaming!5e0!3m2!1sen!2sus!4v1791168728044!5m2!1sen!2sus"),
        new Restaurant("Beezer's Gourmet Sandwich Shop", "Sandwiches", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.76861189019!2d-81.03336912486415!3d33.9984766731773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad5fb9c598b%3A0xff8725784811a3cc!2sBeezer's%20Gourmet%20Sandwich%20Shop!5e0!3m2!1sen!2sus!4v1791168877076!5m2!1sen!2sus"),
        new Restaurant("Cool Beans Coffee", "Coffee", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.801444157849!2d-81.03354572486418!3d33.997633473177636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad603fe2fed%3A0xec68e65a3c985532!2sCool%20Beans%20Coffee%20Co!5e0!3m2!1sen!2sus!4v1791168953122!5m2!1sen!2sus")
    ],
    "Dentsville" : [
        new Restaurant("Boeshreen", "Mediterranean", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7698.897776242883!2d-80.96012636061137!3d34.064336498017475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8af184c2390b1%3A0xc6dc85336968c346!2sBoeshreen!5e0!3m2!1sen!2sus!4v1791169096966!5m2!1sen!2sus"),
        new Restaurant("Very Great Philly food", "Philly Cheesesteaks", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21053.813857776764!2d-80.9952087827466!3d34.064186172529496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8af149799887d%3A0x55d6609301e7db86!2sVery's%20Great%20Philly%20Food!5e0!3m2!1sen!2sus!4v1791169304663!5m2!1sen!2sus"),
        new Restaurant("Little Pigs Barbecue", "BBQ", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78523.12896336029!2d-81.02391283441509!3d34.054638181711766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8aea3a043b8bb%3A0x7866537439fda9e!2sLittle%20Pigs%20Barbecue!5e0!3m2!1sen!2sus!4v1791169395634!5m2!1sen!2sus")
    ],
    "Irmo" : [
        new Restaurant("Lucky Burger Shack", "Burger", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.44920990945!2d-81.20594361613716!3d34.1001061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f898b3799c0f2b%3A0xd7c154a1b05a2029!2sLucky's%20Burger%20Shack!5e0!3m2!1sen!2sus!4v1791169453270!5m2!1sen!2sus"),
        new Restaurant("Konnichiwa", "Japanese", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.657000253676!2d-81.21105412063278!3d34.09944078988988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a34a06422807%3A0xbf7fbfd7dcb9f685!2sKonnichiwa%20of%20Irmo%2C%20SC!5e0!3m2!1sen!2sus!4v1791169687118!5m2!1sen!2sus"),
        new Restaurant("Luzianna Purchase", "Cajun", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5570.186089364118!2d-81.18092494301332!3d34.07541437893167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f89de05d7167f9%3A0xcb7e7b7a3edfab09!2sLuzianna%20Purchase%20%26%20Cypress%20Market!5e0!3m2!1sen!2sus!4v1791169802408!5m2!1sen!2sus")
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

        document.querySelector(".title").innerHTML = locations[i].querySelector(".location-name").innerHTML

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
