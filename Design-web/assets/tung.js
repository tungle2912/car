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
    const logincontainer = document.querySelector('.js-account__container')  
    const closeLogin = document.querySelector('.js-login-close');
        function showaccount(){
        account.classList.add('open');
         }
         function loginClose(){
        account.classList.remove('open');
        logincontainer.classList.remove('open'); 
         }
        function showLogin(){
        logincontainer.classList.add('open');
        }


    register.addEventListener('click',closeMenu);
    login.addEventListener('click',showaccount);
    login.addEventListener('click',closeMenu);
    login.addEventListener('click',showLogin);
    closeLogin.addEventListener('click',loginClose);
    








 
//login and register
    const options=document.querySelectorAll('.changetype');
    const form=document.getElementById("form");
    const bgactive=document.getElementById("bg-active");
    const registerid=document.getElementById("register");
    const loginid=document.getElementById("login");

    for(const option of options){
        option.addEventListener('click',function(event){
            
              form.classList.remove('login');
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
        logincontainer.classList.add('open');
        bgactive.style.left=registerid.offsetLeft+'px'
    }

    login.addEventListener('click',function(e){
        form.classList.add('login');
        form.classList.remove('register');
        bgactive.style.left=loginid.offsetLeft+'px'

    })
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


// click img
const closeInfor=document.querySelector('.js-infor-close');
const imgs= document.querySelectorAll('.product_item')
    for(const img of imgs){
        img.addEventListener('click',showaccount);
        img.addEventListener('click', function(event){
            const t=this.id;
            const t2=document.getElementsByClassName(t)
            t2[0].classList.add('open');
        });
    };
const infors=document.querySelectorAll('.infor__list');
const closeInfors=document.querySelectorAll('.js-infor-close');

for(const infor of infors){
    for(const closeInfor of closeInfors){
        closeInfor.addEventListener('click', function(e){
            infor.classList.remove('open');
            account.classList.remove('open');
        })


    }
}
 

// console.log(t);
// closeInfor.addEventListener('click', function(ev) {
//     const t3=document.getElementsByClassName(t)
//     t3[0].classList.remove('open');



