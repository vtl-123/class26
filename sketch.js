const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform=new Ground(180,300,200);
    
    box1=new Box(700,320,70,70);
    box2=new Box(900,320,70,70);
    box3=new Box(100,240,70,70);
    box4=new Box(900,240,70,70);
    box5=new Box(800,160,70,70);

    log1=new Log(800,180,300,PI/2);

    log2=new Log(800,260,300,PI/2);

    log3=new Log(750,120,150,PI/7);

    log4=new Log(860,120,150,-PI/7);

    pig1=new Pig(800,220);
    pig2=new Pig(800,350);

    bird= new Bird(100,100);
    ground= new Ground(600,height,1200,20);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine); 
    ground.display();  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();

    bird.display();
    platform.display();
}
