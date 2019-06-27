

//EVENT LISTENER -> The "We Are Students" text changes when it is clicked twice
let weAreText = document.querySelector(".about-main h2");
weAreText.addEventListener("dblclick", () => {
    weAreText.innerHTML = "We Are the Refugee Stories Team";
}); 
//GREENSOCK ANIMATION -> Turn every team photo around into a 360
TweenMax.staggerTo(".student", 1, {rotation:360}, 0.5);