// console.log("Hello");

// hover aside for about insert
let aboutContainer = document.querySelector("aside");
let aboutSection = document.getElementById("about");

aboutContainer.addEventListener("mouseout", function(){
    aboutSection.style.display = "none";
});
aboutContainer.addEventListener("mouseover", function(){
    aboutSection.style.display = "block";
});


// click each image to display each description container

// display cross out button after images are clicked
// hide it after cross out button is clicked
let crossButton = document.querySelector("button");
let backgroundFilter = document.getElementById("background-filter");

// WEBSITE
let techCollectionImage = document.getElementById("techCollection-image");
let techCollectionContainer = document.getElementById("techCollection-container");
techCollectionImage.addEventListener("click", function(){
    techCollectionContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

let inPraiseOfShadowImage = document.getElementById("inPraiseOfShadow-image");
let inPraiseOfShadowContainer = document.getElementById("inPraiseOfShadow-container");
inPraiseOfShadowImage.addEventListener("click", function(){
    inPraiseOfShadowContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

let urbanNatureImage = document.getElementById("urbanNature-image");
let urbanNatureContainer = document.getElementById("urbanNature-container");
urbanNatureImage.addEventListener("click", function(){
    urbanNatureContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

let treasureHuntImage = document.getElementById("treasureHunt-image");
let treasureHuntContainer = document.getElementById("treasureHunt-container");
treasureHuntImage.addEventListener("click", function(){
    treasureHuntContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

// TYPOGRAPHY
let wikiBookMoonImage = document.getElementById("wikiBookMoon-image");
let wikibookMoonContainer = document.getElementById("wikibookMoon-container");
wikiBookMoonImage.addEventListener("click", function(){
    wikibookMoonContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

let interviewTrustImage = document.getElementById("interviewTrust-image");
let interviewTrustContainer = document.getElementById("interviewTrust-container");
interviewTrustImage.addEventListener("click", function(){
    interviewTrustContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

let gameCenterImage = document.getElementById("gameCenter-image");
let gameCenterContainer = document.getElementById("gameCenter-container");
gameCenterImage.addEventListener("click", function(){
    gameCenterContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

let croppedLettersImage = document.getElementById("croppedLetters-image");
let croppedLettersContainer = document.getElementById("croppedLetters-container");
croppedLettersImage.addEventListener("click", function(){
    croppedLettersContainer.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

// ANIMATION
let by2072Image = document.getElementById("by2072-image");
let by2072Container = document.getElementById("by2072-container");
by2072Image.addEventListener("click", function(){
    by2072Container.style.display = "block";
    crossButton.style.display = "block";
    backgroundFilter.style.display = "block";
});

// cross button
crossButton.addEventListener("click", function(){
    crossButton.style.display = "none";
    backgroundFilter.style.display = "none";
    // WEBSITE
    techCollectionContainer.style.display = "none";
    inPraiseOfShadowContainer.style.display = "none";
    urbanNatureContainer.style.display = "none";
    treasureHuntContainer.style.display = "none";
    // TYPOGRAPHY
    wikibookMoonContainer.style.display = "none";
    interviewTrustContainer.style.display = "none"; 
    gameCenterContainer.style.display = "none";
    croppedLettersContainer.style.display = "none";
    // ANIMATION
    by2072Container.style.display = "none"; 
});