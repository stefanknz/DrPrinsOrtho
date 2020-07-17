const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll ('.nav-links li');



    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');



        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
            link.style.animation = ''
            }
            else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /5 + 0.5}s`; 
            }    
    });

    // Burger Animation
    burger.classList.toggle('toggle');

});

    
    
};

navSlide();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

