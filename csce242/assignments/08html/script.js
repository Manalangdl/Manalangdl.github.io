// getting vars from html

const map = document.getElementById("map");
const beaches = document.getElementById("beaches");
const parks = document.getElementById("nat-parks");

// add items to an associated array (key : val)
const locationArr = {
    "beaches" : ["Myrtle Beach, SC", "Panama City Beach, FL", "Daytona Beach, FL", "Virginia Beach, VA"],
    "parks" : ["Congaree, SC", "Everglades, FL", "Great Smoky Mountains, TN/NC", "Mammoth Cave, KY"]
};

// goes into the beach arr then makes each string a list
locationArr["beaches"].forEach((beach) => {

    // empty list element
    let newBeach = document.createElement("li");
    // makes the text to each corresponding beach
    newBeach.innerHTML = beach;
    // adds to end of ul
    beaches.append(newBeach);

});

// into the parks arr and make each string a list
locationArr["parks"].forEach((park) => {

    // empty list element
    let newPark = document.createElement("li");
    // text to park
    newPark.innerHTML = park;
    // adds to end of ul
    parks.append(newPark);

});

// when the menu changes
document.querySelector("#select").onchange = (e) => {
    
    // checks whenever you change selection
    let current = e.target.value;

    if(current == "Beaches"){

        // display beaches
        beaches.classList.remove("hidden");

        // hide national parks
        if( !parks.classList.contains("hidden")){
            
            parks.classList.add("hidden");
        }
    }

    // display national parks
    else if (current == "Parks"){

        parks.classList.remove("hidden");

        // hide beaches
        if( !beaches.classList.contains("hidden")){
           
            beaches.classList.add("hidden");
        }


    }

    // when neither is selected, display nothing
    else if (current == "None"){

        if (!beaches.classList.contains("hidden")){
            beaches.classList.add("hidden");
        }

        if (!parks.classList.contains("hidden")){
            parks.classList.add("hidden");
        }

        if(!map.classList.contains("hidden")){
            map.classList.add("hidden");
        }

    }

};

// making iframe and li to vars
const iframes = document.querySelectorAll("iframe");
const places = document.querySelectorAll("li");

// loop for each selection
for(let i=0; i<iframes.length; i++){

    // when you click on the link
    places[i].onclick = () => {

        // displaying map div
        if(map.classList.contains("hidden")){
            map.classList.remove("hidden")
        }

        // matches the map based on i
        iframes[i].classList.remove("hidden");

        // hides the other iframes
        iframes.forEach((map) => {
            
            if(map != iframes[i] && !map.classList.contains("hidden")){
                map.classList.add("hidden");
            }
        })

    }

};
