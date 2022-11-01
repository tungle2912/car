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


const goToTopBtn = document.querySelector('.go-to-top');
window.onscroll = function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 120) {
        goToTopBtn.classList.add('active');
    } else {
        goToTopBtn.classList.remove('active');
    }
};

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



//open and close menu
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
         
             
             
             
             //open and close login
    const logins = document.querySelectorAll('.js-login');
    const registers=document.querySelectorAll('.js-register');
    const account = document.querySelector('.js-account');
    const logincontainer = document.querySelector('.js-account__container')  
    const closeLogin = document.querySelector('.js-login-close');
    const tragop=document.querySelector('.js-tragop');
    const tragopcontainer = document.querySelector('.js-tragop-container');
    const closetragop=document.querySelector('.js-tragop-close');
    const tintuc=document.querySelector('.js-tintuc');
    const tintuccontainer = document.querySelector('.js-tintuc-container');
    const closetintuc=document.querySelector('.js-tintuc-close');
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
    function showtragop(){
        tragopcontainer.classList.add('open');
    }
    function showtintuc(){
        tintuccontainer.classList.add('open');
    }
    
    closetragop.addEventListener('click', function(){
        tragopcontainer.classList.remove('open');
        account.classList.remove('open');
    });
    closetintuc.addEventListener('click', function(){
        tintuccontainer.classList.remove('open');
        account.classList.remove('open');
    });
    tragop.addEventListener('click',showaccount);
    tragop.addEventListener('click',showtragop);
    tintuc.addEventListener('click',showaccount);
    tintuc.addEventListener('click',showtintuc);
    for(const login of logins){
        login.addEventListener('click',showaccount);
        login.addEventListener('click',closeMenu);
        login.addEventListener('click',showLogin);
        login.addEventListener('click',function(e){
            form.classList.add('login');
            form.classList.remove('register');
            bgactive.style.left=loginid.offsetLeft+'px'
            
    })
}
for(const register of registers){
    register.addEventListener('click',closeMenu);
    register.addEventListener('click',removelogin)
    
}

    closeLogin.addEventListener('click',loginClose);
    








 

// change type tintuc
const changes=document.querySelectorAll('.change');
const forms=document.getElementById('forms');
const active=document.getElementById('bgactive');

for(const change of changes){
    change.addEventListener('click',function(){
        forms.classList.remove('tintuc');
        forms.classList.remove('video');
        forms.classList.add(this.id)
        active.style.left=this.offsetLeft+'px'

    })
}





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
 
//click img infor

const imgss=document.querySelectorAll('.infor_img');
for(const img of imgss){
    img.addEventListener("click",function(e){
        const a=this.id;
        const a1=document.getElementsByClassName(a);
        a1[0].setAttribute("src", img.getAttribute("src"));

    })
}
 

// click xemthem lamboghini

const preslambogini=document.getElementById("preslambo")
const morelamboginis=document.querySelectorAll('.viewlambogini')
const hidelambogini=document.getElementById("hidelambo")
hidelambogini.addEventListener("click", function(e) {
    for(const morelambogini of morelamboginis){
        morelambogini.style.display = "block";
    }
    
})
preslambogini.addEventListener("click", function(e) {
    for(const morelambogini of morelamboginis){
        morelambogini.style.display = "none";
    }
})

const formlambo=document.querySelector('.viewmorelambo')
const btnlambos=document.querySelectorAll('.js_btn_lambogini')

for(const btnlambo of btnlambos){
    btnlambo.addEventListener('click', function(e){
        formlambo.classList.remove("hidelambo")
        formlambo.classList.remove("preslambo")
        formlambo.classList.add(this.id)

    })
}

//ferari
const presferari=document.getElementById("presferari")
const moreferaris=document.querySelectorAll('.viewferari')
const hideferari=document.getElementById("hideferari")
hideferari.addEventListener("click", function(e) {
    for(const moreferari of moreferaris){
        moreferari.style.display = "block";
    }
    
})
presferari.addEventListener("click", function(e) {
    for(const moreferari of moreferaris){
        moreferari.style.display = "none";
    }
})

const formferari=document.querySelector('.viewmoreferari')
const btnferaris=document.querySelectorAll('.js_btn_ferari')

for(const btnferari of btnferaris){
    btnferari.addEventListener('click', function(e){
        formferari.classList.remove("hideferari")
        formferari.classList.remove("presferari")
        formferari.classList.add(this.id)

    })
}

//porsche

const presporsche=document.getElementById("presporsche")
const moreporsches=document.querySelectorAll('.viewporsche')
const hideporsche=document.getElementById("hideporsche")
hideporsche.addEventListener("click", function(e) {
    for(const moreporsche of moreporsches){
        moreporsche.style.display = "block";
    }
    
})
presporsche.addEventListener("click", function(e) {
    for(const moreporsche of moreporsches){
        moreporsche.style.display = "none";
    }
})

const formporsche=document.querySelector('.viewmoreporsche')
const btnporsches=document.querySelectorAll('.js_btn_porsche')

for(const btnporsche of btnporsches){
    btnporsche.addEventListener('click', function(e){
        formporsche.classList.remove("hideporsche")
        formporsche.classList.remove("presporsche")
        formporsche.classList.add(this.id)

    })
}

///rollsroyce

const presrollsroyce=document.getElementById("presrollsroyce")
const morerollsroyces=document.querySelectorAll('.viewrollsroyce')
const hiderollsroyce=document.getElementById("hiderollsroyce")
hiderollsroyce.addEventListener("click", function(e) {
    for(const morerollsroyce of morerollsroyces){
        morerollsroyce.style.display = "block";
    }
    
})
presrollsroyce.addEventListener("click", function(e) {
    for(const morerollsroyce of morerollsroyces){
        morerollsroyce.style.display = "none";
    }
})

const formrollsroyce=document.querySelector('.viewmorerollsroyce')
const btnrollsroyces=document.querySelectorAll('.js_btn_rollsroyce')

for(const btnrollsroyce of btnrollsroyces){
    btnrollsroyce.addEventListener('click', function(e){
        formrollsroyce.classList.remove("hiderollsroyce")
        formrollsroyce.classList.remove("presrollsroyce")
        formrollsroyce.classList.add(this.id)

    })
}
// reponsive
const navMobileBtn = document.querySelector('.js-mobile-btn')
const mobileMenu = document.querySelector('.js-mobile-menu')
var mobileOverlay = document.querySelector('.mobile-menu-overlay')

navMobileBtn.onclick=function(){
    mobileMenu.style.transform="scaleY(1)";
    mobileOverlay.style.display="block";
}

mobileOverlay.onclick=function(){
    mobileMenu.style.transform="scaleY(0)";
    mobileOverlay.style.display="none";
}

