const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12
var block13
var block14
var block15
var block16
var block17
var block18
var block19
var block20
var block21
var block22
var block23
var block24
var block25
var block26
var block27
var block28
var block29
var block30
var block31
var block32
var block33
var block34
var block35
var block36
var block37
var block38
var block39
var block40
var block41
var block42
var block43
var block44
var block45
var polygon 



function preload(){

}

function setup(){

    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground1= new Ground(600,height,1200,50)
    ground2 = new Ground(300,400,450,10)
 //ground3= new Ground(300,410,450,10)
    block1= new Block (100,370,10,10)
    block2= new Block (150,370,10,10)
    block3= new Block (200,370,10,10)
    block4= new Block (250,370,10,10)
    block5= new Block (300,370,10,10)
    block6= new Block (350,370,10,10)
    block7= new Block (400,370,10,10)
    block8= new Block (450,370,10,10)
    block9= new Block (500,370,10,10)
  block10= new Block (125,320,10,10)
  block11= new Block (175,320,10,10)
  block12= new Block (225,320,10,10)
  block13= new Block (275,320,10,10)
  block14= new Block (325,320,10,10)
  block15= new Block (375,320,10,10)
  block16= new Block (425,320,10,10)
  block17= new Block (475,320,10,10)
  block19= new Block (150,270,10,10)
  block20= new Block (200,270,10,10)
  block21= new Block (250,270,10,10)
  block22= new Block (300,270,10,10)
  block23= new Block (350,270,10,10)
  block24= new Block (400,270,10,10)
  block25= new Block (450,270,10,10)
  block26= new Block (175,220,10,10)
  block27= new Block (225,220,10,10)
  block28= new Block (275,220,10,10)
  block29= new Block (325,220,10,10)
  block30= new Block (375,220,10,10)
  block31= new Block (425,220,10,10)
  block32= new Block (200,170,10,10)
  block33= new Block (250,170,10,10)
  block34= new Block (300,170,10,10)
  block35= new Block (350,170,10,10)
  block36= new Block (400,170,10,10)
  block37= new Block (225,120,10,10)
  block38= new Block (275,120,10,10)
  block39= new Block (325,120,10,10)
  block40= new Block (375,120,10,10)
  block41= new Block (250,70,10,10)
  block42= new Block (300,70,10,10)
  block43= new Block (350,70,10,10)
  block44= new Block (305,20,10,10)
  polygon= Bodies.circle(50,200,20)
  World.add(world,polygon )
  slingshot= new Slingshot(this.polygon,{x:100,y:200})
polygonImg= loadImage("polygon.png")
}

function draw(){
background(0)
Engine.update(engine);

ground1.display()
ground2.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
//block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()
block26.display()
block27.display()
block28.display()
block29.display()
block30.display()
block31.display()
block32.display()
block33.display()
block34.display()
block35.display()
block36.display()
block37.display()
block38.display()
block39.display()
block40.display()
block41.display()
block42.display()
block43.display()
block44.display()


imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,40,40)
slingshot.display()
//ground3.display()


    
}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
    
}