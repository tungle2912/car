// show slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider__list");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 5000); 
}



// <!-- open and close search -->


const searchBtns = document.querySelectorAll('.js-search__btn');
const modal=document.querySelector('.js-history')
const modalClode=document.querySelector('.js-icon__history');



function showBtnSearch(){
modal.classList.add('open');

}
function closeBtnSearch(){
modal.classList.remove('open');

}

for(const searchBtn of searchBtns){
    searchBtn.addEventListener('click',showBtnSearch)
}
modalClode.addEventListener('click',closeBtnSearch)


// open and close menu
// const menuOpen=document.querySelector('.js-menu');
// const menu=document.querySelector('.js-menu-modal');
// const menuClose=document.querySelector('.js-close');


// function showMenu(){
//     menu.classList.add('open');
// }
// function closeMenu(){
//     menu.classList.remove('open');
// }

// menuOpen.addEventListener('click',showMenu)
// menuClose.addEventListener('click',closeMenu)




 






const goToTopBtn = document.querySelector('.go-to-top');
window.onscroll = function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 120) {
        goToTopBtn.classList.add('active');
    } else {
        goToTopBtn.classList.remove('active');
    }
};

