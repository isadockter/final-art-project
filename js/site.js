const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
            // console.log('yes');
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');

        }
    });
});


const hiddenElem = document.querySelectorAll('.hidden');
hiddenElem.forEach((el) => observer.observe(el));

// 
let navLinks = document.querySelector('.nav-links');
// Select the menu icon
let menuIcon = document.querySelector('.menu');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', function() {
    let navLinks = document.querySelector('.nav-links');
    let menu = document.querySelector('.menu');
    console.log(menu.getAttribute('name'));
    if (menu.getAttribute('name') === 'menu') { // Check for 'close' state instead of 'menu'
        menu.setAttribute('name', 'close'); // Toggle to 'close' state
        navLinks.classList.remove('hide'); // Show nav links
    } else {

        menu.setAttribute('name', 'menu'); // Toggle to 'menu' state
        navLinks.classList.add('hide'); // Hide nav links
    }
});

// PARALLAX EFFECT
let moon = document.getElementById('moon');
let text = document.getElementById('paralax-text');


// console.log(text);
// console.log(moon);
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    // console.log(value, 'VALUE');
    if (value > 400) {
        moon.style.opacity = 0;



    } else {
        moon.style.opacity = 1;


    }
    // console.log(text.style.top);


    moon.style.top = value + 1.05 + 'px';

})

// running away from mouse 
let container = document.querySelector('body');
let noBtn = document.querySelector('.anotha');
// keeping score
let scoreDiv = document.querySelector('.score');
// getting w/h of the screen
let containerRect = container.getBoundingClientRect();
let noBtnRect = noBtn.getBoundingClientRect();
// modal
let modalOuter = document.querySelector('.modal-outer');
let modalInner = document.querySelector('.modal-inner');
modalOuter.addEventListener('click', closeModal);

function closeModal(e) {
    if (!e.target.closest('.modal-inner')) {
        modalOuter.classList.remove('open');
    }
}
let score = 0;
// whenever mouse hovers noBtn, move around randomly on screen
noBtn.addEventListener('mousemove', () => {
    let i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 0.5;
    let j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 0.5;
    // console.log(i, j, noBtn);
    score ++;
    console.log(score);
    scoreDiv.innerHTML = score;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

    // if score = 10, open modal sayin they won :)
    if (score == 10) {
        modalOuter.classList.add('open');

        console.log('winner');

    }
});