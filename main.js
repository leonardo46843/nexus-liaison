// menuToggle

const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('nav ul');

const navMenu = document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

navMenu.forEach((link) => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
  });
});
