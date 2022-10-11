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

const menuOpen=document.querySelector('.js-menu');
    const menu=document.querySelector('.js-menu-modal');
    const menuClose=document.querySelector('.js-close');


    function showMenu(){
    menu.classList.add('open');
    }
    function closeMenu(){
    menu.classList.remove('open');
    }

         menuOpen.addEventListener('click',showMenu)
         menuClose.addEventListener('click',closeMenu)


    //open and close login
    const login = document.querySelector('.js-login');
    const register=document.querySelector('.js-register');
    const account = document.querySelector('.js-account');
    const closeLogin = document.querySelector('.js-login-close');
        function showLogin(){
        account.classList.add('open');
         }
         function loginClose(){
        account.classList.remove('open');
         }


    register.addEventListener('click',closeMenu);
    login.addEventListener('click',showLogin);
    login.addEventListener('click',closeMenu);
    closeLogin.addEventListener('click',loginClose);




 
//login and register
    const options=document.querySelectorAll('.changetype');
    const form=document.getElementById("form");
    const bgactive=document.getElementById("bg-active");
    const registerid=document.getElementById("register");

    for(const option of options){
        option.addEventListener('click',function(event){
            
            //   form.classList.remove('login');
            form.classList.remove('register');
            form.classList.add(this.id);
            bgactive.style.left=this.offsetLeft+'px'
            for(const op of options){
                op.classList.remove('active');

            }
            this.classList.add('active')
        })
    }
    function removelogin(){
        form.classList.remove('login');
        form.classList.add('register');
        account.classList.add('open');
        bgactive.style.left=registerid.offsetLeft+'px'

    }

    register.addEventListener('click',removelogin)





const goToTopBtn = document.querySelector('.go-to-top');
window.onscroll = function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 120) {
        goToTopBtn.classList.add('active');
    } else {
        goToTopBtn.classList.remove('active');
    }
};

