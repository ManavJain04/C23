//Phy Matter.js
//World,engine,bodies declartion
//namespacing
const World=Matter.World
const Engine=Matter.Engine      
const Bodies=Matter.Bodies  
var box1;  
var box2;   
var ground;
function setup() {
  createCanvas(400,400);
//create PE and World
engine=Engine.create();
world=engine.world;
//Create Bodies\

box1 = new Box(200,300,50,50);
box2 = new Box(240,100,50,50);
ground = new Ground()

  
 
  
}

function draw() {
  background(0);
  Engine.update(engine)
   box1.display();
   box2.display();
   ground.display();
 }