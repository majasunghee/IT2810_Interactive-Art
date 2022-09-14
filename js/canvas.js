//var canvas = document.querySelector("#canvas");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let particleArray;

// Create gradient for background
var grd = ctx.createLinearGradient(0, 0, 0, 200);
grd.addColorStop(0, "red");
grd.addColorStop(1, "orange");

var grd2 = ctx.createLinearGradient(0, 0, 0, 200);
grd2.addColorStop(0, "black");
grd2.addColorStop(1, "purple");
drawBirdTail1("red");

//Function for setting background color
function setBackground(fillStyle) {
  ctx.fillStyle = fillStyle;
  let x=0;
  let y=0;
  ctx.fillRect(x, y, canvas.width, canvas.height);
}

//Drawing sun
function drawSun(fillStyle) {
    let x=200;
    let y=200;
    ctx.beginPath();
    ctx.arc(x, y, 120, 0, 2 * Math.PI);
    ctx.fillStyle=fillStyle;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
}

//Drawing the bird
function drawBirdBody(fillStyle) {
  //drawing body
  let x=200;
  let y=200;
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 0.8 * Math.PI);
  ctx.closePath();
  ctx.fillStyle=fillStyle;
  ctx.fill();
  ctx.stroke();
}

function drawBirdHead(fillStyle) {
  //drawing head
  ctx.beginPath();
  ctx.arc(250, 185, 15, 0, 2 * Math.PI);
  ctx.closePath()
  ctx.fillStyle=fillStyle;
  ctx.fill();
  ctx.stroke();
}

function drawBirdBeak(fillStyle) {
  //drawing beak
  ctx.beginPath();
  ctx.moveTo(265, 185);
  ctx.lineTo(290, 190);
  ctx.lineTo(260, 195);
  ctx.closePath();
  ctx.fillStyle=fillStyle;
  ctx.fill();
  ctx.stroke();
}

function drawBirdWings(fillStyle) {
  //drawing wings
  ctx.beginPath();
  //wing 1
  ctx.moveTo(240, 202);
  ctx.lineTo(220, 160);
  ctx.lineTo(140, 180);
  ctx.lineTo(190, 187);
  //wing 2
  ctx.moveTo(240, 202);
  ctx.lineTo(200, 180);
  ctx.lineTo(130, 230);
  ctx.closePath();
  ctx.fillStyle=fillStyle;
  ctx.fill();
  ctx.stroke();
}

function drawBirdTail1(fillStyle) {
  //drawing tailfeather 1
  ctx.beginPath();
  ctx.rect(120, 230, 40, 3);
  ctx.closePath();
  ctx.fillStyle=fillStyle;
  ctx.fill();
  ctx.stroke();
}

function drawBirdTail2(fillStyle) {
  //drawing tailfeather 2
  ctx.beginPath();
  ctx.moveTo(160, 235);
  ctx.lineTo(125, 240);
  ctx.lineTo(125, 244);
  ctx.lineTo(164, 238);
  ctx.closePath();
  ctx.fillStyle=fillStyle;

  ctx.fill();
  ctx.stroke();
}

function drawBirdTail3(fillStyle) {
  //drawing tailfeather 3
  ctx.beginPath();
  ctx.moveTo(165, 239);
  ctx.lineTo(122, 250);
  ctx.lineTo(125, 253);
  ctx.lineTo(168, 242);
  ctx.closePath();
  ctx.fillStyle=fillStyle;
  ctx.fill();
  ctx.stroke();
}

function drawBirdFeet(strokeStyle) {
  //drawing feet
  ctx.beginPath();
  //first foot
  ctx.moveTo(205, 240);
  ctx.lineTo(180, 260);
  ctx.lineTo(170, 255);
  //second foot
  ctx.moveTo(220, 240);
  ctx.lineTo(195, 260);
  ctx.lineTo(185, 255);
  ctx.moveTo(0,0);
  ctx.closePath();
  ctx.stroke();
}

//constructor
function Particle(x, y, dx, dy, size, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.size = size;
  this.color = color;
}

//draw method to particle prototype
Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
}

//update method to get the particle to move
Particle.prototype.update = function() {
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.dy = -this.dy;
  }
  this.x += this.dx;
  this.y += this.dy;
  this.draw();
}

//create array of particles
function init() {
  particleArray = [];
  for (let i=0; i<100; i++) {
    let size = Math.random()*10;
    let x = Math.random()*( canvas.width - size * 2);
    let y = Math.random()*( canvas.height - size * 2);
    let dx = (Math.random() * .4) - .2;
    let dy = (Math.random() * .4) - .2;
    let color =  "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";

    particleArray.push(new Particle(x, y, dx, dy, size, color));
  }
}

//animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,  canvas.width,  canvas.height);

  setBackground(grd);
  drawSun("yellow");
  drawBirdBody("lightblue");
  drawBirdHead("lightblue");
  drawBirdBeak("lightblue");
  drawBirdWings("purple");
  drawBirdTail2("red");
  drawBirdTail3("red");
  drawBirdFeet("white");

  for (let i=0; i<particleArray.length; i++) {
    particleArray[i].update();
  }
}

init();

var toggle = function(a,b) {
  var togg = false;
  return function () {
    //passes return value back to caller
    return (togg =! togg) ? a() : b();
  }
}

//Function for setting the initial color-scheme
window.onload=function(){
  setBackground(grd);
  drawSun("yellow");
  drawBirdBody("lightblue");
  drawBirdHead("lightblue");
  drawBirdBeak("lightblue");
  drawBirdWings("purple");
  drawBirdTail1("red");
  drawBirdTail2("red");
  drawBirdTail3("red");
  drawBirdFeet("white");
}

$(document).ready(function(){

//Code for changing color of different elements on mouseover
  $("canvas").hover(function(){
    setBackground(grd2);
    drawSun("red")
    drawBirdBody("green")
    drawBirdHead("green")
    drawBirdBeak("black")
    drawBirdWings("pink")
    drawBirdTail1("pink")
    drawBirdTail2("pink")
    drawBirdTail3("pink");
    drawBirdFeet("black")

  }, function(){
    setBackground(grd);
    drawSun("yellow")
    drawBirdBody("lightblue")
    drawBirdHead("lightblue")
    drawBirdBeak("lightblue")
    drawBirdWings("purple")
    drawBirdTail1("red");
    drawBirdTail2("red");
    drawBirdTail3("red");
    drawBirdFeet("white")
  })

  //Toggle canvas animation on/off
    $("#toggleAnimation").on("click", toggle(function(){
      return animate();
    }, function () {
      return location.reload();
    }));
});
