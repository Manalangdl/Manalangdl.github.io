const modal = document.getElementById("id01");

class Vacation {

    constructor(title, type, des, todo, img, map) {
        this.title = title;
        this.type = type;
        this.des = des;
        this.todo = todo;
        this.img = img;
        this.map = map;
    }

    // makes the card, adds the two parts of it, and changes the modal to its information
    get item() {

        // makes blank div and adds the card tag
        const card = document.createElement("div");
        card.classList.add("card");

        // adds the text, then the img into it
        card.append(this.cardText());
        card.append(this.cardImg());

        // adds the event listener to the object
        card.onclick = () => {

            // reveals the modal
            modal.style.display = 'block';

            // changes in content of the modal
            modal.querySelector("iframe").src = this.map;
            modal.querySelector(".title").innerHTML = this.title;
            modal.querySelector(".type span").innerHTML = this.type;
            modal.querySelector(".des span").innerHTML = this.des;
            modal.querySelector(".todo span").innerHTML = this.todo;
        }

        // returns the component
        return card;
    }

    // creates the card text on the top
    cardText(){

        const cardText = document.createElement("div");
        cardText.classList.add("card-text");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;

        const h4 = document.createElement("h4");
        h4.innerHTML = this.type + " Vacation";

        cardText.append(h3);
        cardText.append(h4);

        return cardText;
    }

    // creates the card image under the card text
    cardImg(){

        const cardImg = document.createElement("div");
        cardImg.classList.add("img-div");

        const img = document.createElement("img");
        img.src = this.img;
        img.alt = "Vacation Image"
        cardImg.append(img);

        return cardImg;
    }
}

const main = document.querySelector("main");

// BEACHES

// manzanillo, mexico
main.append( (new Vacation("Manzanillo Beach", "Beach", "A Pacific port town on Mexico's coast with golden-sand bays, world-class sportfishing, and lush oceanfront resorts.", "Go fishing off the Pacific coast, relax on the golden beaches of Santiago Bay, and explore the downtown of Manzanillo.", "imgs/manzanillo.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5574405295015!2d-74.2810963250128!3d41.492193371286724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dcd4ef961e66ef%3A0x324507a35269bb83!2sManza%20Farm%20and%20Garden%20Center%2C%20Inc.!5e0!3m2!1sen!2sus!4v1791068589532!5m2!1sen!2sus")).item )
// glass beach, CA
main.append((new Vacation("Glass Beach", "Beach","A rugged coastal along Northern California's Mendocino shoreline, famous for its smooth, colorful sea-glass beaches and coastal cliffs.","Hunt for polished sea glass along the shorelines of Glass Beach, follow the trails of MacKerricher State Park, and ride the historic Skunk Train through the redwood forests.","imgs/glass-beach.png","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.739960865341!2d-123.8160681245749!3d39.45260907161085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8080353c794b7fd1%3A0x88d3934aef840d2c!2sGlass%20Beach!5e0!3m2!1sen!2sus!4v1791138868507!5m2!1sen!2sus")).item)
// copacabana beach, RDJ brazil
main.append((new Vacation ("Copacabana","Beach","An oceanfront neighborhood in Rio de Janeiro known for its crescent-shaped beach, famous mosaic promenade, and lively beachside culture.","Stroll the historic wave-patterned promenade along Copacabana Beach, visit Christ the Redeemer statue, and snorkelling with dolphins","imgs/copacabana.jpg","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.237462925284!2d-43.192315757447666!3d-22.97564866730315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd54579a5956b%3A0xa102deeaffcb3e3!2sCopacabana%20Beach!5e0!3m2!1sen!2sus!4v1791141113816!5m2!1sen!2sus")).item)


// MOUNTAINS

// mt fuji, japan
main.append((new Vacation ("Mount Fuji","Mountain","An iconic snow-capped volcano in central Honshu with sacred trails, alpine lakes, and panoramic summit views.","Summit Japan's iconic peak for a beautiful sunrise, travel the scenic waters of Lake Ashi, and walk through the historic, ponds of Oshino Hakkai.","imgs/fuji.jpg","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.39555331794!2d138.70676376973356!3d35.36062325227532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e0!3m2!1sen!2sus!4v1791137210446!5m2!1sen!2sus")).item)  
// mt pisgah, NC
main.append((new Vacation ("Mount Pisgah","Mountain","A prominent, peak along the Blue Ridge Parkway known for mountain vistas, rugged hiking trails, and rich Appalachian history.","Hike the Pisgah trail and view its national forest, camping on their campgrounds, and view the Looking Glass Waterfall.","imgs/pisgah.jpg","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26009.32065839984!2d-82.77739523005042!3d35.4259404008861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859998d4fd4ab05%3A0xb1e90557933696d5!2sMt%20Pisgah!5e0!3m2!1sen!2sus!4v1791142692628!5m2!1sen!2sus")).item)
// mt kilimanjaro, tanzania
main.append((new Vacation("Mount Kilimanjaro","Mountain","Located in East African plains, Africa's highets peak and dormant volcano, and surrounded by diverse rainforest.","Hike the summit of the mountain, visit Kilimanjaro National Park and see the volcanic terrain, and have lunch with a traditional Chagga village.","imgs/kilimanjaro.jpg","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31872.81544143168!2d37.3350276098037!3d-3.0674244021254875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1839fc5a396ea805%3A0x8e741c478eea6c01!2sMt%20Kilimanjaro!5e0!3m2!1sen!2sus!4v1791143358322!5m2!1sen!2sus")).item)