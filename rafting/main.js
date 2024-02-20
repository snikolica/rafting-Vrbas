const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.mobile-menu');
const mobileHeader = document.querySelector('.mobile-header');
const header = document.querySelector('.header');
const headerImg = document.querySelector('.header-img');
console.log(header);


openMenu.addEventListener('click', function (){
    menu.style.display = 'block';
    mobileHeader.style.display =' none';
})

closeMenu.addEventListener('click', function (){
   menu.style.display = 'none';
mobileHeader.style.display =' block';
})

const slike = ['background-1.jpg','cover2.jpg' ];
let counter1 = 0;
let counter2 = 0;


setInterval(() => {
    console.log(counter1);
    counter1++
    let slika = slike[counter1];
    console.log(slika);
    if(counter1 === slike.length-1){
        counter1 = -1;
    }
    header.style.backgroundImage  = `url(img/${slika})`;
  
}, 5000);


setInterval(() => {
    console.log(counter2);
    counter2++
    let slika = slike[counter2];
    console.log(slika);
    if(counter2 === slike.length-1){
        counter2 = -1;
    }
    headerImg.src = `img/${slika}`;
  
}, 5000);