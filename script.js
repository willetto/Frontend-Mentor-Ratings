"use strict";

const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const ratingScale = document.querySelector(".rating-scale");
const ratingOptions = ratingScale.children;
const submit = document.querySelector(".submit");
const userRating = document.querySelector(".user-rating");

function select(e) {
  if (e.target.classList.contains("rating-scale")) return;
  for (let i = 0; i < ratingOptions.length; i++) {
    ratingOptions[i].classList.remove("selected");
  }
  e.target.classList.add("selected");
  selection = +e.target.textContent;
}

function shake() {
  submit.classList.add("shake");
  setTimeout(() => submit.classList.remove("shake"), 501);
}

function switchState() {
  if (!selection) {
    shake();
  } else {
    rating.style.opacity = 0;

    rating.addEventListener("transitionend", function () {
      rating.classList.add("hidden");
      thanks.classList.remove("hidden");
      setTimeout(() => (thanks.style.opacity = 1), 50);
    });
    userRating.textContent = `You selected ${selection} out of 5`;
  }
}

//Interactives
ratingScale.addEventListener("click", select);
submit.addEventListener("click", switchState);

//init
let selection;
