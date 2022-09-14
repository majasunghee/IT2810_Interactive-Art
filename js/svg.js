var svg = document.getElementById('svg');
var particleArray2 = [];
var n = 0;


function drawSun2(color) {
  const sun2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  $(sun2).attr("r", 125);
  $(sun2).attr("cx", 200);
  $(sun2).attr("cy", 200);
  $(sun2).attr("fill", color);
  svg.appendChild(sun2);
}
drawSun2("yellow");


function drawBirdBody2(color) {
  const body2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  $(body2).attr("d", "M 248 201 C 240 275, 160 255, 150 230 L 248 201");
  $(body2).attr("fill", color);
  svg.appendChild(body2);
}
drawBirdBody2("lightblue");

function drawBirdHead2(color) {
  const head2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  $(head2).attr("r", "15");
  $(head2).attr("cx", "250");
  $(head2).attr("cy", "185");
  $(head2).attr("fill", color);
  svg.appendChild(head2);
}
drawBirdHead2("lightblue");

function drawBirdBeak2(color) {
  const beak2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  $(beak2).attr("points", "265,185, 260, 195, 290,190");
  $(beak2).attr("fill", color);
  svg.appendChild(beak2);
}
drawBirdBeak2("lightblue");


function drawBirdWings2(color) {
  const wing1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  $(wing1).attr("d", "M 240 202 L220 160 L 140 180  Z");
  $(wing1).attr("fill", color);
  svg.appendChild(wing1);

  const wing2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  $(wing2).attr("d", "M 240 202 L200 180 L 130 230  Z");
  $(wing2).attr("fill", color);
  svg.appendChild(wing2);
}
drawBirdWings2("purple");

function drawBirdTails(color) {
  const tail1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  $(tail1).attr("x", "112");
  $(tail1).attr("y", "230");
  $(tail1).attr("width", "40");
  $(tail1).attr("height", "4");
  $(tail1).attr("fill", color);
  svg.appendChild(tail1);

  const tail2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  $(tail2).attr("d", "M 151 235 L 120 240 L 120 245 L 156 238 Z");
  $(tail2).attr("fill", color);
  svg.appendChild(tail2);

  const tail3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  $(tail3).attr("d", "M 155 239 L 115 251 L 117 255 L 160 243 Z");
  $(tail3).attr("fill", color);
  svg.appendChild(tail3);
}
drawBirdTails("red");

function drawBirdFeet2(strokeColor) {
  const foot1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  $(foot1).attr("d", "M 201 244 L 178 263 L 168 258");
  $(foot1).attr("fill", "none");
  $(foot1).attr("stroke", strokeColor);
  svg.appendChild(foot1);


  const foot2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  $(foot2).attr("d", "M 215 244 L 190 264 L 182 260");
  $(foot2).attr("fill", "none");
  $(foot1).attr("stroke", strokeColor);
  svg.appendChild(foot2);
}
drawBirdFeet2("white");


//Function for setting default color-scheme
function defaultColor() {
  drawSun2("yellow");
  drawBirdBody2("lightblue");
  drawBirdHead2("lightblue");
  drawBirdBeak2("lightblue");
  drawBirdWings2("purple");
  drawBirdTails("pink");
  drawBirdFeet2("white");
  $("#svg").css({"background-image": "linear-gradient(red, orange)"})
}

//Function for setting color-scheme on hover
function colorHover() {
  drawSun2("blue");
  drawBirdBody2("black");
  drawBirdHead2("black");
  drawBirdBeak2("black");
  drawBirdWings2("red");
  drawBirdTails("lightgreen");
  drawBirdFeet2("yellow");
  $("#svg").css({"background-image": "linear-gradient(green, yellow)"})
}

//Generates particles with random sizes and locations
function makeParticles2() {
  for (let i=0; i<100; i++) {
    const newparticle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    $(newparticle).attr("r", Math.random()*10);
    $(newparticle).attr("cx", Math.random()*400);
    $(newparticle).attr("cy", Math.random()*400);
    $(newparticle).attr("fill","rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")" );
    $(newparticle).attr("stroke", "none");
    $(newparticle).attr("id", "particle" + n)
    particleArray2.push(newparticle);
    n++;
    svg.appendChild(newparticle);
  }
}

//Animates the particles
function animateParticle2() {
  for (i=0; i<particleArray2.length; i++) {
    $(particleArray2[i]).animate(
      {"foo": 200},
      { step: function(foo) {
          //$(this).attr("cx", foo);
          $(this).attr("cx", Math.random()*400);
          $(this).attr("cy", Math.random()*400);
      },
      duration: 20000000
  });
  }
}

$(document).ready(function(){

  //Function for changing colors on hover
    $("#svg").hover(function(){
      colorHover();
    },function(){
      defaultColor();
    });

  //lets you toggle animation on and off
  $("#toggleAnimation2").on("click", toggle(function(){
    $("#svg").css({"pointer-events": "none"})
    return makeParticles2(), animateParticle2();
  }, function () {
    return location.reload();
  }));


}) ;
