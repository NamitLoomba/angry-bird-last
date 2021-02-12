/*// Datatypes

// numbers
var num = 567;
console.log(num);

//strings
var str = "Namit is a forgetful boy!!!";
console.log(str);

// undefined
var object;
console.log(object);

//null
// reassigning the null to object
object = null;
console.log(null);

//boolean
var bool = true;
console.log(bool);*/

// array
// arrays with same type of data

//var arr1 = [76,5689,214,973,6548,987];
//console.log(arr1);


/*
// arrays with different types of data
var arr2 = [876, "Hello", false, null, 6467, "this"];
console.log(arr2);
console.log(arr2[2]);

// arrays with lists of arrays
var arr3 = [[5689, "Hello there", 246178, "Welcome"], [765,5839,57026],[null, false, num, str]];
console.log(arr3);
console.log(arr3[1]);
console.log(arr3[0][3]);

arr1.push(657);
console.log(arr1);

arr1.pop();
console.log(arr1);*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
getBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    
}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keycode === 32){
    slingshot.attach(bird.body);

        
    }
}

async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11,13)
    console.log(hour);
    if(hour>=06&&hour<=17){
bg="sprites/bg.png"
    }
    else{
        bg="sprites/bg2.jpg"
    }
backgroundImg=loadImage(bg);
}