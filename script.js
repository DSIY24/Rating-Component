const mainContainer = document.querySelector(".main-container");
const  hidden = document.querySelector(".hidden");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.getElementById("Submit");
const rateAgain = document.getElementById("Rate-again");
const rating = document.getElementById("rating");
const ratingn = document.getElementById("rating2");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    hidden.classList.remove("hidden");
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    hidden.classList.add("hidden");
    mainContainer.style.display = "block"
})

rates.forEach((rate) =>{
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;    
    });
})

rates.forEach((rate) =>{
    rate.addEventListener("click", () => {
        ratingn.innerHTML = rate.innerHTML;    
    });
})






