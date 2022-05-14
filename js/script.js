let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.menu');
let loginForm = document.querySelector('.header .login-form');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};
var swiper = new Swiper(".swiper", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
    pagination: {
          el: ".swiper-pagination",
             clickable: true,
        },
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});


window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

 ScrollReveal({ 
    // reset: true,
    distance:'40px',
    duration: 2000,
    delay:100,
     });
 ScrollReveal().reveal('.services .box-container .box,.home .content h3,.about .row .content h3', {delay:500, origin:'right'});
 ScrollReveal().reveal('.home .image img,.about .row .image img', {delay:300, origin:'left'});
 ScrollReveal().reveal('.home .content p,.btn.one,.about .row .content p', {delay:400, origin:'bottom'});
 ScrollReveal().reveal('.icons-contaner .icons,.book .row form', {delay:500, origin:'bottom'});
 ScrollReveal().reveal('.heading', {delay:300, origin:'left'});
 ScrollReveal().reveal('.doctors .box-container .box', {delay:500, origin:'top'});
 ScrollReveal().reveal('.book .row .image img,.blogs .box-container .box', {delay:400, origin:'top'});