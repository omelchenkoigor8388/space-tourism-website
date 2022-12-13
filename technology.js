//---------------menu-------------------//
let menuToggle =document.querySelector('.menuToggle');
let header = document.querySelector('header');
let body = document.querySelector('body');

menuToggle.onclick = function(){
    header.classList.toggle('open');
    body.classList.toggle('start');
}

//-----------planet-info-----------------//
let launch  = {
    "name": "LAUNCH VEHICLE",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  }
  
let spaceport = {
    "name": "SPACEPORT",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": "./assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  }
  
let space = {
    "name": "SPACE CAPSULE",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
  
function changeText(elementClicked) {
  var button1 = document.getElementById('b1');
  var name = document.querySelector('section');

  if (elementClicked == button1) {
    document.getElementById("name_people").innerHTML = launch.name;
    document.querySelector("#image_people").src = "images/technology/image-launch-vehicle-portrait.jpg";
    document.getElementById("people_info").innerHTML = launch.description;

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
    document.getElementById("name_people").innerHTML = spaceport.name;
    document.querySelector("#image_people").src = "images/technology/image-space-capsule-portrait.jpg";
    document.getElementById("people_info").innerHTML = spaceport.description;

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
    document.getElementById("name_people").innerHTML = space.name;
    document.querySelector("#image_people").src = "images/technology/image-spaceport-portrait.jpg";
    document.getElementById("people_info").innerHTML = space.description;

    name.classList.add('animation')
    setTimeout(function() {
      name.classList.remove('animation');
    }, 1500);
  }
} 