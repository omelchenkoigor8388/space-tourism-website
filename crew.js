//---------------menu-------------------//
let menuToggle =document.querySelector('.menuToggle');
let header = document.querySelector('header');
let body = document.querySelector('body');

menuToggle.onclick = function(){
    header.classList.toggle('open');
    body.classList.toggle('start');
}

//-----------planet-info-----------------//
let douglas = {
    "name": "Douglas Hurley",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  }
  
let mark = {
  "name": "Mark Shuttleworth",
  "images": {
    "png": "./assets/crew/image-mark-shuttleworth.png",
    "webp": "./assets/crew/image-mark-shuttleworth.webp"
  },
  "role": "Mission Specialist",
  "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
}
  
let victor = {
    "name": "Victor Glover",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
}
  
let anousheh =    {
  "name": "Anousheh Ansari",
  "images": {
    "png": "./assets/crew/image-anousheh-ansari.png",
    "webp": "./assets/crew/image-anousheh-ansari.webp"
  },
  "role": "Flight Engineer",
  "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
}
  
function changeText(elementClicked) {
  var button1 = document.getElementById('b1');
  var name = document.querySelector('section');

  if (elementClicked == button1) {
    document.getElementById("name_people").innerHTML = douglas.name;
    document.querySelector("#image_people").src = "images/crew/image-douglas-hurley.png";
    document.getElementById("people_info").innerHTML = douglas.bio;
    document.getElementById("role").innerHTML = douglas.role;   
    
    name.classList.add('animation')
    setTimeout(function() {
      name.classList.remove('animation');
    }, 1500);
  }
}
  
function changeText_2(elementClicked) {
  var button2 = document.getElementById('b2');
  var name = document.querySelector('section');

  if (elementClicked == button2) {
    document.getElementById("name_people").innerHTML = mark.name;
    document.querySelector("#image_people").src = "images/crew/image-mark-shuttleworth.png";
    document.getElementById("people_info").innerHTML = mark.bio;
    document.getElementById("role").innerHTML = mark.role;

    name.classList.add('animation')
    setTimeout(function() {
      name.classList.remove('animation');
    }, 1500);
  }
}
  
function changeText_3(elementClicked) {
  var button3 = document.getElementById('b3');
  var name = document.querySelector('section');

  if (elementClicked == button3) {
    document.getElementById("name_people").innerHTML = victor.name;
    document.querySelector("#image_people").src = "images/crew/image-victor-glover.png";
    document.getElementById("people_info").innerHTML = victor.bio;
    document.getElementById("role").innerHTML = victor.role;

    name.classList.add('animation')
    setTimeout(function() {
      name.classList.remove('animation');
    }, 1500);
  }
} 
  
function changeText_4(elementClicked) {
  var button4 = document.getElementById('b4');
  var name = document.querySelector('section');

  if (elementClicked == button4) {
    document.getElementById("name_people").innerHTML = anousheh.name;
    document.querySelector("#image_people").src = "images/crew/image-anousheh-ansari.png";
    document.getElementById("people_info").innerHTML = anousheh.bio;
    document.getElementById("role").innerHTML = anousheh.role;

    name.classList.add('animation')
    setTimeout(function() {
      name.classList.remove('animation');
    }, 1500);
  }
} 

  
