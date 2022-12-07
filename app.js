let menuToggle =document.querySelector('.menuToggle');
let header = document.querySelector('header');
let body = document.querySelector('body');

menuToggle.onclick = function(){
    header.classList.toggle('open');
    body.classList.toggle('start')
}


let moon = {
  "name": "MOON",
  "images": {
    "png": "images/destination/planet/image-moon.png",
    "webp": "./assets/destination/image-moon.webp"
  },
  "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "distance": "384,400 km",
  "travel": "3 days"
}

let europa = {
  "name": "EUROPA",
  "images": {
    "png": "./assets/destination/image-europa.png",
    "webp": "./assets/destination/image-europa.webp"
  },
  "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  "distance": "628 mil. km",
  "travel": "3 years"
}

let mars = {
  "name": "MARS",
  "images": {
    "png": "./assets/destination/image-mars.png",
    "webp": "./assets/destination/image-mars.webp"
  },
  "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  "distance": "225 mil. km",
  "travel": "9 months"
}

let titan ={
  "name": "TITAN",
  "images": {
    "png": "./assets/destination/image-titan.png",
    "webp": "./assets/destination/image-titan.webp"
  },
  "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  "distance": "1.6 bil. km",
  "travel": "7 years"
}

function changeText(elementClicked) {
  var button1 = document.getElementById('b1');
  if (elementClicked == button1) {
    document.getElementById("name_plenat").innerHTML = moon.name;
    document.querySelector("#image_plenet").src = "images/destination/planet/image-moon.png"
    document.getElementById("plenat_info").innerHTML = moon.description;
    document.getElementById("plenat_km").innerHTML = moon.distance;
    document.getElementById("plenat_d").innerHTML = moon.travel;
  }
}

function changeText_2(elementClicked) {
  var button2 = document.getElementById('b2');
  if (elementClicked == button2) {
    document.getElementById("name_plenat").innerHTML = mars.name;
    document.querySelector("#image_plenet").src = "images/destination/planet/image-mars.png"
    document.getElementById("plenat_info").innerHTML = mars.description;
    document.getElementById("plenat_km").innerHTML = mars.distance;
    document.getElementById("plenat_d").innerHTML = mars.travel;
  }
}

function changeText_3(elementClicked) {
  var button3 = document.getElementById('b3');
  if (elementClicked == button3) {
    document.getElementById("name_plenat").innerHTML = europa.name;
    document.querySelector("#image_plenet").src = "images/destination/planet/image-europa.png"
    document.getElementById("plenat_info").innerHTML = europa.description;
    document.getElementById("plenat_km").innerHTML = europa.distance;
    document.getElementById("plenat_d").innerHTML = europa.travel;
  }
}

function changeText_4(elementClicked) {
  var button4 = document.getElementById('b4');
  if (elementClicked == button4) {
    document.getElementById("name_plenat").innerHTML = titan.name;
    document.querySelector("#image_plenet").src = "images/destination/planet/image-titan.png"
    document.getElementById("plenat_info").innerHTML = titan.description;
    document.getElementById("plenat_km").innerHTML = titan.distance;
    document.getElementById("plenat_d").innerHTML = titan.travel;
  }
}