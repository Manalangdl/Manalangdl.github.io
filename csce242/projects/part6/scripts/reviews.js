// Class for the reviews excluding images
class Review{

    constructor(author, restaurant, review, star, date = new Date(), link = "#") {

        this.author = author;
        this.restaurant = restaurant;
        this.review = review;
        this.star = star;
        this.date = date;
        this.link = link
    }

    // overall review 
    get item(){

        const review = document.createElement("div");
        review.classList.add("review-card");
        review.classList.add("mb-w-100");

        review.append(this.top());
        review.append(this.bottom());

        return review;
    }

    // author and text of the review
    top(){

        const topSection = document.createElement("div");

        const author = document.createElement("p");
        author.classList.add("author");
        author.innerHTML = this.author + " reviewed <a href=\"" + this.link + "\" target=\"_blank\"> " + this.restaurant + "</a>";

        const text = document.createElement("p");
        text.classList.add("review-txt");
        text.innerHTML = "\"" + this.review + "\"";

        topSection.append(author)
        topSection.append(text)

        return topSection;
    }

    // the bottom half of the reviews
    bottom(){

        const bottomSection = document.createElement("div");
        bottomSection.classList.add("review-bottom");

    
        bottomSection.append(this.stars());

        const date = document.createElement("p");
        date.classList.add("date");
        date.innerHTML = (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" + this.date.getFullYear();

        bottomSection.append(date);

        return bottomSection;
    }

    // the stars section in the review
    stars() {

        const starDiv = document.createElement("div");
        starDiv.classList.add("stars");

        for (let i = 1; i < 6; i++) {

            const starSpan = document.createElement("span");

            if (i <= this.star){
                starSpan.innerHTML = "★";

            } 
            else{
                starSpan.innerHTML = "☆";
            }

            starDiv.append(starSpan);
        }

        return starDiv;
    }
}

// Where the reviews are
const reviews = document.querySelector(".review-grid");

// List of preloaded entries
const entries = [
    new Review(
        "John Regan",
        "Tacos Locos",
        "Tacos Locos nails that perfect blend of lively energy and laid-back comfort, making it a spot you actually want to hang around in. The warm lighting and colorful ...",
        4,
        new Date(2026, 8, 13),
        "https://www.yelp.com/biz/tacos-loco-and-grill-west-columbia"
    ),

    new Review(
        "Lindsay Manalang",
        "Inakaya",
        "Inakaya delivers the kind of atmosphere that feels almost transported straight from a quiet Tokyo side street—soft lantern lighting, ...",
        5,
        new Date(2026, 8, 11),
        "https://inakayasushi.com/"
    ),

    new Review(
        "Jacqueline Nguyen",
        "Inakaya",
        "This palce felt completely different from any place I’ve eaten before. It was my first time at a sushi bar. I was surprised by how fresh and clean ...",
        5,
        new Date(2026, 7, 3),
        "https://inakayasushi.com/"
    ),

    new Review(
        "Courtney Thomas",
        "Cava",
        "I think Cava is a decent option when I want something quick and healthier than typical fast food. The ingredients are fresh and there are plenty of choices ...",
        3,
        new Date(2026, 6, 28),
        "https://cava.com/"
    ),

    new Review(
        "Ashlynn Weaver",
        "Saluda's Restaurant",
        "The atmosphere feels upscale and is great for special occasions. Food was well-prepared and the service was friendly. It's definitely a solid choice for dinner in Five Points ...",
        4,
        new Date(2026, 4, 20),
        "https://www.saludas.com/"
    )
];

// Add the entries to the homepage
entries.forEach( (entry) => {

    reviews.append(entry.item);
})

// Input section to submit

// Selecting how many stars the user inputted
let stars = 0;

const starBtns = document.querySelectorAll(".rating-stars button");

starBtns.forEach((btn) => {

    btn.onclick = (e) => {

        for (let i = 0; i < 5; i++) {
  
            starBtns[i].innerHTML = i < btn.value ? "★" : "☆";
            
        }

        stars = btn.value;
    }
})

// Submission for review
const submit = document.querySelector("#submit");
const namee = document.querySelector("#name");
const restaurant = document.querySelector("#restaurant");
const review = document.querySelector("#review");

submit.onclick = () => {

    // If there is nothing in these, then the review can't be made
    if (namee.value == "" || restaurant.value == "" || review.value == "") {
        return;
    }

    const newReview = new Review(namee.value, restaurant.value, review.value, stars, new Date);
    reviews.prepend(newReview.item);

    // clears the items
    namee.value = "";
    restaurant.value = "";
    review.value = "";
    
    starBtns.forEach((btn) => {
        btn.innerHTML = "☆";
    })

    stars = 0;
}