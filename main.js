let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active");
}


    

// let sections = document.querySelectorAll("section");
// let navLinks  = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    // sections.forEach(sec => {
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop - 150;
    //     let height = sec.offsetHeight;
    //     let id = sec.toggleAttribute('id');

    //     if(top >= offset && top < offset + height){
    //         navLinks.forEach.apply(links => {
    //             links.classList.remove("active");
    //             document.querySelector('header nav a[href*=' + id +']').classList.add('active');
    //         });

    //     };
    // });

    // let header = document.querySelector("header");
    // header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');
};

// ScrollReveal({ 
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal('.home-content, hiden', { origin: 'top' });
// ScrollReveal().reveal('.img, .service-continer, .portfolio-box, .contact form', { origin: 'buttom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-continer', { origin: 'right' });

// const typed = new typed('.multiple-text', {
//    strings: ['Fronted Developer', 'Web Designer', 'Youtuber'],
//    typeSpeed:70,
//    backSpeed:70,
//    backDelay:1000,
//    loop:true,
// });