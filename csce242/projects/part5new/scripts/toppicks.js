const options = document.querySelectorAll("#menu div");
const sections = document.querySelectorAll("#recs section");

options.forEach( (option) => {

    option.onclick = () => {
        // gets the text out so it is easier eto use
        const text = option.innerHTML;

        // loops through the sections and makes them hidden if they aren't the filtered one
        sections.forEach( (section) => {

            if (text == "All"){
                section.classList.remove("hidden");
            }
            else if (section.id != text){
                section.classList.add("hidden");
            }
            else{
                section.classList.remove("hidden");
            }
        })

        // changes the p text to the option chosen
        document.getElementById("menuText").innerHTML = text;

        document.getElementById('menu').classList.add('hidden');
    }
})