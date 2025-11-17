const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');  // animate hamburger
    mobileMenu.classList.toggle('active'); // show/hide menu
});
