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

// window.addEventListener("load", function() {
    
//     let carouselSlides = document.querySelectorAll('.carousel-slide');
//     let currentSlide = 0;
//     let total = carouselSlides.length;

//     let nextBtn = document.querySelector('.next-btn');
//     let prevBtn = document.querySelector('.prev-btn');

//     function showNextSlide() {
//         hideAllSlides();
//         if(currentSlide === total - 1){
//             currentSlide = 0;
//         }
//         else {
//             currentSlide++;
//         }
//         carouselSlides[currentSlide].style.opacity = 1;
//         console.log(currentSlide)
//     }
//     function showPrevSlide() {
//         hideAllSlides();
//         if(currentSlide === 0){
//             currentSlide = total - 1;
//         }
//         else {
//             currentSlide--;
//         }
//         carouselSlides[currentSlide].style.opacity = 1;
//         console.log(currentSlide)
//     }
//     function hideAllSlides() {
//         carouselSlides.forEach(function(slide){
//             slide.style.opacity = 0;
//         });
//     }

//     nextBtn.addEventListener('click',showNextSlide);
//     prevBtn.addEventListener('click',showPrevSlide);
// });