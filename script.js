let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let inputBox = document.getElementById('input-box');
let totalCounter = document.getElementById('total-counter');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

inputBox.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter()

function updateCounter(){
    totalCounter.innerText = inputBox.value.length;
}