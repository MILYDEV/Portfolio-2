/* ---------- Menu Icon Navbar ---------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}




/* ---------- Sticky Navbar ---------- */

window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 30);


    /* ---------- Remove Navbar Onclick ---------- */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

/* ---------- Slider ---------- */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




/* ---------- Darkmode and Lightmode ---------- */
let DarkmodeIcon = document.querySelector('#darkmode-icon');

DarkmodeIcon.onclick = () => {
  DarkmodeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};


/* ---------- ScrollReveal ---------- */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 1000,
  delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portofolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'left' });