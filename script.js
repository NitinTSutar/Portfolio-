let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let inputBox = document.getElementById('input-box');
let totalCounter = document.getElementById('total-counter');

let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");
let sharingan = document.getElementById("rotates");
const imageSources = [
    "./assets/Sharingan_1.png",
    "./assets/Sharingan_2.png",
    "./assets/Sharingan_3.png",
    "./assets/Sharingan_4.png",
    "./assets/Sharingan_5.png",
    "./assets/Sharingan_6.png",
]
window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
      const scrollPosition = window.scrollY;
      const sectionIndex = Math.min(
        Math.floor(scrollPosition / window.innerHeight), imageSources.length - 1
      );
      
        sharingan.src = imageSources[sectionIndex];     
    },
    false
  );
  
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

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();

particlesJS("particles-js", {
  particles: {
      number: {
          value: 120, 
          density: { enable: true, value_area: 1000 },
      },
      color: { value: "#ffffff" }, 
      shape: {
          type: "circle", 
          stroke: { width: 0 }, 
      },
      opacity: {
          value: 0.7, 
          random: false, 
      },
      size: {
          value: 1, 
          random: true, 
          anim: { enable: false }, 
      },
      line_linked: {
          enable: true,
          distance: 150, 
          color: "#ffffff",
          opacity: 0.3, 
          width: .5, 
      },
      move: {
          enable: true,
          speed: 1.5, 
          direction: "none", 
          random: true, 
          straight: false, 
          out_mode: "out", 
          bounce: false, 
      },
  },
  interactivity: {
      detect_on: "canvas", 
      events: {
          onhover: { enable: true, mode: "repulse" }, 
          onclick: { enable: true, mode: "push" }, 
          resize: true, 
      },
      modes: {
          repulse: { distance: 70, duration: 0.4 }, 
          push: { particles_nb: 3 }, 
      },
  },
  retina_detect: true, 
});



  var count_particles, stats, update;
  
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
  };
  