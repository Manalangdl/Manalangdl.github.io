// Class for the reviews excluding images
class Review{

    constructor(author, restaurant, review, star, date = new Date()) {

        this.author = author;
        this.restaurant = restaurant;
        this.review = review;
        this.star = star;
        this.date = date;
    }

    get item(){

        const review = document.createElement("div");
        review.classList.add("review-card");

        review.append(this.top());
        review.append(this.bottom());

        return review;
    }

    top(){

        const topSection = document.createElement("div");

        const author = document.createElement("p");
        author.classList.add("author");
        author.innerHTML = this.author + " reviewed <a href=\"#\"> " + this.restaurant + "</a>";

        const text = document.createElement("p");
        text.classList.add("review-txt");
        text.innerHTML = this.review;

        topSection.append(author)
        topSection.append(text)

        return topSection;
    }

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

const reviews = document.querySelector(".review-grid");

const entries = [

    new Review("John Regan", "Tacos Locos", "\“Tacos Locos nails that perfect blend of lively energy and laid-back comfort, making it a spot you actually want to hang around in. The warm lighting and colorful\” ...", 4, new Date(2026, 8, 13)),
    new Review("Lindsay Manalang","Inakaya","\“Inakaya delivers the kind of atmosphere that feels almost transported straight from a quiet Tokyo side street—soft lantern lighting,\” ...",5,new Date(2026,8,11)),
    new Review("Jacqueline Nguyen","Inakaya","\“This palce felt completely different from any place I’ve eaten before. It was my first time at a sushi bar. I was surprised by how fresh and clean\” ...",5,new Date(2026,7,3))
]

entries.forEach( (entry) => {

    reviews.append(entry.item);
})