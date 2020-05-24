const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18;
var box19,box20,box21,box22,box23,box24;
var box25,box26,box27,box28,box29,box30;
var box31,box32,box33,box34,box35,box36;
var box37,box38,box39,box40,box41,box42;
var box43,box44,box45,box46,box47,box48;
var box49,box50,box51,box52,box53,box54;
var box55,box56,box57;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,10);
   // platform = new Ground(800,350,250,1);
    box1 = new Box(700,380,20,40);
    box2 = new Box(720,380,20,40);
    box3 = new Box(740,380,20,40);
    box4 = new Box(760,380,20,40);
    box5 = new Box(780,380,20,40);
    box6 = new Box(800,380,20,40);
    box7 = new Box(820,380,20,40);
    box8 = new Box(840,380,20,40);
    box9 = new Box(860,380,20,40);
    box10 = new Box(880,380,20,40);
    box11= new Box(730,350,20,40);
    box12 = new Box(740,350,20,40);
    box13 = new Box(760,350,20,40);
    box14 = new Box(780,350,20,40);
    box15 = new Box(800,350,20,40);
    box16 = new Box(820,350,20,40);
    box17 = new Box(840,350,20,40);
    box18 = new Box(860,350,20,40);
    box19 = new Box(760,320,20,40);
    box20 = new Box(780,320,20,40);
    box21 = new Box(800,320,20,40);
    box22 = new Box(820,320,20,40);
    box23 = new Box(840,320,20,40);
    box24 = new Box(740,320,20,40);
    box25 = new Box(760,250,20,40);
    box26 = new Box(780,250,20,40);
    box27 = new Box(800,250,20,40);
    box28 = new Box(820,250,20,40);
    box29 = new Box(780,200,20,40);
    box30 = new Box(800,200,20,40);
    box31 = new Box(820,150,20,40);
    box32 = new Box(680,380,20,40);
    box33 = new Box(660,380,20,40);
    box34 = new Box(900,380,20,40);
    box35 = new Box(920,380,20,40);
    box36 = new Box(710,350,20,40);
    box37 = new Box(690,350,20,40);
    box38 = new Box(880,350,20,40);
    box39 = new Box(900,350,20,40);
    box40 = new Box(720,320,20,40);
    box41 = new Box(700,320,20,40);
    box42 = new Box(860,320,20,40);
    box43 = new Box(880,320,20,40);
    box44 = new Box(740,250,20,40);
    box45 = new Box(720,250,20,40);
    box46 = new Box(840,250,20,40);
    box47= new Box(860,250,20,40);
    box48 = new Box(740,200,20,40);
    box49 = new Box(760,200,20,40);
    box50 = new Box(820,200,20,40);
    box51 = new Box(840,200,20,40);
    box52 = new Box(760,150,20,40);
    box53 = new Box(780,150,20,40);
    box54 = new Box(800,150,20,40);
    box55 = new Box(780,100,20,40);
    box56 = new Box(800,100,20,40);
    box57 = new Box(790,50,20,40);
    
    bird = new Bird(150,250);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:150, y:250});
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
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box56.display();
    box57.display();
   
    bird.display();
    slingshot.display();
    //platform.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingshot.attach(bird.body);  
    }
}