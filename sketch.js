const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
  var snow=[]
function preload(){
  bg=loadImage("snow3.jpg")
}



function setup() {
createCanvas(800,400);

engine = Engine.create();
world = engine.world; 
}

function draw() {
  Engine.update(engine);
  background(bg);  

rand=Math.round(random(1,4))
if(frameCount%5 === 0){
  snow.push(new Snow(random(0,800),30,30))
}
for(var j=0;j<snow.length;j++){
  snow[j].display();
}

}