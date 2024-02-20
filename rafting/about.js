const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.mobile-menu');
const mobileHeader = document.querySelector('.mobile-header');


openMenu.addEventListener('click', function (){
    menu.style.display = 'block';
    mobileHeader.style.display =' none';
})

closeMenu.addEventListener('click', function (){
   menu.style.display = 'none';
mobileHeader.style.display =' block';
})